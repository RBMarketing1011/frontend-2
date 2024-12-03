"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import
{
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from '@/lib/utils'

export function LineChartStep (
  {
    className,
    data,
    config
  }: {
    className?: string,
    data: Record<string, any>[],
    config: ChartConfig,
  }
)
{
  return (
    <ChartContainer config={ config } className={ cn(
      className
    ) }>
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
          dataKey="month"
          tickLine={ false }
          axisLine={ false }
          tickMargin={ 8 }
          tickFormatter={ (value) => value.slice(0, 3) }
        />
        <ChartTooltip
          cursor={ false }
          content={ <ChartTooltipContent hideLabel /> }
        />
        <Line
          dataKey="calls"
          type="step"
          stroke="var(--color-calls)"
          strokeWidth={ 2 }
          dot={ false }
        />
      </LineChart>
    </ChartContainer>
  )
}
