funtion Mouse(name){
  this.name = name;
  this.alive = true;
  this.dead = function(){
    this.alive = false;
  }
}

module.exports = Mouse;
