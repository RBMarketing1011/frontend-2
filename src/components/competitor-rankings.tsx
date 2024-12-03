'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

const data = [
  { name: "Your Company", ranking: 80 },
  { name: "Competitor A", ranking: 65 },
  { name: "Competitor B", ranking: 75 },
  { name: "Competitor C", ranking: 55 },
]

export function CompetitorRankings ()
{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Competitor Rankings</CardTitle>
        <CardDescription>Search visibility comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={ {
            ranking: {
              label: "Ranking",
              color: "hsl(var(--chart-1))",
            },
          } }
          className="w-full h-[350px]"
        >
          <BarChart data={ data }>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="ranking" fill="var(--color-ranking)" />
            <ChartTooltip content={ <ChartTooltipContent /> } />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

