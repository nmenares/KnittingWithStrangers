import React from 'react';
import { connect } from 'react-redux';
import HostingForm from './hosting_form';
import { createKnittingTime } from '../../actions/knitting_time_actions';
import { deleteErrors } from '../../actions/session_actions';
import { fetchAreas } from '../../actions/area_actions';
import { updateUser, updatePhoto } from '../../actions/user_actions';



const msp = (state, ownprops) => ({
  errors: state.errors.knitting_time_errors,
  msg: "We've made a mistake.",
  action: "create",
  knittingtime: {date: '', start_time: '8:00 AM', end_time: '8:30 AM', address_1: '' , address_2: '', city: '', state: '', zip:'', area_id: ownprops.match.params.areaId, host_id: state.session.id, description: ''},
  sessionId: state.session.id,
  host: state.entities.users[state.session.id],
  area: state.entities.areas[ownprops.match.params.areaId],
  quote: state.entities.users[state.session.id].quote,
  story: state.entities.users[state.session.id].story,
  description: state.entities.users[state.session.id].description
});

const mdp = (dispatch) => ({
  createKnittingTime: (areaid, kt, callback) => dispatch(createKnittingTime(areaid, kt, callback)),
  deleteErrors: () => dispatch(deleteErrors()),
  fetchAreas: () => dispatch(fetchAreas()),
  updateUser: (user) => dispatch(updateUser(user)),
  updatePhoto: (data, id) => dispatch(updatePhoto(data, id))
});

export default connect(msp, mdp)(HostingForm);
