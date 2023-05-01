let engKeySet = {
  Backquote: "`", // first line
  Digit1: "1",
  Digit2: "2",
  Digit3: "3",
  Digit4: "4",
  Digit5: "5",
  Digit6: "6",
  Digit7: "7",
  Digit8: "8",
  Digit9: "9",
  Digit0: "0",
  Minus: "-",
  Equal: "=",
  Backspace: "Backspace",
  Tab: "Tab", // second line
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Delete: 'Delete',
  CapsLock: 'CapsLock', // third line
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ";",
  Quote: '\'',
  Enter: 'Enter',
  ShiftLeft: 'Shift', // fourth line
  IntlBackslash: '\\',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ArrowUp: 'ArrowUp',
  ShiftRight: 'Shift',
  ControlLeft: 'Control', // fifth line
  MetaLeft: 'Meta',
  AltLeft: 'Alt',
  Space: 'Space',
  AltRight: 'Alt',
  ControlRight: 'Control',
  ArrowLeft: 'ArrowLeft',
  ArrowDown: "ArrowDown",
  ArrowRight: "ArrowRight",
};

let rusKeySet = {
  Backquote: "ё", // first line
  Digit1: "1",
  Digit2: "2",
  Digit3: "3",
  Digit4: "4",
  Digit5: "5",
  Digit6: "6",
  Digit7: "7",
  Digit8: "8",
  Digit9: "9",
  Digit0: "0",
  Minus: "-",
  Equal: "=",
  Backspace: "Backspace",
  Tab: "Tab", // second line
  KeyQ: 'й',
  KeyW: 'ц',
  KeyE: 'у',
  KeyR: 'к',
  KeyT: 'е',
  KeyY: 'н',
  KeyU: 'г',
  KeyI: 'ш',
  KeyO: 'щ',
  KeyP: 'з',
  BracketLeft: 'х',
  BracketRight: 'ъ',
  Backslash: '\\',
  Delete: 'Delete',
  CapsLock: 'CapsLock', // third line
  KeyA: 'ф',
  KeyS: 'ы',
  KeyD: 'в',
  KeyF: 'а',
  KeyG: 'п',
  KeyH: 'р',
  KeyJ: 'о',
  KeyK: 'л',
  KeyL: 'д',
  Semicolon: "ж",
  Quote: 'э',
  Enter: 'Enter',
  ShiftLeft: 'Shift', // fourth line
  IntlBackslash: '\\',
  KeyZ: 'я',
  KeyX: 'ч',
  KeyC: 'с',
  KeyV: 'м',
  KeyB: 'и',
  KeyN: 'т',
  KeyM: 'ь',
  Comma: 'б',
  Period: 'ю',
  Slash: '.',
  ArrowUp: 'ArrowUp',
  ShiftRight: 'Shift',
  ControlLeft: 'Control', // fifth line
  MetaLeft: 'Meta',
  AltLeft: 'Alt',
  Space: 'Space',
  AltRight: 'Alt',
  ControlRight: 'Control',
  ArrowLeft: 'ArrowLeft',
  ArrowDown: "ArrowDown",
  ArrowRight: "ArrowRight",
};

let engKeyboard = [];
let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let screen = document.createElement('textarea');
screen.className = 'screen';

main.append(screen);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
let keyboardString = '';
let i = 0;
let title = '';
let key = '';
let keySizeClass = '';
let lang = 'eng';

let keySet = (lang === 'eng') ? engKeySet : rusKeySet;
initKeySet(keySet);

