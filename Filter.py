from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/call_python_function')
def call_python_function():
    result = your_python_function()  # Call your Python function here
    return result

def your_python_function():
    # Your Python function logic here
    return "Hello from Python!"

if __name__ == '__main__':
    app.run(debug=True)