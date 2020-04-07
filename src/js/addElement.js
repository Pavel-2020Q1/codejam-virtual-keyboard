function addElement(childNode, classes, arrRusLower, arrRusUpper, arrEngLower, arrEngUpper, count) {
  for (let i = 0; i < count; i++) {
    const key = document.createElement('div');
    key.className = 'key';
    keyboard.childNodes[childNode].append(key);

    const spanEng = document.createElement('span');
    spanEng.className = `${classes[i]} Eng`;
    key.append(spanEng);

    const spanLowerEng = document.createElement('span');
    spanLowerEng.className = 'lower';
    spanEng.append(spanLowerEng);
    spanLowerEng.innerHTML = `${arrEngLower[i]}`;

    const spanUpperEng = document.createElement('span');
    spanUpperEng.className = 'upper';
    spanEng.prepend(spanUpperEng);
    spanUpperEng.innerHTML = `${arrEngUpper[i]}`;

    const spanRus = document.createElement('span');
    spanRus.className = `${classes[i]} Rus`;
    key.prepend(spanRus);

    const spanLowerRus = document.createElement('span');
    spanLowerRus.className = 'lower';
    spanRus.append(spanLowerRus);
    spanLowerRus.innerHTML = `${arrRusLower[i]}`;

    const spanUpperRus = document.createElement('span');
    spanUpperRus.className = 'upper';
    spanRus.prepend(spanUpperRus);
    spanUpperRus.innerHTML = `${arrRusUpper[i]}`;
  }
}

exports.addElement = addElement;
