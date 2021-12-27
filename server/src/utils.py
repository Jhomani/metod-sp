import re
import wave
import os

def formatResDict(attr: tuple, val: tuple) -> dict:
  res = {}
  size = len(attr)

  for i in range(size):
    res[attr[i]] = val[i]

  return res

def formatResList(attr: tuple, val: list):
  res = []

  for i in val:
    res.append(formatResDict(attr, i))

  return res

def parser(token: str) -> str:
  res = '' 

  products = (
    'milanesa', 
    'pique', 
    'silpancho',
    'pollo broaster',
    'pollo al spiedo',
  )

  if re.search(r'(mostrar|listar|buscar)?( )?(platos|platillos)', token):
    res = '/products'
  elif re.search(r'(informe) .{0,2} ventas', token):
    res = '/informe'
  elif re.search(r'(detalle|detallar)( de )?[a-zA-Z]*', token):
    plate = ''

    for item in products:
      if token.find(item) > 0:
        plate = item
    
    if len(plate) > 0:
      res = f"/product/{plate.replace(' ', '-')}"
      
  return res