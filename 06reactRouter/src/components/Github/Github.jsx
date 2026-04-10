import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()

  // useEffect(() => {
  //   fetch('https://api.github.com/users/apriyanshu116')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       setData(data)
  //     })
  // }, [])

  return (
    <div className='text-center m-4 text-gray-800 p-4 text-3xl'>
      Github followers: {data.followers}
       <img src={data.avatar_url} 
        alt="profile" 
        className="w-32 h-32 rounded-full mx-auto"  />
    </div>
  )
}

export default Github
export const githubInfoLoader =async()=>{
   const res = await fetch('https://api.github.com/users/apriyanshu116')
  return res.json()
}
//for using this make the hooks 