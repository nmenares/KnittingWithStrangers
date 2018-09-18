import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchMe } from '../../actions/session_actions';
import { fetchAreas } from '../../actions/area_actions';
import { deleteEnrollment, updateEnrollment } from '../../actions/enrollment_actions';
import { deleteKnittingTime, updateKnittingTime } from '../../actions/knitting_time_actions';


const msp = (state) => ({
  me: state.entities.users[state.session.id],
  hosted_knitting_times: Object.values(state.entities.knitting_times).filter(kt => kt.host_id === parseInt(state.session.id)),
  attending_enrollments: Object.values(state.entities.knitting_time_enrollments).filter(kt => kt.user_id === parseInt(state.session.id)),
  all_enrollments: Object.values(state.entities.knitting_time_enrollments),
  knitting_times: state.entities.knitting_times,
  users: state.entities.users
});

const mdp = (dispatch) => ({
  fetchMe: () => dispatch(fetchMe()),
  fetchAreas: () => dispatch(fetchAreas()),
  deleteKnittingTime: (id) => dispatch(deleteKnittingTime(id)),
  updateKnittingTime: (data) => dispatch(updateKnittingTime(data)),
  deleteEnrollment: (id) => dispatch(deleteEnrollment(id)),
  updateEnrollment: (data) => dispatch(updateEnrollment(data))
});

export default connect(msp, mdp)(Profile);
