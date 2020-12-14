// alert("I'm working.")
console.log('I do working')

/* Arrys = List*/ 
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri"]
console.log(daysOfWeek)
console.log(daysOfWeek[2])

// Object 선언 = 중괄호
const nicoInfo = {
  name: "Nico",
  age: "22",
  gender: "Male",
  isHansome: true,
  favMovies: ["Inception", "Dark knight"],
  favFood: [
    {
      name: "kimchi", fatty: false
    },
    {
      name: "pizza", fatty: true
    }
  ]
}


console.log(nicoInfo)
console.log(nicoInfo.name)

// const 안에 있는 값을 바꿀 수 있다.
nicoInfo.isHansome = false
console.log(nicoInfo.isHansome)


console.log('Hello')
console.log(console)
console.log(nicoInfo,console)

