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
  Delete: "Delete",
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
  ShiftRight: "Shift",
  ControlLeft: "Ctrl", // fifth line
  MetaLeft: "Meta",
  AltLeft: "Alt",
  " ": "           ",
  AltRight: "Alt",
  ControlRight: "Ctrl",
  ArrowLeft: "◄",
  ArrowDown: "▼",
  ArrowRight: "►",
};

document.onkeydown = function (event) {
  engKeyboard.push(event.Code + ' : ' + event.key);
 // console.log(engKeyboard);
}
let engKeyboard = [];
// let engKeyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80,
//   219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 226, 90, 88, 67, 86, 66,
//   78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39];

// document.onkeydown = function(event) {
//   engKeyboard.push(event.keyCode);
//   console.log(engKeyboard);
// }

let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let screen = document.createElement('textarea');
screen.className = 'screen';
screen.onkeydown = function (event) {
  // screen.style.background = "red";
  // screen.innerHTML = ':   event.code: ' + event.code + ', event.key: ' + event.key + ', event.keyCode: ' + event.keyCode;
  console.log(':   event.code: ' + event.code + ', event.key: ' + event.key + ', event.keyCode: ' + event.keyCode);
  // screen.innerHTML = event.key + ' ';
  //console.log('code: ' + event.code + ', key: ' + event.key);
  engKeySet[event.key] = event.code;
  // engKeyboard.push(event.keyCode);
  // console.log(engKeyboard);
  console.log(engKeySet);
}

// screen.setAttribute('type', 'text');
// screen.innerHTML = '<h1>Test message</h1>';
main.append(screen);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';

let engKeyboardString = '';

// for (let i = 0; i < engKeyboard.length; i++) {
//   if (i === 14 || i === 29 || i === 42 || i === 56) {
//     engKeyboardString += '<div class="clearfix"></div>';
//   }
//   engKeyboardString += '<div class="key">' + String.fromCharCode(engKeyboard[i]) + '</div>';
//   // keyboard.append(String.fromCharCode(engKeyboard[i] + ' '));
// }

let i = 0;
let title = '';
for(item in engKeySet){  
  if (i === 14 || i === 29 || i === 42 || i === 56) {
    engKeyboardString += '<div class="clearfix"></div>';
  }
  
  title = Object.values(engKeySet)[i];
   if(title[0] === 'K') title = title.at(3);
  engKeyboardString += '<div class="key">' + title + '</div>';

  i++;
}
// console.log(engKeyboardString);

keyboard.innerHTML = engKeyboardString;
// document.querySelector('#keyboard1').innerHTML  = "<h1>some txt</h1>";

main.append(keyboard);