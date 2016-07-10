var cellBlueprint = {
  organelles: [1, 2, 3],
  chromosomes: [4, 5, 6],
}


var  cell = Object.create(cellBlueprint)

// cell.organelles = [7,8,9]

console.log(cell)
console.log('organelles', cell.organelles, 'chromosomes', cell.chromosomes)