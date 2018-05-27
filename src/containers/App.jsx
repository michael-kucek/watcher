import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import handleInitialData from '../actions/shared'
import Shows from './Shows'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
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
