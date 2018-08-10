import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {

  handleDemo(e){
    const demouser = {email: 'stranger.spider@ss.com', password: '12345678'}
    this.props.login(demouser, () => {
    this.props.history.push('/')
    });
  };

  render(){

  const sessionLinks = () => (
    <div className="signin">
      <div>
        <Link to="/login">sign in</Link>
      </div>

      <div className="signup">
        <Link to="/signup">Sign up</Link>
      </div>

      <div className="demo">
        <button onClick={this.handleDemo.bind(this)}>demo</button>
      </div>
    </div>
  );

  const personalGreeting = () => (
    <div className="logout">
      <button onClick={this.props.logout}>Log Out</button>
    </div>
  );

    return this.props.currentUser ? personalGreeting() : sessionLinks();
  }
};




export default withRouter(Greeting);
