import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  };

  handleSubmit(e){
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

        {this.props.formType === 'signup' ?
          <input type="username"
          onChange={this.update('username')}
          placeholder="First name (or nickname)"
          value={this.state.username}
          /> : null }

        <input type="email"
          onChange={this.update('email')}
          placeholder="Email address"
          value={this.state.email}
          />

        <input type="password"
          onChange={this.update('password')}
          placeholder="Password (at least 8 characters)"
          value={this.state.password}
          />

        {this.props.formType === 'signup' ?
          <select required>
            <option value="Home city" disabled selected>Home city</option>
            <option value="San Jose">San Jose</option>
            <option value="San Francisco">San Francisco</option>
          </select> : null}

        <input type="submit" value={this.props.buttonName} />

      </form>
    )
  }
}

export default SessionForm;
