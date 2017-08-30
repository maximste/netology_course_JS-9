'use strict';
var positions = [
      'Отвертка ультрозвуковая WHO-D',
      'Ховерборд Mattel 2016',
      'Нейтрализатор FLASH black edition',
      'Меч световой FORCE (синий луч)',
      'Машина времени DeLorean',
      'Репликатор домашний STAR-94',
      'Лингвенсор 000-17',
      'Целеуказатель электронный WAY-Y'
    ],
    positionsAmount = positions.length;

//Task 1
for (let i = 0; i < positionsAmount; i++) {
  console.log(`${i+1}. ${positions[i]}`);
}

//Task 2
console.log('\n');
console.log('Окончательный список наименований');
var newPositions = positions.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва');
     
for (let i = 0; i < positions.length; i++) {
  console.log(`${i+1}. ${positions[i]}`);
}

//Task 3
console.log('\n');
var urgentProduct,
    urgentIndex = positions.indexOf('Машина времени DeLorean');

urgentProduct = positions.splice(4, 1)[0];
positions.unshift(urgentProduct);
console.log('Принять в первую очередь');
for (let i = 0; i < 3; i++) {
  console.log(`${i+1}. ${positions[i]}`);
}

//Task 4
console.log('\n');
var [first, second, third, fourth, fifth, ...restPositions] = positions;
console.log('В магазине');
console.log(`${first}\n${second}\n${third}\n${fourth}\n${fifth}`);
console.log('\n');
console.log('Остальные товары');
for (let i = 0; i < restPositions.length; i++) {
  console.log(restPositions[i]);
}