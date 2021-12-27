from gtts import gTTS
import os
  
# The text that you want to convert to audio
welcome = ''' 
  Buenas tardes. los comandos disponibles son los siguientes:
  Mostrar platos. Informe de Ventas. Detallar plato. por ejemplo, Detallar Milanesa.
'''
# Language in which you want to convert
  
myobj = gTTS(text=welcome, lang='es', slow=False, tld='es')
  
myobj.save("static/audios/welcome.mp3")
  
# Playing the converted file
# os.system("start wmplayer welcome.mp3")