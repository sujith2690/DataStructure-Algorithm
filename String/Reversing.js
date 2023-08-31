// let str = "HELLO";
// console.log(str, "-----  ?");

// let out = str.split("");
// console.log(out, "---- 1");

// out = str.split("").reverse();
// console.log(out, "---- 2");

// out = str.split("").reverse().join("");
// console.log(out, "---- final");


let str ="welcome"
let arr = str.split("")

let vou =["a","e","i","o","u"]

for(let i=0;i<arr.length;i++){
    for (let j= 0;j<vou.length;j++){
        if(arr[i] == arr[j]){
            let values = arr[i]
            console.log(values)
        }
    }
}

