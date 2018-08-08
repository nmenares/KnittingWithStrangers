import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';

const msp = (state, ownprops) => ({
  currentUser: state.entities.users[state.session.id],
  action: ownprops.location
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Greeting);
