'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

const data = [
  { page: '/home', clicks: 500, impressions: 5000, ctr: 10, avgCpc: 0.5, cost: 250 },
  { page: '/products', clicks: 400, impressions: 4000, ctr: 10, avgCpc: 0.55, cost: 220 },
  { page: '/services', clicks: 300, impressions: 3000, ctr: 10, avgCpc: 0.52, cost: 156 },
  { page: '/about', clicks: 200, impressions: 2000, ctr: 10, avgCpc: 0.54, cost: 108 },
]

function calculateTotals(data: any[]) {
  return data.reduce((acc, curr) => {
    acc.clicks += curr.clicks;
    acc.impressions += curr.impressions;
    acc.cost += curr.cost;
    return acc;
  }, { clicks: 0, impressions: 0, cost: 0 });
}

export default function LandingPages({ campaign }: { campaign: string }) {
  const totals = calculateTotals(data);

  return (
    <Card className="w-full">
      <CardContent className="p-0">
        <div className="max-h-[300px] overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Landing Page</TableHead>
                <TableHead>Clicks</TableHead>
                <TableHead>Impressions</TableHead>
                <TableHead>CTR</TableHead>
                <TableHead>Avg CPC</TableHead>
                <TableHead>Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.page}</TableCell>
                  <TableCell>{row.clicks}</TableCell>
                  <TableCell>{row.impressions}</TableCell>
                  <TableCell>{row.ctr}%</TableCell>
                  <TableCell>${row.avgCpc.toFixed(2)}</TableCell>
                  <TableCell>${row.cost.toFixed(2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Table>
          <TableBody>
            <TableRow className="bg-muted/50">
              <TableCell>Totals</TableCell>
              <TableCell>{totals.clicks}</TableCell>
              <TableCell>{totals.impressions}</TableCell>
              <TableCell>{(totals.clicks / totals.impressions * 100).toFixed(2)}%</TableCell>
              <TableCell>${(totals.cost / totals.clicks).toFixed(2)}</TableCell>
              <TableCell>${totals.cost.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

