'use client'

import { Pie, PieChart, ResponsiveContainer } from "recharts"

import
{
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const data = [
  { name: 'organic', label: 'Organic Users', value: 400, fill: 'var(--color-organic)' },
  { name: 'paid', label: 'Paid Ads', value: 300, fill: 'var(--color-paid)' },
  { name: 'social', label: 'Social Media', value: 200, fill: 'var(--color-social)' },
  { name: 'direct', label: 'Direct', value: 100, fill: 'var(--color-direct)' },
]

const dataConfig = {
  organic: {
    label: "Organic Users",
    color: "hsl(var(--chart-1))",
  },
  paid: {
    label: "Paid Ads",
    color: "hsl(var(--chart-2))",
  },
  social: {
    label: "Social Media",
    color: "hsl(var(--chart-3))",
  },
  direct: {
    label: "Direct",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function TrafficSourcesPieChart ()
{
  return (
    <ResponsiveContainer width="100%" height={ 300 }>
      <ChartContainer
        config={ dataConfig }
      >
        <PieChart>
          <ChartTooltip
            cursor={ false }
            content={ <ChartTooltipContent /> }
            formatter={ (value, name, label, next) => (
              <div className='w-full flex items-center justify-between gap-3'>
                <span className='inline-flex items-center gap-2 text-slate-400'>
                  <div
                    className={ `w-3 h-3 rounded-sm` }
                    style={ { backgroundColor: label.payload.fill } }
                  ></div>
                  { label.payload.label }
                </span>
                <span className='font-bold'>{ value }</span>
              </div>
            ) }
          />
          <Pie data={ data } dataKey="value" nameKey="name" />
          <ChartLegend
            content={ <ChartLegendContent nameKey="name" /> }
            className="gap-6 flex-wrap"
          />
        </PieChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}