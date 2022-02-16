                // dublicate number
const numbers=[1,3,4,3,5,6,7,4,5,3,7,89,6,0];
const dublicate=numbers.filter((value,index,array)=>{
    return array.indexOf(value)!==index;
})
console.log(dublicate);

            // unickNumber
const unick=numbers.filter((value,index,array)=>array.indexOf(value)===index)
console.log(unick);