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
            <div className="justify-center relative bottom-20  ">

              <button onClick={handleLogout} type="button"  class=" w- w-40 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Log out
                
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
