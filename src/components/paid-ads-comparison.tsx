'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const data = [
  { name: "Your Company", impressions: 100000, clicks: 5000 },
  { name: "Competitor A", impressions: 80000, clicks: 4000 },
  { name: "Competitor B", impressions: 120000, clicks: 6000 },
  { name: "Competitor C", impressions: 90000, clicks: 4500 },
]

export function PaidAdsComparison ()
{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Paid Ads Comparison</CardTitle>
        <CardDescription>Impressions and clicks comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={ {
            impressions: {
              label: "Impressions",
              color: "hsl(var(--chart-1))",
            },
            clicks: {
              label: "Clicks",
              color: "hsl(var(--chart-2))",
            },
          } }
          className="w-full h-[350px]"
        >
          <BarChart data={ data }>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="impressions" fill="var(--color-impressions)" />
            <Bar dataKey="clicks" fill="var(--color-clicks)" />
            <ChartTooltip content={ <ChartTooltipContent /> } />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

