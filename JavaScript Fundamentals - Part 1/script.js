// Coding Challenge 1 - BMI

const markHeight= 1.88;
const markWeight= 95;

const johnHeight= 1.76;
const johnWeight= 85;

const markBMI= markWeight/markHeight ** 2;
const johnBMI= johnWeight/johnHeight ** 2;

console.log(johnBMI);
console.log(markBMI);


let markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

// Coding Challenge 2 - if else

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}).`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than mark's BMI (${markBMI}).`);
}

const inputYear = '1997';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

//Coding Challenge 3-

const dolphinAvg = (88 + 108 + 89) / 3;
const koalaAvg= (88 + 91 + 110) / 3;

const minScore=100;

console.log(dolphinAvg, koalaAvg)

if(dolphinAvg > koalaAvg && dolphinAvg >= minScore){
    console.log(`Dolphins have higher avg score (${dolphinAvg}) than Koala's avg score (${koalaAvg}).`);
} else if(koalaAvg > dolphinAvg && koalaAvg >= minScore){
    console.log(`Koalas jabe higher avg score (${koalaAvg}) than dolphins (${dolphinAvg}).`);
} else if (koalaAvg === dolphinAvg && dolphinAvg >= minScore && koalaAvg >= minScore){
    console.log(`It's a tie.`)
} else {
    console.log(`No one wins.`)
}


//Coding Challenge 4- Calculate tip using ternery operator

const bill = 275;

console.log(`Bill is ${bill}.`);

let tip;

tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`Tip is ${tip}.`);

console.log(`Total is ${bill + tip}`);