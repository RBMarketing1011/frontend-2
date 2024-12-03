"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { week: "Week 1", newCallers: 45 },
  { week: "Week 2", newCallers: 52 },
  { week: "Week 3", newCallers: 49 },
  { week: "Week 4", newCallers: 63 },
  { week: "Week 5", newCallers: 58 },
  { week: "Week 6", newCallers: 64 },
]

export function FirstTimeCallersChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={{
        newCallers: {
          label: "New Callers",
          color: "hsl(var(--chart-1))",
        },
      }}
      className={`w-full ${className}`}
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="week" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="newCallers" fill="var(--color-newCallers)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

