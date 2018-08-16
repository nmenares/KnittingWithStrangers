import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchMe } from '../../actions/session_actions';
import { fetchAreas } from '../../actions/area_actions';


const msp = (state) => ({
  me: state.entities.users[state.session.id],
  knitting_times: Object.values(state.entities.knitting_times),
  knitting_time_enrollments: state.entities.knitting_times
});

const mdp = (dispatch) => ({
  fetchMe: () => dispatch(fetchMe()),
  fetchAreas: () => dispatch(fetchAreas())
});

export default connect(msp, mdp)(Profile);
