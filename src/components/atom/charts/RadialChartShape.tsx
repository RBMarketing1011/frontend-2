"use client"

import
{
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

// Calculate end angle based on percentage (0-100)
const calculateEndAngle = (percentage: number) =>
{
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100)
  // Convert percentage to angle (360 degrees = 100%)
  return (clampedPercentage / 100) * 360 - 90 // Subtract 90 to start from top
}

// Define the chart data interface
interface ChartData
{
  label: string // The label of the data (e.g., "Total Ads Spend")
  value: number // The value to be displayed (e.g., 6548)
  color: string // The color associated with the data (e.g., 'green')
  type: "currency" | "number" // New field to define whether to display as currency or a regular number
  percent: number // Percentage field (0-100)
}

interface RadialChartProps
{
  data: ChartData // Single chart data object, not an array
  config?: ChartConfig // Configuration for the chart
}

export default function RadialChartShape ({ data, config }: RadialChartProps)
{
  return (
    <ChartContainer
      config={ config ? config : {} }
      className="mx-auto aspect-square max-h-[250px]"
    >
      <RadialBarChart
        data={ [ data ] } // Pass the data directly, no need to wrap in an array
        startAngle={ -90 } // Start from top
        endAngle={ calculateEndAngle(data.percent) } // Use percentage to calculate the end angle
        innerRadius={ 80 }
        outerRadius={ 140 }
      >
        <PolarGrid
          gridType="circle"
          radialLines={ false }
          stroke="none"
          className="first:fill-muted last:fill-background"
          polarRadius={ [ 86, 74 ] }
        />
        <RadialBar
          dataKey="percent" // Ensure that percent is used as the key
          fill={ data.color } // Dynamically use the color from the data
          background
        // cornerRadius="50%" // Optional: rounded corners for the bars
        />
        <PolarRadiusAxis tick={ false } tickLine={ false } axisLine={ false }>
          <Label
            content={ ({ viewBox }) =>
            {
              if (viewBox && "cx" in viewBox && "cy" in viewBox)
              {
                return (
                  <text
                    x={ viewBox.cx }
                    y={ viewBox.cy }
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={ viewBox.cx }
                      y={ viewBox.cy }
                      className="fill-foreground text-4xl font-bold"
                    >
                      { data.type === "currency" ? "$" : "" }
                      { data.value.toLocaleString() }
                    </tspan>
                    <tspan
                      x={ viewBox.cx }
                      y={ (viewBox.cy || 0) + 24 }
                      className="fill-muted-foreground"
                    >
                      { data.label }
                    </tspan>
                  </text>
                )
              }
            } }
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  )
}
