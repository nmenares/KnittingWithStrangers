import React from 'react';
import { connect } from 'react-redux';
import KnittingTimeShow from './knitting_time_show';
import { fetchKnittingTime } from '../../actions/knitting_time_actions';


const msp = (state, ownprops) => ({
  ktId: ownprops.match.params.knittingtimeId,
  knittingtime: state.entities.knitting_times[ownprops.match.params.knittingtimeId],
  me: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  fetchKnittingTime: (knittingtimeId) => dispatch(fetchKnittingTime(knittingtimeId))
});

export default connect(msp, mdp)(KnittingTimeShow);
