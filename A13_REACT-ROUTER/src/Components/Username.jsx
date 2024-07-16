import React from 'react'
import { useParams } from 'react-router-dom'

const Username = () => {
    const params = useParams();
  return (
    <div>
      i am a user {params.username}
    </div>  
  )
}

export default Username
