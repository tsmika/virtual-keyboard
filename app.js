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

document.onkeydown = function (event) {
  // engKeyboard.push(event.Code + ' : ' + event.key);
  console.log(event.code + ' : ' + event.key);
}

let engKeyboard = [];
let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let screen = document.createElement('textarea');
screen.className = 'screen';
// screen.onkeydown = function (event) {
//   engKeySet[event.key] = event.code;
// }

main.append(screen);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';

let engKeyboardString = '';
let i = 0;
let title = '';
let keySizeClass = '';

for (item in engKeySet) {
  if (i === 0 || i === 14 || i === 29 || i === 42 || i === 56) {
    engKeyboardString += '<div class="keyboard-row">';
  }

  title = Object.keys(engKeySet)[i];

  if (title[0] === 'K') title = title.at(3);
  if (title[0] + title[1] === 'Di') title = title.at(5);

  switch (title) {
    case 'Backquote': title = '\`'; break;
    case 'Space': keySizeClass = ' huge-key'; break;
    case 'Backspace': keySizeClass = ' long-key'; break;
    case 'CapsLock': title = 'CapsLock'; keySizeClass = ' long-key'; break;
    case 'ControlLeft': title = 'Ctrl'; keySizeClass = ' middle-key'; break;
    case 'Tab': title = 'Tab'; keySizeClass = ' middle-key'; break;
    case 'Enter': keySizeClass = ' double-key'; break;
    case 'ShiftLeft': title = 'Shift'; keySizeClass = ' double-key'; break;
    case 'Equal': title = '='; break;
    case 'Backslash': title = '\\'; break;
    case 'Minus': title = '-'; break;
    case 'Delete': title = 'Del'; break;
    case 'BracketLeft': title = '['; break;
    case 'BracketRight': title = ']'; break;
    case 'Semicolon': title = ';'; break;
    case 'Quote': title = '\''; break;
    case 'IntlBackslash': title = '\\'; keySizeClass = ''; break;
    case 'Comma': title = ','; break;
    case 'Period': title = '.'; break;
    case 'Slash': title = '/'; break;
    case 'ArrowUp': title = '▲'; break;
    case 'ShiftRight': title = 'Shift'; break;
    case 'MetaLeft': title = 'Win'; break;
    case 'AltLeft': title = 'Alt'; break;
    case 'AltRight': title = 'Alt';
    case 'ControlRight':  title = 'Ctrl'; keySizeClass = ''; break;
    case 'ArrowLeft': title = '◄'; break;
    case 'ArrowDown': title = '▼'; break;
    case 'ArrowRight': title = '►'; break;
    default: keySizeClass = '';
  }

  // if (title[0] + title[1] === 'Sh') title = 'Shift';

  engKeyboardString += '<div class="key' + keySizeClass + '">' + title + '</div>';

  if (i === 13 || i === 28 || i === 41 || i === 55 || i === 64) {
    engKeyboardString += '</div>';
  }

  i++;
}

keyboard.innerHTML = engKeyboardString;

main.append(keyboard);

let key = document.querySelectorAll('.key');
let scr = document.querySelector('.screen');
let clear = document.querySelector('.clear');
let content = '';

for (let k of key) {
  k.onclick = function () {
    content = k.textContent;
    console.log(content);
    let screenContent = scr.textContent;
    console.log("screenContent:" + screenContent);
    if (k.textContent === 'Backspace') {
      scr.textContent = screenContent.slice(0, screenContent.length - 1);
      console.log("screenContent.slice")
    } else {
      scr.textContent = screenContent + k.textContent;
    }
  }
}


// document.onkeydown = function(event){
//   document.querySelector('keyboard .key')
//   document.ge
// }

// clear.onclick = function(evt){
//   evt.preventDefault();
//   scr.textContent = '';
// }