import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import WebsiteBanner from './components/WebsiteBanner'
import PersonalInfo from './components/PersonalInfo'
import PortfolioDescription from './components/PortfolioDescription'

function App() {
  return (
    <div className="App">
        <Navigation />
        <WebsiteBanner />
        <PersonalInfo />
        <PortfolioDescription />
    </div>
  );
}

export default App;
