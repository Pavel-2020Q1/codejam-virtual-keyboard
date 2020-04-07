function addElementEvent(row, eventKey, code, txt) {
  const node = document.createElement('div');
  node.className = `key ${eventKey}`;
  keyboard.childNodes[row].append(node);

  const key = document.createElement('span');
  key.className = `${code}`;
  node.append(key);
  key.innerHTML = `${txt}`;
}

exports.addElementEvent = addElementEvent;
