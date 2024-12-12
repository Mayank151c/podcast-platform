import React from 'react';
import '../styles/Sidebar.css';
import SideItem from './SideItem';
import Icons from '../assets/icons';

function Sidebar(props) {
  return (
    <div id="sidebar" className={props.className}>
      <SideItem text="Thomas" icon={Icons.profile}>
        <img src={Icons.arrowdown} alt="Dropdown Icon" />
      </SideItem>
      <hr />

      <p className="side-heading"> MENU </p>
      <SideItem text="Discover" icon={Icons.home} />
      <SideItem text="Trending" icon={Icons.trending} />
      <SideItem text="Streaming" icon={Icons.queue} />
      <SideItem text="Playlist" icon={Icons.playlist} />
      <SideItem text="Bookmark" icon={Icons.bookmark} />
      <hr />

      <p className="side-heading"> CATEGORY </p>
      <SideItem text="Live Stream" icon={Icons.home} />
      <SideItem text="Tutorial" icon={Icons.trending} />
      <SideItem text="Competition" icon={Icons.queue} />
      <SideItem text="Community" icon={Icons.playlist} />
      <br />
    </div>
  );
}

export default Sidebar;
