import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleRemoveShow } from '../../actions/shows'
import PropTypes from 'prop-types'

class ShowInfo extends Component {
  state = {}
  unfollow = () => {
    const { dispatch, show } = this.props
    dispatch(handleRemoveShow(show.id))
  }
  render() {
    const { show } = this.props
    return (
      <div>
        <div>{show.name}</div>
        <div>{show.episodeCount} total episodes</div>
        <div>{Math.round((show.runtime * show.episodeCount) / 60, 1)} total hours</div>
        <div>Originally aired on {show.network ? show.network.name : show.webChannel.name}</div>
        <button onClick={this.unfollow}>Unfollow Show</button>
      </div>
    )
  }
}

ShowInfo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  show: PropTypes.object.isRequired,
}
ShowInfo.defaultProps = {}

export default connect()(ShowInfo)
