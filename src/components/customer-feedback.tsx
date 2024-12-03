'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const feedbackData = [
  { competitor: "Competitor A", strengths: [ "User-friendly interface", "Responsive customer support" ], weaknesses: [ "Limited features", "Higher pricing" ] },
  { competitor: "Competitor B", strengths: [ "Comprehensive toolset", "Regular updates" ], weaknesses: [ "Steep learning curve", "Occasional downtime" ] },
  { competitor: "Competitor C", strengths: [ "Affordable pricing", "Good integration options" ], weaknesses: [ "Basic reporting", "Lack of advanced features" ] },
]

export function CustomerFeedback ()
{
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Feedback</CardTitle>
        <CardDescription>Themes from competitor reviews highlighting strengths and weaknesses</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full">
          { feedbackData.map((item) => (
            <div key={ item.competitor } className="mb-6">
              <h3 className="font-semibold mb-2">{ item.competitor }</h3>
              <div className="space-y-2">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Strengths:</h4>
                  <ul className="list-disc pl-5">
                    { item.strengths.map((strength) => (
                      <li key={ strength }>{ strength }</li>
                    )) }
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Weaknesses:</h4>
                  <ul className="list-disc pl-5">
                    { item.weaknesses.map((weakness) => (
                      <li key={ weakness }>{ weakness }</li>
                    )) }
                  </ul>
                </div>
              </div>
            </div>
          )) }
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

