"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TotalCallsChart } from "./total-calls-chart"
import { CallTypesPieChart } from "./call-types-pie-chart"
import { CallDurationChart } from "./call-duration-chart"
import { LeadConversionChart } from "./lead-conversion-chart"
import { FirstTimeCallersChart } from "./first-time-callers-chart"
import { CallsTable } from "./calls-table"

export default function CallTrackingDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Call Tracking & Performance</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Total Calls Overview</CardTitle>
            <CardDescription>Breakdown of total calls over time</CardDescription>
          </CardHeader>
          <CardContent>
            <TotalCallsChart className="h-[300px] w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Call Types</CardTitle>
            <CardDescription>Distribution of answered, missed, and first-time calls</CardDescription>
          </CardHeader>
          <CardContent>
            <CallTypesPieChart className="h-[300px] w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Average Call Duration</CardTitle>
            <CardDescription>Trend of average call length over time</CardDescription>
          </CardHeader>
          <CardContent>
            <CallDurationChart className="h-[300px] w-full" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lead Conversion Rate</CardTitle>
            <CardDescription>Percentage of calls resulting in conversions</CardDescription>
          </CardHeader>
          <CardContent>
            <LeadConversionChart className="h-[300px] w-full" />
          </CardContent>
        </Card>
        <Card className="md:col-span-2 lg:col-span-3">
          <CardHeader>
            <CardTitle>First-time Callers Trend</CardTitle>
            <CardDescription>Number of new leads/customers over time</CardDescription>
          </CardHeader>
          <CardContent>
            <FirstTimeCallersChart className="h-[300px] w-full" />
          </CardContent>
        </Card>
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Recent Calls</CardTitle>
            <CardDescription>Detailed list of recent calls with sorting and listening options</CardDescription>
          </CardHeader>
          <CardContent>
            <CallsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

