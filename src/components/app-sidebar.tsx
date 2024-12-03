"use client"

import { FormEvent, useState } from 'react'
import
{
  WarehouseIcon,
} from "lucide-react"

import { sidebar as data } from '@/data/links'

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import
{
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'



export function AppSidebar ({ ...props }: React.ComponentProps<typeof Sidebar>)
{
  const [ campaign, setCampaign ] = useState('Jesse\'s Garage')
  return (
    <Sidebar variant="inset" { ...props }>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className='hover:bg-transparent'>
              <div>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <WarehouseIcon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Hatanaka Shops</span>
                  <Select
                    value={ campaign }
                    onValueChange={ (e) => setCampaign(e) }
                  >
                    <SelectTrigger
                      className='flex h-5 w-full items-center justify-between rounded-none border border-transparent bg-transparent px-0 py-0 text-sm ring-offset-transparent placeholder:text-transparent focus:outline-none focus:ring-0 focus:ring-transparent focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-none'
                    >
                      <SelectValue>
                        { campaign }
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Jesse's Garage">Jesse's Garage</SelectItem>
                      <SelectItem value="Jim Taylor">Jim Taylor</SelectItem>
                      <SelectItem value="Speed Auto">Speed Auto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavSecondary items={ data.dashboard } className="mt-0" />
        <NavMain items={ data.nav1.items } title={ data.nav1.title } />
        <NavMain items={ data.nav2.items } title={ data.nav2.title } />
        <NavMain items={ data.nav3.items } title={ data.nav3.title } />
        <NavMain items={ data.lnm.items } title={ data.lnm.title } />
        {/* <NavProjects projects={ data.projects } /> */ }
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={ data.user } items={ data.navSecondary } />
      </SidebarFooter>
    </Sidebar>
  )
}
