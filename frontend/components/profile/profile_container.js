import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchMe } from '../../actions/session_actions';


const msp = (state) => ({
  me: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  fetchMe: () => dispatch(fetchMe())
});

export default connect(msp, mdp)(Profile);
