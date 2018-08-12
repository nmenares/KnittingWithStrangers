import React from 'react';
import { withRouter } from 'react-router-dom';

function KnittingTimeBox(props) {
  return(
    <li>
      {props.knittingtime.date}
      {props.knittingtime.start_time}
      {props.knittingtime.end_time}
      {props.knittingtime.address_1}
    </li>
  )
}

export default KnittingTimeBox;
