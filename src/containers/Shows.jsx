import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleFetchShow } from '../actions/shows'
// import Square from '../svgs/square'
import ShowTile from '../components/Show/ShowTile'
import './shows.css'

class Shows extends Component {
  state = { value: '' }
  handleChange = e => this.setState({ value: e.target.value })
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleFetchShow(this.state.value))
    this.setState({ value: '' })
  }
  render() {
    const { shows } = this.props
    const AllShows = () => {
      if (shows) {
        return shows
          .sort((a, b) => a.name > b.name)
          .map(show => <ShowTile key={show.name} show={show} />)
      }
      return <div />
    }
    return (
      <Fragment>
        <div>
          <form name="get-show-form" onSubmit={this.handleSubmit}>
            <label htmlFor="get-show-form">
              Fetch Show:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        {AllShows()}
      </Fragment>
    )
  }
}

function mstp({ shows }) {
  return { shows }
}

export default connect(mstp)(Shows)
