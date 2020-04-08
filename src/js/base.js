/* HTML */

const rowRusLowerCase1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const rowRusLowerCase2 = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'];
const rowRusLowerCase3 = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'];
const rowRusLowerCase4 = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', ''];

const rowRusUpperCase1 = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
const rowRusUpperCase2 = ['Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/'];
const rowRusUpperCase3 = ['Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э'];
const rowRusUpperCase4 = ['Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ','];

const rowEngLowerCase1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const rowEngLowerCase2 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
const rowEngLowerCase3 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"];
const rowEngLowerCase4 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

const rowEngUpperCase1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const rowEngUpperCase2 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'];
const rowEngUpperCase3 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"'];
const rowEngUpperCase4 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];

const classesRow1 = ['Backquote', 'Digit1', 'Digit2',
    'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7',
    'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal ',
];
const classesRow2 = ['KeyQ', 'KeyW', 'KeyE', 'KeyR',
    'KeyT', 'KeyY', 'KeyU', 'KeyI',
    'KeyO', 'KeyP', 'BracketLeft', 'BracketRight',
    'Backslash',
];
const classesRow3 = ['KeyA', 'KeyS', 'KeyD', 'KeyF',
    'KeyG', 'KeyH', 'KeyJ', 'KeyK',
    'KeyL', 'Semicolon', 'Quote',
];
const classesRow4 = ['KeyZ', 'KeyX', 'KeyC', 'KeyV',
    'KeyB', 'KeyN', 'KeyM', 'point', 'Period', 'Slash',
];

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const textarea = document.createElement('textarea');
textarea.id = 'area';
textarea.innerHTML = '';
wrapper.append(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
textarea.after(keyboard);

let capslock = false,
    shift = false,
    alt = false,
    ctrl = false,
    langRu = false;


for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    keyboard.prepend(row);
}

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

function addElementEvent(row, eventKey, code, txt) {
    const node = document.createElement('div');
    node.className = `key ${eventKey}`;
    keyboard.childNodes[row].append(node);

    const key = document.createElement('span');
    key.className = `${code}`;
    node.append(key);
    key.innerHTML = `${txt}`;
}

addElement(0, classesRow1, rowRusLowerCase1, rowRusUpperCase1, rowEngLowerCase1, rowEngUpperCase1, 13);

addElementEvent(0, 'backspace', 'Backspace', 'Backspace');

addElementEvent(1, 'tab', 'Tab', 'Tab');

addElement(1, classesRow2, rowRusLowerCase2, rowRusUpperCase2, rowEngLowerCase2, rowEngUpperCase2, 13);

addElementEvent(1, 'del', 'Delete', 'Del');

addElementEvent(2, 'capslock', 'CapsLock', 'Capslock');

addElement(2, classesRow3, rowRusLowerCase3, rowRusUpperCase3, rowEngLowerCase3, rowEngUpperCase3, 11);

addElementEvent(2, 'enter', 'Enter', 'Enter');

addElementEvent(3, 'shift', 'ShiftLeft', 'Shift');

addElement(3, classesRow4, rowRusLowerCase4, rowRusUpperCase4, rowEngLowerCase4, rowEngUpperCase4, 10);

addElementEvent(3, 'arrowUp', 'ArrowUp', '↑');

addElementEvent(3, 'shift-right', 'ShiftRight', 'Shift');

addElementEvent(4, 'ctrl', 'ControlLeft', 'Ctrl');

addElementEvent(4, 'win', 'MetaLeft', 'Win');

addElementEvent(4, 'alt', 'AltLeft', 'Alt');

addElementEvent(4, 'space', 'Space', '');

addElementEvent(4, 'alt', 'AltRight', 'Alt');

addElementEvent(4, 'arrowLeft', 'ArrowLeft', '←');

addElementEvent(4, 'arrowDown', 'ArrowDown', '↓');

addElementEvent(4, 'arrowRight', 'ArrowRight', '→');

addElementEvent(4, 'ctrl', 'ControlRight', 'Ctrl');

const text = document.createElement('div');
text.className = 'lang';
keyboard.append(text);
text.innerHTML = `<h4 style="text-align: center">Keyboard shortcut for changing the language Alt + Shift or the Win key</h4>`;

/* EVENTS */



