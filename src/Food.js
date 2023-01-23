import React from 'react'
import { useParams } from 'react-router-dom';

function Food() {
  const { food } = useParams();

  return (
    <div>
      <h1>You must like { food }</h1>
    </div>
  )
}

export default Food