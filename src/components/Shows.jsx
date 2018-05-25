import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleFetchShow } from '../actions/shows'
import Square from '../svgs/square'
// import Pie from './Pie'

class Shows extends Component {
  state = { value: '' }
  handleChange = (e) => this.setState({ value: e.target.value })
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleFetchShow(this.state.value))
    this.setState({ value: '' })
  }
  render() {
    const { shows } = this.props
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
        {
          shows ?
            shows
              .sort((a, b) => a.name > b.name)
              .map(show => {
                return (
                  <div key={show.id} className="show-tile">
                    <img src={show.image} className="show-tile-poster" alt={`Poster for ${show.name}`} />
                    {/* <Pie angle={angle} /> */}
                    <ul className="show-tile-info">
                      <li className="show-tile-title">{show.name}</li>
                      <li className="show-tile-status">{show.status}</li>
                      <li className="show-tile-watched">{show.watchedCount}/{show.episodeCount} episodes watched</li>
                    </ul>
                    <div className="season-squares">
                      {
                        show.episodes.map((season, i) => {
                          return (
                            <div className="show-squares">
                              <Square key={season[0].id} episodes={season} />
                            </div>
                          )
                        })
                      }
                    </div>

                  </div>
                )
              })
            : <div />
        }
      </Fragment>
    )
  }
}

function mstp({ shows }) {
  return { shows }
}

export default connect(mstp)(Shows)