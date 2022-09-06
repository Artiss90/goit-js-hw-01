'use strict';
const orderPieces:number | null = 4;
const credits:number = 23580;
const pricePerDroid:number = 3000;
const CANCELED_BY_USER:string = 'Отменено пользователем!';
const ACCESS_DENIED:string = 'Недостаточно средств на счету!';

let totalPrice:number = orderPieces * pricePerDroid;
console.log(totalPrice);
let balanceCredit:number = credits - totalPrice;
console.log(balanceCredit);
let message:string;

if (!orderPieces) {
  message = CANCELED_BY_USER;
} else if (orderPieces > 0 && balanceCredit >= 0) {
  message = `Вы купили ${orderPieces} дроидов, на счету осталось ${balanceCredit} кредитов`;
} else message = ACCESS_DENIED;
console.log(message);

//если orderPieces равно 4
// то значение message будет равно
// 'Вы купили 4 дроидов, на счету осталось 11580 кредитов'

//если orderPieces равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если orderPieces равно 10
// то значение message будет равно
// 'Недостаточно средств на счету!'
