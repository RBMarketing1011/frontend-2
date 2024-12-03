'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

const data = [
  { group: 'Group 1', clicks: 300, impressions: 3000, ctr: 10, avgCpc: 0.5, cost: 150 },
  { group: 'Group 2', clicks: 400, impressions: 4000, ctr: 10, avgCpc: 0.55, cost: 220 },
  { group: 'Group 3', clicks: 350, impressions: 3500, ctr: 10, avgCpc: 0.52, cost: 182 },
  { group: 'Group 4', clicks: 450, impressions: 4500, ctr: 10, avgCpc: 0.54, cost: 243 },
  { group: 'Group 5', clicks: 500, impressions: 5000, ctr: 10, avgCpc: 0.56, cost: 280 },
  { group: 'Group 6', clicks: 375, impressions: 3800, ctr: 9.87, avgCpc: 0.49, cost: 184 },
  { group: 'Group 7', clicks: 420, impressions: 3900, ctr: 10.77, avgCpc: 0.57, cost: 239 },
  { group: 'Group 8', clicks: 310, impressions: 3100, ctr: 10, avgCpc: 0.48, cost: 149 },
  { group: 'Group 9', clicks: 600, impressions: 6500, ctr: 9.23, avgCpc: 0.6, cost: 360 },
  { group: 'Group 10', clicks: 280, impressions: 3500, ctr: 8, avgCpc: 0.42, cost: 118 },
  { group: 'Group 11', clicks: 520, impressions: 4800, ctr: 10.83, avgCpc: 0.59, cost: 306 },
  { group: 'Group 12', clicks: 430, impressions: 4700, ctr: 9.15, avgCpc: 0.5, cost: 215 },
  { group: 'Group 13', clicks: 700, impressions: 7500, ctr: 9.33, avgCpc: 0.62, cost: 434 },
  { group: 'Group 14', clicks: 370, impressions: 3600, ctr: 10.28, avgCpc: 0.52, cost: 192 },
  { group: 'Group 15', clicks: 450, impressions: 4100, ctr: 10.98, avgCpc: 0.53, cost: 238 },
  { group: 'Group 16', clicks: 250, impressions: 3200, ctr: 7.81, avgCpc: 0.4, cost: 100 },
  { group: 'Group 17', clicks: 480, impressions: 5000, ctr: 9.6, avgCpc: 0.57, cost: 274 },
  { group: 'Group 18', clicks: 540, impressions: 5100, ctr: 10.59, avgCpc: 0.56, cost: 302 },
  { group: 'Group 19', clicks: 380, impressions: 3700, ctr: 10.27, avgCpc: 0.51, cost: 194 },
  { group: 'Group 20', clicks: 600, impressions: 6100, ctr: 9.84, avgCpc: 0.58, cost: 348 }
]


function calculateTotals (data: any[])
{
  return data.reduce((acc, curr) =>
  {
    acc.clicks += curr.clicks
    acc.impressions += curr.impressions
    acc.cost += curr.cost
    return acc
  }, { clicks: 0, impressions: 0, cost: 0 })
}

export default function AdGroups ({ campaign }: { campaign: string })
{
  const totals = calculateTotals(data)

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <Table>
          <TableHeader className="w-full">
            <TableRow>
              <TableHead className='w-1/6'>Ad Group</TableHead>
              <TableHead className='w-1/6 -translate-x-1'>Clicks</TableHead>
              <TableHead className='w-1/6 -translate-x-1'>Impr.</TableHead>
              <TableHead className='w-1/6 -translate-x-2'>CTR</TableHead>
              <TableHead className='w-1/6 -translate-x-3'>Avg CPC</TableHead>
              <TableHead className='w-1/6 -translate-x-4'>Cost</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
        <div className="relative h-[250px] overflow-auto">
          <Table className="w-full">

            {/* Scrollable Table Body */ }
            <TableBody>
              { data.map((row, index) => (
                <TableRow key={ index }>
                  <TableCell className='w-1/6'>{ row.group }</TableCell>
                  <TableCell className='w-1/6'>{ row.clicks }</TableCell>
                  <TableCell className='w-1/6'>{ row.impressions }</TableCell>
                  <TableCell className='w-1/6'>{ row.ctr }%</TableCell>
                  <TableCell className='w-1/6'>${ row.avgCpc.toFixed(2) }</TableCell>
                  <TableCell className='w-1/6'>${ row.cost.toFixed(2) }</TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </div>
        <Table>
          <TableBody>
            <TableRow className="bg-muted/50">
              <TableCell className='w-1/6'>Totals</TableCell>
              <TableCell className='w-1/6 -translate-x-1'>{ totals.clicks }</TableCell>
              <TableCell className='w-1/6 -translate-x-1'>{ totals.impressions }</TableCell>
              <TableCell className='w-1/6 -translate-x-2'>
                { (totals.clicks / totals.impressions * 100).toFixed(2) }%
              </TableCell>
              <TableCell className='w-1/6 -translate-x-3'>${ (totals.cost / totals.clicks).toFixed(2) }</TableCell>
              <TableCell className='w-1/6 -translate-x-4'>${ totals.cost.toFixed(2) }</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

