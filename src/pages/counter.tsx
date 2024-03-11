import React, {useState} from 'react'
import { Button } from '@mui/material'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

type Props = {
  state: number
}

const Counter: React.FC<Props> = () => {

  const [state, setState] = useState(0)

  const handlePlus = () => {
      const increment = state + 1
      setState(increment)
  }

  const handleMinus = () => {
    const decrement = state - 1
    setState(decrement)
  }
  return (
    <div className='h-screen w-full flex justify-center items-center p-14'>
        <div className="border rounded-lg p-12 ">
          <h1 className='text-center text-xl mb-5'>Counter</h1>
          <div className=" h-32 w-full border mb-5 flex justify-center items-center">
              <h1 className='text-4xl font-semibold'>{state}</h1>
          </div>
          <div className="flex gap-4">
            <Button variant='contained' onClick={handlePlus}><FaPlus /></Button>
            <Button variant='contained' onClick={handleMinus}><FaMinus /></Button>            
          </div>

        </div>
    </div>
  )
}

export default Counter