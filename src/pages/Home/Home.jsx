import React from 'react';
import './home.css';
import { Navbar } from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Search />
      <Footer />
    </div>
  );
};
