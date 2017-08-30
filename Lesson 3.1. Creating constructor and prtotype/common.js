'use strict';

function rand(min, max) {
  return Math.ceil((max - min + 1) * Math.random()) + min - 1;
}

function generateId() {
  return Array(4).fill(1).map(value => rand(1000, 9999)).join('-');
}

const pointsInfo = [
  { title: 'Темная сторона Луны', coords: [500, 200, 97] },
  { title: 'Седьмое кольцо Юпитера', coords: [934, -491, 712] },
  { title: 'Саратов', coords: [30, 91, 77] }
];

//Task 1
class OrdersTeleportationPoint {
  constructor(title, x, y, z) {
    this.title = title;
    this.x = x;
    this.y = y;
    this.z = z;
  }
  getDistance(x, y, z) {
    function square(arg) {
      return Math.pow(arg, 2);
    }
    
    if (!x || !y || !z) {
      throw console.log('Для расчета необходимо ввести все три координаты для пункта доставки');
    }
    return Math.sqrt(square(x - this.x) + square(y - this.y) + square(z - this.z));
  }
}

const point = new OrdersTeleportationPoint('Темная сторона Луны', 500, 200, 97);
let distance = point.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point.title}» составит ${distance.toFixed(0)} единиц(-ы)`);

const point2 = new OrdersTeleportationPoint('Саратов', 30, 91, 77);
let distance2 = point2.getDistance(100, -100, 33);
console.log(`Расстояние до пункта «${point2.title}» составит ${distance2.toFixed(0)} единиц(-ы)`);

console.log('\n');

//Task 2
class OrdersTeleportationPointLocator{
  constructor(points) {
    if (!Array.isArray(points)) {
      throw console.log('Передан не массив');
    }
    this.points = points.filter(function(point) {
      if (point instanceof OrdersTeleportationPoint) {
        return point;
      }
    });
    if (this.points.length === 0) {
      throw console.log('В массиве отсутствуют объекты класса OrdersTeleportationPoint');
    }
    this.points = points;
  }
  
  getClosest(x, y, z) {
    return this.points.reduce((prevPoint, point) => {
      let distance = point.getDistance(x, y, z);
      if (distance < prevPoint.distance) {
        return {distance: distance, point: point};
      }
      return prevPoint;
    }, {distance: Infinity, point: undefined}).point; 
  }
}

const points = pointsInfo.map(point => new OrdersTeleportationPoint(point.title,...point.coords)),
      locator = new OrdersTeleportationPointLocator(points),
      closestPoint = locator.getClosest(333, 294, 77);
      
console.log(`Ближайший пункт телепортации заказов «${closestPoint.title}»`);
const closestPoint1 = locator.getClosest(999999, 294, 77);
console.log(`Ближайший пункт телепортации заказов «${closestPoint1.title}»`);



console.log('\n');
//Task3
class LoyaltyCard {
  constructor(name, sum) {
    Object.defineProperty(this, 'owner', {value: name});
    Object.defineProperty(this, 'id', {value: generateId(), enumerable: true});
    Object.defineProperty(this, 'orders', {value: [sum], writable: true});
  }
  
  get balance() {
    return this.orders.reduce((prevOrder, order) => order + prevOrder, 0);
  }
  
  get discount() {
    if (this.balance >= 3000 && this.balance < 5000) {
      return 3;
    } else if (this.balance >= 5000 && this.balance < 10000) {
      return 5;
    } else if (this.balance >= 10000) {
      return 7;
    }
    return 0;
  }
  
  getFinalSum(orderSum) {
    return orderSum * (1 - this.discount / 100);
  }
  
  append(orderSum) {
    this.orders.push(orderSum);
  }
  
  show() {
    console.log(`Карта ${this.id}:`);
    console.log(`\tВладелец: ${this.owner}`);
    console.log(`\tБаланс: ${this.balance}Q`);
    console.log(`\tТекущая скидка: ${this.discount}%`);
    console.log(`\tЗаказы:`);
    this.orders.forEach((order, i) => console.log(`\t\t#${i+1} на сумму ${order}`));
  }
}

const card = new LoyaltyCard('Иванов Иван', 6300);

let newOrderSum = 7000;
let finalSum = card.getFinalSum(newOrderSum);
console.log(`Итоговая сумма для заказа на ${newOrderSum}Q по карте
  составит ${finalSum}Q. Скидка ${card.discount}%.`);

card.append(newOrderSum);
console.log(`Баланс карты после покупки ${card.balance}.`);
card.show();