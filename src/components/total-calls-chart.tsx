"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { date: "2023-01", total: 157, answered: 120, missed: 37 },
  { date: "2023-02", total: 176, answered: 140, missed: 36 },
  { date: "2023-03", total: 195, answered: 160, missed: 35 },
  { date: "2023-04", total: 214, answered: 180, missed: 34 },
  { date: "2023-05", total: 233, answered: 200, missed: 33 },
  { date: "2023-06", total: 252, answered: 220, missed: 32 },
]

export function TotalCallsChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={{
        total: {
          label: "Total Calls",
          color: "hsl(var(--chart-1))",
        },
        answered: {
          label: "Answered Calls",
          color: "hsl(var(--chart-2))",
        },
        missed: {
          label: "Missed Calls",
          color: "hsl(var(--chart-3))",
        },
      }}
      className={`w-full ${className}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line type="monotone" dataKey="total" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="answered" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="missed" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

