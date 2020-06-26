import os
from flask import Flask, jsonify, request
from flask_cors import CORS

import persist.sql as persist

print(__name__)
app = Flask(__name__)
app.secret_key = os.urandom(16)
CORS(app, supports_credentials=True)


@app.route("/")
def hello():
	return "Hello World from the Pipe Application v3."


@app.route("/larry")
def larry():
    return "Hello World from route /larry"


@app.route("/list", methods = ['POST','GET'])
def listPipelines():
    pipelines = persist.get_pipelines()
    return jsonify(pipelines), 200


@app.route("/save", methods = ['POST','GET'])
def save():
    content = request.get_json()
    id = content['id']
    if id:
        persist.update_pipeline(id, content['name'], content['data'])
    else:
        id = persist.insert_pipeline(content['name'], content['data'])
    return jsonify({'id':id}), 200


@app.route("/load", methods = ['POST','GET'])
def load():
    content = request.get_json()
    data = persist.load_pipeline(content['id'])
    return jsonify({'data':data}), 200


if __name__ == '__main__':
	print("--- Starting", __file__)
	app.run(debug=True, use_reloader=True)
