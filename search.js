const address = '597, Mohis Bathan Uttar para, rajshahi';
const searchString = 'mohis';
const addressLowerCase = address.toLowerCase();
const doesExist = addressLowerCase.includes(searchString);
console.log(doesExist);


// Index of

// console.log(address.indexOf('Bathan'));
const insideString = 'para';
if(address.indexOf(insideString) !== -1)(
    console.log('inside the string')
)
else(
    console.log('can not find')
)


//  StartWith

console.log(address.startsWith(597));