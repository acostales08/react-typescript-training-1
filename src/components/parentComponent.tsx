import React, {useCallback} from 'react'
import ChildComponent from './childComponent'


const ParentComponent: React.FC = () => {

    const handleClick = useCallback(() => {
        alert("Button Clicked!")
    }, [])

  return (
    <div>
        <h3 className='p-4'>use callback is in Parent Component</h3>
        <ChildComponent onClick={handleClick}/>
    </div>
  )
}

export default ParentComponent