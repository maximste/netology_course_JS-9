'use strict';

var positions = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    producer: {
      name: 'Рязанский телепортостроительный завод',
      deferPeriod: 10,
      lot: 3
    },
    price: 10000
  },
  {
    title: 'Ховерборд Mattel 2016',
    producer: {
      name: 'Волжский Ховерборд Завод',
      deferPeriod: 24,
      lot: 14
    },
    price: 9200
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    producer: {
      name: 'Тульский оружейный комбинат',
      deferPeriod: 5,
      lot: 1
    },
    price: 57000
  }
];

function lotCalculator(orderPosition, orderAmount) {
  let lots = Math.ceil(orderAmount / orderPosition.producer.lot),
      total = lots * orderPosition.producer.lot * orderPosition.price,
      order = 
        {
          lots,
          total
        };
    return (order);
}

var orderPosition = positions[2],
    orderAmount = 45,
    result = lotCalculator(orderPosition, orderAmount);
    
console.log(`${orderPosition.title} ${orderAmount} штук: заказать ${result.lots} партий, стоимость ${result.total} Q`);

console.log('\n');
//Task 2
const deferedPayments = [];
const producer = {
  name: 'Рязанский телепортостроительный завод',
  deferPeriod: 10
};
function deferPay(producer, amount, shipmentDate) {
  var paymentDate = new Date(shipmentDate.setDate(shipmentDate.getDate() + producer.deferPeriod)),
      paymentData = {
        producer,
        paymentDate,
        amount
      };
  deferedPayments.push(paymentData);
}

deferPay(producer, 7200, new Date(2030, 3, 10));
deferPay(positions[0].producer, 300, new Date());
deferPay(positions[1].producer, 4500, new Date());
deferPay(positions[2].producer, 27000, new Date(2018, 0, 1));

for (let i = 0; i < deferedPayments.length; i++) {
  console.log(`${deferedPayments[i].paymentDate.toLocaleDateString('ru-Ru')}: ${deferedPayments[i].producer.name}, сумма ${deferedPayments[i].amount} Q`);
}

console.log('\n');
//Task 3
function loadCurrencyJSON() {
  return '{"AUD":44.95,"AZN":33.73,"GBP":73.42,"AMD":0.12,"BYN":30.96,"BGN":32.01,"BRL":18.8,"HUF":0.2,"DKK":8.42,"USD":58.85,"EUR":62.68,"INR":0.88,"KZT":0.18,"CAD":44.74,"KGS":0.85,"CNY":8.55,"MDL":2.94,"NOK":7.02,"PLN":14.55,"RON":13.92,"ZZZ":79.91,"SGD":41.36,"TJS":7.43,"TRY":15.97,"TMT":16.84,"UZS":0.02,"UAH":2.16,"CZK":2.32,"SEK":6.6,"CHF":58.69,"ZAR":4.4,"KRW":0.05,"JPY":0.52}';
}

function convertCurrency(amount, from, to) {
  var loadCurrency,
      convertResult;
  
  try {
    loadCurrency = JSON.parse(loadCurrencyJSON()),
    convertResult = Math.round(amount * loadCurrency[from] / loadCurrency[to] * 100) / 100;
    return convertResult;
  } catch (e) {
    throw new Error('Извините, в исходном файле данных ошибка');
  }
}

let price = convertCurrency(7000, 'ZZZ', 'USD');
console.log(`Сумма ${price} USD`);

price = convertCurrency(7000, 'EUR', 'USD');
console.log(`Сумма ${price} USD`);

price = convertCurrency(7000, 'CZK', 'CHF');
console.log(`Сумма ${price} CHF`);