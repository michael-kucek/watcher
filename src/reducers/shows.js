import { FETCH_SHOW, REMOVE_SHOW } from '../actions/shows'

export default function shows(state = [], action) {
  switch (action.type) {
    case FETCH_SHOW:
      return state.concat([action.show])
    case REMOVE_SHOW:
      return state.filter(show => show.id !== action.show)
    default:
      return state
  }
}
