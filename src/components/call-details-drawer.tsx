"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react'

type Call = {
  id: string
  date: Date
  name: string
  number: string
  source: string
  answered: boolean
  firstTimeCall: boolean
}

type CallDetailsDrawerProps = {
  call: Call | null
  onClose: () => void
}

export function CallDetailsDrawer ({ call, onClose }: CallDetailsDrawerProps)
{
  const [ note, setNote ] = useState("")
  const [ rating, setRating ] = useState(0)
  const [ isQualified, setIsQualified ] = useState<boolean | null>(null)

  const handleSave = () =>
  {
    // Here you would typically save the note, rating, and qualification status
    console.log("Saving call details:", { note, rating, isQualified })
    onClose()
  }

  if (!call) return null

  return (
    <Sheet open={ !!call } onOpenChange={ onClose }>
      <SheetContent
        side="right"
        className="w-[400px] sm:w-[540px] flex flex-col justify-between items-start"
      >
        <div className='w-full flex flex-col gap-3'>
          <SheetHeader>
            <SheetTitle>Call Details</SheetTitle>
            <SheetDescription>Listen to the call and add notes</SheetDescription>
          </SheetHeader>
          <div className="w-full py-4 space-y-4">
            <div>
              <strong>Date:</strong> { call.date.toLocaleString() }
            </div>
            <div>
              <strong>Name:</strong> { call.name }
            </div>
            <div>
              <strong>Source:</strong> { call.source }
            </div>
            <div>
              <strong>Number:</strong> { call.number }
            </div>
            <div className='w-full'>
              <strong>Listen to call:</strong>
              <audio controls className="w-full mt-2">
                <source src="/sample.mp3" type="audio/mp3" className='w-full' />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div>
              <strong>Notes:</strong>
              <Textarea
                placeholder="Add notes about the call here..."
                value={ note }
                onChange={ (e) => setNote(e.target.value) }
                className="mt-2"
                rows={ 6 }
              />
            </div>
            <div>
              <strong>Rating:</strong>
              <div className="flex mt-2 gap-1">
                { [ 1, 2, 3, 4, 5 ].map((star) => (
                  <Star
                    key={ star }
                    className={ `h-6 w-6 cursor-pointer ${ star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300" }` }
                    onClick={ () => setRating(star) }
                  />
                )) }
              </div>
            </div>
            <div>
              <strong>Qualified Call:</strong>
              <div className="flex mt-2 space-x-2">
                <Button
                  variant={ isQualified === true ? "default" : "outline" }
                  size="sm"
                  onClick={ () => setIsQualified(true) }
                >
                  <ThumbsUp className="h-4 w-4 mr-2" />
                  Yes
                </Button>
                <Button
                  variant={ isQualified === false ? "default" : "outline" }
                  size="sm"
                  onClick={ () => setIsQualified(false) }
                >
                  <ThumbsDown className="h-4 w-4 mr-2" />
                  No
                </Button>
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <Button onClick={ handleSave }>Save</Button>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

