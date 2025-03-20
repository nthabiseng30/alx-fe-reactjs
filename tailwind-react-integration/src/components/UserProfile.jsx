import React from React;

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-24 sm:w-36 md:w-48 lg:w-60 xl:w-72 h-24 sm:h-36 md:h-48 lg:h-60 xl:h-72" />
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
