function reverseString(text){
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        const index = i;
        const element = text[i]
        reversed = reversed + element
        console.log(element, reversed)
    }
    return reversed;
}

const myStrings = 'i am a good boy';
const reversed = reverseString(myStrings);
console.log(reversed)