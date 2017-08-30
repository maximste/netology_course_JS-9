'use strict';
//Task 1
function checkCoupon(code) {
  code = code.toLowerCase().replace(/[^a-z0-9]/g, "");

  return (code.length >= 10 && code === code.split('').reverse().join('')) ? true : false;
}

let codes = [
  'Madam, I’m Adam',
  'A man, a plan, a canal. Panama',
  '----<-------Eve------->-----',
  '[__777-x-44-x-777__]',
  '1234564321',
  'Olson in Oslo'
];

for (let code of codes) {
  let result = checkCoupon(code) ? 'подходит' : 'не подходит';
  console.log(`Код «${code}» ${result}`);
}

console.log('\n');

//Task 2
function stripTags(text) {
  text = text.replace(/<[A-Za-z\/]*>/g , "");
  return text;
}

const texts = [
  '<strong>Наши</strong> <em>ховерборды</em> лучшие в <u>мире</u>!',
  '<EM>Световой меч</EM> в <strong>каждый</strong> дом!',
  '<td>Вставлять теги </td> после <article>каждого слова</article> нехорошо!'
];

for (let text of texts) {
  console.log(stripTags(text));
}

console.log('\n');

//Task 3
function validate(form, fields) {
  for (let field of fields) {
    if (typeof(field.rule) === 'string') {
      switch (field.name) {
        case 'email' :
          field.rule = /[a-z0-9-\.]*@[a-z]*.[a-z]*/gi;
        break;
        case 'phone' : 
          field.rule = /^[\+7]\d+/;
        break;
      }
    }
    return (field.rule.test(form[field.name])) ? true : false;
  }
}

const fields = [
  { name: 'name', rule: /^[a-z ]{5,}$/i },
  { name: 'email', rule: 'email' },
  { name: 'phone', rule: 'phone' },
];

const forms = [
  { name: 'Ivan Ivanov', email: 'ivan@test.co', phone: '+79212753690' },
  { name: 'III', email: 'ivan@test', phone: '11111' }
];

for (let form of forms) {
  console.log(form);
  if (validate(form, fields)) {
    console.log('Ошибок нет');
  } else {
    console.log('Форма заполнена неверно');
  }
}