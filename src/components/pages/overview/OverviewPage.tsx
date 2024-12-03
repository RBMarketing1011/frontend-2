'use client'

import
{
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import LineChartInteractive from '@/components/atom/charts/LineChartInteractive'
import RadialChartShape from '@/components/atom/charts/RadialChartShape'
import { DropdownMenuCheckboxes } from '@/components/atom/DropdownMenuCheckboxes'
import { EllipsisVerticalIcon } from 'lucide-react'
import { useState } from 'react'
import { DynamicTable } from '@/components/dynamic-table'
import { BarChartVertical } from '@/components/atom/charts/BarChartVertical'
import { LineChartStep } from '@/components/atom/charts/LineChartStep'
import InfoHover from '@/components/atom/InfoHover'

const OverviewPage = () =>
{
  const [ dropdownItems, setDropdownItems ] = useState([
    {
      label: 'After Hours',
      checked: true,
      onCheckedChange: () =>
      {
        setDropdownItems(prev => ([
          ...prev.map(item => (
            item.label === 'After Hours' ?
              { ...item, checked: !item.checked }
              :
              item.checked ?
                { ...item, checked: false }
                :
                item
          ))
        ]))
      },
    },
    {
      label: 'Diesel Repair Only',
      checked: false,
      onCheckedChange: () =>
      {
        setDropdownItems(prev => ([
          ...prev.map(item => (
            item.label === 'Diesel Repair Only' ?
              { ...item, checked: !item.checked }
              :
              item.checked ?
                { ...item, checked: false }
                :
                item
          ))
        ]))
      },
    },
    {
      label: 'Oil Change',
      checked: false,
      onCheckedChange: () =>
      {
        setDropdownItems(prev => ([
          ...prev.map(item => (
            item.label === 'Oil Change' ?
              { ...item, checked: !item.checked }
              :
              item.checked ?
                { ...item, checked: false }
                :
                item
          ))
        ]))
      },
    },
    {
      label: 'General Auto Repair',
      checked: false,
      onCheckedChange: () =>
      {
        setDropdownItems(prev => ([
          ...prev.map(item => (
            item.label === 'General Auto Repair' ?
              { ...item, checked: !item.checked }
              :
              item.checked ?
                { ...item, checked: false }
                :
                item
          ))
        ]))
      },
    },
    {
      label: 'Auto Repair Near Me',
      checked: false,
      onCheckedChange: () =>
      {
        setDropdownItems(prev => ([
          ...prev.map(item => (
            item.label === 'Auto Repair Near Me' ?
              { ...item, checked: !item.checked }
              :
              item.checked ?
                { ...item, checked: false }
                :
                item
          ))
        ]))
      },
    },
  ])

  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50">
          <Card className="flex h-full justify-center items-center">
            <CardContent className="w-1/2 p-0">
              <RadialChartShape
                data={ {
                  label: 'Total Ads Spend', value: 6548, color: 'green', type: 'currency', percent: 45
                } }
              />
            </CardContent>
          </Card>
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">

          <Card className="flex h-full justify-center items-center">
            <CardContent className="w-1/2 p-0">
              <RadialChartShape
                data={ {
                  label: 'Cost Per Click', value: 9.04, color: 'blue', type: 'currency', percent: 87

                } }
              />
            </CardContent>
          </Card>
        </div>
        <div className="aspect-video rounded-xl bg-muted/50" >
          <Card className="flex h-full justify-center items-center">
            <CardContent className="w-1/2 p-0">
              <RadialChartShape
                data={ {
                  label: 'Total Calls', value: 447, color: 'red', type: 'number', percent: 13
                } }
              />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="rounded-xl bg-muted/50">
        <LineChartInteractive
          data={ [
            {
              date: "2024-04-01",
              budget: 20,
              clicks: 47,
              impressions: 219,
              ctr: 21.46,
              cpc: 6.32,
              cost: 148,
            },
            {
              date: "2024-04-02",
              budget: 20,
              clicks: 34,
              impressions: 150,
              ctr: 22.67,
              cpc: 9.98,
              cost: 0,
            },
            {
              date: "2024-04-03",
              budget: 20,
              clicks: 52,
              impressions: 320,
              ctr: 16.25,
              cpc: 8.21,
              cost: 39,
            },
            {
              date: "2024-04-04",
              budget: 20,
              clicks: 60,
              impressions: 400,
              ctr: 15.0,
              cpc: 7.54,
              cost: 35,
            },
            {
              date: "2024-04-05",
              budget: 20,
              clicks: 28,
              impressions: 180,
              ctr: 15.56,
              cpc: 6.25,
              cost: 82,
            },
            {
              date: "2024-04-06",
              budget: 20,
              clicks: 50,
              impressions: 270,
              ctr: 18.52,
              cpc: 10.49,
              cost: 47,
            },
            {
              date: "2024-04-07",
              budget: 20,
              clicks: 40,
              impressions: 200,
              ctr: 20.0,
              cpc: 7.32,
              cost: 210,
            },
            {
              date: "2024-04-08",
              budget: 20,
              clicks: 55,
              impressions: 300,
              ctr: 18.33,
              cpc: 9.85,
              cost: 120,
            },
          ] }
          config={ {
            budget: {
              label: "Budget Per Day",
              color: "hsl(var(--chart-1))",
              isTab: false,
              type: 'average',
              displayAs: 'currency',
              infoCard: 'How much you spend per day on this campaign'
            },
            clicks: {
              label: "Clicks",
              color: "hsl(var(--chart-2))",
              isTab: true,
              type: 'total',
              displayAs: 'number',
              infoCard: 'The number of times your ad was clicked'
            },
            impressions: {
              label: "Impressions",
              color: "hsl(var(--chart-3))",
              isTab: true,
              type: 'total',
              displayAs: 'number',
              infoCard: 'The number of times your ad was shown'
            },
            ctr: {
              label: "CTR",
              color: "hsl(var(--chart-4))",
              isTab: true,
              type: 'average',
              displayAs: 'number',
              infoCard: 'The percentage of people who saw your ad and clicked on it'
            },
            cpc: {
              label: "Avg CPC",
              color: "hsl(var(--chart-5))",
              isTab: true,
              type: 'average',
              displayAs: 'number',
              infoCard: 'The average amount you pay each time someone clicks on your ad'
            },
            cost: {
              label: "Cost",
              color: "hsl(var(--chart-1))",
              isTab: true,
              type: 'total',
              displayAs: 'currency',
              infoCard: 'The total amount you spent on this campaign'
            }
          } }
          title={
            <div className='flex items-center justify-between'>
              {
                dropdownItems.map(item => item.checked && item.label)
              }
              <div className='flex items-center gap-5'>
                <p className='text-sm text-slate-600'>Campaigns</p>
                <DropdownMenuCheckboxes
                  trigger={ <EllipsisVerticalIcon className='w-6 h-6' /> }
                  dropdownLabel='Campaigns'
                  dropdownItems={ dropdownItems }
                />
              </div>
            </div>
          }
          description="Campaign Performance"
          defaultActiveChart='Clicks'
        />
      </div>

      <div className="rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="flex flex-col col-span-1">
          <CardHeader className='flex flex-row items-center justify-between'>
            <div>
              <CardTitle>Local SEO</CardTitle>
              <CardDescription>myautorepair.com</CardDescription>
            </div>
            <InfoHover
              content={
                <p className='text-xs'>
                  These are the top search terms your website is ranking for in your local area. This means potential customers searching for these terms are more likely to find your business online—helping you attract more leads and grow your reach!
                </p>
              }
            />
          </CardHeader>
          <CardContent>
            <DynamicTable
              data={ [
                {
                  id: "a8df2qwx",
                  searchTerm: "react hooks",
                  rank: 12,
                  localSV: 5432
                },
                {
                  id: "b7gh3klt",
                  searchTerm: "css grid tutorial",
                  rank: "8th",
                  localSV: 8765
                },
                {
                  id: "c6jk9zop",
                  searchTerm: "javascript array methods",
                  rank: 45,
                  localSV: 2341
                },
                {
                  id: "d9ml5xqs",
                  searchTerm: "typescript vs javascript",
                  rank: "22nd",
                  localSV: 6723
                },
                {
                  id: "e4vn8prt",
                  searchTerm: "node.js performance",
                  rank: 3,
                  localSV: 9801
                },
                {
                  id: "f2pl6wzy",
                  searchTerm: "express middleware",
                  rank: "15th",
                  localSV: 4567
                },
                {
                  id: "g5kj7vql",
                  searchTerm: "tailwind css guide",
                  rank: 29,
                  localSV: 3489
                },
                {
                  id: "h3xr9zlk",
                  searchTerm: "frontend development",
                  rank: "5th",
                  localSV: 7621
                },
                {
                  id: "i1zn4bqy",
                  searchTerm: "mongodb queries",
                  rank: 10,
                  localSV: 8123
                },
                {
                  id: "j6pk3vfw",
                  searchTerm: "next.js routing",
                  rank: "19th",
                  localSV: 4290
                }
              ] }
            />
          </CardContent>
        </Card>
        <div className='col-span-1 flex flex-col gap-4'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
              <div>
                <CardTitle>Call Statistics</CardTitle>
                <CardDescription>
                  July 2024 - August 2024
                </CardDescription>
              </div>
              <InfoHover
                content={
                  <p className='text-xs'>
                    Keep track of your calls at a glance! Understanding how many calls your business received, how many were answered, and how many were from first-time callers can help you improve customer engagement and never miss an important opportunity.
                  </p>
                }
              />
            </CardHeader>
            <CardContent>
              <BarChartVertical
                className='min-h-12 max-h-56 w-full'
                data={ [
                  { label: "Missed", value: 186 },
                  { label: "Answered", value: 305 },
                  { label: "First Time Calls", value: 237 },
                ] }
                config={ {
                  title: "Call Statistics",
                  description: "A breakdown of call types and their frequencies",
                  colors: {
                    Missed: "hsl(var(--chart-1))",
                    Answered: "hsl(var(--chart-2))",
                    "First Time Calls": "hsl(var(--chart-3))"
                  }
                } }
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
              <div>
                <CardTitle>Calls</CardTitle>
                <CardDescription>
                  July 2024 - August 2024
                </CardDescription>
              </div>
              <InfoHover
                content={
                  <p className='text-xs'>
                    See how many calls your business received. This data can help you understand when your business is busiest and when you may need to adjust staffing or hours to accommodate more customers.
                  </p>
                }
              />
            </CardHeader>
            <CardContent>
              <LineChartStep
                className='min-h-12 max-h-56 w-full'
                data={ [
                  { month: "January", calls: 186 },
                  { month: "February", calls: 305 },
                  { month: "March", calls: 237 },
                  { month: "April", calls: 73 },
                  { month: "May", calls: 209 },
                  { month: "June", calls: 214 },
                ] }
                config={ {
                  calls: {
                    label: "Calls",
                    color: "hsl(var(--chart-1))",
                  },
                } }
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default OverviewPage