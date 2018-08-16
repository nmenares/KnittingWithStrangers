import React from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import ProgressBar from './progress_bar';

class KnittingTimeBox extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.knittingtime;
  }

  handleClick(e){
    e.preventDefault();
    this.props.history.push(`/knitting_times/${this.state.id}`)
  }

  render(){

    if (!this.props.knittingtime) {
      return null;
    }

    let dateinfo = moment(this.state.date);
    let label = this.props.enrollments < 5 ? "this one →" : "join waitlist";
    let included = this.props.me;

    return(
      <li className="kt-container" onClick={this.handleClick.bind(this)}>
        {dateinfo >= moment() ?
        <div>
          <div className="kt">
            <div className="kt-top">
              <div>
                <h3>{dateinfo.format('dddd')}</h3>
                <h1>{dateinfo.format('MMM')} {dateinfo.date()}</h1>
                <h2>{this.state.start_time} - {this.state.end_time}</h2>
              </div>
              <div className="host-icon">
                <img src={window.profile} />
                <h4>{this.props.host.username}</h4>
              </div>
            </div>

            <p>{this.state.address_1} <br/> {this.state.city}</p>
            <ProgressBar users={this.props.enrollments} kt={this.state}/>
          </div>

          <button className="go-kt">
            {included ? <h2 className="normal" id="signup">signed up</h2> : <h2 className="normal">{label}</h2>}
            <h2 className="hover">check it out →</h2>
          </button>
        </div>
        : null
        }
      </li>

    )
  }

}

export default withRouter(KnittingTimeBox);
