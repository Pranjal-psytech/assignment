import React from 'react'
import FreindsDetail from '../components/freindsDetail'


function Refer() {
  return (
    <div >
      {/**className='bg-gradient-to-b from-purple-800 to-yellow-500 flex flex-row' */}
      {/* Refer & Earn */}
       {/** Go Back */}
       <span className='flex item-center mx-10 sm:hidden'> 
        <img src='https://res.cloudinary.com/dqhyudo4x/image/upload/v1685103086/Assets/Arrow_17_nwzz6h.png' alt='go back' className='w-6 h-6 px-1 '/>
       <text className='text-custom text-lg'>go back</text>
       </span>

       {/** Refferal code */}
       <span className='flex justify-around items-center mx-36 flex-col sm:flex-row' >
       <div className='w-48 h-48 sm:w-96 sm:h-28  '>
       <img src='https://res.cloudinary.com/dqhyudo4x/image/upload/v1685100320/Assets/Your_Referral_Code_pgyob6.png' alt='Referal Code' className='' />
      </div>
      <div className='bg-white box-border h-24 w-24 p-4 border-4 rounded-3xl sm:w-36 sm:h-20 '   >
        <div className='flex justify-center items-center  flex-col ' >
          <span  className=' flex justify-between items-center flex-row  '>
           
            <div><span><text className='text-purple-900'>Wallet Balance </text> ₹2,500</span></div>
          </span>
         
        </div>
      </div>
     
      </span>
       {/** Wallet */}
       <text className='text-custom mx-10'>Freinds Who Enrolled(3)</text>
       {/** Detail */}
       <span className='flex flex-col px-4 my-3 sm:flex-row'>
       
       <FreindsDetail Name="Dhiraj Saxsena" Date='14 Sep, 2022' Number_courses='6' List_of_courses={['UI/UX',
'Python',
'Photoshop',
'MERN',
'Java']} 
amount="₹180"/>


       <FreindsDetail Name="Subhash Mishra" Date='15 Sep, 2022' Number_courses='23' List_of_courses={['UI/UX',
'Python',
'Photoshop',
'MERN',
'Java',
'C++']} 
amount="₹485"/>

       <FreindsDetail Name="Prafull Kumar" Date='14 Sep, 2022' Number_courses='23' List_of_courses={['UI/UX',
'Python',
'Photoshop',
'MERN',
'Java']} 
amount="₹485"/>

</span>
       <text className='text-custom mx-10'>Term & Conditions</text>
    </div>
  )
}

export default Refer
