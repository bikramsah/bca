// const array =[1,2,3,4]

// const array2=[]


// const array=[22,12,29,39,38]
// array.forEach((list)=>{
//     console.log(list)
// })

// const numbers=[1,2,3,4,5,6,7,8,9,10]
// const square=numbers.map((e)=>{
//     return e*2
// })
// console.log(square)


// const filteredArray =numbers.filter((e)=>{
//     return e%2!=0

// })
// console.log(filteredArray)


const array=[1,2,3,4,5,6,7,8,9,10]
const sum=0;
const sumWithInitial=array.reduce(
    (sum,e)=>{
        return sum+e
    },sum
)
console.log(sumWithInitial);
