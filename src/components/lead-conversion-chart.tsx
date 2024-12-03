"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { month: "Jan", conversion: 15 },
  { month: "Feb", conversion: 18 },
  { month: "Mar", conversion: 22 },
  { month: "Apr", conversion: 25 },
  { month: "May", conversion: 28 },
  { month: "Jun", conversion: 32 },
]

export function LeadConversionChart({ className }: { className?: string }) {
  return (
    <ChartContainer
      config={{
        conversion: {
          label: "Conversion Rate (%)",
          color: "hsl(var(--chart-1))",
        },
      }}
      className={`w-full ${className}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area type="monotone" dataKey="conversion" stroke="var(--color-conversion)" fill="var(--color-conversion)" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

