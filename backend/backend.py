import flask
from flask import jsonify
from flask_cors import CORS
import accounts as Accounts

app = flask.Flask(__name__)
CORS(app)

@app.route('/accounts/<id>', methods=['GET'])
def getAccount(id):
    return jsonify(Accounts.getAccount(id))

app.run()