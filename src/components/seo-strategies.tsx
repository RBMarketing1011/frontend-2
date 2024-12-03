'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const seoStrategies = [
  { competitor: "Competitor A", strategies: ["Local SEO", "Voice Search Optimization", "Mobile-First Indexing"] },
  { competitor: "Competitor B", strategies: ["Content Clusters", "Schema Markup", "Link Building"] },
  { competitor: "Competitor C", strategies: ["Video SEO", "Featured Snippets Optimization", "Core Web Vitals"] },
]

export function SeoStrategies() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>SEO Strategies</CardTitle>
        <CardDescription>Areas of focus in competitors' search engine optimization efforts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {seoStrategies.map((item) => (
            <div key={item.competitor} className="space-y-2">
              <h3 className="font-semibold">{item.competitor}</h3>
              <div className="flex flex-wrap gap-2">
                {item.strategies.map((strategy) => (
                  <Badge key={strategy} variant="outline">{strategy}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

