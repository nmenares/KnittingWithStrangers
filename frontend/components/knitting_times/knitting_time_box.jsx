import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

function KnittingTimeBox(props) {
  const dateinfo = props.knittingtime.date
  return(
    <div className="kt-container">
      <li className="kt">
        <h3>{moment(dateinfo).format('dddd')}</h3>
        <h1>{moment(dateinfo).format('MMM')} {moment(dateinfo).date()}</h1>
        <h2>{props.knittingtime.start_time} - {props.knittingtime.end_time}</h2>
        <p>{props.knittingtime.address_1} {props.knittingtime.city}</p>
      </li>
      <div className="availability">
        <h2>X seats left</h2>
        <div className="progress">Progress Bar</div>
      </div>

      <div className="go-kt">
        <h2>this one →</h2>
      </div>
    </div>

  )
}

export default KnittingTimeBox;
