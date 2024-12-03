'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PerformanceChart from './performance-chart'
import AdMap from './ad-map'
import AdGroupsKeywords from './ad-groups-keywords'
import LandingPages from './landing-pages'
import AdGroups from './ad-groups'
import Demographics from './demographics'

export default function AdPerformance ()
{
  const [ selectedCampaign, setSelectedCampaign ] = useState("campaign1")

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Google Ads Dashboard</h1>
      <div className="mb-6">
        <Select onValueChange={ setSelectedCampaign } defaultValue={ selectedCampaign }>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Campaign" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="campaign1">Campaign 1</SelectItem>
            <SelectItem value="campaign2">Campaign 2</SelectItem>
            <SelectItem value="campaign3">Campaign 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Ad Groups and Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <AdGroupsKeywords campaign={ selectedCampaign } />
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 flex flex-col">
          <CardHeader>
            <CardTitle>Ad Locations</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <AdMap campaign={ selectedCampaign } />
          </CardContent>
          <CardHeader>
            <CardTitle>Ad Groups Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <AdGroups campaign={ selectedCampaign } />
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart />
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>Landing Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <LandingPages campaign={ selectedCampaign } />
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-4">
          <CardHeader>
            <CardTitle>Demographics</CardTitle>
          </CardHeader>
          <CardContent>
            <Demographics campaign={ selectedCampaign } />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

