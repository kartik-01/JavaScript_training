'use strict';


// logger();
// function logger(){
//     console.log('Logger1 function is working.');
// };


// const logger2 = function(){
//     console.log('Logger2 function is working.');
// }

// logger2();



// const applejuice = fruitProcessor(4,5);
// console.log(applejuice);

// function calcAge1(birthYear){
//     return 2022 - birthYear;
// }

// console.log(calcAge1(1997));


// const calcAge2 = (birthYear) => 2022 - birthYear ;


// console.log(calcAge2(2002));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge2(birthYear);
//     const retirement= 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         return `Already retired`;
//     }
// }

// console.log(yearsUntilRetirement(1970,'Kartik'));


// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

//Coding Challenge - 1

const calcAverage = (score1,score2,score3) =>{
    return (score1 + score2 + score3) / 3;
} 

const dolphinAvg = calcAverage(44,23,71);

const koalaAvg = calcAverage(65,54,49);

console.log(dolphinAvg,koalaAvg);


function checkWinner(dolphinAvg, koalaAvg){
    if(dolphinAvg >= 2 * koalaAvg){
        console.log(`Dolphins with avg score of ${dolphinAvg} wins.`);
    } else if (koalaAvg >= 2 * dolphinAvg) {
        console.log(`Koalas with avg score of ${koalaAvg} wins.`);
    } else {
        console.log(`No team wins...`)
    }
}

checkWinner(dolphinAvg, koalaAvg);

checkWinner(341,111);

// // Arrays

// const friends = ['Kartik', 'Sahil', 'Kaustubh','Kene'];

// //push

// friends.push('Kabir');

// console.log(friends);

// //pop
// friends.pop();
// console.log(friends);

// //shift
// friends.unshift('Joy');
// console.log(friends);


// console.log(friends.indexOf('Kartik'))


//Coding Challenge - 2 Arrays


const calcTip= function(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

const bills=[125,555,44];
const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]

console.log(bills,tips, total);

//Objects

// const kartik ={
//     firstName:'Kartik',
//     lastName:'Chindarkar',
//     RollNo: 14,
//     birthYear : 1997,
//     job: 'Frontend Developer',
//     friends : ['Sahil','Kaustubh','Rajdeep'],
//     hasDriversLicense: true,

//     calcAge: function(){
//        return 2022 - this.birthYear;
//     },

//     getSummary: function(){
//         if(this.hasDriversLicense){
//             console.log(`${kartik.firstName} is a ${kartik.calcAge()} years old ${kartik.job}, and he has a driver's license.`)
//         } else {
//             console.log(`${kartik.firstName} is a ${kartik.calcAge()} years old ${kartik.job}, and he does not have a driver's license.`)
//         }
//     }
// };

// // console.log(`age`+kartik.calcAge(1998));

// // const nameKey='Name';

// // console.log(kartik.lastName);
// // console.log(kartik['first'+nameKey]);

// // const value= prompt('What do you want to know about kartik? Choose between first name, last name, age, job and friends.')

// // if(kartik[value]){
// //     console.log(kartik[value]);
// // } else{
// //     console.log('Wrong request! Choose between first name, last name, age, job and friends.')
// // }

// // kartik.location='Mumbai';
// // kartik['insta']='kaartikk_01';

// // console.log(kartik);

// // console.log(`${kartik.firstName} has ${kartik.friends.length} friends, and his best friend is called ${kartik.friends[0]}`);

// kartik.getSummary();

//Coding Challenge - 3 - Objects

const mark = {
    firstName: 'Mark',
    lastName:'Miller',
    mass:78,
    height:1.69,

    calcBMI: function(){
        return this.mass/this.height ** 2;
    }
};

const john = {
    firstName: 'John',
    lastName:'Smith',
    mass:92,
    height:1.95,

    calcBMI: function(){
        return this.mass/this.height ** 2;
    }
};

if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s BMI (${john.calcBMI()})`);
} else {
    console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s BMI (${mark.calcBMI()})`);
}

//Coding Challenge 4

const _bills=[22,295,176,440,37,105,10,1100,86,52];
const _tips=[];
const _total=[];

const _calcTip = function(bills){
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.20;
}

for(let i=0;i<_bills.length;i++){
   const tip= _calcTip(_bills[i]);
    _tips.push(tip);
}

console.log(_tips);