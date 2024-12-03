'use client'

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"
import
{
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Data for the chart
const chartData = [
  { name: 'Sessions', value: 1300 },
  { name: 'Page Views', value: 2000 },
  { name: 'Bounce Rate (%)', value: 45 },
  { name: 'Conversion Rate (%)', value: 2.5 },
]

// Chart configuration with labels and colors
const chartConfig = {
  Sessions: {
    label: "Sessions",
    color: "hsl(var(--chart-1))",
  },
  'Page Views': {
    label: "Page Views",
    color: "hsl(var(--chart-2))",
  },
  'Bounce Rate (%)': {
    label: "Bounce Rate (%)",
    color: "hsl(var(--chart-3))",
  },
  'Conversion Rate (%)': {
    label: "Conversion Rate (%)",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

// The Analytics Bar Chart Component
export default function AnalyticsBarChart ()
{
  return (
    <ChartContainer config={ chartConfig }>
      <BarChart
        data={ chartData }
        margin={ {
          top: 40,
        } }
      >
        <CartesianGrid vertical={ false } />
        <XAxis
          dataKey="name"
          tickLine={ false }
          tickMargin={ 10 }
          axisLine={ false }
          tickFormatter={ (value) => value }
        />
        <ChartTooltip
          cursor={ false }
          content={ <ChartTooltipContent /> }
        />
        <Bar
          minPointSize={ 45 }
          barSize='15%'
          dataKey="value"
          fill="hsl(var(--chart-1))"
          radius={ 8 }
        >
          <LabelList
            position="top"
            offset={ 12 }
            className="fill-foreground"
            fontSize={ 12 }
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
