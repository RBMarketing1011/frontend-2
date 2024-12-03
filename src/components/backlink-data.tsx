'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Cell, Pie, PieChart } from "recharts"

const data = [
  { name: "Your Company", value: 5000 },
  { name: "Competitor A", value: 4000 },
  { name: "Competitor B", value: 3000 },
  { name: "Competitor C", value: 2000 },
]

const COLORS = [ 'hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))' ]

export function BacklinkData ()
{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Backlink Data</CardTitle>
        <CardDescription>Total backlinks comparison</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={ {
            backlinks: {
              label: "Backlinks",
              color: "hsl(var(--chart-1))",
            },
          } }
          className="h-[300px]"
        >
          <PieChart>
            <Pie
              data={ data }
              cx="50%"
              cy="50%"
              labelLine={ false }
              outerRadius={ 80 }
              fill="#8884d8"
              dataKey="value"
            >
              { data.map((entry, index) => (
                <Cell key={ `cell-${ index }` } fill={ COLORS[ index % COLORS.length ] } />
              )) }
            </Pie>
            <ChartTooltip content={ <ChartTooltipContent /> } />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

