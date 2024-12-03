"use client"

import * as React from "react"
import
{
  format,
  addDays,
  subDays,
  startOfYear,
  subMonths
} from 'date-fns'
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import
{
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import
{
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function DateRangePicker ({
  className,
}: React.HTMLAttributes<HTMLDivElement>)
{
  // Set default range as "Last 30 Days"
  const defaultFromDate = subDays(new Date(), 30)
  const defaultToDate = new Date()

  const [ date, setDate ] = React.useState<DateRange | undefined>({
    from: defaultFromDate,
    to: defaultToDate,
  })

  const [ rangeLabel, setRangeLabel ] = React.useState<string>("Last 30 Days")

  const handleRangeSelect = (range: any) =>
  {
    let fromDate
    let toDate = new Date()

    switch (range)
    {
      case 'Today':
        fromDate = toDate
        setRangeLabel('Today')
        break
      case 'Last Week':
        fromDate = subDays(toDate, 7)
        setRangeLabel('Last Week')
        break
      case 'Last 30 Days':
        fromDate = subDays(toDate, 30)
        setRangeLabel('Last 30 Days')
        break
      case 'Last 60 Days':
        fromDate = subDays(toDate, 60)
        setRangeLabel('Last 60 Days')
        break
      case 'Last 90 Days':
        fromDate = subDays(toDate, 90)
        setRangeLabel('Last 90 Days')
        break
      case 'Last 6 Months':
        fromDate = subMonths(toDate, 6)
        setRangeLabel('Last 6 Months')
        break
      case 'Year To Date':
        fromDate = startOfYear(toDate)
        setRangeLabel('Year To Date')
        break
      default:
        fromDate = toDate
        setRangeLabel('Custom Range')
    }

    setDate({
      from: fromDate,
      to: toDate,
    })
  }

  return (
    <div className={ cn("grid gap-2", className) }>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={ "outline" }
            className={ cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            ) }
          >
            <CalendarIcon />
            { date?.from ? (
              date.to ? (
                <>
                  { format(date.from, "LLL dd, y") } -{ " " }
                  { format(date.to, "LLL dd, y") }
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            ) }
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <div className='flex itemsw-center justify-between gap-10 p-4'>
            <Select value={ rangeLabel } onValueChange={ handleRangeSelect }>
              <SelectTrigger>
                <SelectValue>{ rangeLabel }</SelectValue> {/* Show the range label */ }
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Today">Today</SelectItem>
                <SelectItem value="Last Week">Last Week</SelectItem>
                <SelectItem value="Last 30 Days">Last 30 Days</SelectItem>
                <SelectItem value="Last 60 Days">Last 60 Days</SelectItem>
                <SelectItem value="Last 90 Days">Last 90 Days</SelectItem>
                <SelectItem value="Last 6 Months">Last 6 Months</SelectItem>
                <SelectItem value="Year To Date">Year To Date</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              onClick={ () => setDate(undefined) }
            >
              Clear
            </Button>
          </div>
          <Calendar
            initialFocus
            mode="range"
            selected={ date }
            onSelect={ setDate }
            numberOfMonths={ 2 }
          />
          <div className='w-full flex justify-end p-4'>
            <Button
              variant="secondary"
              onClick={ () => alert(JSON.stringify(date)) }
            >
              Update
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
