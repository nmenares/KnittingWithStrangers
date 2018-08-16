import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchMe } from '../../actions/session_actions';
import { fetchAreas } from '../../actions/area_actions';


const msp = (state) => ({
  me: state.entities.users[state.session.id],
  hosted_knitting_times: Object.values(state.entities.knitting_times).filter(kt => kt.host_id === parseInt(state.session.id)),
  attending_enrollments: Object.values(state.entities.knitting_time_enrollments).filter(kt => kt.user_id === parseInt(state.session.id)),
  knitting_times: state.entities.knitting_times,
  users: state.entities.users
});

const mdp = (dispatch) => ({
  fetchMe: () => dispatch(fetchMe()),
  fetchAreas: () => dispatch(fetchAreas())
});

export default connect(msp, mdp)(Profile);
