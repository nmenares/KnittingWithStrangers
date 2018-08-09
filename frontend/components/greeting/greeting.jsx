import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, action }) => {
  const sessionLinks = () => (
    <div className="signin">
      {console.log("action", action)}
      <div>
        <Link to="/login">Login</Link>
      </div>

      <div className="signup">
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );

  const personalGreeting = () => (
    <div className="logout">
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};




export default Greeting;
