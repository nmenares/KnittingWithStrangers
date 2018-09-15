import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { toObject } from '../../util/functions';
import merge from 'lodash/merge';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.enr = (kt_id) => merge([], this.props.attending_enrollments.filter(enr => enr.knittingtime_id === parseInt(kt_id)));

    this.false_enr = (kt_id) => merge([], this.props.all_enrollments.filter(enr => enr.knittingtime_id === parseInt(kt_id) && !enr.going));
  }

  handleClick(kt){
    return e => {
      e.preventDefault
      const enr = this.enr(kt.id)[0];
      const falses = this.false_enr(kt.id);
      console.log("falses")
      console.log(falses)
      this.props.deleteEnrollment(enr.id);
      if (falses.length > 0) {
        this.props.updateEnrollment({id: falses[0].id, user_id: falses[0].user_id, knittingtime_id: falses[0].knittingtime_id, going: true })
      }
    }
  }

  componentDidMount(){
    this.props.fetchMe();
    window.scrollTo(0, 0);
  }

  componentWillMount(){
    this.props.fetchAreas();
  };

  render(){
    if(!this.props.me || !this.props.attending_enrollments || !this.props.knitting_times) {
      return null;
    }

    const today = moment();
    const next_kt_gap = (21 - today.date());

    const my_kts_attending = this.props.attending_enrollments.filter(kte => kte.going);
    const my_kt_ids = my_kts_attending.map(ae => ae.knittingtime_id);
    const my_kts_all = my_kt_ids.map(id => this.props.knitting_times[id]);
    const my_kts = my_kt_all.filter(kt => kt.date >= today);

    const my_kts_maybe = this.props.attending_enrollments.filter(kte => !kte.going);
    const my_kt_ids_wl = my_kts_maybe.map(ae => ae.knittingtime_id);
    const my_kts_wl_all = my_kt_ids_wl.map(id => this.props.knitting_times[id]);
    const my_kts_wl = my_kt_wt_all.filter(kt => kt.date >= today);

    return (
      <div>
        {this.props.me ?
        <div>
          <div className="profile-menu">
            <p>QUICK LOOK</p>
            <p>HISTORY</p>
            <p>ACCOUNT DETAILS</p>
          </div>
          <div className="profile-content">
            <div className="profile-sidebar">
              <h2>Welcome home, {this.props.me.username}!</h2>
              <h3>What are you grateful today?</h3>
              <div className="link3"><Link to="/knitting_times">find another knitting time!</Link></div>
            </div>
            <div className="profile-body">
              <div className="list-profile">

                {my_kts.length > 0 ? <h2>Knitting times you're attending</h2> : null }
                <ul> {my_kts.map(kt => (
                    <li className="li-attending" key={kt.id}>
                      <div className="profile-kt-box">
                        <p>{moment(kt.date).format('dddd')}</p>
                        <h3>{moment(kt.date).format('MMMM')} {moment(kt.date).date()}</h3>
                        <h4>{kt.start_time} - {kt.end_time}</h4>
                        <p>{kt.address_1}{kt.address_2 ? `, ${kt.address_2}` : null}, {kt.city}, {kt.state}, {kt.zip}</p>

                        <div className="cancel-kt" onClick={this.handleClick(kt)}>CANCEL MY SPOT</div>
                      </div>
                      <div className="profile-host-box">
                        <h3>Get to know your host</h3>
                        <div className="photo-p">
                          <div className="hostphoto"><img src={window.profile} /></div>
                          <p>Keep an eye open for {this.props.users[kt.host_id].username}! So it's easier, here's what they look like :).</p>
                        </div>
                        <div>
                          <button className="profile-host-info">{`${this.props.users[kt.host_id].username}'s`} profile</button>
                          <button className="profile-host-info">email {this.props.users[kt.host_id].username}</button>
                        </div>
                      </div>
                    </li>
                  ))
                  }
                </ul>
              </div>
              <div className="list-profile">

                {my_kts_wl.length > 0 ? <h2>Knitting times you're in Waitlists</h2> : null }
                <ul> {my_kts_wl.map(kt => (
                    <li className="li-attending" key={kt.id}>
                      <div className="profile-kt-box">
                        <p>{moment(kt.date).format('dddd')}</p>
                        <h3>{moment(kt.date).format('MMMM')} {moment(kt.date).date()}</h3>
                        <h4>{kt.start_time} - {kt.end_time}</h4>
                        <p>{kt.address_1}{kt.address_2 ? `, ${kt.address_2}` : null}, {kt.city}, {kt.state}, {kt.zip}</p>

                        <div className="cancel-kt" onClick={this.handleClick(kt)}>CANCEL MY SPOT</div>
                      </div>
                      <div className="profile-host-box">
                        <h3>Get to know your host</h3>
                        <div className="photo-p">
                          <div className="hostphoto"><img src={window.profile} /></div>
                          <p>Keep an eye open for {this.props.users[kt.host_id].username}! So it's easier, here's what they look like :).</p>
                        </div>
                        <div>
                          <button className="profile-host-info">{`${this.props.users[kt.host_id].username}'s`} profile</button>
                          <button className="profile-host-info">email {this.props.users[kt.host_id].username}</button>
                        </div>
                      </div>
                    </li>
                  ))
                  }
                </ul>
              </div>
              <div className="list-profile">
                {this.props.hosted_knitting_times.length > 0 ? <h2>Knitting times you're hosting</h2> : null }
                <ul> {this.props.hosted_knitting_times.map(hkt => (
                    <li key={hkt.id} className="hosted-li">

                      <div className="profile-kt-box2">
                        <p>{moment(hkt.date).format('dddd')}</p>
                        <h3>{moment(hkt.date).format('MMMM')} {moment(hkt.date).date()}</h3>
                        <h4>{hkt.start_time} - {hkt.end_time}</h4>
                        <p>{hkt.address_1}{hkt.address_2 ? `, ${hkt.address_2}` : null}, {hkt.city}, {hkt.state}, {hkt.zip}</p>
                      </div>
                      <div className="modify-hosted">
                        <button className="profile-host-info">update</button>
                        <button className="profile-host-info2">delete</button>
                      </div>
                    </li>
                  ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      : <Redirect to="/login" />}
      </div>
  )

  }
};




export default Profile;
