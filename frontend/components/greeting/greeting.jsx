import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {

  handleDemo(e){
    const demouser = {email: 'stranger.spider@ss.com', password: '12345678'}
    this.props.login(demouser, () => {
    this.props.history.push('/knitting_times')
    });
  };

  handleDashboard(e){
    this.props.history.push('/me');
  };

  handleLogout(e){
    this.props.logout();
    this.props.currentUser = null;
    this.props.history.push('/');
  }

  render(){

  const sessionLinks = () => (
    <div className="signin">

      <p>About</p>

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
    <div>

      <p onClick={this.handleDashboard.bind(this)}>Dashboard</p>

      <div>
        <button className="sigout" onClick={this.handleLogout.bind(this)}>Log Out</button>
      </div>
    </div>
  );

    return this.props.currentUser ? personalGreeting() : sessionLinks()
  }
};




export default withRouter(Greeting);
