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