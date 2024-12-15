import React from 'react';
import '../styles/Sidebar.css';
import SideItem from './SideItem';
import {
  AccountCircleOutlined,
  KeyboardArrowDownOutlined,
  Home,
  TrendingUp,
  QueueMusic,
  PlaylistPlay,
  Book,
} from '@mui/icons-material';

function Sidebar(props) {
  return (
    <div id="sidebar" className={props.className}>
      <SideItem text="Thomas" Icon={AccountCircleOutlined}>
        <KeyboardArrowDownOutlined />
      </SideItem>
      <hr />

      <p className="side-heading"> MENU </p>
      <SideItem text="Discover" Icon={Home} />
      <SideItem text="Trending" Icon={TrendingUp} />
      <SideItem text="Streaming" Icon={QueueMusic} />
      <SideItem text="Playlist" Icon={PlaylistPlay} />
      <SideItem text="Bookmark" Icon={Book} />
      <hr />

      <p className="side-heading"> CATEGORY </p>
      <SideItem text="Live Stream" Icon={Home} />
      <SideItem text="Tutorial" Icon={TrendingUp} />
      <SideItem text="Competition" Icon={QueueMusic} />
      <SideItem text="Community" Icon={PlaylistPlay} />
      <br />
    </div>
  );
}

export default Sidebar;
