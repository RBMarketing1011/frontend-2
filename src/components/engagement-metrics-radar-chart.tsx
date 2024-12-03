'use client'

import
{
  PolarAngleAxis, PolarGrid, Radar, RadarChart,
  ResponsiveContainer
} from "recharts"
import
{
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { subject: 'Active Users', desktop: 120, mobile: 110, },
  { subject: 'New Users', desktop: 98, mobile: 130, },
  { subject: 'Event Count', desktop: 86, mobile: 130, },
  { subject: 'Views', desktop: 99, mobile: 100, },
  { subject: 'Engagement Rate (%)', desktop: 85, mobile: 90, },
  { subject: 'Sessions', desktop: 65, mobile: 85, },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function EngagementMetricsRadarChart ()
{
  return (
    <ResponsiveContainer width="100%" height={ 300 }>
      <ChartContainer
        config={ chartConfig }
        className="mx-auto aspect-square"
      >
        <RadarChart
          data={ data }
          margin={ {
            top: -40,
            bottom: 10,
          } }
        >
          <ChartTooltip
            cursor={ false }
            content={ <ChartTooltipContent indicator="line" /> }
          />
          <PolarAngleAxis dataKey="subject" />
          <PolarGrid />
          <Radar
            dataKey="desktop"
            fill="var(--color-desktop)"
            fillOpacity={ 0.1 }
            stroke="var(--color-desktop)"
            strokeWidth={ 2 }
          />
          <Radar
            dataKey="mobile"
            fill="var(--color-mobile)"
            fillOpacity={ 0.1 }
            stroke="var(--color-mobile)"
            strokeWidth={ 2 }
          />
          <ChartLegend className="mt-8" content={ <ChartLegendContent /> } />
        </RadarChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}

