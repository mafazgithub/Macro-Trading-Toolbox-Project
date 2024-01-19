from flask import Flask, jsonify
from flask_cors import CORS
from portfolio_management import PortfolioManager

app = Flask(__name__)
CORS(app)

portfolio_manager = PortfolioManager()

@app.route('/api/user_input', methods=['POST'])
def receive_user_input():
    # Placeholder: Process user input (expected in JSON format)
    user_input = request.get_json()
    # Add any necessary logic for processing user input
    return jsonify({"message": "User input received successfully"}), 200

@app.route('/api/portfolio')
def get_portfolio_data():
    portfolio_data = portfolio_manager.manage_portfolio()
    return jsonify(portfolio_data)

@app.route('/api/trading_signal')
def get_trading_signal():
    trading_signal = portfolio_manager.trading_strategy.generate_trading_signal([])
    return jsonify({"trading_signal": trading_signal})

if __name__ == '__main__':
    app.run(debug=True)
