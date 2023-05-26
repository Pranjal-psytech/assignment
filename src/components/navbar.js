import React from 'react';



const Navbar = () => {
  return (
    <nav className="bg-white h-48 sm:h-70 flex justify-between items-center ">
      <div className=" w-96 ml-2  sm:w-36 h-12 sm:mx-1 sm:my-1">
        <img src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1685077567/Assets/image_1_gh3gjc.svg" alt="Logo" className='w-40 sm:w-36 h-12 ' />
      </div>
      <div className="flex justify-end my-6 mx-24">
        <ul className="flex space-x-4">
          <li className="text-purple-300 hidden sm:block">My Assignment</li>
          <li className="text-purple-300 hidden sm:block">Chat with Mentor</li>
          <li className="text-purple-900 hidden sm:block">
            <span className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1685077567/Assets/Vector_zj9y4p.svg"
                alt="profile"
                className="w-5 h-5 mr-2"
              />
              <text className="flex items-center text-lg">Profile Name</text>
              <img
                src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1685078485/Assets/arrow_k7kdn3.png"
                alt="arrow"
                className="w-2 h-2 ml-2"
              />
            </span>
          </li>
          <li className="text-purple-900 sm:hidden">
            <img
              src="https://res.cloudinary.com/dqhyudo4x/image/upload/v1685088015/Assets/Button_drp5sv.png"
              alt="Profile"
              className=" w-96 h-14 "
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
