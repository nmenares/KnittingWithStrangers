import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

function KnittingTimeBox(props) {
  const dateinfo = props.knittingtime.date
  return(
    <li className="kt-container">
      <div className="kt">
        <h3>{moment(dateinfo).format('dddd')}</h3>
        <h1>{moment(dateinfo).format('MMM')} {moment(dateinfo).date()}</h1>
        <h2>{props.knittingtime.start_time} - {props.knittingtime.end_time}</h2>
        <p>{props.knittingtime.address_1} <br/> {props.knittingtime.city}</p>
        <div className="availability">
          <h2>X seats left</h2>
          <div className="progress">Progress Bar</div>
        </div>
      </div>
      <div className="go-kt">
        <h2>this one →</h2>
      </div>
    </li>

  )
}

export default KnittingTimeBox;
