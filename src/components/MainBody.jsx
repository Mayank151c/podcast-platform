import React from 'react';
import '../styles/MainBody.css';
import GenreCard from './GenreCard';
import GenreListCard from './GenreListCard';
import GenreData from '../assets/images';
import PodcasterData from '../assets/images/podcaster';
import PodcasterCard from './PodcasterCard';

function MainBody(props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: 'white',
  };
  return (
    <div className={props.className} style={style}>
      <div id="discover">Discover</div>
      <div id="recent">Recently Played</div>
      <div id="genre">
        {GenreData.map((data) => (
          <GenreCard key={data.id} data={data} />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div id="genre-podcaster">
          <div>
            <div>
              MOST POPULAR
              <hr />
            </div>
            {GenreData.map((data) => (
              <GenreListCard key={data.id} data={data} />
            ))}
          </div>

          <div>
            <div>
              TOP PODCASTER
              <hr />
            </div>
            {PodcasterData.map((data) => (
              <PodcasterCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;