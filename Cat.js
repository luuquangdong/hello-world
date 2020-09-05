function Cat(){
  this.stomach = [];
  this.eat = function(mouse){
    stomach.push(mouse);
    mouse.dead();
  };
}
module.exports = Cat;
