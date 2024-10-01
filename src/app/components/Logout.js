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
    
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
            <h2>Are you sure you want to Logout?</h2>
            <br></br>
            <Link href='/login'><button className="btn-primary" onClick={localStorage.removeItem('userToken')}>Logout</button></Link>
       
      <h1>You have been logged out.</h1>
      <p>Redirecting to the login page...</p>
    </div>
  );
};

export default Logout;


