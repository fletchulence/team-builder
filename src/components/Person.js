import React from 'react';

export default function Person(props){
  const { details }= props

  console.log(details)

  if(!details){
    return <h1>This is WORKing</h1>
  }
  return(
    <div className='container'>
      <h1>{details.username}</h1>
      <p>Email: {details.email}</p>
      <p>Favorite Sport: {details.role}</p>
    </div>
  )
}