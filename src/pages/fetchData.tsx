import React, {useState, useEffect} from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'
import { HttpRequest } from '../core/api/api'
import { AxiosResponse } from 'axios'
import axios from 'axios'


const FetchData: React.FC = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch().then((response: AxiosResponse) => {
            setUser(response.data)
        })
    }, [])
    console.log(user)

    const  fetch = async() => {
        const result = await new HttpRequest().fetchData()
        return result
    }

  return (
    <div className='h-fit w-full flex justify-center items-center p-32'>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">id</TableCell>
                        <TableCell align="center">name</TableCell>
                        <TableCell align="center">username</TableCell>
                        <TableCell align="center">email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map(({id, name, username, email}) => (
                        <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center">{id}</TableCell>
                            <TableCell align="center">{name}</TableCell>
                            <TableCell align="center">{username}</TableCell>
                            <TableCell align="center">{email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default FetchData