function initKeySet(keySet) {

  for (item in keySet) {
    if (i === 0 || i === 14 || i === 29 || i === 42 || i === 56) {
      keyboardString += '<div class="keyboard-row">';
    }

    title = Object.values(keySet)[i];
    key = Object.keys(keySet)[i];

    if (title[0] === 'K') title = title.at(3).toLowerCase();
    if (title[0] + title[1] === 'Di') title = title.at(5);

    switch (key) {
      case 'Backquote': (keySet === 'eng') ? title = '\`' : 'ё'; break;
      case 'Backspace': keySizeClass = ' long-key'; break;
      case 'CapsLock': title = 'CapsLock'; keySizeClass = ' long-key'; break;
      case 'ControlLeft': title = 'Ctrl'; keySizeClass = ' middle-key'; break;
      case 'Tab': title = 'Tab'; keySizeClass = ' middle-key'; break;
      case 'Enter': keySizeClass = ' double-key'; break;
      case 'ShiftLeft': title = 'Shift'; keySizeClass = ' long-key'; break;
      case 'Equal': title = '='; break;
      case 'Backslash': title = '\\'; break;
      case 'Minus': title = '-'; break;
      case 'Delete': title = 'Del'; break;
      case 'BracketLeft': (keySet === 'eng') ? title = '[' : 'х'; break;
      case 'BracketRight': (keySet === 'eng') ? title = ']' : 'ъ'; break;
      case 'Semicolon': (keySet === 'eng') ? title = ';' : 'ж'; break;
      case 'Quote': (keySet === 'eng') ? title = '\'' : 'э'; break;
      case 'IntlBackslash': title = '\\'; keySizeClass = ''; break;
      case 'Comma': (keySet === 'eng') ? title = ',' : 'б'; break;
      case 'Period': (keySet === 'eng') ? title = '.' : 'ю'; break;
      case 'Slash': title = '/'; break;
      case 'ArrowUp': title = '▲'; break;
      case 'ShiftRight': title = 'Shift'; break;
      case 'MetaLeft': title = 'Win'; break;
      case 'AltLeft': title = 'Alt'; keySizeClass = ''; break;
      case 'Space': keySizeClass = ' huge-key'; break;
      case 'AltRight': title = 'Alt'; keySizeClass = ''; break;
      case 'ControlRight': title = 'Ctrl'; keySizeClass = ' middle-key'; break;
      case 'ArrowLeft': title = '◄'; keySizeClass = ''; break;
      case 'ArrowDown': title = '▼'; keySizeClass = ''; break;
      case 'ArrowRight': title = '►'; keySizeClass = ''; break;
      default: keySizeClass = ''; break;
    }

    keyboardString += '<div class="key' + keySizeClass + '" data="' + item + '">' + title + '</div>';

    if (i === 13 || i === 28 || i === 41 || i === 55 || i === 64) {
      keyboardString += '</div>';
    }

    i++;
  }
}

keyboard.innerHTML = keyboardString;

main.append(keyboard);

let keys = document.querySelectorAll('.key');
let scr = document.querySelector('.screen');
let globalContent = scr.textContent;
let content = '';

for (let k of keys) {
  k.onclick = function () {
    content = k.textContent;
    let screenContent = scr.textContent;
    console.log(content);
    console.log(screenContent);
    let cursorPosition = getCaretPos();

    if (k.textContent === 'Backspace') {
      scr.textContent = screenContent.slice(0, scr.selectionStart - 1) + screenContent.slice(scr.selectionStart, screenContent.length);
      scr.selectionStart = cursorPosition - 1;
    } else if (k.textContent === 'Tab') {
      scr.textContent = screenContent.slice(0, scr.selectionStart) + '    ' + screenContent.slice(scr.selectionStart, screenContent.length);
      scr.focus();
      scr.selectionStart = cursorPosition + 4;
    } else if (k.textContent === 'Del') {
      scr.textContent = screenContent.slice(0, scr.selectionStart) + screenContent.slice(scr.selectionStart + 1, screenContent.length);
      scr.selectionStart = cursorPosition;
    } else if (k.textContent === 'Enter') {
      scr.textContent = screenContent.slice(0, scr.selectionStart) + '\n' + screenContent.slice(scr.selectionStart, screenContent.length);
      scr.selectionStart = scr.textContent.length;
    } else {
      scr.textContent = screenContent.slice(0, scr.selectionStart) + k.textContent + screenContent.slice(scr.selectionStart, screenContent.length);
      scr.selectionStart = cursorPosition + 1;
    }
  }
}
scr.focus();

  document.onkeydown = function (event) {
    document.querySelectorAll('.key').forEach(function (element) {
      element.classList.remove('pressed');
    });
    document.querySelector('.key[data="' + event.code + '"]').classList.add('pressed');
  }

 document.onkeyup = function (event) {
   document.querySelector('.key[data="' + event.code + '"]').classList.remove('pressed');
 }

function getCaretPos() {
  scr.focus();
  if (document.selection) {
    let selection = document.selection.createRange();
    let duplicate = selection.duplicate();
    selection.collapse(true);
    duplicate.moveToElementText(scr);
    duplicate.setEndPoint('EndToEnd', selection);
    return duplicate.text.length;
  } else if (scr.selectionStart !== false) return scr.selectionStart;
  else return 0;
}

let info = document.createElement('div');
info.innerHTML = '<h2 style="display: block; width:35%; margin: auto;  margin-top: 2%;">Клавиатура создана в операционной системе Windows</h2>';
document.body.append(info);