'use strict';

let num = +prompt('Введите число.');

for (let i = 2; i <= num; i++) {

  if (num % i === 0) {

    alert(`наименьший делитель: ${i}`);
    break;
  }
}

if (num < 1) {
  console.log(NaN);
}

