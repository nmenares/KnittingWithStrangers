import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = { clickMenu: false }
  }

  handleDemo(e){
    const demouser = {email: 'stranger@ss.com', password: '12345678'}
    this.props.login(demouser, () => {
    this.props.history.push('/knitting_times')
    });
  };

  handleDashboard(e){
    this.props.history.push('/me');
  };

  handleLogout(e){
    this.props.logout();
    this.props.history.push('/');
  };

  handleClick(e){
  e.preventDefault();
  this.setState({ clickMenu: true })
  setTimeout(() => this.setState({ clickMenu: false}), 5000)
};

  render(){

    const sessionLinks = () => (
      <div className='nav-right'>
        <div className="signin">

          <div>
            <Link to="/knitting_times">Knitting Times</Link>
          </div>

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
        <div className="dropdown" onClick={this.handleClick.bind(this)}>
        {this.state.clickMenu ?
          <ul className="menuList">
            <li>
              <Link to="/knitting_times">Knitting Times</Link>
            </li>

            <li>
              <Link to="/login">Sign in</Link>
            </li>

            <li>
              <Link to="/signup">Sign up</Link>
            </li>

            <li>
              <button onClick={this.handleDemo.bind(this)}>demo</button>
            </li>
          </ul>
          :
          null
        }
        </div>
      </div>
    );

    const personalGreeting = () => (
      <div className='nav-right'>
        <div className = "signin">
          <Link to="/knitting_times">Knitting Times</Link>
          <p onClick={this.handleDashboard.bind(this)}>Dashboard</p>
          <div>
            <button className="signout" onClick={this.handleLogout.bind(this)}>Log Out</button>
          </div>
        </div>
        <div className="dropdown" onClick={this.handleClick.bind(this)}>
        {this.state.clickMenu ?
          <ul className="menuList">
            <li>
              <Link to="/knitting_times">Knitting Times</Link>
            </li>

            <li>
              <p onClick={this.handleDashboard.bind(this)}>Dashboard</p>
            </li>

            <li>
              <button onClick={this.handleLogout.bind(this)}>Log Out</button>
            </li>
          </ul>
          :
          null
        }
        </div>
      </div>
    );

      return this.props.currentUser ? personalGreeting() : sessionLinks()
    }
};




export default withRouter(Greeting);
