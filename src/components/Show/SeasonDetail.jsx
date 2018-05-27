import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SeasonDetail extends Component {
  render() {
    const { selectedSeason } = this.props
    return (
      <table>
        <tbody>
          {selectedSeason.map((ep) => {
            return (
              <tr key={ep.id}>
                <td>
                  <img style={{ maxWidth: '180px' }} src={ep.image.medium} alt={`${ep.id} Placeholder`} />
                </td>
                <td>{ep.number} {ep.name}</td>
                <td>{ep.airDate}</td>
                <td>{ep.summary ? ep.summary.replace(/<[^>]+>/g, '') : 'Spoilers, sweetie!'}</td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
    )
  }
}

SeasonDetail.propTypes = {
  selectedSeason: PropTypes.array.isRequired,
}
SeasonDetail.defaultProps = {

}

export default SeasonDetail
