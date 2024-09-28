import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle any logout process, like clearing session, token, etc.
    console.log('User logged out.');
    
    // Optionally clear state, localStorage, etc.
    localStorage.removeItem('userToken'); // Example for token

    // Redirect to login page or home page after logout
    setTimeout(() => {
      navigate('/login');
    }, 2000); // Redirect after 2 seconds
  }, [navigate]);

  return (
    <div>
      <h1>You have been logged out.</h1>
      <p>Redirecting to the login page...</p>
    </div>
  );
};

export default Logout;


