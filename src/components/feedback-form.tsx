"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from 'lucide-react'

const formSchema = z.object({
  overallSatisfaction: z.number().min(1).max(5),
  likeMost: z.string().min(1, "Please provide what you like most"),
  dislikeMost: z.string().min(1, "Please provide what you dislike most"),
  easeOfUse: z.enum([ "veryEasy", "easy", "neutral", "difficult", "veryDifficult" ]),
  difficulties: z.string().optional(),
  improvementSuggestions: z.string().optional(),
  featureSuggestions: z.string().optional(),
  unnecessaryFeatures: z.string().optional(),
  featureUsage: z.object({
    feature1: z.enum([ "daily", "weekly", "monthly", "rarely", "never" ]),
    feature2: z.enum([ "daily", "weekly", "monthly", "rarely", "never" ]),
    feature3: z.enum([ "daily", "weekly", "monthly", "rarely", "never" ]),
  }),
  bugsExperienced: z.boolean(),
  bugDescription: z.string().optional(),
  bugFrequency: z.enum([ "rarely", "sometimes", "often", "always" ]).optional(),
  performanceSatisfaction: z.number().min(1).max(5),
  performanceIssues: z.string().optional(),
  performanceImprovements: z.string().optional(),
  contactedSupport: z.boolean(),
  supportHelpfulness: z.number().min(1).max(5).optional(),
  additionalResources: z.string().optional(),
  // recommendation: z.number().min(0).max(5),
  // recommendationReason: z.string().min(1, "Please provide a reason for your recommendation score"),
  role: z.enum([ "manager", "employee", "other" ]),
  usageFrequency: z.enum([ "daily", "weekly", "monthly", "rarely" ])
})

const StarRating = React.forwardRef<HTMLDivElement, { value: number; onChange: (value: number) => void }>(
  ({ value, onChange }, ref) =>
  {
    return (
      <div ref={ ref } className="flex space-x-1">
        { [ 1, 2, 3, 4, 5 ].map((star) => (
          <Star
            key={ star }
            className={ `w-6 h-6 cursor-pointer ${ star <= value ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }` }
            onClick={ () => onChange(star) }
          />
        )) }
      </div>
    )
  }
)
StarRating.displayName = "StarRating"

