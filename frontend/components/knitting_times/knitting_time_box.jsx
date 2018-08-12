import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

function KnittingTimeBox(props) {
  const dateinfo = props.knittingtime.date
  return(
    <div>
      <li className="teatime">
        <h3>{moment(dateinfo).format('dddd')}</h3>
        <h1>{moment(dateinfo).format('MMM')} {moment(dateinfo).date()}</h1>
        <h2>{props.knittingtime.start_time} - {props.knittingtime.end_time}</h2>
        <p>{props.knittingtime.address_1}, {props.knittingtime.address_2}, {props.knittingtime.city}, {props.knittingtime.zip},{props.knittingtime.state}</p>{props.knittingtime.address_1}
      </li>

      <div className="goteatime">
        <h2>this one</h2>
      </div>
    </div>

  )
}

export default KnittingTimeBox;