document.addEventListener('click', (event) => {
    if (event.target.className == 'key' || event.target.className == 'lower' || event.target.className == 'upper') {
        if (capslock) {
            document.getElementById('area').innerHTML += event.target.textContent;
        } else {
            document.getElementById('area').innerHTML += event.target.textContent;
        }

    }

    switch (event.target.className) {
        case 'Tab':
            document.getElementById('area').innerHTML += '    ';
            break;
        case 'CapsLock':
            if (capslock == false) {
                capslock = true;
                document.querySelectorAll('.lower').forEach(elem => elem.style.display = 'none');
                document.querySelectorAll('.upper').forEach(elem => elem.style.display = 'block');
            } else {
                capslock = false;
                document.querySelectorAll('.lower').forEach(elem => elem.style.display = 'block');
                document.querySelectorAll('.upper').forEach(elem => elem.style.display = 'none');
            }
            break;
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'key shift':
        case 'key shift-right':
            if (alt == false) {
                if (shift == false) {
                    shift = true;

                    //event.target.style.background = 'yellow';
                    // event.target.children.style.background = 'yellow';
                    document.querySelectorAll('.lower').forEach(elem => elem.style.display = 'none');
                    document.querySelectorAll('.upper').forEach(elem => elem.style.display = 'block');
                } else {
                    shift = false;
                    //event.target.style.background = '#3b4e6d';
                    //event.target.children.style.background = '#3b4e6d';
                    document.querySelectorAll('.lower').forEach(elem => elem.style.display = 'block');
                    document.querySelectorAll('.upper').forEach(elem => elem.style.display = 'none');
                }
            }

            if (alt == true) {
                if (langRu == false) {
                    langRu = true;
                    document.querySelectorAll('.Rus').forEach(elem => elem.style.display = 'block');
                    document.querySelectorAll('.Eng').forEach(elem => elem.style.display = 'none');
                } else {
                    langRu = false;
                    document.querySelectorAll('.Rus').forEach(elem => elem.style.display = 'none');
                    document.querySelectorAll('.Eng').forEach(elem => elem.style.display = 'block');
                }
                alt = false;
            }
            break;
        case 'ControlLeft':
        case 'ControlRight':
        case 'key ctrl':

            break;
        case 'MetaLeft':
        case 'key win':
            if (langRu == false) {
                langRu = true;
                document.querySelectorAll('.Rus').forEach(elem => elem.style.display = 'block');
                document.querySelectorAll('.Eng').forEach(elem => elem.style.display = 'none');
            } else {
                langRu = false;
                document.querySelectorAll('.Rus').forEach(elem => elem.style.display = 'none');
                document.querySelectorAll('.Eng').forEach(elem => elem.style.display = 'block');
            }
            break;
        case 'AltLeft':
        case 'AltRight':
        case 'key alt':
            if (alt == false) {
                alt = true;
                if (shift == true) {
                    if (langRu == false) {
                        langRu = true;
                        document.querySelectorAll('.Rus').forEach(elem => elem.style.display = 'block');
                        document.querySelectorAll('.Eng').forEach(elem => elem.style.display = 'none');
                    } else {
                        langRu = false;
                        document.querySelectorAll('.Rus').forEach(elem => elem.style.display = 'none');
                        document.querySelectorAll('.Eng').forEach(elem => elem.style.display = 'block');
                    }
                    shift == false;
                }
                alt == false;
            }
            break;
        case 'key space':
            document.getElementById('area').innerHTML += ' ';
            break;
        case 'ArrowUp':
        case 'key arrowUp':
            document.getElementById('area').innerHTML += '↑';
            break;
        case 'ArrowRight':
        case 'key arrowRight':
            document.getElementById('area').innerHTML += '→';
            break;
        case 'ArrowDown':
        case 'key arrowDown':
            document.getElementById('area').innerHTML += '↓';
            break;
        case 'ArrowLeft':
        case 'key arrowLeft':
            document.getElementById('area').innerHTML += '←';
            break;
        case 'Enter':
        case 'key enter':
            document.getElementById('area').innerHTML += '\n';
            break;
        case 'Delete':
        case 'key del':
            document.getElementById('area').innerHTML = '';
            break;
        case 'Backspace':
        case 'key backspace':
            let str = document.getElementById('area').value;
            document.getElementById('area').value = str.substring(0, str.length - 1);
            break;
    };
});

document.addEventListener('keydown', event => {
    console.log(event.key);
    if (event.key == 'Tab' || event.key == 'Shift' || event.key == 'Control' ||
        event.key == 'Meta' || event.key == 'Alt' || event.key == 'ArrowLeft' ||
        event.key == 'ArrowDown' || event.key == 'ArrowRight' || event.key == 'ArrowUp') {
        document.getElementById('area');

    } else {
        document.getElementById('area').innerHTML += event.key;
    }
});