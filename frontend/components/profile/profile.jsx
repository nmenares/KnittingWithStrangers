import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = { photoFile:  null }
  }

  componentDidMount(){
    this.props.fetchMe()
  }

  componentWillMount(){
    this.props.fetchAreas();
  };

  handleFile(e){
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  render(){

    return (
      <div>
        {this.props.me ? <h1>profile</h1> : <Redirect to="/login" />}

      </div>
  )

  }
};




export default Profile;
