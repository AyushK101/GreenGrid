import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'


const HeaderDropdown = () => {
  return (
    <div className="button-util bg-red-50">
      <div>
        <DropdownMenu >
          <DropdownMenuTrigger className='flex'>
            <ChevronDown/> DASHBOARD
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Services</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem >
                <Link href={'/predict'}>
                <button type='submit' className='min-w-full dropdown-button' >Load Predictor</button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href={'/contact'}>
                <button type='submit'    className='min-w-full dropdown-button'>Solar Calculator</button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem >
                <Link href={'/energy'}>
                <button type='submit'   className='min-w-full dropdown-button'>Solar Chatbot</button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default HeaderDropdown