import React from 'react';
import { withRouter } from 'react-router-dom';

class KnittingTimeBox extends React.Component {
  render(){
    return(
      <li>
        {this.props.knittingtime.date}
        {this.props.knittingtime.start_time}
        {this.props.knittingtime.end_time}
        {this.props.knittingtime.address_1}
      </li>
    )
  }
}

export default KnittingTimeBox;
