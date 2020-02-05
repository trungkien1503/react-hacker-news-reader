import config from '../config.js';

export function loadMoreStories(page) {
  return (dispatch) => {
    return (
      fetch(`${config['API_URL']}/api/v1/posts.json?page=${page}`)
      .then(resq => resq.json())
      .then(stories => {
        dispatch({type: 'LOADMORE_STORIES', payload: stories })
      })
      .catch(function(error) {
        console.log('There has been a problem with your posts fetch operation:', error.message)
      })
    )
  }
}
