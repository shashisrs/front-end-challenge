import React from 'react'

const CTAButton = ({children}) => {
  return (
    <div className='bg-[#0029FF] p-1 md:p-2 w-fit h-fit whitespace-nowrap flex items-center justify-center rounded-md cursor-pointer'>
      {children}
    </div>
  )
}

export default CTAButton