import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    const revokeAuth = async () => {
      try {
        const response = await fetch('/revoke_auth', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });

        if (response.ok) {
          // Remove the access token from local storage
          localStorage.removeItem('accessToken');
          // Redirect to the login page or any other desired page
          window.location.href = '/login'; // Perform a full page reload
        } else {
          const data = await response.json();
          // Handle error responses
          console.log('Logout failed:', data.msg);
        }
      } catch (error) {
        console.error('Logout error:', error);
        // Handle network errors or any other errors
      }
    };

    revokeAuth();
  }, []);

  return (
    <div>
      <h1>Logging out...</h1>
      {/* You can show a loading spinner or any other UI element here */}
    </div>
  );
};

export default Logout;
