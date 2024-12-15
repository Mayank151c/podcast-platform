import React from 'react';
import '../styles/SideItem.css';

function SideItem({ Icon, ...props }) {
  return (
    <div id="side-item">
      <Icon id="side-icon" />
      <span>{props.text}</span>
      {props.children}
    </div>
  );
}

export default SideItem;
