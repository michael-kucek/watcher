import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleFetchShow } from '../actions/shows'

class Show extends Component {
  state = { value: '' }
  handleChange = (e) => this.setState({ value: e.target.value })
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleFetchShow(this.state.value))
    this.setState({ value: '' })
  }
  render() {
    return (
      <Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Fetch Show:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className='show-img' >
          <img src={this.props.image} />
          {this.props.name} | {this.props.status} | {this.props.episodeCount} episodes

        </div>
      </Fragment>
    )
  }
}

function mstp({ shows }) {
  return shows
}

export default connect(mstp)(Show)