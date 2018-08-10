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

  componentDidMount(){
    this.props.deleteErrors();
  }


  handleSubmit(e){
    const user = Object.assign({}, this.state);
    console.log("props", this.props)
    this.props.processForm(user, () => {
    this.props.history.push('/')
    });
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){

    return (
      <div className="main">

        <div className="errors">
          {this.props.errors.length > 0 ? <div id="errors">{this.props.msg}</div> : null}
        </div>

        <div className="intro">
          <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
              </div>

            {this.props.formType === 'signup' ?
              <input type="username"
              onChange={this.update('username')}
              placeholder="First name (or nickname)"
              value={this.state.username}
              /> : null }

            <input type="email"
              onChange={this.update('email')}
              placeholder={this.props.email}
              value={this.state.email}
              />

            <input type="password"
              onChange={this.update('password')}
              placeholder={this.props.password}
              value={this.state.password}
              />

            <input type="submit" value={this.props.buttonName} />

            <p>{this.props.redirect}</p>

          </form>
        </div>

      </div>
    )
  }
}

export default SessionForm;
