import React from 'react';
import { connect } from 'react-redux';
import HostingForm from './hosting_form';



const msp = (state, ownprops) => ({
  sessionId: state.session.id,
  host: state.entities.users[state.session.id],
  area: state.entities.areas[ownprops.match.params.areaId]
});

const mdp = undefined;

// const mdp = (dispatch) => ({
//
// });

export default connect(msp, mdp)(HostingForm);
