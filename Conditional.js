let age= 34;
if(age===16||age===15||age===17){
    console.log("You are adult");
}
let number=18;
if(number<=18){
    console.log("Your are adul");
}else{
    console.log("You are not Adult");
}
if(age==12&&age==14&&age==17){
    console.log("Your are adult")
}else{
    console.log("You are not Adult");
}
const result=(age>=18)?"you are adult!" : "your are not adult!";
console.log(result);
const result2=(age>=18)?(age<30)?"you are adult":"your are old":"you are not adult";
console.log(result2);
var names="john";
console.log((2<13));
console.log(2<"12");
console.log(4==names.length);
console.log("14">"16");
// let age =19;
age=Number(age);
if(isNaN(age)){
    console.log("this is not a number");
}
else{
   console.log(age<=18?"you are not adult":"you are adult")
}
let score=15;
if(age<18){
    console.log("you are young");
}
else if(age==18){
    console.log("you are adult");
}
else{
    console.log("You are old");
}
let grade;
if(score<=5){
    grade='F';
}
else if(score<=10){
    grade="E";
}
else if(score<=15){
    grade="D";
}
else if(score<=20){
    grade="C";
}
else if(score<=25){
    grade="B";
}
else{
    grade='A';
}
console.log(grade)

const f="m"
switch(f){
    case "o":
        console.log("it is not frot");
        break;
    case "t":
    case "m":
        console.log("it is very testy");
        break;
    default:
        console.log(`sorry not found`);
}
