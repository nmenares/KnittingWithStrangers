import React from 'react';
import KnittingTimeBoxMain from '../knitting_time/knitting_time_box_main';
import { withRouter, Link } from 'react-router-dom';

class KnittingTimeShow extends React.Component {

  componentDidMount(){
    this.props.fetchKnittingTime(this.props.ktId);
  };

  componentWillMount(){
    this.props.fetchAreas();
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
          <div className="host">
            <h2>Meet your Host, {host.username}.</h2>
            <p>(It'll be helpful to know what they look like when you're looking for a group of confused strangers.)</p>
          </div>

          <img src={window.profile} />
          <div className="kt-description">
            <p>Hey there! I’m passionate about learning as much as an can. Usually, that means learning about others and how they view the world and how all those views and their interactions create humanity. I love to ask questions that are at times a bit much for normal conversation so if you like answering questions about your own thinking, let’s tea time! (Can I use that as a verb?)</p>
            <h3>What's your story?</h3>
            <p>My life story is not super interesting, so I’ll just say my story is an amalgamation of the conversations and stories I’ve had and heard from others. This includes the conversations I’ve had with myself (which might happen more often than sanity would permit). I’ve gone from the non-stop talking kid (who sat in a lawn chair talking at my neighbor for hours while he gardened) to a more quiet (read: still not fully quiet) adult. Today, I spend more of that time talking at my notebook. <br/>
            I am currently attending a university that takes me to a new city each semester (I’ve been to San Francisco, Seoul, and Hyderabad so far), so I have a few “travel stories” and love to find the small things that make one city, country, or culture different from others. <br/>
            Also, I use parentheses too often (sorry)</p>
            <h3>What might we talk about?</h3>
            <p>Currently, I am super interested in how people interact with the relationships (friendships, romantic relationships, relationships with relatives etc) in their lives, so I might ask you questions like: what’s been the most influential relationship you’ve had? How do you determine what a good relationship is for yourself? (remember what I said about questions that are maybe a bit too much for normal conversation?) <br/>
            Really, I’m game to talk about anything (especially things that have no answer and are difficult to understand) so please come with all the questions you’ve ever wanted to ask a stranger and all the things you ever wanted to share. <br/>
            (Otherwise, I’m not the best at small talk, so if you reaaaallly wanted to talk about the weather, I’m sure I could use some practice…) <br/>
            See ya!</p>
            <div className="host-msg">I honest to god believe in unicorns.</div>
          </div>

        </div>
      </div>
    )

  }
};



export default withRouter(KnittingTimeShow);
