# app.py(Python Backend)
from flask import Flask, request, jsonify
from flask_cors import CORS
# Import your LPP solver function
# from lpp_solver import solve_lpp

app = Flask(__name__)
CORS(app)

@app.route('/solve', methods = ['POST'])
def solve():
data = request.json
    # Call your LPP solver function here
    # result = solve_lpp(data['goal'], data['boundaries'])
    # For now, we'll return a dummy result
result = { "optimal_value": 100, "solution": { "x1": 2, "x2": 3 } }
return jsonify(result)

if __name__ == '__main__':
    app.run(debug = True)

