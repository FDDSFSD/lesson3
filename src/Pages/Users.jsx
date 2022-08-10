import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Users() {
    const [users,setUsers]=useState([])
    useEffect(()=>{
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response=>setUsers(response.data.data))
     .catch(err=>console.error(err))
    },[])
  return (
    <div>
        {users.map(i=>(
            <li key={i.id}><Link to={`/users/${i.id}`}>{i.first_name}</Link></li>
        ))}
    </div>
  )
}