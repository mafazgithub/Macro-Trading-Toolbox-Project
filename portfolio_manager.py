# macro_trading_toolbox/src/portfolio_management/portfolio_manager.py
from .input_module import InputModule
from .rebalancing_algorithm import RebalancingAlgorithm
from .export_functionality import ExportFunctionality
from .trading_strategy import TradingStrategy

class PortfolioManager:
    def __init__(self):
        self.input_module = InputModule()
        self.rebalancing_algorithm = RebalancingAlgorithm()
        self.export_functionality = ExportFunctionality()
        self.trading_strategy = TradingStrategy()

    def manage_portfolio(self):
        user_input = self.input_module.get_user_input()
        current_portfolio = user_input.get('current_portfolio', [])
        risk_score = self.calculate_risk(current_portfolio)
        new_portfolio = self.rebalancing_algorithm.rebalance_portfolio(current_portfolio)
        trading_signal = self.trading_strategy.generate_trading_signal(current_portfolio)
        self.export_functionality.export_portfolio(new_portfolio)
        return {'new_portfolio': new_portfolio, 'risk_score': risk_score, 'trading_signal': trading_signal}

    def calculate_risk(self, portfolio):
        # Placeholder: Improved logic to calculate risk based on portfolio data
        # Example: Standard Deviation of allocation percentages
        risk_score = sum((item['allocation'] - 100) ** 2 for item in portfolio) ** 0.5
        return round(risk_score, 2)
