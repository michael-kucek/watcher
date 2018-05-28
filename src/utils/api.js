import moment from 'moment'

export default async function getShowFromAPI(show) {
  const [s, e] = await Promise.all([fetch(`http://api.tvmaze.com/shows/${show}`), fetch(`http://api.tvmaze.com/shows/${show}/episodes`)])
  const [sData, eData] = await Promise.all([s.json(), e.json()])
  eData.map((ep) => {
    return ep.image
      ? ep
      : Object.assign(ep, {
        image: {
          medium: `http://via.placeholder.com/200x112/ffffff/88888888?text=S${ep.season}E${ep.number}`,
        },
      })
  })
  const seasons = eData[eData.length - 1].season
  const episodes = Array.from({ length: seasons }, () => [])
  eData.map(ep => episodes[ep.season - 1].push(ep))
  const nextEpisode = eData.filter(ep => moment().isBefore(ep.airdate))[0]
  return {
    ...sData,
    episodeCount: eData.length,
    episodes,
    allImages: sData.image,
    image: sData.image.medium,
    nextEpisode,
  }
}
