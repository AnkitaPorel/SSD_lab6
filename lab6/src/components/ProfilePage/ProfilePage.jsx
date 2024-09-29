import React from 'react';
import "./ProfilePage.css"
import UserProfile from '../UserProfile/UserProfile';

const ProfilePage = () => {
  // 1. Add a javascript object here
  let profile={
    id: 1,
    name: "Ankita Porel",
    age: 65,
    email: "ankita.porel@students.iiit.ac.in",
    bio: "Hi this is Ankita"
  };
  return (
    // 2. Access the object and render here
    <div id="spprof">
      <UserProfile profile={profile}></UserProfile>
    </div>
  );
};

export default ProfilePage;