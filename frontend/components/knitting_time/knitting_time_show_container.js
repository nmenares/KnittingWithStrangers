import React from 'react';
import { connect } from 'react-redux';
import KnittingTimeShow from './knitting_time_show';
import { fetchKnittingTime } from '../../actions/knitting_time_actions';


const msp = (state, ownprops) => ({
  knitting_time: state.entities.knitting_times[ownprops.match.params.knittingtimeId]
});

const mdp = (dispatch) => ({
  fetchKnittingTime: (knittingtimeId) => dispatch(fetchKnittingTime(knittingtimeId))
});

export default connect(msp, mdp)(KnittingTimeShow);
