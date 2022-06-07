
let x = require('./arrayReview');

console.log(x.findDivisibleBy4([1,4,6,7,8,10,12])); 
console.log(x.sumDivisibleBy4([1,4,6,7,8,10,12]));
console.log(x.uniqueArray([1,1,2,3,4,4,5,5]))
console.log(x.getTypes([10,"a",{a:2}]))
console.log(x.destructureArray([10,"a",{a:2}]))
console.log(x.objToArray({a:2,b:[3,4],c:"string"}));
console.log(x.objMinify({a:2,b:3},{a:2,b:3}))
console.log(x.oldestPerson([{name:"Ram",age:20},{name:"Lakshman",age:15}]));
console.log(x.youngestPersonName([{name:"Ram",age:20},{name:"Lakshman",age:15}]));
console.log(x.ageBetween([{name:"Ram",age:20},{name:"Lakshman",age:16},{name:"Dev",age:17}]));