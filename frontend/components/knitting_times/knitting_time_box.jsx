import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

function KnittingTimeBox(props) {
  const dateinfo = moment(props.knittingtime.date)
  return(
    <li className="kt-container">
      <div className="kt">
        <div className="kt-top">
          <div>
            <h3>{dateinfo.format('dddd')}</h3>
            <h1>{dateinfo.format('MMM')} {dateinfo.date()}</h1>
            <h2>{props.knittingtime.start_time} - {props.knittingtime.end_time}</h2>
          </div>
          <div className="host-icon">
            <img src="http://via.placeholder.com/77x77"/>
            <h4>{props.knittingtime.host.username}</h4>
          </div>
        </div>

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
