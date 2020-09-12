function Cat(){
  this.stomach = [];
}
Cat.prototype.eat = function(mouse){
  stomach.push(mouse);
  mouse.dead();
};
Cat.protorype.say = function(){
  console.log("mew mew");
}
Cat.prototype.sleep = function(){
  console.log("i am sleeping");
}
module.exports = Cat;
