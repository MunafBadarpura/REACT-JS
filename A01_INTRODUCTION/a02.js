// state in react, state is immutable
let state = [1,2,3,4,5];
let cp = state;
// console.log(cp.pop());  this is not allowed

// we can do this
let copy = [...state];

// we can do same thing with object


// DESTRUCTURING

let obj = {name: "munaf", age: 25, id: 101};
let {age} = obj;

console.log(age);
console.log(obj.age);

// actual usage

let object = {
    name:"munaf", 
    social:{
        facebook:{
            first:"harsha",
            sec:"helo"
        }
    }
}
console.log(object.social.facebook.sec);

let {sec} = object.social.facebook;
console.log(sec);

// return object from arrow function

let obj1 = () => ( {name:"munaf", age:17} );
console.log(obj1());


