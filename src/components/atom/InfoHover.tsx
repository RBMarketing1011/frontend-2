import
{
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from '@/lib/utils'

import { InfoIcon } from 'lucide-react'
import { Button } from '../ui/button'

export default function InfoHover (
  {
    className,
    content,
    isButton = true
  }: {
    className?: string,
    content: string | JSX.Element,
    isButton?: boolean
  }
)
{
  return (
    <HoverCard>
      <HoverCardTrigger>
        {
          isButton
            ?
            <Button variant='ghost'>
              <InfoIcon size={ 16 } />
            </Button>
            : <InfoIcon size={ 16 } />
        }
      </HoverCardTrigger>
      <HoverCardContent className={ cn(className) }>
        { content }
      </HoverCardContent>
    </HoverCard>
  )
}