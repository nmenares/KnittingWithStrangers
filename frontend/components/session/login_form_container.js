import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, deleteErrors } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';

const msp = (state) => ({
  errors: state.errors.errors,
  formType: "login",
  email: "Email",
  msg: "Invalid email or password.",
  password: "Password",
  title: "Hey Stranger!",
  text: "It's good to have you back. Sign in here and sign up for your next knitting time!",
  redirect: <Link to="/signup">If you've never signed up before, click here and do that.</Link>,
  buttonName: "SIGN IN"
});

const mdp = (dispatch) => ({
  processForm: (user, callback) => dispatch(login(user, callback)),
  deleteErrors: () => dispatch(deleteErrors())
});

export default withRouter(connect(msp, mdp)(SessionForm));
