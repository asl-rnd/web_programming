from flask import Flask, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")

# Serve static files from the "html" directory
@app.route("/")
def home():
    return send_from_directory(".", "index5.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)