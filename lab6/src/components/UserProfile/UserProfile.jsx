import React from 'react';

// Add a prop named `profile` in const UserProfile
const UserProfile = ({profile}) => {
  return (
    <div id="user">
      <h1>User Profile</h1>
      <p>Id: {profile.id}</p>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      <p>Email id: {profile.email}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
};

export default UserProfile;