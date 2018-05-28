import { handleFetchShow } from '../actions/shows'
// import { getUserShows } from '../utils/db'

// const initShows = [123, 1371, 34857]

export default function handleInitialData(initShows) {
  return (dispatch) => {
    initShows.forEach((show) => {
      dispatch(handleFetchShow(show))
    })
  }
}
