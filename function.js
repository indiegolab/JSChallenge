// Define Functions
function sayHello(name, age){
    // Normal way
    // console.log('Hello', name, "you have ", age);
    // 백틱 방식 적용
    // console.log(`Hello ${name} you are ${age} years old.`);
    return `Hello ${name} you are ${age} years old.`;
}

sayHello("nico", 15);


const greetNico = sayHello("Nico", 14);

// sayHello 함수의 return이 업승면 때문에 undefined 나옴
console.log(greetNico);


// plus function 만들어보기
const calculator = {
    plus: function(a,b){
        return a+b;
    }
}

const plus = calculator.plus(5,5)
console.log(plus)





