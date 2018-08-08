import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const msp = (state) => ({
  errors: state.errors,
  formType: "signup",
  navLink: <Link to="/login">Login instead</Link>,
  buttonName: "LET'S KNIT"
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);
