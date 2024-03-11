import React from 'react'
import { Button } from '@mui/material'

type Props = {
    onClick: () => void
}

const ChildComponent = ({onClick}: Props) => {
  return (
    <div>
        <h3 className='p-4'>Button is in Child Component </h3>
        <Button variant='contained' onClick={onClick}>Click me</Button>
    </div>
  )
}

export default ChildComponent