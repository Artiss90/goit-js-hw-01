'use strict';
const invoice:number = 50;
const stock:number = 100;

// Write code under this line
const message:string =
  invoice <= stock
    ? `Заказ оформлен, с вами свяжется менеджер`
    : 'На складе недостаточно товаров';

console.log(message);

//если invoice равен 100
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 50
// то значение message будет равно
// 'Заказ оформлен, с вами свяжется менеджер'

//если invoice равен 150
// то значение message будет равно
// 'На складе недостаточно товаров!'
