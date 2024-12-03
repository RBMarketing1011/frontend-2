'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WebsitePerformanceOverview } from "@/components/website-performance-overview"
import { RecentSales } from "@/components/recent-sales"
import { TrafficSourcesPieChart } from "@/components/traffic-sources-pie-chart"
import AnalyticsBarChart from "@/components/user-behavior-bar-chart"
import { TopLandingPagesTable } from "@/components/top-landing-pages-table"
import { DeviceUsageBarChart } from "@/components/device-usage-bar-chart"
import { GeographicLocationMap } from "@/components/geographic-location-map"
import { UserTypeComparisonChart } from "@/components/user-type-comparison-chart"
import { SiteSpeedInsightsChart } from "@/components/site-speed-insights-chart"
import { EngagementMetricsRadarChart } from "@/components/engagement-metrics-radar-chart"
import InfoHover from '@/components/atom/InfoHover'
import { Activity, AlarmClockCheck, PanelTop, Users } from 'lucide-react'

export default function WebsitePerformancePage ()
{
  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight mb-5">
              Website Performance
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Users
                    className="h-10 w-10 text-muted-foreground border rounded-md
                    border-muted-foreground/30 p-2"
                  />
                  Total Sessions
                </CardTitle>
                <InfoHover
                  content='The total number of sessions on your website. A session is a group of interactions that take place on your website within a given time frame by a single user.'
                />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">145,283</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <Activity
                    className="h-10 w-10 text-muted-foreground border rounded-md
                    border-muted-foreground/30 p-2"
                  />
                  Bounce Rate
                </CardTitle>
                <InfoHover
                  content='The percentage of visitors who navigate away from your site after viewing only one page. A high bounce rate can indicate that your website is not engaging visitors.'
                />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32.5%</div>
                <p className="text-xs text-muted-foreground">
                  -4.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <PanelTop
                    className="h-10 w-10 text-muted-foreground border rounded-md
                    border-muted-foreground/30 p-2"
                  />
                  Page Views
                </CardTitle>
                <InfoHover
                  content='The total number of pages viewed on your website. Repeated views of a single page are counted.'
                />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">652,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <AlarmClockCheck
                    className="h-10 w-10 text-muted-foreground border rounded-md
                    border-muted-foreground/30 p-2"
                  />
                  Avg. Session Duration
                </CardTitle>
                <InfoHover
                  content='The average amount of time users spend on your website during a session. A longer session duration can indicate that your website is engaging visitors.'
                />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3m 42s</div>
                <p className="text-xs text-muted-foreground">
                  +7.4% from last month
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="col-span-4">
              <CardHeader className='flex-row justify-between items-center'>
                <CardTitle>Page Views</CardTitle>
                <InfoHover
                  content='The total number of pages viewed. Repeated views of a single page are counted.'
                />
              </CardHeader>
              <CardContent className="pl-2">
                <WebsitePerformanceOverview />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader className='flex-row justify-between items-center'>
                <div>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>
                    Breakdown of where visitors are coming from
                  </CardDescription>
                </div>
                <InfoHover
                  content='The sources of traffic to your website. This includes direct traffic, organic search, social media, and more.'
                />
              </CardHeader>
              <CardContent>
                <TrafficSourcesPieChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="col-span-5">
              <CardHeader className='flex-row justify-between items-center'>
                <div>
                  <CardTitle>User Behavior Flow</CardTitle>
                  <CardDescription>
                    How users navigate through the site
                  </CardDescription>
                </div>
                <InfoHover
                  content='The path users take through your website from entry to exit. This data can help you understand how users navigate your site and where they drop off.'
                />
              </CardHeader>
              <CardContent>
                <AnalyticsBarChart />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader className='flex-row justify-between items-center'>
                <div>
                  <CardTitle>Top Landing Pages</CardTitle>
                  <CardDescription>
                    Pages where users enter the site most frequently
                  </CardDescription>
                </div>
                <InfoHover
                  content='The pages on your website that users land on most frequently. This data can help you understand which pages are most effective at attracting visitors.'
                />
              </CardHeader>
              <CardContent>
                <TopLandingPagesTable />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="col-span-3">
              <CardHeader className='flex-row justify-between items-center'>
                <div>
                  <CardTitle>Device Usage</CardTitle>
                  <CardDescription>
                    Insights into devices used by visitors
                  </CardDescription>
                </div>
                <InfoHover
                  content='The devices visitors use to access your website. This data can help you understand which devices your customers use the most.'
                />
              </CardHeader>
              <CardContent>
                <DeviceUsageBarChart />
              </CardContent>
            </Card>
            <Card className="col-span-5">
              <CardHeader className='flex-row justify-between items-center'>
                <div>
                  <CardTitle>Geographic Location</CardTitle>
                  <CardDescription>
                    Regions where visitors are located
                  </CardDescription>
                </div>
                <InfoHover
                  content='The geographic locations of visitors to your website. This data can help you understand where your audience is located and tailor your content to their needs.'
                />
              </CardHeader>
              <CardContent>
                <GeographicLocationMap />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="col-span-4">
              <CardHeader className='flex-row justify-between items-center'>
                <div>
                  <CardTitle>Returning vs. New Users</CardTitle>
                  <CardDescription>
                    Comparison of returning and first-time visitors
                  </CardDescription>
                </div>
                <InfoHover
                  content='The number of users who have visited your website before compared to new visitors. This data can help you understand how well you are retaining customers.'
                />
              </CardHeader>
              <CardContent>
                <UserTypeComparisonChart />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader className='flex-row justify-between items-center'>
                <div>
                  <CardTitle>Site Speed Insights</CardTitle>
                  <CardDescription>
                    Data on how quickly pages load for users
                  </CardDescription>
                </div>
                <InfoHover
                  content='Information on how quickly your website loads for users. This data can help you identify areas for improvement and optimize your site for better performance.'
                />
              </CardHeader>
              <CardContent>
                <SiteSpeedInsightsChart />
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
            <Card className="col-span-4">
              <CardHeader className='flex-row justify-between items-center'>
                <div>
                  <CardTitle>Engagement Metrics</CardTitle>
                  <CardDescription>
                    Information on user interactions and engagement
                  </CardDescription>
                </div>
                <InfoHover
                  content='Data on how users interact with your website, including time on page, bounce rate, and more. This data can help you understand how engaged your audience is.'
                />
              </CardHeader>
              <CardContent>
                <EngagementMetricsRadarChart />
              </CardContent>
            </Card>
            <Card className="col-span-4">
              <CardHeader className='flex-row justify-between items-center'>
                <div>
                  <CardTitle>Recent Conversions</CardTitle>
                  <CardDescription>
                    Latest form submissions and purchases
                  </CardDescription>
                </div>
                <InfoHover
                  content='The most recent conversions on your website, including form submissions, purchases, and more. This data can help you understand how well your website is performing.'
                />
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}