"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import
{
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import
{
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import type { InteractiveChartProps } from './types/chartTpes'
import InfoHover from '../InfoHover'

export default function LineChartInteractive ({
  data = [],
  config = {},
  title = "Interactive Chart",
  description,
  defaultActiveChart,
}: InteractiveChartProps)
{
  const metrics = React.useMemo(() =>
  {
    return Object.entries(config).filter(([ key ]) => key && config[ key ])
  }, [ config ])

  // Get the first metric that is marked as a tab as the default active chart
  const defaultTab = React.useMemo(() =>
  {
    if (defaultActiveChart && config[ defaultActiveChart ]?.isTab)
    {
      return defaultActiveChart
    }
    return metrics.find(([ _, value ]) => value.isTab)?.[ 0 ]
  }, [ config, defaultActiveChart, metrics ])

  const [ activeChart, setActiveChart ] = React.useState<string | undefined>(
    defaultTab
  )

  const totals = React.useMemo(() =>
  {
    if (!data.length || !metrics.length) return {}

    return metrics.reduce((acc, [ key ]) =>
    {
      acc[ key ] = data.reduce((sum, curr) =>
      {
        const value = curr[ key ]
        return sum + (typeof value === "number" ? value : 0)
      }, 0)
      return acc
    }, {} as Record<string, number>)
  }, [ data, metrics ])

  const averages = React.useMemo(() =>
  {
    if (!data.length || !metrics.length) return {}

    return metrics.reduce((acc, [ key ]) =>
    {
      acc[ key ] = data.reduce((sum, curr) =>
      {
        const value = curr[ key ]
        return sum + (typeof value === "number" ? value : 0)
      }, 0) / data.length // Divide by the number of entries to get the average
      return acc
    }, {} as Record<string, number>)
  }, [ data, metrics ])


  // If no data or config, return null or a placeholder
  if (!Array.isArray(data) || data.length === 0 || Object.keys(config).length === 0)
  {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{ title }</CardTitle>
          { description && <CardDescription>{ description }</CardDescription> }
        </CardHeader>
        <CardContent>
          <div className="flex h-[250px] items-center justify-center text-muted-foreground">
            No data available
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>{ title }</CardTitle>
          { description && <CardDescription>{ description }</CardDescription> }
        </div>
        <div className="flex">
          { metrics.map(([ key, value ]) => (
            <button
              key={ key }
              data-active={ value.isTab && activeChart === key }
              className={ `relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-l sm:border-t-0 sm:px-8 sm:py-6 ${ value.isTab
                ? "cursor-pointer hover:bg-muted/30 data-[active=true]:bg-muted/50"
                : "cursor-default"
                }` }
              onClick={ () => value.isTab && setActiveChart(key) }
              type="button"
            >
              {
                value.infoCard &&
                <div className='absolute top-2 right-2'>
                  <InfoHover isButton={ false } content={
                    <p className='text-xs'>
                      { value.infoCard }
                    </p>
                  } />
                </div>
              }
              <span className="text-xs text-muted-foreground">
                { value.label }
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {
                  value.displayAs === "currency" && '$'
                }
                {
                  value.type === "average"
                    ?
                    parseFloat(averages[ key ]?.toLocaleString()).toFixed(2) ?? "0"
                    :
                    value.type === "total" ?

                      totals[ key ]?.toLocaleString()

                      :

                      "0"
                }
              </span>
            </button>
          )) }
        </div>
      </CardHeader>
      { activeChart && (
        <CardContent className="px-2 sm:p-6">
          <ChartContainer config={ config } className="aspect-auto h-[250px] w-full">
            <LineChart
              accessibilityLayer
              data={ data }
              margin={ {
                left: 12,
                right: 12,
              } }
            >
              <CartesianGrid vertical={ false } />
              <XAxis
                dataKey="date"
                tickLine={ false }
                axisLine={ false }
                tickMargin={ 8 }
                minTickGap={ 32 }
                tickFormatter={ (value) =>
                {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                } }
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    labelFormatter={ (value) =>
                    {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    } }
                  />
                }
              />
              <Line
                dataKey={ activeChart }
                type="monotone"
                stroke={ `var(--color-${ activeChart })` }
                strokeWidth={ 2 }
                dot={ false }
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      ) }
    </Card>
  )
}