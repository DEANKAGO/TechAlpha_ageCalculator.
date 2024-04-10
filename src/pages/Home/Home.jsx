import React from 'react'
import './home.css'
import { Navbar } from'../../components/Navbar/Navbar';
import { Search } from'../../components/Search/Search';
import { Results } from'../../components/Results/Results';
import { Footer } from'../../components/Footer/Footer';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Results />
      <Search />
      <Footer />
    </div>
  )
}