const array = ['thing', 42, false, {key: 'value'}, [1, 2, 3, 4, undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length - 1];

console.log(stringVar, numVar, objVar, nanVar);

let [string, num, obj, , nan] = array;
console.log(string, num, obj, nan);

let newArr = ['a', 1, undefined, ...array];
console.log(newArr);

const testObj = {
    testString: 'stringy thingy',
    testNum: 2,
    testBool: true,
    testObject: {key: 'waluigi'},
    testArray: [1, 2, 3, 4, undefined],
    testNaN: Nan
}

const ObjString = testObj.testString;
const ObjNum = testObj.testNum;
const ObjObj = testObj.testObject;
const ObjNan = testObj.testNaN;

console.log(ObjString, ObjNum, ObjObj, ObjNan);

let {testString, testNum, testObject, testNaN} = testObj;
console.log(testString, testNum, testObject, testNaN);

let newObj = {newString: 'more strings', anotherString: 'this is a string', ... testObj};
console.log(newObj)