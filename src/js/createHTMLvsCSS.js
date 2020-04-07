import variable from './variables.js';
import './addElement.js';
import './addElementEvent.js';

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.append(wrapper);

const textarea = document.createElement('textarea');
textarea.id = 'area';
wrapper.append(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
textarea.after(keyboard);

for (let i = 0; i < 5; i++) {
  const row = document.createElement('div');
  row.className = 'row';
  keyboard.prepend(row);
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

addElementEvent(3, 'arrow', 'ArrowUp', '↑');

addElementEvent(3, 'shift-right', 'ShiftRight', 'Shift');

addElementEvent(4, 'ctrl', 'ControlLeft', 'Ctrl');

addElementEvent(4, 'win', 'MetaLeft', 'Win');

addElementEvent(4, 'alt', 'AltLeft', 'Alt');

addElementEvent(4, 'space', 'Space', '');

addElementEvent(4, 'alt', 'AltRight', 'Alt');

addElementEvent(4, 'arrow', 'ArrowLeft', '←');

addElementEvent(4, 'arrow', 'ArrowDown', '↓');

addElementEvent(4, 'arrow', 'ArrowRight', '→');

addElementEvent(4, 'ctrl', 'ControlRight', 'Ctrl');
