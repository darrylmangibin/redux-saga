import React from 'react';

import PostList from './PostList';

class Post extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>POST</h1>
        <PostList />
      </div>
    )
  }
}

export default Post;