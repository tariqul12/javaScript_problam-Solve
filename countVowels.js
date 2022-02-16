const vowels=['a','e','i','o','u','A','E','I','O','U'];

function countVowels(sentence){
    let count=0;
    let letter=Array.from(sentence)
    // console.log(letter);
    letter.filter(value=>{
        if(vowels.includes(value)){
            count++
        }
    })
    // for(let i=0;i<letters.length;i++){
    //     const letter=letters[i];
    //     // console.log(letter);
    //     if(vowels.includes(letter)){
    //         count++;
    //     }
    // }
    return count
}
console.log(countVowels("I love Bangladesh"));