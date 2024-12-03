'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", AI: 4000, CloudComputing: 2400, Cybersecurity: 2400 },
  { month: "Feb", AI: 3000, CloudComputing: 1398, Cybersecurity: 2210 },
  { month: "Mar", AI: 2000, CloudComputing: 9800, Cybersecurity: 2290 },
  { month: "Apr", AI: 2780, CloudComputing: 3908, Cybersecurity: 2000 },
  { month: "May", AI: 1890, CloudComputing: 4800, Cybersecurity: 2181 },
  { month: "Jun", AI: 2390, CloudComputing: 3800, Cybersecurity: 2500 },
]

export function IndustryTrends ()
{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Industry Trends</CardTitle>
        <CardDescription>Topics competitors are addressing to stay relevant</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={ {
            AI: {
              label: "AI",
              color: "hsl(var(--chart-1))",
            },
            CloudComputing: {
              label: "Cloud Computing",
              color: "hsl(var(--chart-2))",
            },
            Cybersecurity: {
              label: "Cybersecurity",
              color: "hsl(var(--chart-3))",
            },
          } }
          className="h-[350px]"
        >
          <LineChart data={ data }>
            <XAxis dataKey="month" />
            <YAxis />
            <Line type="monotone" dataKey="AI" stroke="var(--color-AI)" />
            <Line type="monotone" dataKey="CloudComputing" stroke="var(--color-CloudComputing)" />
            <Line type="monotone" dataKey="Cybersecurity" stroke="var(--color-Cybersecurity)" />
            <ChartTooltip content={ <ChartTooltipContent /> } />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

