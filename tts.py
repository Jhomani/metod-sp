from gtts import gTTS
import os
  
# The text that you want to convert to audio
mytext = ''' 
  Hola buenas tardes, los comandos disponibles son los siguientes:
  Listar platos, horas de atencion, tiempo estimado de entrega.
'''
  
# Language in which you want to convert
  
myobj = gTTS(text=mytext, lang='es', slow=False, tld='es')
  
myobj.save("welcome.mp3")
  
# Playing the converted file
os.system("audacious -Hq  welcome.mp3")