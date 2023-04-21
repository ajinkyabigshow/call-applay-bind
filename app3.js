//call, applay, bind
//1.call method
const student = {name:"ajinkya",age:24,class1:"m com"}

function getinfo(address,pincode){
    console.log(`the name is ${this.name} and the age is ${this.age} and the class is ${this.class1} the address is ${address} and the pincode is ${pincode}`);
}

const student2 = {name:"shivam",age:24,class1:"m com"}
getinfo.call(student2,"sangli",416416)

getinfo.call(student,"sangli",416416)

//2.applay method

getinfo.apply(student,["sangli",416416])

//3.bind method

const myfunction = getinfo.bind({name:"surekha",age:24,class1:"b.com"},"sangli",416416)
console.log(myfunction);
myfunction()

