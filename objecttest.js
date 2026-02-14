console.log("hi manuel");
//objext in javascripts are used to stor valaues of diffrent type in the form of key value pairs

let car={
    name:"mahindra",
    price:10000,
    model:"Thar"
}
console.log(car.name);//accesing objects
console.log(car.price);//accesing objects
console.log(car.model);//accesing objects
//udpating objects
car.name="Toyota";
console.log(car.name);//accesing objects
//we can store anything in java scripts like arrays,numbers,functions,strings,etc and objects
let person={
    name:"manuel",
    job:"Developer",
    salary:100000,
    habit:["read","code","fitness"],
    male:true,
    beverage:{
        morning:"coffee",
        evening:"coco cola",
        night:"beer"

    },
    greet(){
       
        return "time for " +this.beverage.evening;
    }
    
   
}
console.log(Object.keys(person));
console.log(Object.values(person));
for(let i in person){
    console.log(`for ${i} values are ${person[i]}`);
}

console.log(person.name);
console.log(person.habit[1]);
console.log(person.male);
console.log(person.greet());
console.log(person.salary);
console.log(person.beverage);
//next we are gonna take about object inheritence
const vehicle={
    wheels:4,
    engine(){
        return "vroom!!!";
    }
}
let thar=Object.create(vehicle);
thar.doors=4;
vehicle.headlight=2;
console.log(vehicle);
console.log(vehicle.engine());
//we can inherite the properties of vehicles
console.log(thar);
console.log(thar.doors);
console.log(thar.headlight);
console.log(thar.engine());
// we can overide the properties of vehicle
thar.engine=()=>{
    return "hushhh!!!";
}
console.log(thar.engine());
function Person(first,last,age,eye){
    this.firstname=first;
    this.lastname=last;
    this.ages=age;
    this.eyes=eye;

}

const myFather=new Person("manuel","rajesh",23,"brown");
delete myFather.ages;
myFather.ages=23;

document.getElementById("demo").innerHTML="is "+myFather.ages;


