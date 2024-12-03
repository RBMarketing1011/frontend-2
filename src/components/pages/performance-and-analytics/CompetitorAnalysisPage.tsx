'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CompetitorRankings } from "@/components/competitor-rankings"
import { KeywordGap } from "@/components/keyword-gap"
import { BacklinkData } from "@/components/backlink-data"
import { PaidAdsComparison } from "@/components/paid-ads-comparison"
import { CompetitorMessaging } from "@/components/competitor-messaging"
import { ContentStrategies } from "@/components/content-strategies"
import { IndustryTrends } from "@/components/industry-trends"
import { TopCompetitorCampaigns } from "@/components/top-competitor-campaigns"
import { SeoStrategies } from "@/components/seo-strategies"
import { CustomerFeedback } from "@/components/customer-feedback"

export default function CompetitorAnalysisPage ()
{
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Competitor Analysis</h1>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className='col-span-1 lg:col-span-2'>
              <CompetitorRankings />
            </div>
            <KeywordGap />
            <BacklinkData />

            <div className='col-span-1 lg:col-span-2'>
              <PaidAdsComparison />
            </div>

            <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <CompetitorMessaging />
              </div>
              <div className="col-span-1">
                <CustomerFeedback />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="seo" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <CompetitorRankings />
            <KeywordGap />
            <BacklinkData />
            <SeoStrategies />
          </div>
        </TabsContent>
        <TabsContent value="content" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <ContentStrategies />
            <IndustryTrends />
            <div className="col-span-full">
              <CompetitorMessaging />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="campaigns" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <TopCompetitorCampaigns />
            <PaidAdsComparison />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}