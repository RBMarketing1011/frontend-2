"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", duration: 3.2 },
  { month: "Feb", duration: 3.5 },
  { month: "Mar", duration: 3.8 },
  { month: "Apr", duration: 4.1 },
  { month: "May", duration: 3.9 },
  { month: "Jun", duration: 4.2 },
]

export function CallDurationChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={{
        duration: {
          label: "Average Duration (minutes)",
          color: "hsl(var(--chart-1))",
        },
      }}
      className={`w-full ${className}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="duration" fill="var(--color-duration)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

