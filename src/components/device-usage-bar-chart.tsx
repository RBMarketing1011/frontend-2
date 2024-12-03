'use client'

import
{
  BarChart, Bar, XAxis, CartesianGrid,
  ResponsiveContainer, LabelList
} from 'recharts'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import
{
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { name: 'Desktop', users: 4000, sessions: 5000, firstTimeUsers: 2000, location: 'Global' },
  { name: 'Mobile', users: 3000, sessions: 3500, firstTimeUsers: 1500, location: 'Global' },
  { name: 'Tablet', users: 1000, sessions: 1200, firstTimeUsers: 500, location: 'Global' },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  tablet: {
    label: "Tablet",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function DeviceUsageBarChart ()
{
  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={ 300 }>
        <ChartContainer config={ chartConfig }>
          <BarChart
            accessibilityLayer
            data={ data }
            margin={ {
              top: 20,
            } }
          >
            <CartesianGrid vertical={ false } />
            <XAxis
              dataKey="name"
              tickLine={ false }
              tickMargin={ 10 }
              axisLine={ false }
              tickFormatter={ (value) => value }
            />
            <ChartTooltip
              cursor={ false }
              content={ <ChartTooltipContent /> }
            />
            <Bar
              barSize={ 80 }
              minPointSize={ 25 }
              dataKey="sessions"
              fill="var(--color-desktop)"
              radius={ 8 }
            >
              <LabelList
                position="top"
                offset={ 12 }
                className="fill-foreground"
                fontSize={ 12 }
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </ResponsiveContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Device</TableHead>
            <TableHead>Sessions</TableHead>
            <TableHead>First Time Users</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          { data.map((item) => (
            <TableRow key={ item.name }>
              <TableCell>{ item.name }</TableCell>
              <TableCell>{ item.sessions }</TableCell>
              <TableCell>{ item.firstTimeUsers }</TableCell>
              <TableCell>{ item.location }</TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </div>
  )
}

