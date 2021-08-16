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
/*
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
*/
/*
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
*/
/*
 var skill = function(job,firstname){
     switch (job){
         case 'singer' :
             return firstname + 'sing to people around the world';
         case 'footballer':
             return firstname + 'plays football';
         case 'developer' :
             return firstname + 'is a programmer'
        default :
          return firstname + 'does something else';
     }
 }
  console.log (skill('singer','Ben'));
  console.log (skill('footballer','Sam'));
  console.log (skill('retired','Alan'));
   
var amount = 124; 48; 268;
var tip = .2; .15; .1;

var percent = function(amount){

    switch(amount){
       case (amount < 50):
        console.log(tip);
        break;
       case (amount > 50 && amount < 200):
        console.log(tip);
        break;
        case (amount > 200):
            console.log(tip);
            break;
        default :
         return tip * amount;


    }
}
console.log (percent(amount + ' '  + tip));
var John = {
    mass: 10202020,
    height: 12.6,
    Bmis: function(){
        return this.mass / this.height**2
    } 
};
var Mark = {
    mass: 92,
    height: 12,
    Bmis: function(){
        return this.mass / this.height**2
    }
};

var JohnBMI = John.Bmis();
var MarkBMI = Mark.Bmis();

var sumOfBmis = function(){
    if (MarkBMI > JohnBMI){
        return 'Mark is the winner'; 
    } else {
        return 'John is winner';
    }
}

console.log(sumOfBmis());

var Emas = {
    Bills: [124,48,268,180,42],
    Sumofbill: function(){
       this.tip = [];
       this.finalvalue = [];
       var tip;
       for (var i = 0; i < this.Bills.length; i++) {
           const element = this.Bills[i];
           
           
       }

       if (this.Bills < 50){
           return tip = .2;
       }else if (this.Bills > 50 && this.Bills < 200){
           return tip = .15;
       }else if (this.Bills > 200){
           return tip = .1;
       }else {
           return this.Bills + this.tip;
       }
     
    

    
    }
}

console.log(Emas.Sumofbill)
    
        
     
         
 var sumofNumber_10 = [2+3+4+8];
 function arrarycalc(arr,fn){
     var arrRes = []
     for (var i = 0; i < 2000000; i++) {
         const element = sumofNumber_10[i];
         
     }
 }*/
 var scores, roundscores,activeplayers,dice;
 scores = [0,0];
 roundscores = 0;
 activeplayers = 0;
 document.getElementById('score--0').textContent=0;
 document.getElementById('score--1').textContent=0;
 document.getElementById('current--0').textContent=0;
 document.getElementById('current--1').textConten = 0;

 document.querySelector(".btn--roll").addEventListener('click',function(){
     var dice = Math.floor(Math.random()*6)+1;
     var diceDom = document.querySelector('.dice');
     diceDom.style.display = 'block';
     diceDom.src = 'dice-'+ dice + '.png';
     if (dice !== 1){
         roundscores += dice;
         document.querySelector('#current--' + activeplayers).textContent = roundscores;
        
    
     }else {
      activeplayers===0 ? activeplayers = 1 : activeplayers = 0;
      roundscores=0;
      document.getElementById('current--0').textContent=0;
      document.getElementById('current--1').textContent=0

     
     }
      document.querySelector(".btn--hold").addEventListener('click',function(){
      scores[activeplayers] += roundscores;
      document.querySelector('#score--' + activeplayers).textContent = scores[activeplayers];
     
    
    


      })


    
     







 })
