<h1>Домашнее задание к лекции 1.6 «Объекты»</h1>
<p>Пришло время сделать работу с товарами в нашем приложении более организованной с использованием объектов. 
Скопируйте код ниже и вставьте его в начало своей работы:</p>
<p>var positions = [<br>
  'Телепорт бытовой VZHIH-101',<br>
  'Отвертка ультрозвуковая WHO-D',<br>
  'Ховерборд Mattel 2016',<br>
  'Нейтрализатор FLASH black edition',<br>
  'Меч световой FORCE (синий луч)'<br>
];<br>
<br>
var prices = [<br>
  10000,<br>
  4800,<br>
  9200,<br>
  2500,<br>
  57000<br>
];<br>
var hitName = positions[2], hitPrice = prices[2];</p>

<h2>Задача №1</h2>
<p>В этом месяце мы определили хит продаж. Его название — в переменной hitName, а цена — в hitPrice. 
Cоздадим и поместим в переменную hit объект со свойствами name и price и выведем информацию о нём в консоль.</p>
<ol>
    <li>Создать пустой объект и присвоить его в переменную hit.</li>
    <li>Добавить свойства name и price, поместив туда название и цену текущего хита.</li>
    <li>Вывести, используя переменную hit, информацию о товаре: "Хит продаж мартобря: <Ховерборд Mattel 2016> цена 9200 Q"</li>
</ol>

<h2>Задача №2</h2>
<p>Преобразуем информацию о товарах в массивах positions и prices в массив объектов items с ключами name и price.</p>  
<ol>
    <li>Создайте пустой массив в переменной items.</li>
    <li>Создайте для каждого товара новый объект.</li>
    <li>Запишите название товара в свойство name созданного объекта.</li>
    <li>Запишите цену товара в свойство price созданного объекта.</li>
    <li>Поместите новый объект в массив items.</li>
    <li>После того, как все товары преобразованы, выведите, используя массив items, информацию 
    о товаре с индексом 4 в консоль в виде: "Купите Меч световой FORCE (синий луч) по цене 57000 Q"</li>
</ol>

<h2>Задача №3</h2> 
<p>Для нашего отдела оптовых продаж необходимо реализовать функцию, которая принимает в качестве 
аргумента объект товара и количество штук и выводит в консоль информацию о его стоимости с учетом объема партии. 
Скидка от объема зависит так:</p> 
<ul>
    <li>До 10 штук: скидка 5%</li>
    <li>От 10 до 50 штук: скидка 7%</li>
    <li>От 50 до 100 штук: скидка 10%</li>
    <li>100 и более штук: скидка 15%</li>
</ul>
<p>Выведите в консоль информацию о скидке в формате:<br>
"Телепорт бытовой VZHIH-101 — стоимость партии из 12 штук 111600 Q (скидка 7%), ваша выгода 8400 Q!"
</p>
<p>Вызовите полученную функцию для товара из массива items с индексом 0 и размером партии 12 штук.</p>   
<p>И для товара с индексом 3 и размером партии 97 штук.</p>   
    
<h2>Задача №4</h2>
<p>На складе всех товаров в достаточном количестве. А вот товаров items[3] осталось всего 4. 
Решено вести учет их количества, чтобы вовремя узнать что они закончились.</p>
<ol>
    <li>Создайте свойство amount для соответствующего товара, в котором будем хранить остаток. 
    В качестве значения этого свойства запишите 4.</li>
    <li>Создайте функцию updateAmount, которая будет принимать объект товара и расход в штуках, по умолчанию 1.</li>
    <li>Проверьте, есть ли у объекта товара свойство amount. Если свойства нет, выходим из функции.</li>
    <li>Если свойство amount равно нулю, или расход больше, чем amount, выводим сообщение вида: "Нейтрализатор FLASH black edition закончился на складе".</li>
    <li>Если свойство amount больше расхода, уменьшаем на расход значение свойства и выводим сообщение вида: "Нейтрализатор FLASH black edition — остаток 3 шт".</li>
    <li>Если свойство amount равно расходу, уменьшаем на расход значение свойства и выводим сообщение вида: "Это был последний Нейтрализатор FLASH black edition, вам повезло!".</li>
    <li>Вызываем полученную функцию для товара из массива items с индексом 1 и расходом 17.</li>
    <li>Потом для товара с индексом 3 и расходом 3.</li>
    <li>И еще один раз для товара с индексом 3, расход не передаем.</li>
</ol>