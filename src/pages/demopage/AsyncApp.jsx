import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  fetchPostsIfNeeded,
} from './model/actions'
import Select from './components/Select'
import Posts from './components/Posts'

const AsyncApp = ({ selectedSubreddit, posts, isFetching, lastUpdated, dispatch }) => {

  useEffect(() => {
    dispatch(fetchPostsIfNeeded(selectedSubreddit)) //初始化的时候加载一下
  }, [])
  return (
    <div>
      <Select value={selectedSubreddit}
        onChange={(val) => { dispatch({ type: "SELECT_SUBREDDIT", subreddit: val }) }}
        options={['reactjs', 'frontend']} />
      <p>
        {lastUpdated &&
          <span>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
          </span>
        }
      </p>
      {isFetching && posts.length === 0 &&
        <h2>Loading...</h2>
      }
      {!isFetching && posts.length === 0 &&
        <h2>Empty.</h2>
      }
      {posts.length > 0 &&
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <Posts posts={posts} />
        </div>
      }
    </div>
  )
}

export default connect(({ selectedSubreddit, postsBySubreddit }) => { //state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
})(AsyncApp)