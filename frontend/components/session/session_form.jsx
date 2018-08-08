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
    const errors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)

    return (
      <div className="intro">
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>

        <form onSubmit={this.handleSubmit.bind(this)}>
          <ul>{errors}</ul>

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

          <input className="starter" type="submit" value={this.props.buttonName} />

          <p>{this.props.redirect}</p>

        </form>
      </div>
    )
  }
}

export default SessionForm;
