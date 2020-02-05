import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMoreStories } from '../actions/loadMoreAction';
import StoriesList from '../components/storiesList';
let page = 1;

class Stories extends Component {

  componentDidMount() {
    this.props.loadMoreStories(page);
  }

  getMorePhotos = (e) => {
    e.preventDefault()
    page++;
    this.props.loadMoreStories(page);
  }

  //TODO: Disable loadmore if there is no more page
  render() {
    return (
      <div className="mb-50">
        <StoriesList stories={this.props.stories} loading={this.props.loading}></StoriesList>
        <a href='#' onClick={this.getMorePhotos}>Load More</a>
      </div>
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
