'use strict'
let myName='bayan';
let favcolor='blue';
let favsinger='sia';
let myfriend='majdoleen';
let mybarthday='may,17';
let score=0;

let userName=prompt('please insert your name');
    alert('welcome '+userName+' to our website');
    alert('this game is for you to guess about me; please answer with yes or no');

let theName=prompt('My name is lama');

function question1(firstInput) {
    if(theName.toLowerCase() ==='no' || theName.toLowerCase() ==='n'){
        alert( ' congrates your answer is correct' );
        //console.log (' congrates your answer is correct');
        score+=1;
        document.getElementById("name").innerText=('my name is bayan  your answer is correct');
   }else{
       alert('your answer is wrong');
       //console.log('your answer is wrong');
       document.getElementById("name").innerText=('my name is bayan  your answer isn ot correct');
   }
}

question1(theName);


let color=prompt('my favourite color is pink');
function question2(secondInput) {
    if(color.toLowerCase() ==='no' || color.toLowerCase() ==='n'){
        alert(' congrates your answer is correct' );
         //console.log (' congrates your answer is correct');
         score+=1;
         document.getElementById("color").innerText=('my favourite color is blue  your answer is correct');
   }else{
        alert('your answer is wrong');
        //console.log('your answer is wrong');
        document.getElementById("color").innerText=('my favourite color is blue  your answer is not correct');
       
   }
}
question2(color);

let singer=prompt('my favourite singer is sia');

function question3 (thirdInput) {
    if( singer.toLowerCase()==='yes' || singer.toLowerCase() ==='y'){
        alert(' congrates your answer is correct' );
         //console.log (' congrates your answer is correct');
         score+=1;
       document.getElementById("singer").innerText=('my favourite singer is sia  your answer is correct');
   }else{
       alert('your answer is wrong');
        //console.log('your answer is wrong');
        document.getElementById("singer").innerText=('my favourite singer is sia your answer is not correct');
   }
    
}
question3(singer);

let friend=prompt('sama is my friend ');
function question4(fourthInput) {
    if( friend.toLowerCase() ==='no' || friend.toLowerCase() ==='n'){
        alert(' congrates your answer is correct' );
       //console.log (' congrates your answer is correct');
       score+=1;
       document.getElementById("friend").innerText=('my friend is majdoleen  your answer is correct');
  }else{
      alert('your answer is wrong');
      //console.log('your answer is wrong');
      document.getElementById("friend").innerText=('my friend is majdoleen  your answer is not correct');
  }
    
}
question4(friend);

let barthday=prompt('my barthday is may,17 ');

function question5(fifthInput) {
    if( barthday.toLowerCase()==='yes' || barthday.toLowerCase()==='y'){
         alert( ' congrates your answer is correct' );
         //console.log ('congrates your answer is correct');
         score+=1;
         document.getElementById("barthday").innerText=('my barthday is may,17  your answer is correct');
    }else{
        alert('your answer is wrong');
        //console.log('your answer is wrong');
        document.getElementById("barthday").innerText=('my barthday is may,17  your answer is not correct');
    }
    
}
question5(barthday);



// for(let i=0;i<4;i++){

//     let Siblings=parseInt(prompt('can you guess how many siblings I have?'));
//     //console.log(Siblings);

//     if(Siblings===3){
//         alert('congrates your answer is correct'); 
//         score+=1;
//         document.getElementById("siblings").innerText=('I have 3 siblings your answer is correct');
//         break;

//     }else{
        
//         if(Siblings<3){
//             alert('too low');
//             document.getElementById("siblings").innerText=('I have 3 siblings your answer is not correct');

//         }else{
//         alert('too high');
//         document.getElementById("siblings").innerText=('I have 3 siblings your answer is not correct');
//         }
//         if (i==3){
//             alert('correct answer is 3');
//         }
//     }   
// }


// let hobby=['yoga','driving','watching movies'];

//  for (let i=0;i<6;i++){
//      let hobbies=prompt('my hobbies are');
//      //console.log(hobbies);

//      for(let j=0;j<3;j++){

//      if(hobbies.toLowerCase()===hobby[j]){
//         alert('congrates your answer is correct');
//         score+=1;
//         document.getElementById("hobbies").innerText=('my hobbies are yoga, driving, watching movies  your answer is correct');
//         i=6;
//     }
//     }if(i!=6){ 
//     alert( 'your answer is not correct please try again');
//     document.getElementById("hobbies").innerText=('my hobbies are yoga, driving, watching movies  your answer is not correct');
    
//     }
//     if(i==5){
//         alert('correct answers are: yoga, driving, watching movies');
//     }
// }
   
// alert (userName+' hope you enjoyed playing with us ');

// alert ('your score is '+ score);




