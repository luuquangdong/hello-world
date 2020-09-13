function Dog(){

}

Dog.prototype.say = function(){
  console.log("bark bark");
}

Dog.prototype.play = function(){
  console.log("run + jump + bark");
}

module.exports = Dog;
