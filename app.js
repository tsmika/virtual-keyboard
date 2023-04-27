let engKeyboard = [];
document.onkeydown = function(event) {
  console.log(event);
  engKeyboard.push(event.code);
}

let main = document.createElement('main');
main.className = 'main';
document.body.append(main);

let screen = document.createElement('textarea');
screen.className = 'screen';
screen.onkeydown = function(event){
  // screen.style.background = "red";
  creen.innerHTML = 'code: ' + event.code + ', keyboard: ' + event.keyboard ;
}
// screen.setAttribute('type', 'text');
// screen.innerHTML = '<h1>Test message</h1>';
main.append(screen);

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
main.append(keyboard);