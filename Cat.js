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

module.exports = Cat;
