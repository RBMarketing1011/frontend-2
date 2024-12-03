'use client'

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import
{
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  {
    name: 'Performance',
    score: 85,
    improvements: [ 'Optimize images', 'Minimize main-thread work', 'Reduce unused JavaScript' ],
    fill: 'var(--color-performance)'
  },
  {
    name: 'Accessibility',
    score: 92,
    improvements: [ 'Improve color contrast', 'Add alt text to images', 'Ensure ARIA attributes are correct' ],
    fill: 'var(--color-accessibility)'
  },
  {
    name: 'Best Practices',
    score: 88,
    improvements: [ 'Use HTTPS', 'Avoid deprecated APIs', 'Ensure sufficient password security' ],
    fill: 'var(--color-bestPractices)'
  },
  {
    name: 'SEO',
    score: 95,
    improvements: [ 'Add meta descriptions', 'Ensure text is readable', 'Add structured data' ],
    fill: 'var(--color-seo)'
  },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  performance: {
    label: "Performance",
    color: "hsl(var(--chart-1))",
  },
  accessibility: {
    label: "Accessibility",
    color: "hsl(var(--chart-2))",
  },
  bestPractices: {
    label: "Best Practices",
    color: "hsl(var(--chart-3))",
  },
  seo: {
    label: "SEO",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function SiteSpeedInsightsChart ()
{
  return (
    <ResponsiveContainer width="100%" height={ 300 }>
      <ChartContainer config={ chartConfig }>
        <BarChart
          accessibilityLayer
          data={ data }
          layout="vertical"
          margin={ {
            left: 25,
          } }
        >
          <YAxis
            dataKey="name"
            type="category"
            tickLine={ false }
            tickMargin={ 10 }
            axisLine={ false }
            tickFormatter={ (value) => value }
          />
          <XAxis dataKey="score" type="number" hide />
          <ChartTooltip
            cursor={ false }
            content={ <ChartTooltipContent /> }
          />
          <Bar
            dataKey="score"
            layout="vertical"
            radius={ 5 }
            barSize={ 50 }
            fill="hsl(var(--color-performance))"
          />
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}

