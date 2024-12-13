import React from 'react';
import '../styles/GenreCard.css';

function GenreCard(props) {
  return (
    <div id="genre-card">
      <img src={props.data.image} alt={`${props.data.name}`} />
      <div>{props.data.name}</div>
      <div>{props.data.author}</div>
    </div>
  );
}

export default GenreCard;
