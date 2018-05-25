import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Square extends Component {
  render() {
    const { episodes } = this.props
    const width = `${Math.floor(100 / episodes.length)}%`
    return (
      episodes.map((ep, i) => {
        const w = (Math.random() < 0.5) ? true : false
        return (<div
          key={ep.id}
          style={{ width }}
          className={w ? 'epSquare watched' : 'epSquare unwatched'}
        >
          <p>{`S${ep.season}E${i + 1}`}</p>
        </div>)
      })
    )
  }
}

Square.propTypes = {
  episodes: PropTypes.array.isRequired,
}
export default Square
