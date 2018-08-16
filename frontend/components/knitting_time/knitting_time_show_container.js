import React from 'react';
import { connect } from 'react-redux';
import KnittingTimeShow from './knitting_time_show';
import { fetchKnittingTime } from '../../actions/knitting_time_actions';
import { createEnrollment } from '../../actions/enrollment_actions';
import { fetchAreas } from '../../actions/area_actions';


const msp = (state, ownprops) => ({
  users: state.entities.users,
  knitting_time_enrollments: Object.values(state.entities.knitting_time_enrollments),
  me: state.entities.users[state.session.id],
  meId: state.session.id,
  ktId: ownprops.match.params.knittingtimeId,
  knittingtime: state.entities.knitting_times[ownprops.match.params.knittingtimeId],
});

const mdp = (dispatch) => ({
  fetchKnittingTime: (knittingtimeId) => dispatch(fetchKnittingTime(knittingtimeId)),
  createEnrollment: (enrollment, callback) => dispatch(createEnrollment(enrollment, callback)),
  fetchAreas: () => dispatch(fetchAreas())
});

export default connect(msp, mdp)(KnittingTimeShow);
