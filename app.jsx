import React, { useState } from 'react';

function App() {
  // Initialize state variable showProfile to false
  const [showProfile, setShowProfile] = useState(false);

  // Function to toggle showProfile state
  const handleToggle = () => {
    setShowProfile(prevState => !prevState);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* Button to toggle profile visibility */}
      <button onClick={handleToggle}>
        {showProfile ? 'Hide Profile' : 'Show Profile'}
      </button>

      {/* Conditional rendering of user profile */}
      {showProfile ? (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', width: '250px' }}>
          <h2>John Doe</h2>
          <p><strong>Email:</strong> johndoe@gmail.com</p>
          <p><strong>Location:</strong> Cleveland, OH</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;