function Dog(){

}

Dog.prototype.say = function(){
  console.log("bark bark");
}

Dog.prototype.play = function(){
  console.log("run + jump + bark");
}

Dog.prototype.hungry = function(){
  console.log("barkk, neet foodd");
}

module.exports = Dog;
