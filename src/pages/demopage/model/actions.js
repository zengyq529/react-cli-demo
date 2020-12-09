import fetch from 'cross-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'


function fetchPosts(subreddit) {
  return dispatch => {
    dispatch({ type: REQUEST_POSTS, subreddit })
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(({ data: { children } }) => dispatch({
        type: RECEIVE_POSTS,
        subreddit,
        posts: children.map(child => child.data),
        receivedAt: Date.now()
      }))
  }
}


export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    const posts = getState().postsBySubreddit[subreddit]
    if (!posts || posts.didInvalidate) {
      dispatch(fetchPosts(subreddit))
    }
  }
}