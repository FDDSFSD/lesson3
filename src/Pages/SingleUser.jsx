import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SingleUser() {
    const [singleUser, setSingleUser] = useState()
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
            .then(response => setSingleUser(response.data.data))
    }, [])
    return (
        <>
            {singleUser &&
                <div>
                    <h2>{singleUser.first_name}</h2>
                    <p>{singleUser.email}</p>
                    <img src={singleUser.avatar} alt='' />
                </div>
            }
        </>
    )
}