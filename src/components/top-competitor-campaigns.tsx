'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const campaigns = [
  { competitor: "Competitor A", campaign: "Summer Sale Extravaganza", engagement: "High", roi: "250%" },
  { competitor: "Competitor B", campaign: "AI-Powered Solutions Launch", engagement: "Medium", roi: "180%" },
  { competitor: "Competitor C", campaign: "Customer Appreciation Month", engagement: "Very High", roi: "300%" },
  { competitor: "Competitor A", campaign: "Back-to-School Bundle", engagement: "Medium", roi: "150%" },
]

export function TopCompetitorCampaigns() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Competitor Campaigns</CardTitle>
        <CardDescription>Highlights of successful campaigns run by competitors</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Competitor</TableHead>
              <TableHead>Campaign</TableHead>
              <TableHead>Engagement</TableHead>
              <TableHead>ROI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign) => (
              <TableRow key={campaign.campaign}>
                <TableCell>{campaign.competitor}</TableCell>
                <TableCell>{campaign.campaign}</TableCell>
                <TableCell>{campaign.engagement}</TableCell>
                <TableCell>{campaign.roi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

