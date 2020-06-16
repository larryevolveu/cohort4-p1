import os
from flask import Flask, jsonify, request
from flask_cors import CORS

print(__name__)
app = Flask(__name__)
app.secret_key = os.urandom(16)
CORS(app, supports_credentials=True)

@app.route("/")
def hello():
	return "Hello World from the Pipe Application."

@app.route("/larry")
def larry():
    val = mySpecial()
    print('*************', val)
    return "Hello World from route larry###### - " + str(val)

@app.route("/list", methods = ['POST','GET'])
def list():
    myList = ["PipeLine NE 7", "East of really east", "Center Project"]
    return jsonify(myList), 200


@app.route("/save", methods = ['POST','GET'])
def save():
    content = request.get_json()
    print(content)
    return jsonify([]), 200

def mySpecial():
    a = 1 + 1 - 2 * 3
    return 'The ring....' + str(a)

if __name__ == '__main__':
	print("--- Starting", __file__)
	app.run(debug=True, use_reloader=True)
