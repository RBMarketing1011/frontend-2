"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Answered", value: 65 },
  { name: "Missed", value: 25 },
  { name: "First-time", value: 10 },
]

export function CallTypesPieChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={{
        answered: {
          label: "Answered Calls",
          color: "hsl(var(--chart-1))",
        },
        missed: {
          label: "Missed Calls",
          color: "hsl(var(--chart-2))",
        },
        firstTime: {
          label: "First-time Callers",
          color: "hsl(var(--chart-3))",
        },
      }}
      className={`w-full ${className}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`var(--color-${entry.name.toLowerCase()})`} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

