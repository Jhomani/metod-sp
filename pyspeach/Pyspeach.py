import speech_recognition as sr

class Pyspeach:
  __FILENAME: str
  _dicionary = {}

  def __init__(self) -> None:
    self.__FILENAME = '/tmp/recorded.wav'
    # self._sql = ConnectSQL('root', 'Test1235', 'Metodos')

    self._dicionary =  {
      'delete': 'eliminar',
      'update': 'actualizar',
      'get': 'obtener',
      'source': 'tabla',
    }

  def runCommand(self, audiopath: str):
    rec = sr.Recognizer()

    with sr.AudioFile(audiopath) as source:
      rec.adjust_for_ambient_noise(source=source)
      audioData = rec.record(source)

      text = rec.recognize_google(audioData, language="es-ES")
      print(text)

      # return self.handleText(text)

  def setDeleteAct(self, cmd: str):
    self._dicionary['delete'] = cmd

  def setUpdateAct(self, cmd: str):
    self._dicionary['update'] = cmd

  def setGetAct(self, cmd: str):
    self._dicionary['get'] = cmd
