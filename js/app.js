'use strict'
let myName='bayan';
let favcolor='blue';
let favsinger='sia';
let myfriend='majdoleen';
let mybarthday='may,17';

let userName=prompt('please insert your name');
    alert('welcome '+userName+' to our website');
    alert('this game is for you to guess about me; please answer with yes or no');

let theName=prompt('My name is lama');
if(theName.toLowerCase() ==='no' || theName.toLowerCase() ==='n'){
     alert( ' congrates your answer is correct' );
     //console.log (' congrates your answer is correct');
     document.getElementById("name").innerText=('my name is bayan  your answer is correct');
}else{
    alert('your answer is wrong');
    //console.log('your answer is wrong');
    document.getElementById("name").innerText=('my name is bayan  your answer isn ot correct');
}
let color=prompt('my favourite color is pink');
 if(color.toLowerCase() ==='no' || color.toLowerCase() ==='n'){
     alert(' congrates your answer is correct' );
      //console.log (' congrates your answer is correct');
      document.getElementById("color").innerText=('my favourite color is blue  your answer is correct');
}else{
     alert('your answer is wrong');
     //console.log('your answer is wrong');
     document.getElementById("color").innerText=('my favourite color is blue  your answer is not correct');
    
}
let singer=prompt('my favourite singer is sia');
if( singer.toLowerCase()==='yes' || singer.toLowerCase() ==='y'){
     alert(' congrates your answer is correct' );
      //console.log (' congrates your answer is correct');
    document.getElementById("singer").innerText=('my favourite singer is sia  your answer is correct');
}else{
    alert('your answer is wrong');
     //console.log('your answer is wrong');
     document.getElementById("singer").innerText=('my favourite singer is sia your answer is not correct');
}
let friend=prompt('sama is my friend ');
 if( friend.toLowerCase() ==='no' || friend.toLowerCase() ==='n'){
      alert(' congrates your answer is correct' );
     //console.log (' congrates your answer is correct');
     document.getElementById("friend").innerText=('my friend is majdoleen  your answer is correct');
}else{
    alert('your answer is wrong');
    //console.log('your answer is wrong');
    document.getElementById("friend").innerText=('my friend is majdoleen  your answer is not correct');
}
let barthday=prompt('my barthday is may,17 ');
if( barthday.toLowerCase()==='yes' || barthday.toLowerCase()==='y'){
     alert( ' congrates your answer is correct' );
     //console.log ('congrates your answer is correct');
     document.getElementById("barthday").innerText=('my barthday is may,17  your answer is correct');
}else{
    alert('your answer is wrong');
    //console.log('your answer is wrong');
    document.getElementById("barthday").innerText=('my barthday is may,17  your answer is not correct');
}

alert (userName+' hope you enjoyed playing with us ')

