"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts"

import
{
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import
{
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from '@/lib/utils'

export function BarChartVertical (
  {
    data,
    config,
    className,
  }: {
    data: Record<string, any>[]
    config: any,
    className?: string,
  }
)
{
  const { colors, title, description } = config
  const chartConfig: Record<string, { label: string; color: string }> = {}

  data.forEach((item, index) =>
  {
    chartConfig[ item.label ] = {
      label: item.label,
      color: colors?.[ item.label ] || `hsl(var(--chart-${ index + 1 }))`
    }
  })

  return (
    <ChartContainer config={ config } className={ cn(
      className
    ) }>
      <BarChart accessibilityLayer data={ data }>
        <CartesianGrid vertical={ false } />
        <XAxis
          dataKey="label"
          tickLine={ false }
          tickMargin={ 10 }
          axisLine={ false }
          tickFormatter={ (value) => value }
        />
        <YAxis
          axisLine={ false }
          tickLine={ false }
          tick={ { fill: 'hsl(var(--foreground))', fontSize: 12 } }
        />
        <ChartTooltip
          cursor={ false }
          content={ <ChartTooltipContent indicator='dashed' /> }
        />
        <Bar dataKey="value" radius={ [ 4, 4, 0, 0 ] }>
          { data.map((entry, index) => (
            <Cell
              key={ `cell-${ index }` }
              fill={ chartConfig[ entry.label ].color }
            />
          )) }
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
