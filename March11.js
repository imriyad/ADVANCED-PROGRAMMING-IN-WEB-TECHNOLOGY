console.log("Start");

function a()
{
    let sum=0;
    setTimeout(() => {
    for (let i = 0; i < 100000; i++)
     {
        sum+=i;   
     }
    console.log(sum);
    }, 1000); 
    
}

a()
console.log("End");




//Promise

const prom = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let success=true
        if(success)
        {
            resolve("Done")
        }
        else
        {
            reject("Not Done")
        }
    }, 1000);

})

prom
   .then((message)=>console.log(message))
   .catch((error) => console.log(error))