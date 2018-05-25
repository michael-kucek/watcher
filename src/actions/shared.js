import { handleFetchShow } from '../actions/shows'

const initShows = [123, 1371, 34857]

export default function handleInitialData() {
  return (dispatch) => {
    initShows.forEach(show => {
      console.log('dispatching', show)
      dispatch(handleFetchShow(show))
    })
  }
}
