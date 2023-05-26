import React from 'react'

function FreindsDetail(props) {
  return (
    <div class="w-338 h-228 p-4 bg-gradient-to-r from-yellow-500 to-purple-800 mx-8 px-2 rounded-2xl my-4 ">
  <div class="flex justify-between mb-4">
    <span class="font-bold text-white">{props.Name}</span>
    <span class="font-bold text-white">{props.Date}</span>
  </div>
  <p class="mb-2 text-white">Courses Enrolled: {props.Number_courses}</p>
  <ul class="mb-4 ">
    <li class="flex flex-wrap">
      {props.List_of_courses.map((course, index) => (
        <span key={index} class="mr-2 mb-2 px-2 py-1 bg-transparent text-white  border-spacing-2 border-2 rounded-full">
          {course}
        </span>
      ))}
    </li>
  </ul>
  <p className='text-white'>Referral Amount: {props.amount}</p>
</div>

  )
}

export default FreindsDetail
