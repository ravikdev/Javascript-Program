// const array1 =[1,1,3];
// const array2=[4,5,6];
// const array3 =[...array1,...array2];
// console.log(array3); //[ 1, 1, 3, 4, 5, 6 ]


// --------------------------------------------
//Assigning value to spread operator
// const array1= [1,2,3,4,5,6];
// const [one,two,...rest] =array1;

// console.log(one,two);
// console.log(rest);
// --------------------------------------------
//spread operator on objects
const myVehicle = {         
    brand : 'ford',
    model : 'mustang',
    color: 'yellow'
}

const updateMyVehicle ={
    year : '2021',
    speed: 'balino',
    color : 'white'
}

const updatedVehicle = {...myVehicle,...updateMyVehicle};
console.log(updatedVehicle);

