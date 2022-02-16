function getRandomValue(n){
    let randomArray=[];
    let count=[];
    let dublicateArray=[];
    for(let i=0;i<n;i++){
        let randomNumber=Math.round(Math.random() *n);
        // console.log(randomNumber);
        if(randomArray.indexOf(randomNumber)==-1){
            // count++;
            randomArray.push(randomNumber);
        }
        else{
            dublicateArray.push(randomNumber);
        }
       
    }
    return randomArray

}
const result = getRandomValue(10);
console.log(result);