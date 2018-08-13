import React from 'react';
import KnittingTimeBox from '../knitting_times/knitting_time_box';

class KnittingTimeShow extends React.Component {
  componentDidMount(){
    this.props.fetchKnittingTime(this.props.ktId);
  };

  render(){

    return (
      <div className="kt-show">
        <div className="kt-sidebar">
          <KnittingTimeBox
            knittingtime ={this.props.knittingtime}
            />
          <form>
            <label>Name
              <input type="text" placeholder={this.props.me.username}></input>
            </label>
            <label>Email
              <input type="text" placeholder={this.props.me.email}></input>
            </label>
            <label>Mobile Number
              <p>Optional, but helps {this.props.knittingtime.host.username} get in touch the day of your knitting time</p>
              <input type="text" placeholder="(555) 345-6789"></input>
            </label>

          </form>
        </div>
        <div className="kt-info">
          <h2>info</h2>
        </div>
      </div>
    )

  }
};



export default KnittingTimeShow;
