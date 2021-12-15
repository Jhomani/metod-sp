from os import defpath
from flask import Flask, send_from_directory, request,render_template 
from src.main import developBinomio
import json

app = Flask(__name__, static_folder='cli-feeder/build',static_url_path='')

@app.get('/api/platillos')
def getPlatillos():
  body = request.json

  jsonResult = developBinomio(
    body['pow'], 
    body['firstTerm'], 
    body['secTerm'], 
  )

  return jsonResult

@app.route('/api/template')
def template():
  return render_template('index.html')

@app.post('/api/template')
def binomio():
  body = request.json

  jsonResult = developBinomio(
    body['pow'], 
    body['firstTerm'], 
    body['secTerm'], 
  )

  return jsonResult

@app.route('/api/static/<path:path>')
def statics(path):
  return send_from_directory('static', path)


@app.route('/')
def frontend():
  return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
  app.run(debug=True)