'use client'

import { useState } from 'react'
import { Search, Mail, Phone } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import
{
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import
{
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQ
{
  category: string
  questions: {
    q: string
    a: string
  }[]
}

const faqData: FAQ[] = [
  {
    category: "Account & Billing",
    questions: [
      {
        q: "How do I create an account?",
        a: "To create an account, click the 'Sign Up' button on the homepage, and provide your business details. After registering, you'll be able to set up your reporting preferences and integrate your data sources."
      },
      {
        q: "Can I sign up for a free trial?",
        a: "Yes, we offer a 14-day free trial for new users. During this period, you'll have access to all features, including reporting and integrations with Google Ads, Analytics, and more."
      },
      {
        q: "How do I upgrade my subscription plan?",
        a: "To upgrade your subscription, go to 'Account Settings' and click on 'Billing.' Select your desired plan, then follow the instructions to complete the upgrade. You can upgrade or downgrade at any time based on your needs."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept major credit cards, PayPal, and ACH payments for billing. You can update your payment methods under the 'Billing' section in your account settings."
      },
      {
        q: "How do I manage multiple user access?",
        a: "You can add and manage users under the 'Team Management' section. Assign roles such as Admin, Manager, or Viewer to control access to specific features and data within the reporting platform."
      },
      {
        q: "What happens to my data if I cancel my account?",
        a: "If you cancel your account, your data will remain accessible for 30 days, during which you can download reports or export your data. After that period, your data will be permanently deleted, so please ensure you back up any important information."
      },
      {
        q: "Can I get a refund if I cancel my subscription?",
        a: "Refunds are provided on a case-by-case basis. Please contact support for assistance. We typically offer refunds within 30 days of the billing cycle if you are not satisfied with the service."
      }
    ]
  },
  {
    category: "Reports & Data Integrations",
    questions: [
      {
        q: "How do I integrate my Google Ads account?",
        a: "To integrate Google Ads, navigate to 'Integrations' in the settings, select 'Google Ads', and follow the prompts to authenticate your Google account. Once connected, we'll begin pulling in your campaign performance data for detailed reporting."
      },
      {
        q: "Can I connect multiple Google Analytics accounts?",
        a: "Yes, you can link multiple Google Analytics accounts to our platform. Each account will pull in data for the selected properties, allowing you to view traffic and conversion metrics for all your sites in one place."
      },
      {
        q: "How do I import my historical data from Google Ads?",
        a: "Once your Google Ads account is integrated, you can import up to 24 months of historical data. Go to 'Reports,' select 'PPC Performance,' and choose the time range for the report to include past data."
      },
      {
        q: "How do I link my CallRail account for call tracking?",
        a: "In the 'Integrations' section, select 'CallRail' and follow the prompts to connect your CallRail account. Once connected, we will import your call tracking data, including call volumes, source, and conversion rates."
      },
      {
        q: "Can I use custom data sources in my reports?",
        a: "Yes, you can connect custom data sources via API integrations or CSV uploads. Once the data is imported, you can include it in custom reports to track performance metrics specific to your business."
      },
      {
        q: "How often is my report data updated?",
        a: "Data is typically updated in real-time for most integrations like Google Analytics and Ads. However, some third-party tools may have a delay in syncing, so we recommend checking the refresh interval for each integration."
      }
    ]
  },
  {
    category: "Call Tracking & Lead Generation",
    questions: [
      {
        q: "How do I set up call tracking for my campaigns?",
        a: "To set up call tracking, go to 'Integrations,' select 'CallRail,' and follow the setup instructions. Once the tracking numbers are set up, you can associate them with specific campaigns, keywords, or pages to measure effectiveness."
      },
      {
        q: "Can I track phone calls by campaign source?",
        a: "Yes, using CallRail, you can track calls by campaign source. For example, you can track which ads, keywords, or landing pages generated phone calls, helping you optimize your campaigns."
      },
      {
        q: "How can I view lead source data?",
        a: "Lead source data can be found in the 'Lead Generation' section of your reports. You'll be able to see detailed breakdowns of where each lead came from—whether it's organic search, paid ads, social media, or email marketing."
      },
      {
        q: "What metrics can I track for leads?",
        a: "You can track several key metrics for leads, such as the number of leads, lead conversion rate, cost per lead (CPL), and the source or channel of each lead. These metrics help you evaluate the effectiveness of your lead generation efforts."
      },
      {
        q: "How do I optimize my lead conversion rates?",
        a: "To improve lead conversion rates, review the data in your 'Lead Generation' reports. Look for trends in successful campaigns, and experiment with different ad copy, landing pages, or follow-up strategies. Our platform also provides A/B testing features for optimization."
      },
      {
        q: "Can I track offline leads as well?",
        a: "Yes, you can manually input offline lead data into our system. This data can then be included in your reports alongside online lead data, giving you a complete view of all your lead generation efforts."
      }
    ]
  },
  {
    category: "Competitor & Market Analysis",
    questions: [
      {
        q: "How do I compare my performance to competitors?",
        a: "To compare your performance with competitors, integrate third-party SEO tools such as SEMrush or Ahrefs. These tools allow you to track keyword rankings, backlink profiles, and overall website performance, which you can use to benchmark your performance against competitors."
      },
      {
        q: "How can I track my competitors' PPC strategies?",
        a: "You can monitor competitors' PPC strategies by using the 'PPC Intelligence' tool in our platform. This pulls data from tools like SpyFu or SEMrush to help you identify competitor keywords, ad copy, and estimated ad spend."
      },
      {
        q: "Can I track competitors' social media performance?",
        a: "Yes, by integrating tools like Social Mention or Brandwatch, you can monitor competitors' social media activity. You'll be able to compare your engagement rates, follower growth, and content strategy against theirs."
      },
      {
        q: "How can I analyze competitors' keyword rankings?",
        a: "You can use integrations with SEMrush, Moz, or Nightwatch to track keyword rankings of your competitors. These tools give insights into which keywords are driving traffic to their sites and help you identify keyword opportunities."
      },
      {
        q: "Can I track market trends over time?",
        a: "Yes, our platform provides historical trend data on key metrics such as search volume, keyword rankings, and ad spend. You can track how these metrics have changed over time, giving you valuable insights into market shifts."
      }
    ]
  }
]


export default function CustomerSupportPage ()
{
  const [ searchQuery, setSearchQuery ] = useState<string>('')
  const [ selectedCategory, setSelectedCategory ] = useState<string>(faqData[ 0 ].category)
  const [ filteredQuestions, setFilteredQuestions ] = useState<{ q: string, a: string }[]>([])

  const handleSearch = (query: string) =>
  {
    setSearchQuery(query)
    const filtered = faqData.flatMap(category =>
      category.questions.filter(q =>
        q.q.toLowerCase().includes(query.toLowerCase()) ||
        q.a.toLowerCase().includes(query.toLowerCase())
      )
    )
    setFilteredQuestions(filtered)
  }

  return (
    <div className="flex flex-col w-full h-[89vh]">
      <header>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Customer Support
          </h1>
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for help..."
              className="pl-10 pr-4 py-2 w-full"
              value={ searchQuery }
              onChange={ (e) => handleSearch(e.target.value) }
            />
          </div>
        </div>
      </header>

      <div className="flex flex-1 h-full py-8">
        <nav className="w-64 h-[78vh] border-r mr-8 flex flex-col pr-8">
          { faqData.map((category) => (
            <Button
              key={ category.category }
              variant={ selectedCategory === category.category ? "secondary" : "ghost" }
              className="justify-start mb-2"
              onClick={ () => setSelectedCategory(category.category) }
            >
              { category.category }
            </Button>
          )) }
          <div className="mt-auto pt-4 space-y-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="w-full justify-start"
                  variant='ghost'
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Support</DialogTitle>
                  <DialogDescription>
                    Send an email to our support team. We'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="How can we help you?" rows={ 4 } />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Send Email</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <Button
              className="w-full justify-start"
              onClick={ () => window.location.href = 'tel:+1234567890' }
              variant='ghost'
            >
              <Phone className="mr-2 h-4 w-4" />
              Call Support
            </Button>
          </div>
        </nav>

        <main className="max-h-min flex-1">
          { searchQuery ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Search Results</h2>
              { filteredQuestions.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  { filteredQuestions.map((item, index) => (
                    <AccordionItem value={ `item-${ index }` } key={ index }>
                      <AccordionTrigger className="text-left">{ item.q }</AccordionTrigger>
                      <AccordionContent>{ item.a }</AccordionContent>
                    </AccordionItem>
                  )) }
                </Accordion>
              ) : (
                <p>No results found for "{ searchQuery }"</p>
              ) }
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4">{ selectedCategory }</h2>
              <Accordion type="single" collapsible className="w-full">
                { faqData.find(cat => cat.category === selectedCategory)?.questions.map((item, index) => (
                  <AccordionItem value={ `item-${ index }` } key={ index }>
                    <AccordionTrigger className="text-left">{ item.q }</AccordionTrigger>
                    <AccordionContent>{ item.a }</AccordionContent>
                  </AccordionItem>
                )) }
              </Accordion>
            </div>
          ) }
        </main>
      </div>
    </div>
  )
}
