import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMoreStories } from '../actions/loadMoreAction';
import StoriesList from '../components/storiesList';
import InfiniteScroll from 'react-infinite-scroller';
import config from '../config.js';
let page = 0;

class Stories extends Component {
  getMorePhotos = () => {
    page++;
    this.props.loadMoreStories(page);
  }

  render() {

    return (
      <InfiniteScroll
        pageStart={this.page}
        loadMore={this.getMorePhotos}
        hasMore={true} // TODO: Implement logic hasMore page
        threshold={100}
      >
        <StoriesList stories={this.props.stories} loading={this.props.loading}></StoriesList>
      </InfiniteScroll>
    )
  }
}

const mapStatetoProps = state => {
  return {
    stories: state.storyReducer.stories,
    loading: state.storyReducer.loading
  }
}
export default connect(mapStatetoProps, {loadMoreStories})(Stories)
