import base64
from werkzeug.utils import secure_filename
from flask import Flask, send_from_directory, request,render_template, jsonify 
from pydub import AudioSegment
from flask_cors import CORS

from pyspeach.Pyspeach import Pyspeach
from src.ConnectSQL import ConnectSQL 
from src.utils import parser

test = Pyspeach()
connected = ConnectSQL('root', 'Test1235', 'feeder')

app = Flask(__name__)

CORS(app)
app.config["UPLOAD_FOLDER"] = "static/"

@app.get('/api/atencion')
def atencion():
  menuList = connected.getAll('Opened')

  return jsonify(menuList)

@app.get('/api/platillo/<id>')
def getPlatillo(id):
  menuList = connected.getById(int(id),'Menu')

  return jsonify(menuList)

@app.get('/api/platillos')
def getPlatillos():
  menuList = connected.getAll('Menu')

  return jsonify(menuList)

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

  print(stringify)

  route =  parser(stringify)

  return jsonify({ 'route': route }) 

@app.post('/api/upload-file')
def uploadFile():
  f = request.files['audio']

  filename = secure_filename(f.filename)

  f.save(app.config['UPLOAD_FOLDER'] + filename)

  return 'good'

@app.route('/api/static/<path:path>')
def statics(path):
  return send_from_directory('static', path)


@app.route('/')
def frontend():
  return 'This server is working good!!'

if __name__ == '__main__':
  app.run(debug=True)