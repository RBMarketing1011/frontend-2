import
{
  BookUser,
  ChartNoAxesCombined,
  Headset,
  LayoutDashboard,
  MessageSquareText,
  PhoneCall,
  Search,
  Send,
  SquareActivity,
  TrendingUp,
  UserPen,
  UserPlus,
} from "lucide-react"

export const sidebar = {
  user: {
    firstname: "Anthony",
    lastname: 'Reynolds',
    email: "anthony@leadsnearme.com",
    avatar: "/avatars/shadcn.jpg",
  },
  dashboard: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: LayoutDashboard,
    }
  ],
  nav1: {
    title: "Performance & Analytics",
    items: [
      {
        title: "Ad Perfomance",
        url: "/ad-performance",
        icon: ChartNoAxesCombined,
      },
      {
        title: "SEO Insights",
        url: "/seo-insights",
        icon: Search,
      },
      {
        title: "Website Performance",
        url: "/website-performance",
        icon: SquareActivity,
      },
      {
        title: "Competitor Analysis",
        url: "/competitor-analysis",
        icon: TrendingUp,
      },
    ]
  },
  nav2: {
    title: "Lead & Call Tracking",
    items: [
      {
        title: "Call Tracking",
        url: "/call-tracking",
        icon: PhoneCall,
      },
      {
        title: "Lead Generation",
        url: "/lead-generation",
        icon: UserPlus,
      },
    ]
  },
  nav3: {
    title: "Customer Insights",
    items: [
      {
        title: "Customer Demographics",
        url: "/customer-demographics",
        icon: BookUser,
      },
      {
        title: "Customer Feedback",
        url: "/customer-feedback",
        icon: MessageSquareText,
      },
    ]
  },
  navSecondary: [
    {
      title: "Profile",
      url: "/profile",
      icon: UserPen,
    },
    {
      title: "Support",
      url: "/support",
      icon: Headset,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
  lnm: {
    title: "Leads Near Me",
    items: [
      {
        title: "KPI",
        url: "/kpi",
        icon: BookUser,
      },
      {
        title: "Users",
        url: "/users",
        icon: MessageSquareText,
      },
    ]
  }
}