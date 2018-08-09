import React from 'react';

class KnittingTimes extends React.Component {
  componentDidMount(){
    this.props.fetchAreas();
  }

  render(){
    const areas = this.props.areas.map((area, idx) => (
      <li key={idx}>{area.name}</li>
    ))
    return(
      <ul>{areas}</ul>
    )
  }

}

export default KnittingTimes;
