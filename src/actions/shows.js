import getShowFromAPI from '../utils/api'

export const FETCH_SHOW = 'FETCH_SHOW'

function fetchShow(show) {
  return {
    type: FETCH_SHOW,
    show,
  }
}

export function handleFetchShow(show) {
  return (dispatch) => {
    getShowFromAPI(show)
      .then(data => dispatch(fetchShow(data)))
  }
}
