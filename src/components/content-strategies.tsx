'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

const data = [
  { subject: 'Blog Posts', A: 120, B: 110, C: 90, fullMark: 150 },
  { subject: 'Videos', A: 98, B: 130, C: 85, fullMark: 150 },
  { subject: 'Webinars', A: 86, B: 130, C: 70, fullMark: 150 },
  { subject: 'Infographics', A: 99, B: 100, C: 65, fullMark: 150 },
  { subject: 'Case Studies', A: 85, B: 90, C: 110, fullMark: 150 },
  { subject: 'Whitepapers', A: 65, B: 85, C: 120, fullMark: 150 },
]

export function ContentStrategies ()
{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Strategies</CardTitle>
        <CardDescription>Types of content competitors focus on</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={ {
            A: {
              label: "Your Company",
              color: "hsl(var(--chart-1))",
            },
            B: {
              label: "Competitor B",
              color: "hsl(var(--chart-2))",
            },
            C: {
              label: "Competitor C",
              color: "hsl(var(--chart-3))",
            },
          } }
          className="h-[400px]"
        >
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={ data }>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar name="Your Company" dataKey="A" stroke="var(--color-A)" fill="var(--color-A)" fillOpacity={ 0.6 } />
            <Radar name="Competitor B" dataKey="B" stroke="var(--color-B)" fill="var(--color-B)" fillOpacity={ 0.6 } />
            <Radar name="Competitor C" dataKey="C" stroke="var(--color-C)" fill="var(--color-C)" fillOpacity={ 0.6 } />
            <ChartTooltip content={ <ChartTooltipContent /> } />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

