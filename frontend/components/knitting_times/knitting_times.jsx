import React from 'react';

class KnittingTimes extends React.Component {
  componentDidMount(){
    this.props.fetchAreas();
  }

  render(){
    console.log("areas", this.props.areas)
    const areas = this.props.areas.map((area, idx) => (
      <li key={idx}>{area.name}</li>
    ));

    return(
      <div>
        <div className="areaslist">
          <ul>{areas}</ul>
        </div>
      </div>
    )
  }

}

export default KnittingTimes;
