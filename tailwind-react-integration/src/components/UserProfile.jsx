import React from 'react';

function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36 h-36" />
      <h1>John Doe</h1>
      <p>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
