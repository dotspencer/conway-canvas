module.export = {

}

function next(state){
  var neighbors = [];
  var rowsColumns = state.length;

  // Initializing neighbors
  for(var row = 0; row < rowsColumns; row++){
    neighbors[row] = [];
    for(var column = 0; column < rowsColumns; column++){
      neighbors[row].push(0);
    }
  }

  // Count up neighbors from state
  for(var row = 0; row < rowsColumns; row++){
    for(var column = 0; column < rowsColumns; column++){
      var cellValue = state[row][column];
      if(cellValue == 1){
        var top = row - 1;
        var bottom = row + 1;
        var right = column + 1;
        var left = column - 1;
        var middleRow = row;
        var middleCol = column;

        var safeIncrement = function(array, row, column){
          var rowInside = ;
          var colInside = ;
        };

        // safeIncrement(neighbors, row, column);
        // top left
        safeIncrement(neighbors, top, left);
        // top middle
        safeIncrement(neighbors, top, middleCol);
        // top right
        safeIncrement(neighbors, top, right);
        // middle right
        safeIncrement(neighbors, middleRow, right);
        // bottom right
        safeIncrement(neighbors, bottom, right);
        // bottom middle
        safeIncrement(neighbors, bottom, middleCol);
        // bottom left
        safeIncrement(neighbors, bottom, left);
        // middle left
        safeIncrement(neighbors, middleRow, left);
      }
    }
  }
}
