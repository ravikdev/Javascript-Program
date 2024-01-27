function fetch(){
    return new Promise(function(resolve,reject){
        const value = 'this is my data resolve data';
        setTimeout(() => {
            resolve(value)
        }, 3000);
    })
}

async function fetchData(){
    try{
        const result = await fetch();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

fetchData();





















// function fetch(test){
//     return new Promise(function(resolve,reject0){
//         const value = test;
//         setTimeout(() => {
//             resolve(value)
//         }, 3000);
//     })
// }

// fetch(test=1).then(value=>
//     {console.log(value)}
//     )
