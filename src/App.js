import React from 'react';
import './App.css';
// import styled from "styled-components";

// import Title from './components/Title'
// import PersonalInfo from './components/PersonalInfo'
// import PortfolioDescription from './components/PortfolioDescription'
// import PortfolioOrcaStars from './components/PortfolioOrcaStars'
// import PortfolioCoffeeCalculator from './components/PortfolioCoffeeCalculator'
// import PortfolioHealthExplained from './components/PortfolioHealthExplained'
// import PortfolioTravelStars from './components/PortfolioTravelStars'
// import PortfolioUnity3d from './components/PortfolioUnity3d'
// // import ContactMe from './components/ContactMe'
// import Navigation from './components/Navigation'
import Presentation from './components/Presentation'

function App() {
  // const StyledDiv = styled.div`
  //           background-color: orange;
  //       `;
  return (
      <div className="App">
          {/* Presentation component controls content and sidebar (due to the need
            to have the method be handled by presentation and data passed to both components
            through the use of Presentation component) */}
            <Presentation />
      </div>
  );
}

export default App;
