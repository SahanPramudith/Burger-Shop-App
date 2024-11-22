import { useState, useEffect } from 'react';
import './App.css';
import 'flowbite';
import 'flowbite-react';
import 'flowbite/dist/flowbite.min.js';
import SideBar from './SideBar/SideBar';
import LoginForm from './Login From/Loginform'; // Corrected import for LoginForm
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  const clientId = '175215995192-14ciuu8ud41oqup02guh84droe63t518.apps.googleusercontent.com'; // Replace with your Google OAuth client ID
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleSuccess = (response) => {
    console.log('Login Success:', response);
    setUser(response);
    localStorage.setItem('user', JSON.stringify(response));
  };

  const handleFailure = (error) => {
    console.error('Login Failed:', error);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        {!user ? (
          <LoginForm
            onGoogleSuccess={handleSuccess}
            onGoogleFailure={handleFailure}
            redirectUri="http://localhost:5173/"
          />
        ) : (
          <div>
            <div className="p-4  ">

              <button onClick={handleLogout} type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Log out
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </button>
            </div>
            <SideBar />

          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
