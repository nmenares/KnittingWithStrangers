import React from 'react';
import KnittingTimeBox from './knitting_time_box';
import moment from 'moment';
import { HashLink } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';

class KnittingTimes extends React.Component {
  constructor(props){
    super(props);
    // this.state = Object.assign({}, this.props.areas);
  }

  componentDidMount(){
    this.props.fetchAreas();
    window.scrollTo(0, 0);
  }

  handleHosting(area, e){
    this.props.me ?
    this.props.history.push(`/areas/${area.id}/hosting`) :
    this.props.history.push(`/login`)
  }

  render(){

    if (!this.props.areas || !this.props.knitting_time_enrollments ) {
      return null;
    }

    const today = moment();

    const next_kt_gap = (21 - today.date());

    const areas = this.props.areas.map((area, idx) => (
      <li key={idx}><HashLink to={`/knitting_times#city-${area.id}`}>{area.name}</HashLink></li>
    ));

    const areaitems = this.props.areas.map((area, idx) => (
      <li key={idx}>
        <ul className="area-kt">
          <li className="areaindex" id={`city-${area.id}`}>
            <h2>{area.name}
              <br></br>
              <button onClick={this.handleHosting.bind(this, area)}>Host a knitting time</button>
            </h2>
          </li>
          { area.knitting_times.length > 0 ?

          area.knitting_times.map((kt)=> (
            <KnittingTimeBox
              key={kt}
              knittingtime={this.props.knitting_times[kt]}
              enrollments={this.props.knitting_time_enrollments.filter( kte => kte.knittingtime_id === kt && kte.going).length}
              me={this.props.knitting_time_enrollments.some( info => info.user_id === this.props.meId && info.knittingtime_id === kt && info.going)}
              host={this.props.users[this.props.knitting_times[kt].host_id]}
              />
          ))
          : null}
        </ul>
      </li>
    ));

    return(
      <div className="knittingtimes">

        <div className="mainimage">
          <img src={window.knittingtimes} />
          <div className="maintext">
            <h1>Good Knitting Ideas</h1>
            <h2>they're hard to find.</h2>
          </div>
        </div>

        <div className="errors"></div>

        <div className="introknittingtimes">
          <h2>Knitting With Strangers is knitting, with strangers.</h2>
          <p>Five-ish strangers sit at a cafe (or some other public place) with a host to knit and talk. Not about anything in particular. The circumstances are unusual, but that's the point.</p>
          <p>If none of these work for you, check back in {`${moment().add(1, "month").format('MMMM')}`}, or you can apply to be a Host!</p>
        </div>

        <div className="areas">

          <div className="prefilter">
            <div className="month">
              <img src={window.calendar} />
              knitting times in {moment().format('MMMM')}
              {next_kt_gap <= 0 ? ` and ${today.add(1, "month").format('MMMM')}` : null}
            </div>
            <div className="nextmonth">
              {next_kt_gap > 0 ?
                <div>{`${today.add(1, "month").format('MMMM')}'s`} knitting times available in {next_kt_gap} days</div>
                :
                <div>{`${today.add(1, "month").format('MMMM')}'s`} knitting times available in 1 month</div>
              }
            </div>
          </div>

          <div className="areaslist">
            <h2>JUMP TO YOUR CITY'S KNITTING TIMES</h2>
            <ul>{areas}</ul>
          </div>

          <div className="areaitems">
            <ul>{areaitems}</ul>
          </div>

        </div>

      </div>
    )
  }

}

export default withRouter(KnittingTimes);
