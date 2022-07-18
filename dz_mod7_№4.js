function appliances(power){
  this.device = 'electric',
  this.getPower = function(){
    console.log(`Power is ${power} w`)
  }
  this.getName = function(name){
    console.log(`device name ${name}`)
  }
}

const PC = new appliances(47);
const lamp = new appliances(50);

console.log(PC.device)
PC.getPower()
console.log(lamp.device)
lamp.getPower()