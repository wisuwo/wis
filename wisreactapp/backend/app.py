import os
from flask import Flask, request, jsonify, render_template_string, send_from_directory
from flask_cors import CORS

# Set the path to the static folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Path to the directory containing app.py
STATIC_FOLDER = os.path.join(BASE_DIR, "static")  # Path to the static folder

app = Flask(__name__, static_folder=STATIC_FOLDER)
CORS(app)

# Serve .jsx files with the correct MIME type
@app.route("/chatbot.jsx")
def serve_chatbot_jsx():
    response = send_from_directory(app.static_folder, "chatbot.jsx")
    response.headers["Content-Type"] = "text/javascript"
    return response

@app.route("/")
def home():
    return render_template_string("""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chatbot</title>
        <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
        <script type="module" src="{{ url_for('serve_chatbot_jsx') }}"></script>
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>
    """)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    text = data.get("message", "")

    if not text:
        return jsonify({"error": "No message provided"}), 400

    response = get_response(text)
    return jsonify({"answer": response}), 200

if __name__ == "__main__":
    app.run(debug=True)