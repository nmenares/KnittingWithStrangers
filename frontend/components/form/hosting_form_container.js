import React from 'react';
import { connect } from 'react-redux';
import HostingForm from './hosting_form';
import { createKnittingTime } from '../../actions/knitting_time_actions';



const msp = (state, ownprops) => ({
  action: "create",
  knittingtime: {date: '', start_time: '', end_time: '', address_1: '' , address_2: '', city: '', state: '', zip:'', area_id: ownprops.match.params.areaId, host_id: state.session.id, description: ''},
  sessionId: state.session.id,
  host: state.entities.users[state.session.id],
  area: state.entities.areas[ownprops.match.params.areaId]
});

const mdp = (dispatch) => ({
  formType: (areaid, kt) => dispatch(createKnittingTime(areaid, kt))
});

export default connect(msp, mdp)(HostingForm);
