
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
const flatten = (obj, result = [],prefix="") => {
  for (let key in obj) {
    if(Array.isArray(obj[key])){
      for(let i=0;i<obj[key].length;i++){
        result[prefix+key+"_"]=obj[key][i];
      }
    }
    else if (typeof obj[key] === "object") {
      flatten(obj[key], result,prefix);
    } else {
      result[prefix+key+"."]=obj[key];
    }
  }
  return result;
};

console.log(flatten(myObj));



// let person={
//     name:"manuel",
//     job:"Developer",
//     salary:100000,
//     habit:"code",
//     male:true   
// }
// function countProperties(person){
//     let count=0;
//     for(let i in person){
//         count++;
//     }
//     console.log(count);
// }
// countProperties(person);
// let user = { name: "Manuel", age: 22, city: "Kochi" };
// for(let i in user){
//     console.log(`${i} and ${user[i]}`);
// }
// let thing={a:1, b:"hello", c:3} 
// //  {a:1, c:3}
// for(let i in thing){
//     if(Object.values(thing[i])>=0){
//         console.log(i);
//     }
// }
//  let animal={
//     type:"mammal"
//  }
// let dog=Object.create(animal);
// dog.breed="Husky";
// console.log(dog.type);
// //it works due inheritence of a object
// let obj = {a:1, b:2, c:3};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// let a = {x: 1, y: 2};
// let b = {y: 100, z: 5};


// console.log(x);
// myAssign(a, b);
// // a becomes {x:1, y:100, z:5}
// function myAssign(target, source) {
//     for(let key in source){
//         if(source.hasOwnProperty(key)){
//             target[key]=source[key];
//         }
//     }
//     console.log(target);
//     // your logic
// }
// let students = {
//   m1:"hi",m2:"bie",
//   s1: { name: "m", age: 20 },
//   s2: { name: "j", age: 21 }
// };

// let result = [];

// for (let key in students) {
//   if(typeof students[key]==="object"){
//      result.push({
//     id: key,
//     ...students[key]
//   });

//   }
//   else{
//     result.push({id:key,value:students[key]})
//   }
 
// }

// console.log(result);
// var section={
//   a: 1,
//   b: { c: 2, d: 3 },
// }
// // { a: 1, c: 2, d: 3, g: 4 }
// let result=[];

// for(let key in section){
//   result.push({...section[key]});
// }
// console.log(result);

