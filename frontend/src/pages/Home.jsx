import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement'
import Banner from './Banner';
const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar />
        <Banner/>
    </div>
  )
}

export default Home