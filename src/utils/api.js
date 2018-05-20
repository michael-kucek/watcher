
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


    // {
    //   console.log(s, e)
    //   // return {
    //   //   name: data.name,
    //   //   status: data.status,
    //   //   image: data.image.medium,
    //   //   // episodeCount: data._embedded.episodes.length,
    //   // }
    // })
    // // .then(response => {
    // //   return response.json().then(data => {
    // //     if (response.ok) {
    // //       // return data
    // //       return {
    // //         name: data.name,
    // //         status: data.status,
    // //         image: data.image.medium,
    // //         // episodeCount: data._embedded.episodes.length,
    // //       }
    // //     } else {
    // //       return Promise.reject({ status: response.status, data });
    // //     }
    // //   });
    // // })
    // .then(result => result)
    // .catch(error => console.log('error:', error));
