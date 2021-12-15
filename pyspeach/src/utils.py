import re

def formatResDict(attr, val: tuple) -> dict:
  res = {}
  size = len(attr)

  for i in range(size):
    res[attr[i]] = val[i]

  return res

def formatResList(attr: tuple, val):
  res = []

  for i in val:
    res.append(formatResDict(attr, i))

  return res

def parser(token: str, dic: tuple) -> tuple:
  res = None

  actions = f"({dic['delete']}|{dic['update']}|{dic['get']})"
  regex = f"({actions}).*[0-9]+.*({dic['source']}|de) ([a-z]+)$"

  matched = re.search(regex, token)

  if matched:
    [action] = re.findall(actions, token)
    [key] = re.findall('[0-9]+', token)
    [table] = re.findall(r'\s([a-zA-Z]+)$', token)

    res = (action,int(key), table.capitalize() )

  return res