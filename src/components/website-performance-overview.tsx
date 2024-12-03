'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, ResponsiveContainer, YAxis } from "recharts"

import
{
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]

const chartConfig = {
  total: {
    label: "Page Views",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function WebsitePerformanceOverview ()
{
  return (
    <ResponsiveContainer width="100%" height={ 350 }>
      <ChartContainer config={ chartConfig }>
        <BarChart
          accessibilityLayer
          data={ data }
          margin={ {
            top: 20,
          } }
        >
          <CartesianGrid vertical={ false } />
          <XAxis
            dataKey="name"
            tickLine={ false }
            tickMargin={ 10 }
            axisLine={ false }
            tickFormatter={ (value) => value.slice(0, 3) }
          />
          <ChartTooltip
            cursor={ false }
            content={ <ChartTooltipContent hideLabel /> }
            formatter={ (value) => (
              <span className="text-slate-400 flex justify-between items-center gap-2">
                Page Views
                <span className='text-foreground font-bold'>{ value }</span>
              </span>
            ) }
          />
          <Bar dataKey="total" fill="var(--color-total)" radius={ 8 }>
            <LabelList
              position="top"
              offset={ 12 }
              className="fill-foreground"
              fontSize={ 12 }
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}

