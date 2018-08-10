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
      <div className="areas">
        <div className="areaslist">
          <h2>JUMP TO YOUR CITY'S KNITTING TIMES</h2>
          <ul>{areas}</ul>
        </div>
        <div className="areaitems">
          <ul>{areaitems}</ul>
        </div>
      </div>
    )
  }

}

export default KnittingTimes;
