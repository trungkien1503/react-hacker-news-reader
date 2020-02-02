import React from 'react';

export default function StoryShow(props) {
  if (props.loading) {
    return (
      <div> {"...Story Loading"} </div>
    )
  }
  else {
    const story = props.story;
    return (
      <div className="text-left story-content">
        <img src={story.cover_image_url} className="img-fluid cover" alt="Cover preview"/>
        <h2 className="story-title">{story.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: story.content }}/>
      </div>
    )
  }
}
