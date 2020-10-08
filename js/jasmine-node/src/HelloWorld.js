class Game{
  constructor(score = 0, bonus = 0, ) {
    this.score = score;
    this.bonus = bonus;

    this.pins = 10;
    this.rolls = 2;
  }

  get score(){
    return this.score;
  }
  set score(value){
    this.score += value;
  }

  get bonus(){
    return this.bonus;
  }
  set bonus(value){
    this.bonus = value;
  }

  Frames(){
    new Frame(this.bonus, this.score, [this.pins, this.rolls]);
  }

}

class Frame{
  constructor(bonus, score, [pins = 10, rolls = 2]){
    this.bonus = bonus;
    this.score = score;
    this.pins = new Pin(pins);
    this.rolls = new Roll(rolls);
  }
  
  decrease(value){
    this.pins.decrease(value);
    this.rolls.decrease();
  }

  updateScore(points){

    this.score += points;
  }
  
  roll(){
    
  }
}

class Pin{
  constructor(pin = 10) {
    this.pins = pin;
  }

  decrease(value){
    this.pins -= value;
  }
}

class Roll{
  constructor(roll = 2) {
    this.rolls = roll;
  }
  decrease(){
    this.rolls -=1;
  }
}

class HelloWorld {
  static greet() {
    return 'Hello, world!';
  }
}

module.exports = HelloWorld;
