import React from 'react';

const ArticleTile = (props) => {

  return(
    <div className="article">
      <div><b>Title:</b> {props.title}</div>
      <div><b>Published:</b> {props.published}</div>
    </div>
  )
}

export default ArticleTile;
