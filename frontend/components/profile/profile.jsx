import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {

  componentDidMount(){
    this.props.fetchMe()
  }

  render(){

    return this.props.me ? <h1>profile</h1> : <Redirect to="/login" />

  }
};




export default Profile;
