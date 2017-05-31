var styles = require('./scss/common.scss');
var draw = require('./js/draw');
var logic = require('./js/logic');

var rowsColumns = 10;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Initializing the state
var state = [];
for(var row = 0; row < rowsColumns; row++){
  state[row] = [];
  for(var column = 0; column < rowsColumns; column++){
    state[row].push(0);
  }
}
// state[0][0] = 1;
state[0][3] = 1;
state[1][3] = 1;
state[2][2] = 1;
state[2][0] = 1;
state[rowsColumns - 1][rowsColumns - 1] = 1;

draw.draw(state, ctx);

setInterval(function(){
  state = logic.next(state);
  draw.draw(state, ctx);
}, 300);
