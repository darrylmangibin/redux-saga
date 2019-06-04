import { connect } from 'react-redux';
import Post from '../components/Post';
import { postsRequest } from '../actions'

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postsRequest: () => dispatch(postsRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)