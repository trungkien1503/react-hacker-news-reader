import React from 'react';
import imgDefault from '../default.png';

export default function StoryShow(props) {
  if (props.loading) {
    return (
      <div> {"...Story Loading"} </div>
    )
  }
  else {
    const story = props.story;
    return (
      <div className="text-left mb-50">
        <img src={story.cover_image_url ? story.cover_image_url : imgDefault} className="img-fluid cover" alt="Cover preview"/>
        <h2 className="story-title">{story.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: story.content }}/>
      </div>
    )
  }
}
