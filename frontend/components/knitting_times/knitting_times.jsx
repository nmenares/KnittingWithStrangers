import React from 'react';
import KnittingTimeBox from './knitting_time_box';
import moment from 'moment';
import { HashLink } from 'react-router-hash-link';

class KnittingTimes extends React.Component {
  componentDidMount(){
    this.props.fetchAreas();

  }

  render(){
    //sconst { areas } = this.props;
    console.log(this.props);
    const areas = this.props.areas.map((area, idx) => (
      <li key={idx}><HashLink to={`/knitting_times#city-${area.id}`}>{area.name}</HashLink></li>
    ));

    const areaitems = this.props.areas.map((area, idx) => (
      <li key={idx}>
        <ul className="area-kt">
          <li className="areaindex" id={`city-${area.id}`}>
            <h2>{area.name}
              <br></br>
              <button>Host a knitting time</button>
            </h2>
          </li>
          {area.knitting_time_ids.length > 0 ?
          area.knitting_time_ids.map((kt_id, id)=> (
            <KnittingTimeBox
              key = {id}
              knittingtime ={this.props.knitting_times[kt_id]}
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
            <h2>they're hare to find.</h2>
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
              {(21 - moment().date()) <= 0 ? moment().add(1, "month").format('MMMM') : null}
            </div>
            <div className="nextmonth">
              {(21 - moment().date()) > 0 ?
                <div>{`${moment().add(1, "month").format('MMMM')}'s`} knitting times available in {21 - moment().date()} days</div>
                :
                null
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

export default KnittingTimes;
