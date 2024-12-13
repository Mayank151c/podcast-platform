import React from 'react';
import '../styles/GenreListCard.css';

function GenreListCard(props) {
  return (
    <div id="genre-list-card">
      <div className="fade">{props.data.id.toString().padStart(2, '0')}</div>
      <div>
        <div>{props.data.name}</div>
        <div className="fade">{props.data.author}</div>
      </div>
      <div className="fade">{props.data.type}</div>
      <div className="fade">{props.data.duration}</div>
    </div>
  );
}

export default GenreListCard;
