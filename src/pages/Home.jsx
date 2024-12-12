import React from 'react';
import '../styles/Home.css';
import Sidebar from '../components/Sidebar';
import MainBody from '../components/MainBody';

function Home(props) {
  return (
    <nav className="home">
      <Sidebar className="sidebar" />
      <MainBody className="main-body" />
    </nav>
  );
}

export default Home;
