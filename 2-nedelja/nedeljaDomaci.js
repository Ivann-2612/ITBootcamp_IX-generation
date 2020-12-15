
/*1.Сачувати у променљиве цену и пречник пице*/
//Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
//Исписати тај резултат у конзолу


let cenaPice = 800
let R = 32
let r = R/2
let P = (r*r) * Math.PI
let cenaPoCm = P/cenaPice

console.log(cenaPoCm);

/*2.За првих 100 бројева исписати:
FizzBuzz ако је број дељив и са 3 и са 5
Fizz ако је број дељив само са 3
Buzz ако је број дељив само са 5
Број ако није дељив ни са 3 ни са 5
(1,2,Fizz,4,Buzz,...)*/

let M = 100
  for(let i = 1; i <= M; i++){
     if(i % 15 == 0){
        console.log('FizzBuzz',i);
     }else if( i % 3 == 0){
    console.log('Fizz',i);
   } else if(i % 5 == 0){
       console.log('Buzz',i);
   }else if(i % 15 != 0){
       console.log('Nije deljiv ni sa 3 ni sa 5',i);
   }
}


/*3.Исписати Марио пирамиду одређене висине:
За n = 5

#
##
###
####
#####*/
let y = 5
for(let i = 1; i <= y; i++){
     for(let j = 1;j <= i; j++)
         document.write('#');
         document.write('<br />');
}
/*4.Исписати Марио пирамиду одређене висине:
За n = 5

    #
   ## 
  ###
 ####   
#####*/
  let n = 5
   for(let i = 1; i <= n; i++){
       console.log(' '.repeat(n - i) + '#'.repeat(i))
   }
console.log('-------------------------------');
/*5.Исписати Марио пирамиду одређене висине:
За n = 5

    # #
   ## ##
  ### ###
 #### ####  
##### #####
*/
let n = 5
    for(let i = 1; i <= n; i++){
        console.log(' '.repeat(n - i) + '#'.repeat(i)  + ' ' + '#'.repeat(i))
    }
