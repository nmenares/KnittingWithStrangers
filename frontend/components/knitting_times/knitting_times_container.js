import React from 'react';
import { connect } from 'react-redux';
import KnittingTimes from './knitting_times';
import { fetchAreas, createArea } from '../../actions/area_actions';

const msp = (state) => ({
  areas: Object.values(state.areas)
});

const mdp = (dispatch) => ({
  fetchAreas: () => dispatch(fetchAreas()),
  createArea: (area) => dispatch(createArea(area))
});

export default connect(msp, mdp)(KnittingTimes);