export default function FeedbackForm ()
{
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      overallSatisfaction: 3,
      easeOfUse: "neutral",
      featureUsage: {
        feature1: "rarely",
        feature2: "rarely",
        feature3: "rarely",
      },
      bugsExperienced: false,
      performanceSatisfaction: 3,
      contactedSupport: false,
      // recommendation: 3,
      role: "employee",
      usageFrequency: "weekly",
    },
  })

  function onSubmit (values: z.infer<typeof formSchema>)
  {
    console.log(values)
    // Here you would typically send this data to your backend
  }

  return (
    <Form { ...form }>
      <form onSubmit={ form.handleSubmit(onSubmit) } className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Help Us Improve</CardTitle>
            <CardDescription>We value your input to improve our software.</CardDescription>
            <CardDescription className="mt-2">
              Fields marked with a red <span className="text-red-500">*</span> are required.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Overall Satisfaction */ }
            <FormField
              control={ form.control }
              name="overallSatisfaction"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>How would you rate your overall experience with the software? (1-5) <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <StarRating value={ field.value } onChange={ field.onChange } />
                  </FormControl>
                  <FormDescription>1 = Poor, 5 = Excellent</FormDescription>
                  <FormMessage />
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="likeMost"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>What do you like most about the software? <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="dislikeMost"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>What do you dislike the most? <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />

            {/* Ease of Use */ }
            <FormField
              control={ form.control }
              name="easeOfUse"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>How easy is it to navigate and use the software?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={ field.onChange }
                      defaultValue={ field.value }
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="veryEasy" />
                        </FormControl>
                        <FormLabel className="font-normal">Very Easy</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="easy" />
                        </FormControl>
                        <FormLabel className="font-normal">Easy</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="neutral" />
                        </FormControl>
                        <FormLabel className="font-normal">Neutral</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="difficult" />
                        </FormControl>
                        <FormLabel className="font-normal">Difficult</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="veryDifficult" />
                        </FormControl>
                        <FormLabel className="font-normal">Very Difficult</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="difficulties"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>Did you encounter any difficulties in learning or using specific features?</FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="improvementSuggestions"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>What could make the software easier to use?</FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />

            {/* Feature Suggestions */ }
            <FormField
              control={ form.control }
              name="featureSuggestions"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>Are there any features you would like to see added?</FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="unnecessaryFeatures"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>Do you find any current features unnecessary or redundant?</FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="featureUsage"
              render={ () => (
                <FormItem>
                  <FormLabel>How often do you use specific features?</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      { [ "Website Performance", "Competitor Analysis", "Customer Demographics" ].map((feature) => (
                        <FormField
                          key={ feature }
                          control={ form.control }
                          name={ `featureUsage.${ feature }` as "featureUsage.feature1" | "featureUsage.feature2" | "featureUsage.feature3" }
                          render={ ({ field }) => (
                            <FormItem>
                              <FormLabel>{ `${ feature.charAt(0).toUpperCase() + feature.slice(1) }` }</FormLabel>
                              <Select onValueChange={ field.onChange } defaultValue={ field.value }>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select frequency" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="daily">Daily</SelectItem>
                                  <SelectItem value="weekly">Weekly</SelectItem>
                                  <SelectItem value="monthly">Monthly</SelectItem>
                                  <SelectItem value="rarely">Rarely</SelectItem>
                                  <SelectItem value="never">Never</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          ) }
                        />
                      )) }
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />

            {/* Bugs and Problems */ }
            <FormField
              control={ form.control }
              name="bugsExperienced"
              render={ ({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Did you experience any bugs or issues?</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={ field.value }
                      onCheckedChange={ field.onChange }
                    />
                  </FormControl>
                </FormItem>
              ) }
            />
            { form.watch("bugsExperienced") && (
              <>
                <FormField
                  control={ form.control }
                  name="bugDescription"
                  render={ ({ field }) => (
                    <FormItem>
                      <FormLabel>Please describe the problem and its impact on your work.</FormLabel>
                      <FormControl>
                        <Textarea { ...field } />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
                <FormField
                  control={ form.control }
                  name="bugFrequency"
                  render={ ({ field }) => (
                    <FormItem>
                      <FormLabel>How often does this issue occur?</FormLabel>
                      <Select onValueChange={ field.onChange } defaultValue={ field.value }>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="rarely">Rarely</SelectItem>
                          <SelectItem value="sometimes">Sometimes</SelectItem>
                          <SelectItem value="often">Often</SelectItem>
                          <SelectItem value="always">Always</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  ) }
                />
              </>
            ) }

            {/* Performance */ }
            <FormField
              control={ form.control }
              name="performanceSatisfaction"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>How satisfied are you with the software's speed and reliability? (1-5) <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <StarRating value={ field.value } onChange={ field.onChange } />
                  </FormControl>
                  <FormDescription>1 = Very Unsatisfied, 5 = Very Satisfied</FormDescription>
                  <FormMessage />
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="performanceIssues"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>Have you experienced crashes, slow performance, or downtime?</FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="performanceImprovements"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>What improvements can be made to enhance performance?</FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />

            {/* Support and Documentation */ }
            <FormField
              control={ form.control }
              name="contactedSupport"
              render={ ({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Have you contacted customer support?</FormLabel>
                  </div>
                  <FormControl>
                    <Switch
                      checked={ field.value }
                      onCheckedChange={ field.onChange }
                    />
                  </FormControl>
                </FormItem>
              ) }
            />
            { form.watch("contactedSupport") && (
              <FormField
                control={ form.control }
                name="supportHelpfulness"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>How helpful do you find the customer support team? (1-5)</FormLabel>
                    <FormControl>
                      <StarRating value={ field.value || 0 } onChange={ field.onChange } />
                    </FormControl>
                    <FormDescription>1 = Not Helpful, 5 = Very Helpful</FormDescription>
                    <FormMessage />
                  </FormItem>
                ) }
              />
            ) }
            <FormField
              control={ form.control }
              name="additionalResources"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>What additional resources would you find useful (e.g., video tutorials, FAQs)?</FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            />

            {/* Use Cases and Impact */ }
            {/* <FormField
              control={ form.control }
              name="recommendation"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>How likely are you to recommend this software to others? (1-5) <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <StarRating value={ field.value } onChange={ field.onChange } />
                  </FormControl>
                  <FormDescription>1 = Not at all likely, 5 = Extremely likely</FormDescription>
                  <FormMessage />
                </FormItem>
              ) }
            /> */}
            {/* <FormField
              control={ form.control }
              name="recommendationReason"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>Why would you (or wouldn't you) recommend this software? <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea { ...field } />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              ) }
            /> */}

            {/* User Demographics */ }
            <FormField
              control={ form.control }
              name="role"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>What is your role in your organization? <span className="text-red-500">*</span></FormLabel>
                  <Select onValueChange={ field.onChange } defaultValue={ field.value }>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="employee">Employee</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="customer-service">Customer Service</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="administrative">Administrative</SelectItem>
                      <SelectItem value="owner">Owner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              ) }
            />
            <FormField
              control={ form.control }
              name="usageFrequency"
              render={ ({ field }) => (
                <FormItem>
                  <FormLabel>How often do you use the software? <span className="text-red-500">*</span></FormLabel>
                  <Select onValueChange={ field.onChange } defaultValue={ field.value }>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select usage frequency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="rarely">Rarely</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              ) }
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit Feedback</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}

