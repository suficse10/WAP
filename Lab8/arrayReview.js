
let array = [1,4,6,7,8,10,12];

function findDivisibleBy4(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        let div = arr[i]%4;
        if(div == 0){
            result.push(arr[i]);
        }
    }
    return result;
}

function sumDivisibleBy4(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%4 == 0){
            sum += arr[i];
        }
    }
    return sum;
}

//console.log(findDivisibleBy4(array)); 
//console.log(sumDivisibleBy4(array));

function uniqueArray(arr){
    let result = [];
    if(arr.length>0){
        result.push(arr[0]);
    }
    for(let i=0; i<arr.length; i++){
        if(result.indexOf(arr[i])<0){
            result.push(arr[i]);
        }
    }
    return result;
}
//console.log(uniqueArray([1,1,2,3,4,4,5,5]))

function getTypes(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(typeof(arr[i]));
    }
    return result;
}
//console.log(getTypes([10,"a",{a:2}]))

function destructureArray(arr){
    let result = [];
    let line = ""
    for(let i=0; i<arr.length; i++){
        if(typeof(arr[i]) != "object"){
            line = typeof(arr[i])+i+":"+arr[i];
            result.push(line);
        }
        else{
            for(let key in arr[i]){
                line = typeof(arr[i])+i+":"+key+arr.key;
                result.push(line);
            }
        } 
    }
    return result;
}
//console.log(destructureArray([10,"a",{a:2}]))

function objToArray(arr){
    let result = [];
    let str = "";
    for(let key in arr){
        str = key + arr[key]; 
        result.push(str);
    }
    return result;
}
//console.log(objToArray({a:2,b:[3,4],c:"string"}))

function objMinify(arr){
    let result = []
    //for(let elem of arr){
        for(let key in arr){
            result.push(arr[key].a);
        }
    //}
    return result;
}
//console.log(objMinify({a:2,b:3},{a:2,b:3}))

function oldestPerson(objArr){
    let oldest = objArr.sort((x,y)=>y.age-x.age);
    return oldest[0];
}
//console.log(oldestPerson([{name:"Ram",age:20},{name:"Lakshman",age:15}]));

function youngestPersonName(objArr){
    let oldest = objArr.sort((x,y)=>x.age-y.age);
    return oldest[0].name;
}
//console.log(youngestPersonName([{name:"Ram",age:20},{name:"Lakshman",age:15}]));

function ageBetween(objArr){
    let arr = [];
    let person = objArr.filter(x=>x.age >=16 && x.age <=17);
    for(let key in person){
        //if(key == "name"){
            arr.push(person[key].name);
        //}
    }
    return arr;
}
//console.log(ageBetween([{name:"Ram",age:20},{name:"Lakshman",age:16},{name:"Dev",age:17}]));

module.exports = {findDivisibleBy4:findDivisibleBy4,sumDivisibleBy4:sumDivisibleBy4,uniqueArray:uniqueArray,getTypes:getTypes,destructureArray:destructureArray,
    objToArray:objToArray,objMinify:objMinify,oldestPerson:oldestPerson,youngestPersonName:youngestPersonName,ageBetween:ageBetween}