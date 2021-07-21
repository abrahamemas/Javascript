/*
var firstname = 'Ben';
console.log(firstname);

var lastname = 'smit';
console.log(lastname);

var age = 28;
var job = "footballer";
console.log(job);

var fullage = true;
console.log(fullage);
*/
/*
var firstname = 'Ben';
var age = 28;
console.log(firstname + '  ' + age);

var job,ishemarried;
job = 'footballer';
ishemarried = false;
console.log(firstname + ' is a ' + age +  'years old '  + job +  ' .is he married? ' + ishemarried);


alert(firstname + ' is a ' + age +  'years old '  + job +  ' .is he married? ' + ishemarried);

var lastname = prompt('what is his last name');
console.log(firstname + ' ' + lastname);
*/
/*
var now = 2021;
var yearben = 1999;
var fullage = 21;

var isfullage = now-yearben>=fullage;//true
console.log(isfullage);

var ageben = now-yearben;
var agedan = 17;
var average = (ageben + agedan)/2
console.log(average);
*/
/*
var BMIMark = 'mass, height';
var mass = 1;
var height = 1.69;

var BMIJohn = 'mass,height';
var mass = 92;
var height = 1;

var BMIMark = mass/(height*height);
var BMIJohn = mass/(height*height);

if (BMIMark < BMIJohn) {
    console.log('BMIMark/' < BMIJohn/'.');
    
}else  {
    console.log('BMIJonh/' < BMIMark/'.');
}
*/
/*
var firstname = 'Andy';
var age = 5;

if (age < 13) {
    alert (firstname + 'is a boy');
 
} else if (age >=13 && age < 20) {

    alert (firstname + 'is a teen');
}
else if (age >=20 && age < 30){
    alert (firstname + 'is a young man');
}
else {
    alert (firstname + 'is a man');
}
*/
var firstname = 'Andy';
var age = 16;
age >= 18 ? console .log (firstname + 'Drinks beer') //Ternary Operator 
: console.log (firstname + 'Drinks tea');
age = 18;
switch (true) {
    case age < 13 :
        console.log (firstname + 'is a boy');
        break;
    case age >=13 && age < 20 :
       console .log (firstname + 'is a teen');
       break;
    
    case age >=20 && age < 30 :
       console.log (firstname + 'young man');
       break;
    default :
    console.log (firstname + 'is a man');

}
var player1 = 'John';
var player2 = 'Mark';
var player3 = 'Mary';

var Johnlastgame = 89; 120; 123;
var Marklastgame = 116; 94; 123;
var Marylastgame = 97; 134; 105;

var Johnaverage = 89 / (120 * 123);
var Markaverage = 116 / (94 * 123);
var Maryaverage = 97/ (134*105);

Johnlastgame > Markaverage && Johnaverage >= Maryaverage;
switch (true) {
    case Johnaverage > Markaverage :
        console.log(player1 + 'is the winner');
        break;
    case Johnaverage >= Maryaverage :
        console.log (player1 + 'is the winner');
        break;
    default :
     console.log (player1 + ' is the winner');
}
function calculateageben (birthyear) {
    return 2021 - birthyear;
}
var yearben = calculateageben(1945);
console.log(yearben);

 
  

   
 
     
 












 



