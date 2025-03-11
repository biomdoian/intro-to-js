//const studentNames = ["Paul", "luke", "Amerik"]
//const name1 = studentNames[0]
//console.log(name1)
const student = {
    studentName: "John",
    age:21,
    idNumber: 30590555,
    email:"",
    address:{
        city:"New York",
        country:"USA",
    }
}
student.phoneNumber ="012345677" 
delete student.age //deletes the student age
console.table(student)
//console.log (["age"])
//console.log(student.email)
//console.log(student.address)

const cars = {
    toyota:{
        yom:2014,
        colour:"Blue",
        model:"Palisade"
    },

    BMW:{
        yom:2015,
        colour:"white",
        model:"X1"
    },

    volvo:{
        yom:2020,
        colour:"Silver",
        model:"XC90"
    }
}
console.table(cars)


