import url from 'node:url';
//Constructing a URL from component parts and getting the constructed string
const pathname = '/google/w3school/nodejs';
const search = '?n=j';
const hash = '#xyz';
const myURL = new URL(`https://example.org${pathname}${search}${hash}`);
console.log(myURL.href);