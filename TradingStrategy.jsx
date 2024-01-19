// macro_trading_toolbox/src/ui/react_app/src/components/TradingStrategy.js
import React from 'react';

const TradingStrategy = ({ tradingSignal }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Trading Strategy</h5>
        <p className="card-text">
          Based on the current portfolio and risk assessment, the trading strategy suggests:
          <strong> {tradingSignal}</strong>.
        </p>
      </div>
    </div>
  );
};

export default TradingStrategy;
