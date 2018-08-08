import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up!</Link>
    </div>
  );

  const personalGreeting = () => (
    <div>
      <button onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};




export default Greeting;
