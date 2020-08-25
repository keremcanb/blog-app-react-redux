import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const PostList = () => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return <div>Post List</div>;
};

export default connect(null, { fetchPosts: fetchPosts })(PostList);

// class PostList extends React.Component {
//   render() {
//     return <div>Post List</div>;
//   }
// }
