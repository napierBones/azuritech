import Image from 'next/image'
import React from 'react'

const Socials = () => {
  return (
  <div className='w-full flex items-center justify-center p-5 border-t'>
        <div className="w-[80%] flex justify-between items-center">
        <p>© deelly 2023 . All rights reserved.</p>
        <Image src="/social.png" alt="logo" width={100} height={50}/>
    </div>
  </div>
  )
}

export default Socials