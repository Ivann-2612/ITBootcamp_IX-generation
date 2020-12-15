//1. Написати функцију која исписује све елементе низа који су дељиви са 5 
function divisibleByFive(arr) {
    for (i = 0; i < arr.length; i++) {
        //console.log(array[i]);
      if (arr[i] % 5 == 0) {
        console.log(arr[i]);
      }
    }
  }
  console.log(divisibleByFive([1,2,3,4,5,10,15,23,1,5]));  // Исписује -> 5,10,15,5

  console.log('-----------------------------------------');

  //Drugi nacin pomocu filter metode
  let arr = [1,2,3,4,5,10,15,23,1,5]
  const isDivisibleByFive = arr => arr.filter(i => i % 5 == 0);
  console.log(isDivisibleByFive(arr));
  
//2. Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)

function lifeSupply(numPerMonth,age){
    
}

// lifeSupply(10,26) // Враћа 8880
// console.log(lifeSupply(10,26)) 
