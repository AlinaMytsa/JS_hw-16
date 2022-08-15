'use strict';

let num = +prompt('Введите число.');
let i = 2

for ( ; ; i++ ){

  if(num < 1){
    console.log(NaN);
    break;
  }

if (num % i === 0 ){

  alert(`наименьший делитель: ${i}`);
  break;

} else if ( num % i !== 0 ){

    alert(`число ${num} - простое`);
    break;

  }
}

