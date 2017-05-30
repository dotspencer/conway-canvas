module.exports = {
  draw: draw
}

/*
Draws the state onto the canvas context
*/
function draw(state, ctx){
  var rowsColumns = state.length;
  var boxWidth = ctx.canvas.width / rowsColumns;

  for(var row = 0; row < state.length; row++){
    var y = boxWidth * row;
    for(var column = 0; column < state[row].length; column++){
      var x = boxWidth * column;

      // Only draw if value is 1
      if(state[row][column] == 1){
        ctx.fillStyle = '#eaeaea';
        ctx.fillRect(x, y, boxWidth, boxWidth);
      }
    }
  }

}
