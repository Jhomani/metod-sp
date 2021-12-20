import base64 
from werkzeug.utils import secure_filename
from flask import Flask, send_from_directory, request,render_template 
from src.main import developBinomio
from pydub import AudioSegment
from flask_cors import CORS

from pyspeach.Pyspeach import Pyspeach

test = Pyspeach()

app = Flask(__name__, static_folder='cli-feeder/build',static_url_path='')

CORS(app)
app.config["UPLOAD_FOLDER"] = "static/"

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

@app.post('/api/saveAudio')
def uploadAudio():
  body = request.json

  temp = "tmp/recorded"
  filePath = "tmp/recorded.wav"

  file =  open(temp, "wb")

  strAudio: str = body['audio']
  encodedFile = strAudio.encode('utf-8')
  file.write(base64.decodebytes(encodedFile))

  audSeg = AudioSegment.from_file(temp)
  audSeg.export(filePath, format="wav")

  stringify = test.runCommand(filePath)

  return { 'command': stringify }

@app.post('/api/upload-file')
def uploadFile():
  f = request.files['audio']

  filename = secure_filename(f.filename)

  f.save(app.config['UPLOAD_FOLDER'] + filename)

  return 'good'

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