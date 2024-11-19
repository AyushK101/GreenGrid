import { auth, signIn, signOut } from '@/auth'
import React from 'react'
import { Button } from './ui/button'
import HeaderDropdown from './Header-dropdown'
import Link from 'next/link'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Menu } from 'lucide-react'
import AuthComponent from './AuthComponent'

const MobileDropdown = async () => {
  const session = await auth()
  return (
    <div>
      <nav className='lg:flex flex-col justify-evenly items-center gap-x-4 md:grid md:grid-cols-2 text-center '>
          <DropdownMenu>
            <DropdownMenuTrigger><Menu className="text-white" size={55} /></DropdownMenuTrigger>
            <DropdownMenuContent>
            ;
            <DropdownMenuItem className='min-w-full'>
                <Link href={'/energy'}>
                <Button type='submit' size={'dropdown'} >Energy Analytics</Button>
              </Link>
            </DropdownMenuItem>
            
            <DropdownMenuItem className='min-w-full'>
                <Link href={'/'}>
                <Button type='submit' className='min-w-full m-0' >Load Predictor</Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href={'/contact'}>
                <Button type='submit' size={'dropdown'} >Solar Calculator</Button>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href={'/contact'}>
                <Button type='submit' size={'dropdown'} className='min-w-full' >Contact Us</Button>
              </Link>
            </DropdownMenuItem>


           
            <DropdownMenuItem>
              <AuthComponent />
            </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>
          
         
          
        {/* <ModeToggle /> */}
        </nav>
    </div>
  )
}

export default MobileDropdown