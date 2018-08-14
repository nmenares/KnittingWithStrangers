import React from 'react';
import KnittingTimeBoxMain from '../knitting_time/knitting_time_box_main';

class KnittingTimeShow extends React.Component {
  componentDidMount(){
    this.props.fetchKnittingTime(this.props.ktId);
  };

  render(){
    if(!this.props.knittingtime) {
      return null;
    }
    return (
      <div className="kt-show">
        <div className="kt-sidebar">
          <KnittingTimeBoxMain
            knittingtime ={this.props.knittingtime}
            />
          <form>
            {this.props.me ?
              <div>
                <label>Name</label>
                <div>{this.props.me.username}</div>

                <label>Email</label>
                <div>{this.props.me.email}</div>

                <label>Mobile Number
                  <p>Optional, but helps {this.props.knittingtime.host.username} get in touch the day of your knitting time</p>
                  <input type="text" placeholder="(555) 345-6789"></input>
                </label>
              </div>
              : null
            }
          </form>
          <div className="kt-description">
            <h2>What is knitting time, exactly?</h2>
            <img src={window.knitting} />
            <p>
              Knitting Time is where five-ish strangers sit at a cafe with a Host to talk while knitting.
            </p>
            <p>
              You're meant to know pretty much nothing about the people that come, aside from the fact that they all love knitting and signed up for this — just like you. This is self-selecting in that sense.
            </p>
            <p>
              However, it may bring you comfort to know a little something about your Host. If so, just keep reading.
            </p>
          </div>

        </div>
        <div className="kt-info">
          <h2>Meet your Host, {this.props.knittingtime.host.username}.</h2>
          <p>(It'll be helpful to know what they look like when you're looking for a group of confused strangers.)</p>
        </div>
      </div>
    )

  }
};



export default KnittingTimeShow;
