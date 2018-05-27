import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import SeasonDetail from './SeasonDetail'
import SeasonBar from './SeasonBar'

class ShowTile extends Component {
  state = { showingDetail: false, selectedSeason: null }
  handleShowEpisodes = season => this.setState({
    selectedSeason: season,
    showingDetail: !this.state.showingDetail,
  })
  render() {
    const { show } = this.props
    const SeasonBars = () => {
      return show.episodes.map((season, i) => {
        const eps = Math.floor((Math.random() * season.length))
        const p = Math.floor(100 * (eps / season.length))
        const text = `S${i + 1} ${eps}/${season.length}`
        return (
          <SeasonBar
            key={text}
            label={text}
            percent={p}
            season={season}
            handleShowEpisodes={this.handleShowEpisodes}
          />
        )
      })
    }
    return (
      <Fragment>
        <div className="show-tile-title-container">
          <span className="show-tile-title">{show.name}</span>
          <span className="show-tile-upcoming">
            {
              show.nextEpisode
                ? `${show.nextEpisode.name} is airing soon!`
                : 'No Upcoming Episodes'
            }
          </span>
        </div>
        <div key={show.id} className="show-tile">
          <div className="show-tile-poster">
            <img src={show.image} alt={`Poster for ${show.name}`} />
          </div>
          {SeasonBars()}
        </div>
        {
          this.state.showingDetail
            ? <SeasonDetail selectedSeason={this.state.selectedSeason} />
            : <div />
        }
      </Fragment>
    )
  }
}

ShowTile.propTypes = {
  show: PropTypes.object.isRequired,
}
// give showseason a child that's a button that toggles THIS state
// to avoid prop up and down a function or something
export default ShowTile
