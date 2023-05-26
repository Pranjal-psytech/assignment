import React from 'react'
import Description from '../components/description'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='my-12 bg-custom flex flex-col mx-12'>
      {/* Home */}
      {/** Dashboard */}
      <span className='flex justify-around items-center mx-36 flex-col sm:flex-row' >
      <div className='bg-white box-border h-48 w-60 p-4 border-4 rounded-3xl sm:w-96 '   >
        <div className='flex justify-center items-center  flex-col ' >
          <span  className=' flex justify-between items-center flex-row  '>
            <div><span><text  className='text-purple-900'>Referral Earning </text> ₹2,500</span>  </div>
            <div> <span><text className='text-purple-900'>Total Referrals</text> ₹2,500</span></div>
            <div><span><text className='text-purple-900'>Wallet Balence </text> ₹2,500</span></div>
          </span>
          <button class="rounded-full bg-button mb-4 mt-11 " className='bg-button mb-4 mt-11' title="Withdraw Balance " > <text className='text-white px-8 py-4'>  Withdraw Balance</text></button>
        </div>
      </div>
      <div className='w-48 h-48 sm:w-96 sm:h-28  '>
       <img src='https://res.cloudinary.com/dqhyudo4x/image/upload/v1685100320/Assets/Your_Referral_Code_pgyob6.png' alt='Refferal Code' className='' />
      </div>
      </span>
      {/** Refferd code */}
      
      <text className='text-custom mx-5'>Who does it works?</text>
      <div className='h-332 w-784 flex  flex-wrap  ' >
      
      <div>
        <Description url="https://res.cloudinary.com/dqhyudo4x/image/upload/v1685077567/Assets/invite_dty7md.png" Heading="Invite your Friends" Description="Share the link tutedude.com with your friends"/>
      </div>
      <div>
        <Description url="https://res.cloudinary.com/dqhyudo4x/image/upload/v1685077567/Assets/Rupee_wgrxlk.png" Heading="You get = 200 as referral money" Description="On total purchase the friend makes, into your wallet"/>
      </div>
      <div>
        <Description url="https://res.cloudinary.com/dqhyudo4x/image/upload/v1685077567/Assets/wallet_uiod4y.png" Heading="Transfer money from wallet" Description="When the wallet balance reaches 2200 or more, you can withdraw it"/>
      </div>
      <div>
        <Description url="https://res.cloudinary.com/dqhyudo4x/image/upload/v1685077567/Assets/referral_iqhpgd.png" Heading="Friend purchases any course" Description="Using your REFERRAL CODE in the payments page"/>
      </div>
      <div>
        <Description url="https://res.cloudinary.com/dqhyudo4x/image/upload/v1685077567/Assets/Discount_ykgcue.png" Heading="Your Friend gets 200 Off" Description="On his overall fee on successful purchase using your referral code"/>
      </div>
      </div>
      
      {/**Methods */}
      <Link to="/refer" className='text-custom mx-5'>Freinds who enrolled</Link>
      <text className='text-custom mx-5'>Term & Conditions</text>
    </div>
  )
}

export default Home
