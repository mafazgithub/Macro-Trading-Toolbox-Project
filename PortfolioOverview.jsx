// macro_trading_toolbox/src/ui/react_app/src/components/PortfolioOverview.js
import React, { useEffect, useState } from 'react';

const PortfolioOverview = ({ portfolioData }) => {
  const renderPortfolioTable = () => {
    const { new_portfolio: newPortfolio, risk_score: riskScore } = portfolioData;

    if (!newPortfolio || newPortfolio.length === 0) {
      return <p>No portfolio data available.</p>;
    }

    return (
      <div>
        <h5>Rebalanced Portfolio:</h5>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Asset</th>
              <th scope="col">Allocation (%)</th>
            </tr>
          </thead>
          <tbody>
            {newPortfolio.map((asset, index) => (
              <tr key={index}>
                <td>{asset.asset}</td>
                <td>{asset.allocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Risk Score: {riskScore}</p>
      </div>
    );
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Portfolio Overview</h5>
        {renderPortfolioTable()}
      </div>
    </div>
  );
};

export default PortfolioOverview;
