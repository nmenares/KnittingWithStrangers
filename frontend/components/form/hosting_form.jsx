import React from 'react';
import { withRouter } from 'react-router';

class HostingForm extends React.Component {
  componentWillMount() {
    if (!this.props.sessionId) {
      this.props.history.push('/login');
    }
  }

  render(){

    return (
      this.props.sessionid ?
      <div>
        <h1>{this.props.host.username}</h1>
        <h1>{this.props.area.id}</h1>
      </div> : null
    )
  }
};



export default withRouter(HostingForm);
