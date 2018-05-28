import getShowFromAPI from '../utils/api'
import { addShowToUser, removeShowFromUser } from '../utils/db'

export const FETCH_SHOW = 'FETCH_SHOW'
export const ADD_SHOW = 'ADD_SHOW'
export const REMOVE_SHOW = 'REMOVE_SHOW'

function fetchShow(show) {
  return {
    type: FETCH_SHOW,
    show,
  }
}
function removeShow(show) {
  return {
    type: REMOVE_SHOW,
    show,
  }
}
export function handleFetchShow(show) {
  return (dispatch) => {
    getShowFromAPI(show)
      .then(data => dispatch(fetchShow(data)))
  }
}

export function handleAddShow(show) {
  return (dispatch) => {
    addShowToUser(show)
      .then(() => {
        getShowFromAPI(show)
          .then(data => dispatch(fetchShow(data)))
      })
  }
}

export function handleRemoveShow(show) {
  return (dispatch) => {
    removeShowFromUser(show)
      .then(() => dispatch(removeShow(show)))
  }
}
