"use client"
import { usersStorage, useUser } from '@/hooks/user'
import { atom, useAtom } from 'jotai'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Users = () => {
    const [users, setUsers] = useAtom(usersStorage)

    
    const addUser =(data: any)=>{
        setUsers((users)=>[
            ...users,
            {
                name: data,
                age: 12,
                height: 12.00
            }
        ])
    }

    const progressAtom = atom((get) => {
        const anime = get(useUser)
        
        // return anime.filter((item) => item.name).length / anime.length
      })
  return (
    <div className='max-w-[800px] w-full m-auto p-3'>
        <div className='flex gap-2 items-center'>
            <Input onChange={(value)=>addUser(value.target.value)} /> 

            <Button onClick={()=>{
                setUsers((users)=>[
                    ...users,
                    {
                        name: "Mingas",
                        age: 12,
                        height: 12.00
                    }
                ])
            }} >Add</Button>
        </div>
        <ul>
            {users.map((user, index) => (
                <li key={index} className='flex gap-2 flex-col'>
                    <span> {user.name} </span>
                    <span>ege: {user.age} </span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Users