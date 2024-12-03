"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import
{
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps[ "checked" ]

type DropdownMenuCheckboxesType = {
  trigger: JSX.Element | string
  dropdownLabel: string
  dropdownItems: {
    label: string
    checked: Checked
    onCheckedChange: (checked: Checked) => void
    disabled?: boolean
  }[]
}

export function DropdownMenuCheckboxes (
  {
    trigger,
    dropdownLabel,
    dropdownItems
  }: DropdownMenuCheckboxesType
)
{

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          { trigger }
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          { dropdownLabel }
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        { dropdownItems.map((item, index) => (
          <DropdownMenuCheckboxItem
            key={ index }
            checked={ item.checked }
            onCheckedChange={ item.onCheckedChange }
            disabled={ item.disabled }
          >
            { item.label }
          </DropdownMenuCheckboxItem>
        )) }

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
