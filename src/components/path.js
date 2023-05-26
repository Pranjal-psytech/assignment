import React from 'react'
import { Link } from 'react-router-dom'

function Path(props) {
  return (
    <div className="bg-white h-70 flex w-1336  ">
       <Link to="/" className=' from-neutral-950 mx-3 sm:mx-36 my-1  ' > {props.location} </Link>
      

     
    </div>
  )
}

export default Path
