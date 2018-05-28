import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import getInitialData from '../actions/shared'
import Shows from './Show/Shows'
import { getUserShows } from '../utils/db'


class App extends Component {
  componentDidMount() {
    getUserShows().then(d => this.props.dispatch(getInitialData(Object.keys(d))))
  }
  render() {
    return (
      <div>
        <Shows />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(App)
