import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './theme-toggle'
import { Button } from './ui/button'
import HeaderDropdown from './Header-dropdown'
import MobileDropdown from './Mobile-Dropdown'
import {motion} from 'framer-motion'

const Header = async () => {
  const session = await auth()
  // console.log(session)
  return (
    <>
    {/* <motion.div animate={{
    transition: {duration: 2  }
    }}> */}
      <header className="flex gap-x-4 justify-evenly px-10 md:px-20 py-5 min-w-full">
          <Link href={'/'}>
            <Image src={'/logo.png'} alt='logo' width={250} height={150} className="rounded-md"/>
          </Link>
        <nav className='lg:flex justify-evenly items-center gap-x-5 md:grid md:grid-cols-2 text-center hidden'>
          <HeaderDropdown />
          {/* <Link href={'/energy'}>
            <button type='submit' className='button-util'>ENERGY ANALYTICS</button>
          </Link> */}
          <Link href={'/contact'}>
            <button type='submit' className='button-util'>CONTACT US</button>
          </Link>
          {
            session && session?.user ?  (
              <form action={async ()=>{
                "use server"
                await signOut()
              }}>
                <button type='submit' className='button-util'>LOGOUT</button>
              </form>
            ) : (
              <form action={async ()=>{
                "use server"
                const response  = await signIn('github');
              }
              }>
                <button type='submit' className='button-util'>LOGIN</button>
              </form>
            ) 
          }
        {/* <ModeToggle /> */}
        </nav>
        <div className='md:hidden flex items-center'>
            <MobileDropdown/>
          </div>

      </header>
            {/* </motion.div> */}
    </>
  )
}

export default Header