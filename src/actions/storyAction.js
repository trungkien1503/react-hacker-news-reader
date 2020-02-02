import config from '../config.js';

export function fetchStories() {
  return (dispatch) => {
    dispatch({type: 'LOADING_STORIES'});
    return (
      fetch(`${config.API_URL}/api/v1/posts`)
      .then(resq => resq.json())
      .then(stories => {
        dispatch({type: 'FETCHING_STORIES', payload: stories })
      })
      .catch(function(error) {
        console.log('There has been a problem with your posts fetch operation:', error.message)
      })
    )
  }
}
