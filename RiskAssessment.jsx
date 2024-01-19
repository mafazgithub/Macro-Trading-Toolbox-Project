// macro_trading_toolbox/src/ui/react_app/src/components/RiskAssessment.js
import React from 'react';

const RiskAssessment = ({ portfolioData }) => {
  const { risk_score: riskScore } = portfolioData;

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Risk Assessment</h5>
        <p className="card-text">
          The risk score of your current portfolio is: <strong>{riskScore}</strong>.
        </p>
      </div>
    </div>
  );
};

export default RiskAssessment;
