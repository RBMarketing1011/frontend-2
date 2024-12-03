"use client"

import React, { useMemo } from 'react'
import
{
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DynamicTableProps
{
  data: Record<string, any>[]
  caption?: string
}

export function DynamicTable ({ data, caption }: DynamicTableProps)
{
  const columns = useMemo(() =>
  {
    if (data.length === 0) return []
    return Object.keys(data[ 0 ]).filter(key => key !== 'id')
  }, [ data ])

  const rows = useMemo(() =>
  {
    return data.map((item) => ({
      id: item.id,
      cells: columns.map((column) => item[ column ])
    }))
  }, [ data, columns ])

  if (data.length === 0)
  {
    return <p>No data available</p>
  }

  return (
    <div className="rounded-md border">
      <Table>
        { caption && <caption className="mb-2 text-sm text-muted-foreground">{ caption }</caption> }
        <TableHeader>
          <TableRow>
            { columns.map((column) => (
              <TableHead key={ column } className="font-medium">
                { column.charAt(0).toUpperCase() + column.slice(1) }
              </TableHead>
            )) }
          </TableRow>
        </TableHeader>
        <TableBody>
          { rows.map((row) => (
            <TableRow key={ row.id }>
              { row.cells.map((cell, cellIndex) => (
                <TableCell key={ cellIndex }>{ cell }</TableCell>
              )) }
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </div>
  )
}

