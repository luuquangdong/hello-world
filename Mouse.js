funtion Mouse(name){
  this.name = name;
  this.alive = true;
}

Mouse.prototype.dead = function(){
  this.alive = false;
}

Mouse.prototype.sleep = function(){
  console.log("i am sleeping");
}
module.exports = Mouse;
