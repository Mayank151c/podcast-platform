import React from 'react';
import '../styles/PodcasterCard.css';

function PodcasterCard(props) {
  return (
    <div id="podcaster-card">
      <img src={props.data.image} alt={`${props.data.name}`} />
      <div>
        <div>{props.data.name}</div>
        <div>{props.data.followers}</div>
      </div>
    </div>
  );
}

export default PodcasterCard;
