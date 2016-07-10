var mealFactory = {
  orderMeal: function (type) {
    switch (type) {
      case 'cheap':
        meal = cheapMealBuilder()
        break
      case 'expensive':
        meal = expensiveMealBuilder()
        break
    }
    return meal
  }
}

var cheapMealBuilder = () => {
  var meal = {}
  meal.burger = {type: 'burger', size: 'small'}
  return meal
}

var expensiveMealBuilder = () => {
  var meal = {}
  // step one - make burger
  meal.burger = {type: 'burger', size: 'large'}

  // step two - create drink
  meal.drink = {type: 'drink', name: 'cola'},

  // step three - create dessert
  meal.dessert = {type: 'dessert', name: 'chocolate'}
  return meal
}



var myCheapMeal = mealFactory.orderMeal('cheap');
var myExpensiveMeal = mealFactory.orderMeal('expensive');

console.log('burger', myCheapMeal.burger.size, 'drink', myCheapMeal.drink, 'dessert', myCheapMeal.dessert)
console.log('burger', myExpensiveMeal.burger.size, 'drink', myExpensiveMeal.drink.name, 'dessert', myExpensiveMeal.dessert.name)