class Hamburger {

  static SIZE_SMALL = {
    price: 50,
    calories: 20,
  };

  static SIZE_BIG = {
    price: 100,
    calories: 40,
  };

  static STUFFING_CHEESE = {
    price: 10,
    calories: 20
  }

  static STUFFING_SALAD = {
    price: 20,
    calories: 5
  }

  static STUFFING_POTATO = {
    price: 15,
    calories: 10
  }

  static TOPPING_MAYO = {
    price: 20,
    calories: 5
  }
  static TOPPING_SPICE = {
    price: 15,
    calories: 0
  }
  size = null;
  stuffing = null;
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }
  topping = [];

  addTopping(value){
    return  this.topping.push(value);
  }

  calculateCalories(){
  return this.size.calories + this.stuffing.calories + this.topping.reduce((value,item)=> value+=item.calories, 0);
  }
  calculatePrice(){
    return this.size.price + this.stuffing.price + this.topping.reduce((value,item)=> value+=item.price, 0);
  }

}
const hamburger = new Hamburger(Hamburger.SIZE_SMALL,Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(`Calories: ${hamburger.calculateCalories()}`);

console.log(`Price: ${hamburger.calculatePrice()}`);

hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log(`Calories with added topping: ${hamburger.calculateCalories()}`);
console.log(`Price with added topping: ${hamburger.calculatePrice()}`);


