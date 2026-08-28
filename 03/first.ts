interface person {
    name: string;
    age: number;
    gender: string;
    adhar?: string;
}

const obj: person = {
    name: "John Doe",
    age: 30,
    gender: "Male"
};


interface customer{
    name: string;
    age: number;
    balance: number;
}

const obj2: Partial<customer> = {
    name: "Smith",
    age: 25
}

const obj3: Required<customer> = {
    name: "Smith",
    age: 25,
    balance: 1000
}

const obj4: Readonly<customer> = {
    name: "Smith",
    age: 25,
    balance: 1000
}



// Array of objects

interface people{name: string, age: number, gender: string}

const arr: people[] = [{name: "Rohit", age: 30, gender: "Male"}, {name: "mohit", age: 25, gender: "Male"}]



// function in TS

function greet (a:number):number{
    console.log(a)
    return a+5
}
console.log(greet(5))


function meet (msg:string, val:number):void{
    console.log(msg,val)
}

meet("Himanshu", 4)


function neet(msg:string = "JIT"){
    console.log(msg)
}

neet()



// Optional Parameter

function GATE(person?:string){
    console.log(person|| "Rohan")
}

GATE()
GATE("Subham")



// Arrow fun

const sum=(a:number,b:number):number=>{
    return a+b
}
console.log(sum(3,4))




// Callback Function

type A = (amount:number)=>void

function palceOrder(order:number, callback:A):void{

    const amount:number= order+10
    callback(amount)
}

palceOrder(10,(amount)=>{
    console.log(amount)
})



// Rest Parameter

function total (...arr:number[]){
    let ans:number = 0
    arr.forEach((val:number)=>ans = ans+val)
    console.log(ans)
}

total(1,2, 3, 43, 2, 364)









