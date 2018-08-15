import React from 'react';
import ProgressBar from '../knitting_times/progress_bar';
import moment from 'moment';

const KnittingTimeBoxMain = (props) => {

  const dateinfo = moment(props.knittingtime.date);
  return(
    <div className="kt-main">
      {props.users.length === 5 ? <h2>GET ON WAIT LIST FOR THIS TEA TIME</h2> : <h2>JOIN {props.host.username} FOR KNITTING TIME</h2>}

      <div className="kt-main-divs">
        <img src={window.calendar} />
        <h3>{dateinfo.format('dddd')}, {dateinfo.format('MMM')} {dateinfo.date()}</h3>
      </div>

      <div className="kt-main-divs">
        <img src={window.clock} />
        <h3>{props.knittingtime.start_time} - {props.knittingtime.end_time}</h3>
      </div>

      <div className="kt-main-divs">
        <img src={window.pin} />
        <p>{props.knittingtime.address_1}{props.knittingtime.address_2 ? `, ${props.knittingtime.address_2}` : null}, {props.knittingtime.city}, {props.knittingtime.state}, {props.knittingtime.zip}</p>
      </div>

      <div className="kt-main-divs">
        <img src={window.planet} />
        <p>{props.knittingtime.city}</p>
      </div>

      <div className="kt-main-divs">
        <img src={window.idea} />
        <p>Send to a friend that should be here (especially if you can't come yourself!)</p>
      </div>

      <ProgressBar users = {props.users.length}/>

    </div>

  )

}

export default KnittingTimeBoxMain;
