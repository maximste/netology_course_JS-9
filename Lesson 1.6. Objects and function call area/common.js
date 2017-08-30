'use strict';

var positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультрозвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

var prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

var hitName = positions[2], hitPrice = prices[2];

var hit = {
  'name' : hitName,
  'price': hitPrice
};

console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);

console.log('\n');
//Task 2
var items = [],
    product = {};
 
for (let i = 0; i < positions.length; i++) {
    product = {
      'name' : positions[i],
      'price' : prices[i]
    };
    items[i] = product;
}
console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);

console.log('\n');
//Task 3
function showDiscount(items, quantity) {
  var discount, discountValue, totalPrice;
  if (quantity < 10) {
    discount = 0.05;
  }
  else if (quantity >= 10 && quantity < 50) {
    discount = 0.07;
  }
  else if (quantity >= 50 && quantity < 100) {
    discount = 0.1;
  }
  else if (quantity >= 100) {
    discount = 0.15;
  }
  discountValue = discount * product.price;
  totalPrice= items.price * quantity - discountValue;
  
  return console.log(`${items.name} — стоимость партии из ${quantity} штук ${totalPrice} Q (скидка ${discount * 100}%), ваша выгода ${discountValue} Q!`);
}

showDiscount(items[0], 12);
showDiscount(items[3], 97);

console.log('\n');
//Task 4
items[3].amount = 4;
function updateAmount(items, consumption = 1) {
  if ('amount' in items) {
    if (items.amount === 0 || consumption > items.amount) {
      return console.log(`${items.name} закончился на складе`);
    }
    else if (items.amount > consumption) {
      items.amount -= consumption;
      return console.log(`${items.name} — остаток ${items.amount} шт`);
    }
    else if (items.amount === consumption) {
      return console.log(`Это был последний ${items.name}, вам повезло!`);
    }
  }
}

updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);