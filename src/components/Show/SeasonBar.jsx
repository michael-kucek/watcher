import React, { Component } from 'react'
import PropTypes from 'prop-types'


class SeasonBar extends Component {
  state = {}

  render() {
    const {
      label, season, handleShowEpisodes, percent,
    } = this.props
    return (
      <div
        key={label}
        className="show-season-bars"
        style={{
          width: `${1000 / season.length}%`,
        }}
        onClick={() => handleShowEpisodes(season)}
      >
        <div style={{
          backgroundColor: 'white',
          height: `${100 - percent}%`,
        }}
        >
          {label}
        </div>
      </div>
    )
  }
}

SeasonBar.propTypes = {
  season: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  handleShowEpisodes: PropTypes.func.isRequired,
  percent: PropTypes.number.isRequired,
}
SeasonBar.defaultProps = {}

export default SeasonBar
