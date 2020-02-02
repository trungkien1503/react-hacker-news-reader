import config from '../config.js';

export function fetchSingleStory(storyId) {
  return (dispatch) => {
    dispatch({type: 'LOADING_SINGLE_STORY'});
    return (
      fetch(`${config['API_URL']}/api/v1/posts/${storyId}.json`)
      .then(resp => resp.json())
      .then(story => {
        dispatch({type: 'FETCH_SINGLE_STORY', payload: story})
      })
    )
  }
}
