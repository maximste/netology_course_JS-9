'use strict';
//Task 1
function calcWarrantyCost(warrantyPeriod) {
  switch (warrantyPeriod) {
    case (1) : 
      return 1250;

    case (2) : 
      return 2300;
    
    default :
     return 0;
  }
  return warrantyPeriod;
}

var warranty = calcWarrantyCost(1);
if (!warranty) {
  console.log('Дополнительное гарантийное обслуживание не активировано');
}
else {
  console.log(`Дополнительное гарантийное обслуживание: ${warranty} Q`);
}


//Task 2
function calcGravingCost(gravingPhrase, wordCost) {
  var gravingWords;

  if (!gravingPhrase) {
    return 0;
  }
  else {
    gravingWords = gravingPhrase.split(' ');
    return gravingWords.length * wordCost;
  }
}

var graving = calcGravingCost('Поздравляем с новосельем. Петровы', 11);
console.log(`Подарочная упаковка и гравировка: ${graving} Q`);


//Task 3
function calcDeliveryCost(deliveryNeed, dest) {
  if (deliveryNeed) {
    switch (dest) {
      case ('Луна') :
        return 150;

      case ('Крабовидная туманность') :
        return 250;

      case ('Галактика Туманность Андромеды') :
        return 550;

      case ('Туманность Ориона') :
        return 600;

      case ('Звезда смерти') :
        return 'цена договорная';
        
      default :
        return NaN;
    }
  }
  else {
    return 0;
  }
}


var delivery = calcDeliveryCost(1, 'Звезда смерти');

if (delivery) {
  console.log(`Стоимость доставки: ${delivery} Q`);
} else if (isNaN(delivery)) {
  console.log('Ошибка при расчете стоимости доставки');
}
else {
  console.log('Доставка не требуется');
}