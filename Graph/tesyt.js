// var a = {name:"sujith"}

// b = a

// b.name = "anas"

// c= {...a}
// console.log(c)
// console.log(b)

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(item => item * 2);
// console.log(doubled,'map'); // [2, 4, 6, 8]

// const num = [1, 2, 3, 4];
// const evens = num.filter(item => item % 3 === 0);
// console.log(evens,'filter'); // [2, 4]

// const numb = [1, 2, 3, 4];
// const sum = numb.reduce(function (result, item) {
//   return result + item;
// }, 0);
// console.log(sum,'reduce'); // 10


const num = [5,4,8,9,2]
const result = num.map((item)=>item*2)
console.log(result,'result')

const number = [4,8,5,10,9,55]
const divisible = number.filter((item)=>item%5 ===0 )
console.log(divisible)

const numb= [47,8,9,5,12,46,1]
const re = numb.reduce(function (result,item){
    return result +item
},0)
console.log(re,'reduce')