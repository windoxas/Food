// // 'use strict'
// // // function showMe (name,id){
// // //     this.name = name
// // //     this.id = id
// // //     this.human = false
// // //     if(this.human){
// // //         console.log('Hello '+ this.name);
// // //     }
// // // }

// // // const ivan = new showMe('Ivan', 241401)

// // // console.log(ivan);

// // function User(surname){
// //     console.log(this);
// //     console.log(this.name +surname);
// // }

// // const obj = {
// //     name: 'John'
// // }

// // User.call(obj, ' some')
// // User.apply(obj, [' some'])

// // function count(num){
// //     return this*num
// // }

// // const someNum = count.bind(2)
// // console.log(someNum(5));

// // class Animal{
// //     constructor(name, age, color, id){
// //         this.name = name
// //         this.age = age
// //         this.color = color
// //         this.id = id

// //     }

// //     say(){
// //         console.log('Myou, myou');
// //     }
// // }

// // const dog = new Animal('Hero', 25, 'black', 1457963)
// // for(let i in dog){
// //     console.log(`key:${i}, value:${dog[i]}`);
// // }
// // console.log(dog);

// // function someArguments(name, age, ...rest) {
// //     console.log(`My name is ${name} my age ${age} more info ${rest}`);
// //     console.log(name, age, rest);
// // }

// // someArguments('Xurshid', 25, 'developer', 'hobbies', 'Write coding', 'futbool')

// // let person = {
// //     name: 'Leker',
// //     age: '25',
// //     tel: '+79652541245'
// // }

// // let jsonStringify = JSON.stringify(person)
// // console.log(jsonStringify);
// // console.log(JSON.parse(jsonStringify));

// // let ne = XMLHttpRequest

// // console.log('Запроc данные...');
// // const prom = new Promise((reslove, reject) => {

// //     setTimeout(()=>{
// //         console.log('Подготовк данные...');

// //         let product = {
// //             name: 'Tv',
// //             price: 2000
// //         }

// //         reslove(product)

// //     },2000)
// // })

// // prom.then((data)=> {
// //     return new Promise((reslove,reject) => {
// //         setTimeout(() => {
// //             data.status = 'order'
// //             reslove(data);
// //          },2000)
// //     })
// // }).then((data)=>{
// //     return new Promise((reslove,reject) => {
// //         if(true){
// //             reslove(data)
// //         }else{
// //             reject()
// //         }
// //     })
// // }).then((data) =>{
// //     data.modify = true
// //     console.log('Данные получен!');
// //     console.log(data);
// // })

// // fetch('https://jsonplaceholder.typicode.com/posts', {
// //     method: 'POST',
// //     body: JSON.stringify({name: 'Alex'}),
// //     headers:{
// //         'Content-type': 'application/json'
// //     }
// // })
// //   .then(response => response.json())
// //   .then(json => console.log(json))

// let names = ['hello', 'Some', 'ORANGE']

// let lowerCase = names.map(item => item.toLowerCase())
// console.log(lowerCase);

// let numbers = [2,5,7,8,9,4,1,2,3]

// let res = numbers.reduce((res, iter) => res+ iter)

// console.log(res);

// let some = names.some(item => typeof(item) === 'number')

// console.log(some);

// fetch('http://localhost:3000/menu')
//     .then(data => data.json())
//     .then(req => console.log(req));

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  say() {
    console.log(`Имя ползьиетля ${this.name}, Возрать ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === "number" && age < 110 && age > 0) {
      this._age = age;
    } else {
      console.log("Ваш возраст не правилно ");
    }
  }
}

const ivan = new User("Ivan", 25);
ivan.age = 99 
console.log(ivan.age);
ivan.say();
