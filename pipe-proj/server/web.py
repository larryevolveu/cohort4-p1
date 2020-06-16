import os
from flask import Flask
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

def mySpecial():
    a = 1 + 1 - 2 * 3
    return 'The ring....' + str(a)

if __name__ == '__main__':
	print("--- Starting", __file__)
	app.run(debug=True, use_reloader=True)
