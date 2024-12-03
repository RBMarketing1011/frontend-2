'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
  { keyword: "SEO Tools", competitor: "Competitor A", rank: 3 },
  { keyword: "Digital Marketing", competitor: "Competitor B", rank: 5 },
  { keyword: "Content Strategy", competitor: "Competitor C", rank: 2 },
  { keyword: "Social Media Analytics", competitor: "Competitor A", rank: 1 },
  { keyword: "Email Marketing", competitor: "Competitor B", rank: 4 },
]

export function KeywordGap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Keyword Gap</CardTitle>
        <CardDescription>Competitor rankings for keywords you don't rank for</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Keyword</TableHead>
              <TableHead>Competitor</TableHead>
              <TableHead>Rank</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.keyword}>
                <TableCell>{item.keyword}</TableCell>
                <TableCell>{item.competitor}</TableCell>
                <TableCell>{item.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

