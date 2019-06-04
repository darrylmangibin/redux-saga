import { connect } from 'react-redux';
import Post from '../components/Post';

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Post)