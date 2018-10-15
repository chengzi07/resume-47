var accessor=function(){
  var person={
    name:'frank',
    age:18
  }
  window.frankGrowUp=function(){
    person.age +=1
    return person.age
  }
}
var growUp=accessor.call()
growUp.call()
