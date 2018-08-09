import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, login } from '../../actions/session_actions';


const msp = (state, ownprops) => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  login: (user, callback) => dispatch(login(user, callback))
});

export default connect(msp, mdp)(Greeting);
