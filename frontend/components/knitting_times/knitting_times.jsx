import React from 'react';
import KnittingTimeBox from './knitting_time_box'

class KnittingTimes extends React.Component {
  componentDidMount(){
    this.props.fetchAreas();
  }

  render(){
    const areas = this.props.areas.map((area, idx) => (
      <li key={idx}><a href={`#${area.name}`}>{area.name}</a></li>
    ));

    const areaitems = this.props.areas.map((area, idx) => (
      <li key={idx}>

        <div><a name={area.name} >{area.name}</a></div>

        <ul>{area.knitting_time_ids.length > 0 ?
          area.knitting_time_ids.map((kt_id, id)=> (
            <KnittingTimeBox
              key = {id}
              knittingtime ={this.props.knitting_times[kt_id]}
              />
          ))
          : null}</ul>

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
        <div className="introknittingtimes">
          <h2>Knitting With Strangers is knitting, with strangers.</h2>
          <p>Five-ish strangers sit at a cafe (or some other public place) with a host to knitting and talk. Not about anything in particular. The circumstances are unusual, but that's the point.</p>
          <p>If none of these work for you, check back in September, or you can apply to be a Host!</p>
        </div>

        <div className="areas">
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
