// macro_trading_toolbox/src/ui/react_app/src/App.js
import React, { useState } from 'react';
import UserInputForm from './components/UserInputForm';
import PortfolioOverview from './components/PortfolioOverview';
import RiskAssessment from './components/RiskAssessment';
import TradingStrategy from './components/TradingStrategy';

const App = () => {
  const [portfolioData, setPortfolioData] = useState({});
  const [tradingSignal, setTradingSignal] = useState('');

  const fetchPortfolioData = () => {
    fetch('/api/portfolio')
      .then(response => response.json())
      .then(data => setPortfolioData(data))
      .catch(error => console.error('Error:', error));
  };

  const fetchTradingSignal = () => {
    fetch('/api/trading_signal')
      .then(response => response.json())
      .then(data => setTradingSignal(data.trading_signal))
      .catch(error => console.error('Error:', error));
  };

  const handleUserInputSubmit = () => {
    fetchPortfolioData();
    fetchTradingSignal();
  };

  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <h1 className="display-4">Macro Trading Toolbox</h1>
        <p className="lead">Explore the powerful features of our trading toolbox.</p>
      </div>
      <UserInputForm onSubmit={handleUserInputSubmit} />
      <PortfolioOverview portfolioData={portfolioData} />
      <RiskAssessment portfolioData={portfolioData} />
      <TradingStrategy tradingSignal={tradingSignal} />
    </div>
  );
};

export default App;
