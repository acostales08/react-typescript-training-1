import React from 'react'
import ParentComponent from '../components/parentComponent'

const ForCallback = () => {

  const handleClick = () => {
    alert("button clicked")
  }
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className="border rounded-lg p-16">
          <ParentComponent/>
        </div>
    </div>
  )
}

export default ForCallback