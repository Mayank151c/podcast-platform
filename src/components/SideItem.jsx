import React from 'react';
import '../styles/SideItem.css';

function SideItem(props) {
  return (
    <div id="side-item">
      <img src={props.icon} alt={`${props.text} icon`} />
      <span>{props.text}</span>
      {props.children}
    </div>
  );
}

export default SideItem;
