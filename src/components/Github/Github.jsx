import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    return (
          <div className='flex items-center justify-center text-center m-5  text-black p-4 text-4xl'>
            <img className='h-40 w-40 rounded-full p-5' src={data.avatar_url}  alt='Git Picture' />
            Github Followers : {data.followers} 
          </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Pulkit7668')
    return response.json()
}
