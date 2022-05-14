const personOne = {
name: 'Blob',
age: 21
}

function myFn(person){
    const new_person = Object.assign({},person)
    new_person.age +=1
    new_person.name = 'Lisa'
    return new_person
}

const new_person = myFn(personOne)
console.log(personOne)
console.log(new_person)