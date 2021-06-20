const instructors = [
    {name: 'Quincy', specality: 'Quantam Mechanics', medals: 7},
    {name: 'Kenn', specality: 'Norse Mytholog', medals: 5},
    {name: 'Carokyn', specality: 'Kung Fu', medals: 8},
    {name: 'Paul', specality: 'Entomology', medals: 4},
];

let instructors_names = [];
for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5) {
        instructors_names.push(instructors[i].name);
    }
}
console.log(instructors_names);

const instructorName = instructors.filter(instructors => instructor.medals >= 5);
console.log(instructorName)