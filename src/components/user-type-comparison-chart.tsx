'use client'

import { Pie, PieChart, ResponsiveContainer } from "recharts"

import
{
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const data = [
  { browser: 'returning', visitors: 400, fill: 'var(--color-returning)' },
  { browser: 'new', visitors: 300, fill: 'var(--color-new)' },
]

const dataConfig = {
  returning: {
    label: "Returning",
    color: "hsl(var(--chart-1))",
  },
  new: {
    label: "New",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function UserTypeComparisonChart ()
{
  return (
    <ResponsiveContainer width="100%" height={ 300 }>
      <ChartContainer
        config={ dataConfig }
      >
        <PieChart>
          <ChartTooltip
            cursor={ false }
            content={ <ChartTooltipContent /> }
          />
          <Pie data={ data } dataKey="visitors" nameKey="browser" />
          <ChartLegend
            content={ <ChartLegendContent nameKey="browser" /> }
            className="flex-wrap gap-6"
          />
        </PieChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}
