import React from 'react';

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-24 sm:w-36 h-24 sm:h-36" />
      <h1 className="text-xl sm:text-2xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
