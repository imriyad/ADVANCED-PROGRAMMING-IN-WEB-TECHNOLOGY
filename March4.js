console.log("Mahdi Kabir Riyad");

const a="Raha"

console.log(a);
console.log(`Hello ${a}`);

console.log("---------------------");

const b=(name="abd")=>`Hello ${name}`;
console.log(b());
console.log(b("Mahdi"));


console.log("---------------------");

const c=()=>"Hello c"
console.log(c());

console.log();
console.log("Class creation and constructor creation.......");
console.log();

class cl
{
    constructor(name)
    {
        this.name=name
    }

    //Callback function
    sayHello()
    {
        setTimeout(() => {
            console.log(this.name);
            
        }, 1000);  //here it will take 1s to run for 1000 milisecond
    }
}
const ob=new cl("Jorina")
console.log(ob.name);
ob.sayHello();

//for in loop

let arr=[1,2,3]
for(let n in arr)
{
    console.log(arr[n]);
    
}


//Object creation (not the normal object)

const person={
    name:"Liana",
    add:"Dhaka"
}
for(let n in person)
{
    console.log(person[n]);
    
}

//template literal

for(let n in person)
{
    console.log(`${n}: ${person[n]}`);
    
}
//concatenation
for(let n in person)
    {
        console.log(n +":"+person[n]);
        
    }

//for of loop
for(let n of arr)
{
    console.log(n);
    
}


//for each loop
arr.forEach(element => {
    console.log(element);
    
});

//while loop

i=0
while(i<3)
{
    console.log(arr[i]);
    i++
}

//do while loop
i=0
do{
    console.log(arr[i]);
    i++
}while(i<3)