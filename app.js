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
  q: "KeyQ",
  w: "KeyW",
  e: "KeyE",
  r: "KeyR",
  t: "KeyT",
  y: "KeyY",
  u: "KeyU",
  i: "KeyI",
  o: "KeyO",
  p: "KeyP",
  BracketLeft: "[",
  BracketRight: "]",
  Backslash: "\\",
  Delete: "Del",
  CapsLock: "CapsLock", // third line
  a: "KeyA",
  s: "KeyS",
  d: "KeyD",
  f: "KeyF",
  g: "KeyG",
  h: "KeyH",
  j: "KeyJ",
  k: "KeyK",
  l: "KeyL",
  Semicolon: ":",
  Quote: "\"",
  Enter: "Enter",
  ShiftLeft: "Shift", // fourth line
  IntlBackslash: "\\",
  z: "KeyZ",
  x: "KeyX",
  c: "KeyC",
  v: "KeyV",
  b: "KeyB",
  n: "KeyN",
  m: "KeyM",
  Comma: ",",
  Period: ".",
  Slash: "/",
  ArrowUp: "▲",
  ShiftRight: "ShiftRight",
  ShiftLeft: "ShiftLeft",
  ControlLeft: "Ctrl", // fifth line
  MetaLeft: "Win",
  AltLeft: "Alt",
  Space: "Space",
  AltRight: "Alt",
  ControlRight: "Ctrl",
  ArrowLeft: "◄",
  ArrowDown: "▼",
  ArrowRight: "►",
};

document.onkeydown = function (event) {
  engKeyboard.push(event.Code + ' : ' + event.key);
}

let engKeyboard = [];
let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let screen = document.createElement('textarea');
screen.className = 'screen';
screen.onkeydown = function (event) {
  engKeySet[event.key] = event.code;
}

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

  title = Object.values(engKeySet)[i];

  if (title[0] === 'K') title = title.at(3);

  switch (title) {
    case 'Tab':
    case 'Ctrl': keySizeClass = ' middle-key'; break;
    case ('ShiftLeft'):
    case 'Enter': keySizeClass = ' double-key'; break;
    case 'CapsLock':
    case 'Backspace': keySizeClass = ' long-key'; break;
    case 'Space': keySizeClass = ' huge-key'; break;
    default: keySizeClass = '';
  }

  if (title[0] + title[1] === 'Sh') title = 'Shift';

  engKeyboardString += '<div class="key' + keySizeClass + '">' + title + '</div>';

  if (i === 13 || i === 28 || i === 41 || i === 55 || i === 64) {
    engKeyboardString += '</div>';
  }

  i++;
}

keyboard.innerHTML = engKeyboardString;

main.append(keyboard);