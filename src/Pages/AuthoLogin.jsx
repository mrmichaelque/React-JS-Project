import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

// Replace with your Google API client ID
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

function LoginPage() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const responseGoogle = (response) => {
    if (response.accessToken) {
      setLoggedIn(true);
    } else {
      alert('Google login failed. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <h2>Login Page</h2>
          <form>
            {/* Your existing login form inputs */}

            {/* Google Sign-In Button */}
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />

            <br />
            <a href="#">Forgot Password?</a>
          </form>
        </>
      ) : (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;