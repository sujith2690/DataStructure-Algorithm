// let an = [1, 2, 5, 8, 8]



// let b = { ...an }
// console.log(b,'its b');

// let a = an.reduce((acc, value) => {
//     return acc + value
// }, 0)

// console.log(a);


// let h = [1, 5, 8, 9]
// function gthan(x) {
//     return x >= 5;
// }
// const g = h.filter(gthan)
// console.log(g)

// const out = h.map(((x) => x * 12))
// console.log(out)


// let bh = h.reduce((acc, curr) => {
//     return acc + curr;
// }, 0)
// console.log(bh,'bh')

// //   spread operator  //
// const arr4 = [...an]
// console.log(arr4,'aaaaaaaaaarrr')

// const r = an.map(((x)=>x*4))
// console.log(r,'arrr....')


// function mult(x){
//     return  x >2
// }
// const re = an.filter(mult)
//     console.log(re,'lllll')


// const hd = an.reduce((acc,curr)=>{
// return acc+curr
// },0)
// console.log(hd,'hhhhhhhh')

// console.log(an.length,'lllllength')

// const but = {1:"hari"}

// console.log(Object.keys(but),'array out')

// var object = { 0: 'x', 1: 'y', 2: 'z' };
// console.log(Object.keys(object));

// // const http = require('http')

// // http.createserver(function(req,res)=>{
// //     res.write('hello'),
// //     res.end()
// // }).listen(3000)


//         uniqe            //


const arr = [2,5,4,4,2]

// const gf = arr.unshift(55)

// console.log(arr)

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [...new Set(chars)];

let merge = arr.concat(chars)

console.log(arr);
console.log(uniqueChars);
console.log(merge)