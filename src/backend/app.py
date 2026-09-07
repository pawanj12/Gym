# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)

# @app.route("/bmi", methods=["POST"])
# def bmi():
#     data = request.json
#     height = float(data["height"]) / 100
#     weight = float(data["weight"])

#     bmi = round(weight / (height * height), 1)

#     if bmi < 18.5:
#         status = "Underweight"
#     elif bmi < 25:
#         status = "Normal"
#     elif bmi < 30:
#         status = "Overweight"
#     else:
#         status = "Obese"

#     return jsonify({"bmi": bmi, "status": status})

# app.run(debug=True)