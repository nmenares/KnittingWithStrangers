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
    this.props.history.push(`/knitting_times/${this.state.id}`)
  }

  render(){
    const dateinfo = moment(this.state.date)
    return(
      <li className="kt-container">
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
                <img src="http://via.placeholder.com/77x77"/>
                <h4>{this.state.host.username}</h4>
              </div>
            </div>

            <p>{this.state.address_1} <br/> {this.state.city}</p>
            <ProgressBar users={this.state.users.length}/>
          </div>

          <div onClick={this.handleClick.bind(this)} className="go-kt">
            <h2>this one →</h2>
          </div>
        </div>
        : null
        }
      </li>

    )
  }

}

export default withRouter(KnittingTimeBox);
