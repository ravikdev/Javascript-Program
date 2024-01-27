const Person ={
    id: 22,
    name :'ravi',
    type : 'human'
}


const myPerson= ({name,type}) => {
 console.log(name);
 console.log (type);
}


myPerson (Person);


const {name,type} = Person;