import React from 'react'

const ThreadTextArea = ({title}) => {
  return (
    <div>
        <div className='bg-[#0000000D] whitespace-nowrap rounded-t-lg text-xs md:text-base p-2'>{title}</div>
        <div className='border rounded-lg shadow-xl h-16'>
            <textarea className='w-full p-2 h-full text-sm appearance-none leading-tight resize-none' placeholder='Enter Text here'></textarea>
        </div>
    </div>
  )
}

export default ThreadTextArea