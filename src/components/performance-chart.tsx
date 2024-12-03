"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import
{
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { date: '2023-01', clicks: 1234, impressions: 13456, ctr: 9.18, avgCpc: 0.47, cost: 579 },
  { date: '2023-02', clicks: 987, impressions: 1678, ctr: 6.29, avgCpc: 0.68, cost: 671 },
  { date: '2023-03', clicks: 1456, impressions: 1000, ctr: 7.66, avgCpc: 0.59, cost: 859 },
  { date: '2023-04', clicks: 1113, impressions: 1421, ctr: 7.82, avgCpc: 0.53, cost: 590 },
  { date: '2023-05', clicks: 1782, impressions: 6543, ctr: 10.77, avgCpc: 0.63, cost: 1123 },
  { date: '2023-06', clicks: 1345, impressions: 100, ctr: 8.97, avgCpc: 0.48, cost: 646 },
  { date: '2023-07', clicks: 1657, impressions: 834, ctr: 9.29, avgCpc: 0.61, cost: 1011 },
  { date: '2023-08', clicks: 1428, impressions: 6012, ctr: 8.92, avgCpc: 0.56, cost: 799 },
  { date: '2023-09', clicks: 1893, impressions: 2000, ctr: 9.47, avgCpc: 0.66, cost: 1249 },
  { date: '2023-10', clicks: 1321, impressions: 4321, ctr: 9.22, avgCpc: 0.52, cost: 687 },
  { date: '2023-11', clicks: 1542, impressions: 143, ctr: 9.32, avgCpc: 0.64, cost: 986 },
  { date: '2023-12', clicks: 1204, impressions: 187, ctr: 8.55, avgCpc: 0.57, cost: 686 },
  { date: '2024-01', clicks: 1823, impressions: 9543, ctr: 9.32, avgCpc: 0.62, cost: 1130 },
  { date: '2024-02', clicks: 1409, impressions: 5432, ctr: 9.13, avgCpc: 0.58, cost: 818 },
  { date: '2024-03', clicks: 1764, impressions: 8765, ctr: 9.39, avgCpc: 0.65, cost: 1146 },
  { date: '2024-04', clicks: 1233, impressions: 4532, ctr: 8.49, avgCpc: 0.51, cost: 629 },
  { date: '2024-05', clicks: 1924, impressions: 343, ctr: 9.02, avgCpc: 0.63, cost: 1212 },
  { date: '2024-06', clicks: 1487, impressions: 154, ctr: 8.87, avgCpc: 0.59, cost: 877 },
  { date: '2024-07', clicks: 1793, impressions: 1021, ctr: 9.42, avgCpc: 0.67, cost: 1201 },
  { date: '2024-08', clicks: 1650, impressions: 143, ctr: 9.41, avgCpc: 0.61, cost: 1006 },
  { date: '2024-09', clicks: 1374, impressions: 1987, ctr: 9.17, avgCpc: 0.55, cost: 755 },
  { date: '2024-10', clicks: 800, impressions: 1973, ctr: 9.27, avgCpc: 0.66, cost: 1216 }
]


const chartConfig = {
  clicks: {
    label: "Clicks",
    color: "hsl(var(--chart-1))",
  },
  impressions: {
    label: "Impressions",
    color: "hsl(var(--chart-2))",
  },
  ctr: {
    label: "CTR",
    color: "hsl(var(--chart-3))",
  },
  avgCpc: {
    label: "Avg CPC",
    color: "hsl(var(--chart-4))",
  },
  cost: {
    label: "Cost",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig
export default function PerformanceChart ()
{
  return (
    <ChartContainer config={ chartConfig }>
      <AreaChart
        accessibilityLayer
        data={ chartData }
      >
        <CartesianGrid vertical={ false } />
        <XAxis
          dataKey="date"
          tickLine={ false }
          axisLine={ false }
          tickMargin={ 8 }
          tickFormatter={ (value) => new Date(value).toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
          }) }
        />
        <ChartTooltip cursor={ false } content={ <ChartTooltipContent /> } />
        <defs>
          <linearGradient id="fillClicks" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-clicks)"
              stopOpacity={ 0.8 }
            />
            <stop
              offset="95%"
              stopColor="var(--color-clicks)"
              stopOpacity={ 0.1 }
            />
          </linearGradient>

          <linearGradient id="fillImpressions" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-impressions)"
              stopOpacity={ 0.8 }
            />
            <stop
              offset="95%"
              stopColor="var(--color-impressions)"
              stopOpacity={ 0.1 }
            />
          </linearGradient>

          <linearGradient id="fillCtr" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-ctr)"
              stopOpacity={ 0.8 }
            />
            <stop
              offset="95%"
              stopColor="var(--color-ctr)"
              stopOpacity={ 0.1 }
            />
          </linearGradient>

          <linearGradient id="fillavgCpc" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-avgCpc)"
              stopOpacity={ 0.8 }
            />
            <stop
              offset="95%"
              stopColor="var(--color-avgCpc)"
              stopOpacity={ 0.1 }
            />
          </linearGradient>

          <linearGradient id="fillCost" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-cost)"
              stopOpacity={ 0.8 }
            />
            <stop
              offset="95%"
              stopColor="var(--color-cost)"
              stopOpacity={ 0.1 }
            />
          </linearGradient>

        </defs>

        <Area
          dataKey="avgCpc"
          type="natural"
          fill="url(#fillavgCpc)"
          fillOpacity={ 0.4 }
          stroke="var(--color-avgCpc)"
          stackId="a"
        />

        <Area
          dataKey="ctr"
          type="natural"
          fill="url(#fillCtr)"
          fillOpacity={ 0.4 }
          stroke="var(--color-ctr)"
          stackId="a"
        />

        <Area
          dataKey="cost"
          type="natural"
          fill="url(#fillCost)"
          fillOpacity={ 0.4 }
          stroke="var(--color-cost)"
          stackId="a"
        />

        <Area
          dataKey="clicks"
          type="natural"
          fill="url(#fillClicks)"
          fillOpacity={ 0.4 }
          stroke="var(--color-clicks)"
          stackId="a"
        />

        <Area
          dataKey="impressions"
          type="natural"
          fill="url(#fillImpressions)"
          fillOpacity={ 0.4 }
          stroke="var(--color-impressions)"
          stackId="a"
        />

      </AreaChart>
    </ChartContainer>
  )
}
