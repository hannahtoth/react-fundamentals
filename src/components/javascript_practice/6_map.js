const instructors = [
    {name: 'Quincy', specailty: 'Quantam Mechanics'},
    {name: 'Kenn', specailty: 'Norse Mythology'},
    {name: 'Carolyn', specailty: 'Kung Fu'},
    {name: 'Paul', specailty: 'Entomology'}
];

let instructor_names: [];
instructors.forEach(instructor => {
    instructor_names.push(instructor.name)
});
console.log(instructor_names);

const instructorNames = instructor.map(instructor => instructor.name);
console.log(instructorNames);

//Exact same thing, diffenent paramter name
const instructorNamesTwo = instructor.map(i => i.name);
console.log(instructorNamesTwo)


let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);;

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});