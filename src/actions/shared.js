import { handleFetchShow } from '../actions/shows'
import { getShowFromAPI } from '../utils/api'

export default function handleInitialData() {
  return (dispatch) => {
    getShowFromAPI(123)
      .then(show => {
        dispatch(handleFetchShow(show))
      })
  }
}
