function canWIthdraw(age,mpesaBalance){

    if (age >= 18 && mpesaBalance >= 1000) {
        console.log("Can withdraw money. ")
    } else {
        console.log('Please try again!')
    }

}
//  canWIthdraw(17,1000)

function isAdult(age){
    if (age >= 18) {
        console.log("You are an adult.")
    } else {
        console.log("You are under 18")
    }
}
// isAdult(21)

// const num1 = 100 
// function outerFunc(){
//      console.log(num1)
// }

// function innerFunc(){
//     const num1 =1000

//   outerFunc()
// }

// innerFunc()


// const studentName = function(){
//     return "Paul"
// }
const name1 = "Natasha"

// function studentNames(name1,studentName){
//      return [name1, studentName]

// }

// const studentName = function(){
//     return "Paul"
// }

// function studentName(){
//     return "paul"
// }

// const studentName = () => "Paul";
// const studentNames = (name1, studentName) => 
//     { return [name1, studentName] }
// // console.log(studentName())
// console.log(studentNames(name1, studentName()))

const myArray = ['Ruth', 'Tevin', 'Imani', 'Korir','Fahad']
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])
// console.log(myArray[4])
// console.log(myArray.length-1)
// myArray.splice(2,1)
// myArray.slice(1,3)
// myArray.push('Maxwell', 'Austin')//adds the an element to an array as the last one
// myArray.unshift('Joseph', 'Natasha')//adds an element at the start of an array
// myArray.splice(2, 'Dennis')
// myArray.splice(2,0, 'Maek','Abdi')
// myArray.pop()// removes last item
// myArray.shift() // removes first item
const newArray = ['Luke',...myArray]
const namesArray = [...newArray, 'Moreen']

console.log(myArray)
console.log(newArray)
console.log(namesArray)
















