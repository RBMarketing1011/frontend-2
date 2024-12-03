'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const ageData = [
  { age: '18-24', impressions: 1000, ctr: 2.5, clicks: 25, avgCpc: 0.5, cost: 12.5 },
  { age: '25-34', impressions: 2000, ctr: 3.0, clicks: 60, avgCpc: 0.55, cost: 33 },
  { age: '35-44', impressions: 1800, ctr: 2.8, clicks: 50, avgCpc: 0.52, cost: 26 },
  { age: '45-54', impressions: 1500, ctr: 2.6, clicks: 39, avgCpc: 0.54, cost: 21.06 },
  { age: '55-64', impressions: 1200, ctr: 2.3, clicks: 28, avgCpc: 0.51, cost: 14.28 },
  { age: '65+', impressions: 800, ctr: 2.0, clicks: 16, avgCpc: 0.48, cost: 7.68 },
]

const genderData = [
  { gender: 'Male', impressions: 4500, ctr: 2.8, clicks: 126, avgCpc: 0.53, cost: 66.78 },
  { gender: 'Female', impressions: 4000, ctr: 2.6, clicks: 104, avgCpc: 0.52, cost: 54.08 },
  { gender: 'Unknown', impressions: 800, ctr: 2.0, clicks: 16, avgCpc: 0.50, cost: 8.00 },
]

const incomeData = [
  { income: 'Low', impressions: 2000, ctr: 2.2, clicks: 44, avgCpc: 0.48, cost: 21.12 },
  { income: 'Medium', impressions: 3500, ctr: 2.7, clicks: 94, avgCpc: 0.52, cost: 48.88 },
  { income: 'High', impressions: 3000, ctr: 3.0, clicks: 90, avgCpc: 0.56, cost: 50.40 },
  { income: 'Unknown', impressions: 800, ctr: 2.1, clicks: 17, avgCpc: 0.50, cost: 8.50 },
]

export default function Demographics({ campaign }: { campaign: string }) {
  const [activeTab, setActiveTab] = useState('age')

  const renderChart = (data: any[], xKey: string) => (
    <ChartContainer
      config={{
        impressions: {
          label: "Impressions",
          color: "hsl(var(--chart-1))",
        },
        ctr: {
          label: "CTR",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[400px] w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar yAxisId="left" dataKey="impressions" fill="var(--color-impressions)" />
          <Bar yAxisId="right" dataKey="ctr" fill="var(--color-ctr)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )

  const renderTable = (data: any[]) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{activeTab === 'age' ? 'Age' : activeTab === 'gender' ? 'Gender' : 'Income'}</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead>Impressions</TableHead>
          <TableHead>CTR</TableHead>
          <TableHead>Avg CPC</TableHead>
          <TableHead>Cost</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row[activeTab]}</TableCell>
            <TableCell>{row.clicks}</TableCell>
            <TableCell>{row.impressions}</TableCell>
            <TableCell>{row.ctr}%</TableCell>
            <TableCell>${row.avgCpc.toFixed(2)}</TableCell>
            <TableCell>${row.cost.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList>
        <TabsTrigger value="age">Age</TabsTrigger>
        <TabsTrigger value="gender">Gender</TabsTrigger>
        <TabsTrigger value="income">Household Income</TabsTrigger>
      </TabsList>
      <TabsContent value="age">
        {renderChart(ageData, 'age')}
        {renderTable(ageData)}
      </TabsContent>
      <TabsContent value="gender">
        {renderChart(genderData, 'gender')}
        {renderTable(genderData)}
      </TabsContent>
      <TabsContent value="income">
        {renderChart(incomeData, 'income')}
        {renderTable(incomeData)}
      </TabsContent>
    </Tabs>
  )
}

