class Game{
  constructor(score = 0, pins = 10, rolls = 2, frames = 10) {
    this.score = score;
    this.bonus = 0;
    this.numberOfFrames = frames;

    this.pins = 10;
    this.rolls = 2;

    this.frames = [];
  }

  roll(){
    if(this.frames.length === this.frames){
      //TODO: end game.
      this.result()
      console.log(this.score);
    }else{
      if(this.frames[this.frames.length -1].rolls === 0){
        this.frames.push = this.addframe();
      }

      let min = 0;
      let max = 10;
      let rolledPins = (Math.random() * (max - min)) + min;

      this.frames[this.frames.length -1].roll(rolledPins);
    }
  }

  result(){
    for(let frame in this.frames){
      this.score += frame.points;
    }
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

  addframe(){
    let frame = new Frame(this.bonus, this.score, [this.pins, this.rolls]);
    return frame;
  }

}

class Frame{
  constructor(bonus, score = 0, [pins = 10, rolls = 2]){
    this.bonus = bonus;
    this.score = score;
    this.pins = new Pin(pins);
    this.rolls = new Roll(rolls);
  }

  get rolls(){
    return this.rolls.rolls;
  }

  get points(){
    return this.score;
  }

  decrease(value){
    this.pins.decrease(value);
    this.rolls.decrease();

    if(this.bonus > 0){
      this.bonus -= 1;
    }
  }

  updateScore(points){
    this.score += points;
  }
  
  roll(value){
    this.decrease(value);

    let points = value;
    if(this.bonus > 0){
      points *= 2;
    }

    this.updateScore(points);
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

  get rolls(){
    return this.rolls;
  }
}

class HelloWorld {
  static greet() {
    return 'Hello, world!';
  }
}

module.exports = Game;
