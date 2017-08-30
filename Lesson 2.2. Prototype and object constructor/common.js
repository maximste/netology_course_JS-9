'use strict';

function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

function fixAmount(amount) {
  amount = parseFloat(amount.toString().replace(',', '.'));
  if (isNaN(amount)) {
    return -1;
  } else {
    return amount;
  }
}

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: ' 2.7 метра ' },
  { price: 1, amount: 'семь единиц' },
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}

console.log('\n');


//Task 2
let str = '';
function handleKey(char) {
  str = str.concat(char).toLowerCase();
  if (str.slice(str.indexOf('r')) === 'r2d2') {
    showSpecialPrice();
  }
  return;
}

const keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}

console.log('\n');

//Task 3
function parseData(listOfCellsNames, listOfStrings, delimeter = ',') {
  let products = [];
  listOfStrings.map((string) => {
    let obj = {};
    listOfCellsNames.map((cellName, i) => {
      obj[cellName] = string.split(delimeter)[i].trim();
    });
    products.push(obj);
  });
  return products;
}

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000',
];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);