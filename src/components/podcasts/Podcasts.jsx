import React, { useState } from 'react';
import GenreCard from '../GenreCard';
import genres from '../../assets/images';
import '../../styles/Podcasts.css';
function Podcasts() {
  const [query, setQuery] = useState('');

  const filteredData = genres.filter(
    (genre) =>
      genre.name.toLowerCase().includes(query.toLowerCase()) ||
      genre.author.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="podcast-container">
      <div className="podcast-page">
        <h2>Discover Podcast</h2>
        <input
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="custom-input"
        />
        <div id="genre">
          {filteredData.length > 0 ? (
            filteredData.map((data) => <GenreCard key={data.id} data={data} />)
          ) : (
            <div>No podcasts found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
