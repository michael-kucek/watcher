import React, { Component } from 'react'
import PropTypes from 'prop-types'

// https://github.com/reactjs/react-transition-group/tree/v1-stable
// implement this at some point
// for unmount transitions

class SeasonDetail extends Component {
  render() {
    const { selectedSeason } = this.props
    return (
      <div className="season-detail-container">
        <table>
          <tbody>
            {selectedSeason.map((ep) => {
              return (
                <tr key={ep.id}>
                  <td>
                    <div className="episode-detail-header">
                      <img style={{ maxWidth: '180px' }} src={ep.image.medium} alt={`${ep.id} Placeholder`} />
                      <span>{ep.number} {ep.name}</span>
                    </div>
                  </td>
                  <td className="episode-detail-summary">{ep.summary ? ep.summary.replace(/<[^>]+>/g, '') : 'Spoilers, sweetie!'}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

SeasonDetail.propTypes = {
  selectedSeason: PropTypes.array.isRequired,
}
SeasonDetail.defaultProps = {

}

export default SeasonDetail
