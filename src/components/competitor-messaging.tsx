'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const competitorMessages = [
  { competitor: "Competitor A", usps: [ "Affordable", "User-friendly", "24/7 Support" ] },
  { competitor: "Competitor B", usps: [ "Enterprise-grade", "AI-powered", "Customizable" ] },
  { competitor: "Competitor C", usps: [ "All-in-one solution", "Easy integration", "Free trial" ] },
]

export function CompetitorMessaging ()
{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Competitor Messaging</CardTitle>
        <CardDescription>Key themes and USPs in competitor marketing</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] space-y-4">
          { competitorMessages.map((item) => (
            <div key={ item.competitor } className="space-y-2">
              <h3 className="font-semibold">{ item.competitor }</h3>
              <div className="flex flex-wrap gap-2">
                { item.usps.map((usp) => (
                  <Badge key={ usp } variant="secondary">{ usp }</Badge>
                )) }
              </div>
            </div>
          )) }
        </div>
      </CardContent>
    </Card>
  )
}

