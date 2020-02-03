import React from 'react'
import { Link } from 'react-router-dom';
import imgDefault from '../default.png';

export default function StoriesList(props) {
  if (props.loading) {
    return (
      <div> {"...Stories Loading"} </div>
    )
  }
  else {
    return (
      <div className="row">
        {props.stories.map((story, index) => {
          return (
            <div className="col-xs-6 col-sm-3" key={index}>
              <Link to={`stories/${story.id}`} className="story-link">
                <div className="card iwa-card mb-10">
                  <div className="card-body">
                    <h6 className="card-title">{story.title}</h6>
                    <div className="card-subtitle mb-10 small">{story.domain}</div>
                    <img src={story.cover_image_url ? story.cover_image_url : imgDefault} className="img-fluid img-thumbnail card-img-top mb-10" alt="cover"/>
                    <div className="text-card-footer text-muted">{story.score} points by {story.by} {story.time_ago} ago | {story.descendants} comments</div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        )}
      </div>
    )
  }
}
