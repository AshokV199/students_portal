from flask import  Flask,jsonify
app = Flask(__name__)

@app.route('/login')
def login():

    return jsonify('test')

if __name__ =="__main__":
    app.run(debug=True)