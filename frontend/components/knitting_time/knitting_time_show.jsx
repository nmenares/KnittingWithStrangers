import React from 'react';
import KnittingTimeBoxMain from '../knitting_time/knitting_time_box_main';
import { withRouter, Link } from 'react-router-dom';

class KnittingTimeShow extends React.Component {

  componentDidMount(){
    this.props.fetchKnittingTime(this.props.ktId);
  };

  handleSubmit(e){
    e.preventDefault();
    this.props.me ?
    this.props.createEnrollment({user_id: this.props.meId, knittingtime_id: this.props.ktId}, () => {
      this.props.history.push('/me')})
    : this.props.history.push('/login')
  }

  render(){
    if(!this.props.knittingtime) {
      return null;
    }

    const knittingtime= this.props.knittingtime
    const enrollments= this.props.knitting_time_enrollments.filter( kte => kte.knittingtime_id === parseInt(this.props.ktId))
    const me= this.props.knitting_time_enrollments.some( info => info.user_id === parseInt(this.props.meId) && info.knittingtime_id === parseInt(this.props.ktId) )
    const host= this.props.users[this.props.knittingtime.host_id]

    return (
      <div className="kt-show">
        <div className="kt-sidebar">
          <KnittingTimeBoxMain
            knittingtime={knittingtime}  users={enrollments}  me={me}  host={host}
            />
          <div>
            {this.props.me ?
              <div className="me-info">
                <label>Name</label>
                <div>{this.props.me.username}</div>

                <label>Email</label>
                <div>{this.props.me.email}</div>

                {me ? <h2>You're already signed up!</h2> :
                  <div className="mobileinfo">
                    <label>Mobile Number
                      <span> Optional, but helps to get in touch the day of your knitting time</span>
                    </label>
                    <input className="phone" type="text" placeholder="(555) 345-6789"></input>
                    {enrollments.length === 5 ? <p>You'll get an email the moment someone cancels their seat.</p> : null}
                    <button className="join" onClick={this.handleSubmit.bind(this)}>{enrollments.length === 5 ? "join waitlist" : "sign me up"}</button>
                  </div>
                }
              </div>
              : <button className="join" onClick={this.handleSubmit.bind(this)}>sign me up</button>
            }
          </div>



          <Link to="/knitting_times">See Other Tea Times</Link>

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
          <h2>Meet your Host, .</h2>
          <p>(It'll be helpful to know what they look like when you're looking for a group of confused strangers.)</p>
        </div>
      </div>
    )

  }
};



export default withRouter(KnittingTimeShow);
