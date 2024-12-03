"use client"

import
{
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"

import
{
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import
{
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import
{
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { ThemeSwitcher } from './atom/theme/ThemeSwitcher'
import Link from 'next/link'

export function NavUser ({
  user,
  items
}: {
  user: {
    firstname: string
    lastname: string
    email: string
    avatar: string
  }
  items: { title: string, url: string, icon: React.ComponentType }[]
})
{
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={ user.avatar } alt={ user.firstname + ' ' + user.lastname } />
                <AvatarFallback className="rounded-lg">
                  { user.firstname.charAt(0)
                    +
                    user.lastname.charAt(0)
                  }
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  { user.firstname }{ ' ' }
                  { user.lastname }
                </span>
                <span className="truncate text-xs">{ user.email }</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-72 rounded-lg"
            side={ isMobile ? "bottom" : "right" }
            align="end"
            sideOffset={ 4 }
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={ user.avatar } alt={ user.firstname + ' ' + user.lastname } />
                  <AvatarFallback className="rounded-lg">
                    { user.firstname.charAt(0)
                      +
                      user.lastname.charAt(0)
                    }
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    { user.firstname }{ ' ' }
                    { user.lastname }
                  </span>
                  <span className="truncate text-xs">{ user.email }</span>
                </div>
                <ThemeSwitcher />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href='/ai-summary'>
                <DropdownMenuItem className='cursor-pointer'>
                  <Sparkles />
                  AI Summary
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>

              {
                items.map((item, index) => (
                  <Link key={ index } href={ item.url }>
                    <DropdownMenuItem className='cursor-pointer'>
                      <item.icon />
                      { item.title }
                    </DropdownMenuItem>
                  </Link>
                ))
              }

            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer'>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
