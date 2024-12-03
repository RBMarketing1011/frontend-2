"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from 'lucide-react'
import { CallDetailsDrawer } from "./call-details-drawer"

type Call = {
  id: string
  date: Date
  name: string
  number: string
  source: string
  answered: boolean
  firstTimeCall: boolean
}

const calls: Call[] = [
  { id: "1", date: new Date("2024-11-09T14:33:00"), name: "John Doe", number: "123-456-7890", source: "Website", answered: true, firstTimeCall: false },
  { id: "2", date: new Date("2024-11-10T10:15:00"), name: "Jane Smith", number: "987-654-3210", source: "Google Ads", answered: false, firstTimeCall: true },
  { id: "3", date: new Date("2024-11-11T16:45:00"), name: "Bob Johnson", number: "456-789-0123", source: "Referral", answered: true, firstTimeCall: true },
  { id: "4", date: new Date("2024-11-12T09:20:00"), name: "Alice Brown", number: "789-012-3456", source: "Website", answered: true, firstTimeCall: false },
  { id: "5", date: new Date("2024-11-13T11:55:00"), name: "Charlie Davis", number: "234-567-8901", source: "Google Ads", answered: false, firstTimeCall: true },
  { id: "6", date: new Date("2024-11-14T13:10:00"), name: "Eva Wilson", number: "567-890-1234", source: "Referral", answered: true, firstTimeCall: false },
  { id: "7", date: new Date("2024-11-15T15:30:00"), name: "Frank Miller", number: "890-123-4567", source: "Website", answered: true, firstTimeCall: true },
  { id: "8", date: new Date("2024-11-16T17:45:00"), name: "Grace Taylor", number: "345-678-9012", source: "Google Ads", answered: false, firstTimeCall: false },
  { id: "9", date: new Date("2024-11-17T08:05:00"), name: "Henry Clark", number: "678-901-2345", source: "Referral", answered: true, firstTimeCall: true },
  { id: "10", date: new Date("2024-11-18T10:25:00"), name: "Ivy Anderson", number: "901-234-5678", source: "Website", answered: true, firstTimeCall: false },
  { id: "11", date: new Date("2024-11-19T12:40:00"), name: "Jack White", number: "432-109-8765", source: "Google Ads", answered: false, firstTimeCall: true },
  { id: "12", date: new Date("2024-11-20T14:55:00"), name: "Karen Lee", number: "765-432-1098", source: "Referral", answered: true, firstTimeCall: false },
  { id: "13", date: new Date("2024-11-21T16:15:00"), name: "Liam Harris", number: "098-765-4321", source: "Website", answered: true, firstTimeCall: true },
  { id: "14", date: new Date("2024-11-22T18:30:00"), name: "Mia Robinson", number: "321-098-7654", source: "Google Ads", answered: false, firstTimeCall: false },
  { id: "15", date: new Date("2024-11-23T09:50:00"), name: "Noah Martin", number: "654-321-0987", source: "Referral", answered: true, firstTimeCall: true },
  { id: "16", date: new Date("2024-11-24T11:05:00"), name: "Olivia King", number: "987-654-3210", source: "Website", answered: true, firstTimeCall: false },
  { id: "17", date: new Date("2024-11-25T13:20:00"), name: "Peter Scott", number: "210-987-6543", source: "Google Ads", answered: false, firstTimeCall: true },
  { id: "18", date: new Date("2024-11-26T15:35:00"), name: "Quinn Adams", number: "543-210-9876", source: "Referral", answered: true, firstTimeCall: false },
  { id: "19", date: new Date("2024-11-27T17:50:00"), name: "Rachel Green", number: "876-543-2109", source: "Website", answered: true, firstTimeCall: true },
  { id: "20", date: new Date("2024-11-28T08:10:00"), name: "Sam Turner", number: "109-876-5432", source: "Google Ads", answered: false, firstTimeCall: false },
  { id: "21", date: new Date("2024-11-29T10:25:00"), name: "Tina Foster", number: "432-109-8765", source: "Referral", answered: true, firstTimeCall: true },
  { id: "22", date: new Date("2024-11-30T12:40:00"), name: "Ulysses Gray", number: "765-432-1098", source: "Website", answered: true, firstTimeCall: false },
  { id: "23", date: new Date("2024-12-01T14:55:00"), name: "Victoria Hall", number: "098-765-4321", source: "Google Ads", answered: false, firstTimeCall: true },
  { id: "24", date: new Date("2024-12-02T16:15:00"), name: "William Baker", number: "321-098-7654", source: "Referral", answered: true, firstTimeCall: false },
  { id: "25", date: new Date("2024-12-03T18:30:00"), name: "Xena Carter", number: "654-321-0987", source: "Website", answered: true, firstTimeCall: true },
]

type SortColumn = 'date' | 'name' | 'answered' | 'firstTimeCall';
type SortOrder = 'asc' | 'desc';

export function CallsTable() {
  const [sortColumn, setSortColumn] = useState<SortColumn>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [selectedCall, setSelectedCall] = useState<Call | null>(null);

  const sortedCalls = [...calls].sort((a, b) => {
    if (sortColumn === 'date') {
      return sortOrder === 'asc' ? a.date.getTime() - b.date.getTime() : b.date.getTime() - a.date.getTime();
    } else if (sortColumn === 'name') {
      return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortColumn === 'answered') {
      return sortOrder === 'asc' ? (a.answered ? 1 : -1) : (b.answered ? 1 : -1);
    } else if (sortColumn === 'firstTimeCall') {
      return sortOrder === 'asc' ? (a.firstTimeCall ? 1 : -1) : (b.firstTimeCall ? 1 : -1);
    }
    return 0;
  });

  const toggleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  const formatPhoneNumber = (number: string) => {
    return number.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">
              <Button variant="ghost" onClick={() => toggleSort('date')}>
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort('name')}>
                Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>Number</TableHead>
            <TableHead>Listen</TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort('answered')}>
                Answered
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => toggleSort('firstTimeCall')}>
                First Time Call
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCalls.map((call) => (
            <TableRow key={call.id}>
              <TableCell>{formatDate(call.date)}</TableCell>
              <TableCell>{call.name}</TableCell>
              <TableCell>{formatPhoneNumber(call.number)}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => setSelectedCall(call)}>
                  Listen
                </Button>
              </TableCell>
              <TableCell>{call.answered ? "Yes" : "No"}</TableCell>
              <TableCell>{call.firstTimeCall ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CallDetailsDrawer call={selectedCall} onClose={() => setSelectedCall(null)} />
    </>
  )
}

