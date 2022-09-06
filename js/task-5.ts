'use strict';
// const countryName = 'индия';
const countryName:string|null = prompt('Выберите страну доставки');
const CANCELED_BY_USER:string = 'Отменено пользователем!';
const NO_DELIVERY:string = 'В выбранную страну доставка недоступна.';
const CHINA :string= 'Китай';
const AUSTRALIA:string = 'Австралия';
const INDIA:string = 'Индия';
const JAMAICA :string= 'Ямайка';
let message:string | undefined;
let price:number = 0;
let country:string | undefined;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
  switch (country) {
    case CHINA:
      price = 100;
      break;
    case AUSTRALIA:
      price = 170;
      break;
    case INDIA:
      price = 80;
      break;
    case JAMAICA:
      price = 120;
      break;
    default:
      message = NO_DELIVERY;
  }
}
if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}
console.log(message);
console.log(country);
console.log(price);
alert(message);
//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'
