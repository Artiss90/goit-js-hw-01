'use strict';
const orderPieces = 4;
// console.log(orderPieces);
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';

let totalPrice = orderPieces * pricePerDroid;
console.log(totalPrice);
let balanceCredit = credits - totalPrice;
console.log(balanceCredit);
let message;

if (orderPieces == null) {
  message = CANCELED_BY_USER;
} else if (orderPieces >= 0 && balanceCredit >= 0) {
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
