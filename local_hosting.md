# Local Hosting and Client Access (Using Flask)
### Prerequisite
1. **Python**
2. **Flask**
    - To install open terminal and run:
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
        return send_from_directory(".", index.html)
    
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