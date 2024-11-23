import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/bishalkg909')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // },[]);

  return (
    <div>
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        Github Followers : {data.followers}
        </div>
        <div className='flex gap-8'>
            <img src={data.avatar_url} alt="" />
            <div className='text-2xl flex flex-col gap-4 justify-center'>
                <p>Name : {data.name}</p>
                <p>Repos : {data.public_repos}</p>
                <p>Email : {data.email}</p>
                <p>Followers : {data.followers}</p>
                <p>Following : {data.following}</p>
            </div>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/bishalkg909');
   return response.json();
}
