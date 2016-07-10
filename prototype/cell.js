var cell = {
  organelles: [1, 2, 3],
  chromosomes: [4, 5, 6],
  clone: function () {
    var newCell = {}
    for (var prop in this) {
      newCell[prop] = this[prop]
    }
    return newCell
  }
}

console.log('Original cell', cell)

var cellTwo = cell.clone()
console.log('Cloned cell', cellTwo)

var cellThree = cellTwo.clone()
console.log('Cloned cell', cellThree)
