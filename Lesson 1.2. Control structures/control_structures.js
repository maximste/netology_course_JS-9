'use strict';

//Task 1
var stockAmount = 10,
    orderAmount = 16;
    
if (orderAmount > stockAmount) {
  console.log('На складе нет такого количества товаров');
} else if (orderAmount == stockAmount) {
  console.log('Вы забираете весь товар c нашего склада!');
}
else {
  console.log('Заказ оформлен');
}
      
   
//Task 2
var dest = 'Звезда смерти',
    price;

switch (dest) {
  case ('Луна') :
      price = 150;
      console.log(`Стоимость доставки для '${dest}': ${price} Q`);
  break;
  
  case ('Крабовидная туманность') :
      price = 250;
      console.log(`Стоимость доставки для '${dest}': ${price} Q`);
  break;
  
  case ('Галактика Туманность Андромеды') :
      price = 550;
      console.log(`Стоимость доставки для '${dest}': ${price} Q`);
  break;
  
  case ('Туманность Ориона') :
      price = 600;
      console.log(`Стоимость доставки для '${dest}': ${price} Q`);
  break;
  
  case ('Звезда смерти') :
      price = 'договорная цена';
      console.log(`Стоимость доставки для '${dest}': ${price}`);
  break;
  
  default: 
    console.log('В ваш квадрант доставка не осуществляется');
}


//Task 3
var price = 'fgfhg';
try {
  if (typeof(price) !== 'number') {
    throw `${price} не является числом`;
  }
  console.log('Цена товара введена корректно');
}
catch (err) {
  console.log("Вы допустили ошибку: " + err);
}

//Task 4
var planet = 'Юпитер',
    age = 120;

switch (planet) {
  case ('Земля') :
    if (age < 18) {
      console.log('Вы не достигли совершеннолетия');
    }
    else {
      console.log('Приятных покупок');
    }
  break;
  
  case ('Юпитер') :
    if (age < 120) {
      console.log('Сожалеем. Вернитесь на 120-й день рождения!');
    }
    else {
      console.log('Чистого неба и удачных покупок!');
    }
  break;
  
  default :
    console.log(`Спасибо, что пользуетесь услугами нашего магазина!`);
}