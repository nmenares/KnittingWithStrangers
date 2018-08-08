import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const msp = (state) => ({
  errors: state.errors.errors,
  formType: "signup",
  title: "Hey stranger!",
  text: "1000s of strangers across the world have sat together for conversations and knittings. Create an account and you'll be on your way to join the community.",
  redirect: <Link to="/login">If you've already done this before, click here to log in</Link>,
  buttonName: "LET'S KNIT"
});

const mdp = (dispatch) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);
