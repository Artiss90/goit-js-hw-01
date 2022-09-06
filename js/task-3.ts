'use strict';
const userPassword:string = '';

const ADMIN_PASSWORD:string = 'jqueryismyjam';

const CANCELED_BY_USER:string = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED:string = 'Добро пожаловать!';
const ACCESS_DENIED:string = 'Доступ запрещен, неверный пароль!';
let message:string | undefined;

if (userPassword === ADMIN_PASSWORD) {
  message = ACCESS_IS_ALLOWED;
} else if (userPassword === '') {
  message = CANCELED_BY_USER;
} else if (userPassword != ADMIN_PASSWORD) {
  message = ACCESS_DENIED;
}
console.log(message);

//если userPassword равно 'jqueryismyjam'
// то значение message будет равно
// 'Добро пожаловать!'

//если userPassword равно  null
// то значение message будет равно
// 'Отменено пользователем!'

//если userPassword равно '123'
// то значение message будет равно
// 'Доступ запрещен, неверный пароль!'
