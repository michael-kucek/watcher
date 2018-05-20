
export function getShowFromAPI(show) {
  return Promise.all([
    fetch(`http://api.tvmaze.com/shows/${show}`),
    fetch(`http://api.tvmaze.com/shows/${show}/episodes`)
  ])
    .then(([s, e]) => Promise.all([s.json(), e.json()])
      .then(([sData, eData]) => {
        return {
          name: sData.name,
          status: sData.status,
          image: sData.image.medium,
          episodeCount: eData.length
        }
      }))
}