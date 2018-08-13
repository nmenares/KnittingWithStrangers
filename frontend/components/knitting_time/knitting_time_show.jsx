import React from 'react';

class KnittingTimeShow extends React.Component {

  componentDidMount(){
    this.props.fetchKnittingTime(this.props.knitting_time.id)
  }

  render(){

    return <h1>{this.props.knitting_time.id}</h1>

  }
};



export default KnittingTimeShow;
