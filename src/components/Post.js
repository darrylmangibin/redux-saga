import React from 'react';

import PostList from './PostList';

class Post extends React.Component {

  componentDidMount() {
    this.props.postsRequest()
  }

  renderPostList = (posts) => {
    return posts.map(post => {
      return (
        <PostList 
          key={post.id}
          title={post.title}
        />
      )
    })
  }

  renderErrorLoadingTitle = (error, loading) => {
    if(error) {
      return <h4>{error}</h4>
    } else if(loading) {
      return <h5>Loading...</h5>
    }
    return <h1>Post List</h1>
  }

  render() {
    const { posts, error, loading } = this.props.posts
    console.log(this.props)
    return (
      <div>
        {this.renderErrorLoadingTitle(error, loading)}
        <ul>
          {this.renderPostList(posts)}
        </ul>
      </div>
    )
  }
}

export default Post;