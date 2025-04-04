import React from 'react';

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-20 sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out" />
      <h1 className="text-lg md:text-xl text-blue-800 hover:text-blue-500 my-4">John Doe</h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-600">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;


