import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Profile extends React.Component {

  componentDidMount(){
    this.props.fetchMe()
  }

  componentWillMount(){
    this.props.fetchAreas();
  };

  handleFile(e){
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  render(){
    if(!this.props.me) {
      return null;
    }

    const my_kt_ids = this.props.attending_enrollments.map(ae => ae.knittingtime_id);
    const my_kts = my_kt_ids.map(id => this.props.knitting_times[id]);

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
                <h2>Knitting times you're attending</h2>
                <ul> {my_kts.map(kt => (
                    <li key={kt.id}>
                      <p>{moment(kt.date).format('dddd')}</p>
                      <h3>{moment(kt.date).format('MMMM')} {moment(kt.date).date()}</h3>
                      <h4>{kt.start_time} - {kt.end_time}</h4>
                      <p>{kt.address_1}{kt.address_2 ? `, ${kt.address_2}` : null}, {kt.city}, {kt.state}, {kt.zip}</p>
                    </li>
                  ))
                  }
                </ul>
              </div>
              <div className="list-profile">
                <h2>Knitting times you're hosting</h2>
                <ul> {this.props.hosted_knitting_times.map(hkt => (
                    <li key={hkt.id}>
                      <p>{moment(hkt.date).format('dddd')}</p>
                      <h3>{moment(hkt.date).format('MMMM')} {moment(hkt.date).date()}</h3>
                      <h4>{hkt.start_time} - {hkt.end_time}</h4>
                      <p>{hkt.address_1}{hkt.address_2 ? `, ${hkt.address_2}` : null}, {hkt.city}, {hkt.state}, {hkt.zip}</p>
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
