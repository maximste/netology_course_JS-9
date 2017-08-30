'use strict';

//Task 1
const SALES_TAX = 0.73;
var totalSalesTax = 0;

function calcTotalSalesTax(cost) {
  let taxCost = cost * SALES_TAX;
  
  totalSalesTax = totalSalesTax + taxCost;
  return totalSalesTax;
}

calcTotalSalesTax(100);
calcTotalSalesTax(400);
calcTotalSalesTax(500);
console.log(`Налог с продаж (${SALES_TAX*100}%) к оплате: ${totalSalesTax} Q`);


//Task 2
var stockPaperSquare = 30;

function calcPaperSquare(width, height, lgth) {
  let orderSquare = 2*(width * height + height * lgth + width * lgth);
 
  if (orderSquare <= stockPaperSquare) {
    stockPaperSquare -= orderSquare;
    return function () {
      return console.log(`Заказ (${width}/${height}/${lgth} метра) упакован, осталось упаковочной бумаги ${stockPaperSquare} м^2`);
    };
  }
  else {
    return function () {
      return console.log(`Заказ (${width}/${height}/${lgth} метра) не упакован, осталось упаковочной бумаги ${stockPaperSquare} м^2`);
    };
  }
}

var wrapper = calcPaperSquare(0.1, 0.1, 0.1);
wrapper();
wrapper = calcPaperSquare(0.2, 0.1, 1);
wrapper();
wrapper = calcPaperSquare(1, 1, 1);
wrapper();
wrapper = calcPaperSquare(3, 3, 5);
wrapper();


//Task 3
var teleportsChargeLevel = [7, 4, 1],
    chargeCounter = [];

for (let i = 0; i < teleportsChargeLevel.length; i++) {
  chargeCounter[i] = function () {
    if (teleportsChargeLevel[i] > 0) {
      teleportsChargeLevel[i]--;
      console.log(`Телепорт ${i+1} использован заряд ${teleportsChargeLevel[i]} единиц`);
    }
    else {
      console.log(`Телепорт ${i+1} недоступен, перезаряжается`);
    }
  };
}

chargeCounter[1]();
chargeCounter[1]();
chargeCounter[1]();
chargeCounter[1]();
chargeCounter[1]();
chargeCounter[2]();
chargeCounter[2]();