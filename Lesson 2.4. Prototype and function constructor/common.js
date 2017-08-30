'use strict';

//Task 1
console.log('\n---Задание 1---\n');
const items = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    available: 7,
    holded: 0
  },
  {
    title: 'Ховерборд Mattel 2016',
    available: 4,
    holded: 5
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    available: 1,
    holded: 1
  }
];

const itemPrototype = {
  sell(field, amount = 1) {
    if (this[field] < amount) {
      throw console.log(`Недостаточно товара для продажи (${this[field]} из ${amount})`);
    }
    this[field] -= amount;
    return true;
  },
  sellHolded(amount = 1) {
    return itemPrototype.sell.call(this, 'holded', amount);
  },
  sellAvailable(amount = 1) {
    return itemPrototype.sell.call(this, 'available', amount);
  }
};

function sellItem(item, amount, isHolded = false) {
  if (isHolded) {
    return itemPrototype.sellHolded.call(item, amount);
  } else {
    return itemPrototype.sellAvailable.call(item, amount);
  }
}

sellItem(items[2], 1);
console.log(items[2].available); // 0
console.log(items[2].holded); // 1

sellItem(items[1], 4, true);
console.log(items[1].available); // 4
console.log(items[1].holded); // 1

const item = { available: 0, holded: 1 };
sellItem(item, 1, true);
console.log(item.available); // 0
console.log(item.holded); // 0


sellItem(items[0], 3);
console.log(`Доступно товара ${items[0].title} из имеющихся на складе: ${items[0].available} шт.`);
console.log(`Доступно товара ${items[0].title} из остатков: ${items[0].holded} шт.`);

//закомментировано для отладки: отрабатывает выброс из цикла при введении количества товара больше имеющегося.
// sellItem(items[2], 2);
// console.log(`Доступно товара ${items[2].title} из имеющихся на складе: ${items[2].available} шт.`);
// console.log(`Доступно товара ${items[2].title} из остатков: ${items[2].holded} шт.`);


//Task 2
console.log('\n---Задание 2---\n');
const phones = [
  {
    producer: 'Sumsung',
    model: 'Galaxy S8',
    price: 25000
  },
  {
    producer: 'Apple',
    model: 'iPhone 5',
    price: 40000
  },
  {
    producer: 'YOTA',
    model: 'YotaPhone 2',
    price: 35000
  }
];

function formatFull() {
  return `${this.title}:\n\tдоступно ${this.available} шт.\n\tв резерве ${this.holded} шт.`;
}

function formatLite() {
  return `${this.title} (${this.available} + ${this.holded})`;
}

function formatCustomized() {
  return `${this.producer}\n\tмодель: ${this.model}\n\tцена: ${this.price} руб.`;
}


function show(format) {
  console.log(format());
}

function showItems(list, formatter) {
  list.forEach(function(item) {
    show(formatter.bind(item))});
}

showItems(items, formatFull);
console.log('---');
showItems(items, formatLite);
console.log('---');
showItems(phones, formatCustomized);

//Task 3
console.log('\n---Задание 3---\n');

function createButton(title, onclick) {
  return {
    title,
    onclick,
    click() {
      this.onclick.call(this);
    }
  };
}

function createBuyButtons(items) {
  let buttonsArray = [];
  function showInfo() {
    console.log(`${this.title} добавлен в корзину`);
  }
  
  items.forEach (function(item) {
    buttonsArray.push(createButton('Купить', showInfo.bind(item)))
  });
  return buttonsArray;
}

const buttons = createBuyButtons(items);
buttons[0].click();
buttons[2].click();
buttons[1].click();