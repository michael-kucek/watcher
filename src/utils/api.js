
export function _getShowFromAPI(show) {
  return Promise.all([
    fetch(`http://api.tvmaze.com/shows/${show}`),
    fetch(`http://api.tvmaze.com/shows/${show}/episodes`)
  ])
    .then(([s, e]) => Promise.all([s.json(), e.json()])
      .then(([sData, eData]) => {
        console.log('fetched', sData.name)
        const seasons = eData[eData.length - 1].season
        const episodes = Array.from({ length: seasons }, (v, i) => []);
        eData.map(ep => {
          episodes[ep.season - 1].push(ep)
        })
        return {
          id: sData.id,
          name: sData.name,
          status: sData.status,
          image: sData.image.medium,
          episodeCount: eData.length,
          episodes,
          watchedCount: Math.floor(Math.random() * eData.length)
        }
      }))
}

export async function getShowFromAPI(show) {
  const [s, e] = await Promise.all([fetch(`http://api.tvmaze.com/shows/${show}`), fetch(`http://api.tvmaze.com/shows/${show}/episodes`)])
  const [sData, eData] = await Promise.all([s.json(), e.json()])
  console.log('fetched', sData.name)
  const seasons = eData[eData.length - 1].season
  const episodes = Array.from({ length: seasons }, (v, i) => []);
  eData.map(ep => {
    episodes[ep.season - 1].push(ep)
  })
  return {
    id: sData.id,
    name: sData.name,
    status: sData.status,
    image: sData.image.medium,
    episodeCount: eData.length,
    episodes,
    watchedCount: Math.floor(Math.random() * eData.length)
  }
}
