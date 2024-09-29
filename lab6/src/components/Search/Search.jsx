import React, { useState } from 'react';

// Import profiles.js
import profiles from "../../data/profiles";

// Import UserProfile
import UserProfile from "../UserProfile/UserProfile";

const Search = () => {
  // Add states and setState
  const [searchTerm, setSearchTerm] = useState('');
  // Add function to filter results
  const filteredProfiles = profiles.filter(profile =>
    profile.name.includes(searchTerm) // fill here
  );

  return (
    <div className="search">
      <input 
        type="text" 
        placeholder="Search for profiles..." 
        // Add value and onChange here
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <div className="results">
        {/* Display the filtered results here. Hint: Use the map function*/
          filteredProfiles.length > 0 ? 
          (filteredProfiles.map(profile => (<UserProfile key={profile.id} profile={profile} />))):(<p>No profiles found</p>
          )
        }
      </div>
    </div>
  );
};

export default Search;