import React from 'react';

const ProgressBar = (props) => {

  const no_available = (users) => {
    let no_a = []
    for (var i = 0; i <= users ; i++) {
      no_a.push(<div className='no_available'></div>);
    }
    return no_a;
  };

  const available = (users) => {
    let a = []
    for (var i = 6; i > users+1; i--) {
      a.push(<div className='available'></div>);
    }
    return a;
  };

    return (
      <div className="availability">
        {props.users === 5 ? <h2>packed!</h2> : <h2>{5 - props.users} seats left</h2>}
        <div className="progressbar">
          {no_available(props.users)}
          {available(props.users)}
        </div>
      </div>
    )
};

export default ProgressBar;
