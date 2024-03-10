//  split

const address = '597, Mohis Bathan Uttar para. rajshahi court : 6201. rajpara, rajshahi';
const parts = address.split(' ');
const sentences = address.split('.');
const chars = address.split('');
// console.log(sentences);

//  Slice
const partial = address.slice(5, 17);
// console.log(partial);


//  Join
const line = [
    '597, Mohis Bathan Uttar para',
    'rajshahi court : 6201',
    'rajpara, rajshahi'
  ]
const newAddress = line.join(':');
console.log(newAddress);