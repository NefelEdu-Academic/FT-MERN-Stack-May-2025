import React from 'react'
import { useParams } from 'react-router-dom'

const Welcome = () => {
    const {firstName, lastName} = useParams()
  return (
    <div>Welcome {firstName} {lastName} </div>
  )
}

export default Welcome