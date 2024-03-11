import React, {useState, useMemo, ChangeEvent} from 'react'
import { Paper, TextField, Button } from '@mui/material'

const Factorial: React.FC = () => {
    const [num, setNum] = useState<number>(0)

    const factorial = useMemo(() => {
        const calculateFactorial = (value: number):number => {
            if(value < 0) return NaN;
            if(value === 0) return 1;

            let result = 1;
            for (let i = 1; i <= num; i++) {
                result *= i;
            }
            return result;
        }
        return calculateFactorial(num)
    }, [num])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue: number = parseInt(event.target.value) 
        setNum(inputValue)
    }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <Paper elevation={4} style={{
            width: "40%",
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "20px"
        }}>
            <h1>Factorial of {num} is: <strong>{factorial}</strong></h1>
            <TextField variant='outlined' fullWidth label="input number" value={num} onChange={handleChange}/>
        </Paper>

    </div>
  )
}

export default Factorial