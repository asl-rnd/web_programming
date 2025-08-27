# Local Hosting and Client Access (Using Flask)
### Prerequisite
1. **Python**
2. **Flask**
    - To install flask - open terminal and run:
        ```cmd
            pip install flask
        ```

### My Project Structure (No Sub-Directory)
```pgsql
    project/
        index.html
        app.py
```

### Flask Server (app.py)
```python
    from flask import Flask, send_from_directory

    app = Flask(__name__, static_folder=".", static_url_path="")

    # Serve index.html
    @app.route("/")
    def home():
        return send_from_directory(".", "index.html")
    
    if __name__ == "__main__":
        # '0.0.0.0' makes server visible to others in sam LAN.
        app.run(host="0.0.0.0", port=5000, debug=False)
```

### Run the Server
- In terminal:
    ```cmd
        python app.py
    ```
- It will show something like:
    ```csharp
        * Running on http://192.168.0.120:5000/
    ```
- Copy the web link `http://192.168.0.120:5000/` and run it in a web broser.
- Press `ctrl + c` to quit the server.

---

## Explanation of `app.py`

####
```
from flask import Flask, send_from_directory
```
- Imports Flask → the web framework that lets you create the server.
- Imports `send_from_directory` → a helper function that serves files (like index.html, images, CSS, etc.) from a folder you specify.

####
```
app = Flask(__name__, static_folder=".", static_url_path="")
```
- Creates the Flask app (the server object).
- `__name__` tells Flask where the app is located.
- `static_folder="."` → `"."` means “the current directory”, so Flask will treat your project root as the folder for static files (HTML, CSS, images, etc.).
- `static_url_path=""` → ensures static files can be served directly at the root `(/)` instead of `/static/`.<br>
👉 This means if you type http://localhost:5000/index.html, Flask will look in the root folder of your project.

####
```code
@app.route("/")
def home():
return send_from_directory(".", index.html)
```

- `@app.route("/")` → defines what should happen when someone visits `/` (the root URL, e.g., `http://localhost:5000/`).
- `def home()`: → defines the function that runs for that route.
- `return send_from_directory(".", index.html)` → sends a file from the current directory `(".")`.

####
```code
if __name__ == "__main__":
    # '0.0.0.0' makes server visible to others in same LAN.
    app.run(host="0.0.0.0", port=5000, debug=False)
```
- `if __name__ == "__main__"`: → ensures the app runs only if you directly execute `app.py`.
- `app.run(host="0.0.0.0", port=5000, debug=False)` →
    - `host="0.0.0.0"` makes the server accessible to other devices in the same LAN (like students in your class).
    - `port=5000` → the port number for your app (`http://your-ip:5000`).
    - `debug=False` → disables debug mode (students won’t see sensitive error details).