"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, Pie, PieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from "recharts"

// Mock data (replace with actual API calls in a real application)
const mockData = {
  searchVisibility: [
    { day: 'Mon', value: 65 },
    { day: 'Tue', value: 70 },
    { day: 'Wed', value: 75 },
    { day: 'Thu', value: 72 },
    { day: 'Fri', value: 80 },
    { day: 'Sat', value: 82 },
    { day: 'Sun', value: 85 },
  ],
  organicTraffic: [
    { day: 'Mon', value: 1000 },
    { day: 'Tue', value: 1200 },
    { day: 'Wed', value: 1100 },
    { day: 'Thu', value: 1300 },
    { day: 'Fri', value: 1400 },
    { day: 'Sat', value: 1350 },
    { day: 'Sun', value: 1500 },
  ],
  topKeywords: [
    { keyword: "SEO tools", volume: 5000, clicks: 250 },
    { keyword: "SEO analytics", volume: 3000, clicks: 180 },
    { keyword: "Keyword research", volume: 4000, clicks: 200 },
    { keyword: "Backlink checker", volume: 2000, clicks: 120 },
    { keyword: "SEO audit", volume: 3500, clicks: 170 },
  ],
  backlinks: [
    { name: 'Follow', value: 6000, fill: "var(--chart-1)" },
    { name: 'No follow', value: 3000, fill: "var(--chart-2)" },
    { name: 'UGC', value: 1000, fill: "var(--chart-3)" },
  ],
  searchQueries: [
    { query: "best seo tools", impressions: 10000, clicks: 500, position: 2.3 },
    { query: "seo analytics dashboard", impressions: 8000, clicks: 400, position: 3.1 },
    { query: "how to improve seo", impressions: 15000, clicks: 600, position: 1.8 },
    { query: "keyword research guide", impressions: 12000, clicks: 550, position: 2.5 },
    { query: "backlink analysis tools", impressions: 9000, clicks: 450, position: 2.9 },
  ],
}

export default function SEOInsightsDashboard ()
{
  // const [timeRange, setTimeRange] = useState("7d")

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">SEO Insights Dashboard</h1>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Search Visibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ mockData.searchVisibility[ mockData.searchVisibility.length - 1 ].value }%</div>
            <p className="text-xs text-muted-foreground">+2% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Organic Traffic</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ mockData.organicTraffic[ mockData.organicTraffic.length - 1 ].value }</div>
            <p className="text-xs text-muted-foreground">+11% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Backlinks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ mockData.backlinks.reduce((sum, item) => sum + item.value, 0) }</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Keyword Position</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3</div>
            <p className="text-xs text-muted-foreground">-0.5 from last week</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Search Visibility Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={ {
              value: {
                label: "Search Visibility",
                color: "hsl(var(--chart-1))",
              },
            } } className="h-[300px] w-full">
              <LineChart data={ mockData.searchVisibility }>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={ <ChartTooltipContent /> } />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={ 2 } />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Organic Traffic Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={ {
              value: {
                label: "Organic Traffic",
                color: "hsl(var(--chart-2))",
              },
            } } className="h-[300px] w-full">
              <LineChart data={ mockData.organicTraffic }>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <ChartTooltip content={ <ChartTooltipContent /> } />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={ 2 } />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={ {
              volume: {
                label: "Search Volume",
                color: "hsl(var(--chart-3))",
              },
              clicks: {
                label: "Clicks",
                color: "hsl(var(--chart-4))",
              },
            } } className="h-[300px] w-full">
              <BarChart data={ mockData.topKeywords }>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="keyword" />
                <YAxis />
                <ChartTooltip content={ <ChartTooltipContent /> } />
                <Legend />
                <Bar dataKey="volume" fill="var(--color-volume)" />
                <Bar dataKey="clicks" fill="var(--color-clicks)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Backlinks Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={ {
                Follow: {
                  label: "Do Follow",
                },
                'No follow': {
                  label: "No Follow",
                },
                'UGC': {
                  label: "UGC/Sponsored",
                },
              } }
              className="h-[300px] w-full"
            >
              <PieChart>
                <Pie
                  data={ mockData.backlinks }
                  dataKey="value"
                  labelLine={ false }
                  label={ ({ payload, ...props }) =>
                  {
                    return (
                      <text
                        cx={ props.cx }
                        cy={ props.cy }
                        x={ props.x }
                        y={ props.y }
                        textAnchor={ props.textAnchor }
                        dominantBaseline={ props.dominantBaseline }
                        fill="hsla(var(--foreground))"
                      >
                        { payload.value }
                      </text>
                    )
                  } }
                  nameKey="name"
                  outerRadius={ 100 }
                  innerRadius={ 50 }
                  isAnimationActive={ true }
                >
                  { mockData.backlinks.map((entry, index) => (
                    <Cell key={ `cell-${ index }` } fill={ `hsl(${ entry.fill })` } />
                  )) }
                </Pie>
                <ChartTooltip
                  content={ <ChartTooltipContent nameKey="name" hideLabel /> }
                />
                <Legend />
              </PieChart>
            </ChartContainer>

          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Search Queries</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Query</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Avg. Position</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                { mockData.searchQueries.map((query, index) => (
                  <TableRow key={ index }>
                    <TableCell>{ query.query }</TableCell>
                    <TableCell>{ query.impressions }</TableCell>
                    <TableCell>{ query.clicks }</TableCell>
                    <TableCell>{ query.position.toFixed(1) }</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

