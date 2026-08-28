let num:number = 10

let x = 20

let val:unknown
val = 10

let val2:any;
val2 = "Rahul"


console.log(val)
console.log(val2.toUpperCase())

if(typeof val2 === "string") {
    console.log(val2.toUpperCase())
}

let arr:number[] = [1, 2, 3, 4]


let obj: { name: string; age: number; gender: string } = {
    name: "Rahul",
    age: 20,
    gender: "Male"
}

type customer ={
    name: string;
    age: number;
    id: string;
}

let c1 : customer = {
    name: "Rahul",
    age: 20,
    id: "abc"
}
