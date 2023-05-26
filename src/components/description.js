import React from 'react'

function Description(props) {
  return (
    <div class="flex items-center mx-8 px-2">
  <div class="w-12 h-12 rounded-full flex items-center justify-center bg-gray-300 bg-opacity-25 mr-4">
    <img src={props.url} alt="Heading Image"  />
  </div>

  <div>
    <h2 class="font-poppins font-medium text-base leading-6 text-black mb-2">{props.Heading}</h2>
    <p class="text-gray-600">{props.Description}</p>
  </div>
</div>

  )
}

export default Description
