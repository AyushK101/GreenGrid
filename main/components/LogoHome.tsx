import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const LogoHome = () => {
  return (
    <div className='my-2 mx-2  absolute backdrop-blur-sm rounded-lg '>
      <Link href={'/'}>
            <Image src={'/logo.png'} alt='logo' width={250} height={150} className="rounded-md w-auto h-auto"/>
          </Link>
    </div>
  )
}

export default LogoHome