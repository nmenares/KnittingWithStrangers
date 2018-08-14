import React from 'react';
import { connect } from 'react-redux';
import KnittingTimeShow from './knitting_time_show';
import { fetchKnittingTime } from '../../actions/knitting_time_actions';
import { createEnrollment } from '../../actions/enrollment_actions';


const msp = (state, ownprops) => ({
  ktId: ownprops.match.params.knittingtimeId,
  knittingtime: state.entities.knitting_times[ownprops.match.params.knittingtimeId],
  meId: state.session.id,
  me: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  fetchKnittingTime: (knittingtimeId) => dispatch(fetchKnittingTime(knittingtimeId)),
  createEnrollment: (enrollment) => dispatch(createEnrollment(enrollment))
});

export default connect(msp, mdp)(KnittingTimeShow);
