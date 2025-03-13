const a=[1,2,3,4]

const b=[...a,5]
console.log(b);

const car=["BMW","Red","Kuril"]
const [,uv,ed]=car
console.log(uv,ed);

const x=[1,2,3]
const y=x.map(z=>z*2)
console.log(y);







console.log(Math.round(3.3));
console.log(Math.floor(3.9));
console.log(Math.ceil(3.3));

//Max function
console.log(Math.max(10,20,30,40));
let numbers=[2,3,4,5]
console.log(Math.max(...numbers));

//Random Number
console.log(Math.random());
function getRandomBetwwen(min,max)
{
    return Math.random() * (max - min) + min;
}
console.log(getRandomBetwwen(4,6));
