import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement'
import Banner from './Banner';
import Sales from '../components/Sales';
const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar />
        <Banner />
        <Sales />
    </div>
  )
}

export default Home