import React from 'react';

function MainBody(props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: 'white',
  };
  return (
    <div className={props.className} style={style}>
      <div>Discover</div>

      <div>RECENTLY PLAYED</div>
    </div>
  );
}

export default MainBody;
