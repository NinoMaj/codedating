import { FETCH_PROJECTS } from '../actions';

const INITIAL_STATE = {
  data: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    default:
      return state;
  }
}
