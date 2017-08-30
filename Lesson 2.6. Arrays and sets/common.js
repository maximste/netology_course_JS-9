'use strict';

//Task 1
const clients = [{
  name: 'Филип Фрай',
  email: 'fray@mail.un',
  isSubscribed: false,
  orders: [ 11700, 1980, 450, 5500 ]
  }, {
  name: 'Бендер Сгибатель Родригес',
  email: 'bender.rodriges@rambler.un',
  isSubscribed: true,
  orders: [ 440, 226, 7650, 2990, 70 ]
  }, {
  name: 'Доктор Джон Зоидберг',
  email: 'zoidberg-md@list.un',
  isSubscribed: true,
  orders: [ 720 ]
}];


clients.findByName = function(name) {
  return this.find(function(client){
    return client.name === name;
  });
};

const clientOne = clients.findByName('Доктор Джон Зоидберг');
console.log(clientOne.email);

const clientTwo = clients.findByName('Люрр');
console.log(typeof clientTwo);

const clientThree = clients.findByName('Филип Фрай');
console.log(clientThree.isSubscribed);

console.log('\n');
//Task 2
function ordersTotalSum(client) {
  let totalSum = client.orders.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  return totalSum;
}

function compareByTotalSumm(left, right) {
  let leftSum = ordersTotalSum(left);
  let rightSum = ordersTotalSum(right);
  
  if (rightSum > leftSum) {
    return 1;
  } else if (leftSum === rightSum) {
    return 0;
  } else {
    return -1;
  }
}

clients
  .sort(compareByTotalSumm)
  .forEach(client => console.log(client.name));


console.log('\n');
//Task 3
function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(list) {
  // let emails = [];
  // list.forEach(function(client) {
  //   if (client.isSubscribed === true) {
  //     emails.push(client.email);
  //   }
  // });
  // return emails;
  
  return list.filter(function(client) {
    return client.isSubscribed;
  }).map(function(client) {
    return client.email;
  });
}

getSubscribedEmails(clients).forEach(sendMail);