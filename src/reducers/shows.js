import { FETCH_SHOW } from '../actions/shows'

export default function shows(state = [], action) {
  switch (action.type) {
    case FETCH_SHOW:
      return state.concat([action.show])
    default:
      return state
  }
}
