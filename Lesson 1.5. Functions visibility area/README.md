<h1>Домашнее задание к лекции 1.5 «Замыкания и область видимости»</h1>
<p>Ресурсы компании не безграничны. Пришло время автоматизировать учет в нашем магазине. А также немного помочь 
нашей бухгалтерии. Мы очень много всего продаем, и они не успевают отчитываться перед разными службами. К тому же, 
налог с продаж в нашем магазине составляет губительные 73%.</p>

<h2>Задача №1</h2>
<p>Необходимо реализовать функцию, которая будет учитывать сумму для выплаты налогов со всех проданных товаров. 
В качестве аргумента функция принимает стоимость проданного товара. Вычисляет и накапливает сумму для уплаты налога с продаж.</p>
<p>Выведите информацию о том, сколько налогов следует уплатить на текущий момент, в виде: "Налог с продаж (73%) к оплате: 7373 Q"</p>

<h2>Задача №2</h2>
<p>Скоро праздники. И все стали заказывать подарочную упаковку. В итоге она быстро заканчивается. 
Мы должны сразу при заказе указывать, сможем мы упаковать заказ или нет.</p>
<p>Реализуйте функцию, которая принимает на вход габариты коробки, и возвращает истину, если мы упакуем этот заказ, и ложь, если не упакуем. 
Функция должна учитывать остатки после упаковки предыдущих заказов. Сейчас у нас имеется 30 м2 упаковочной бумаги.</p>
<p>Вызовите функцию несколько раз, передавая разные габариты упаковки.</p>
<p>Для каждого вызова выведите строку вида:</p>
<ul>
    <li>Заказ (1/0.2/0.7 метра) упакован, осталось упаковочной бумаги 28 м2</li>
    <li>Заказ (100/30/7 метра) не упакован, осталось упаковочной бумаги 28 м2</li>
</ul>
    
<h2>Задача №3</h2>    
<p>Сейчас служба доставки использует три телепорта для доставки заказов. Вещь хрупкая и к тому же быстро разряжается. 
Сейчас они хранят данные о заряде каждого телепорта в массиве [ 7, 2, 1 ], т.е. заряд первого телепорта — 7, второго — 2, а третий почти 
разрядился — 1. Сейчас они обновляют заряды вручную при каждой отправке. И если, например, забудут обновить заряд третьего, то не поставят 
его на перезарядку вовремя.</p>
<p>Создадим функцию-счетчик для каждого телепорта, которая будет вызываться при отправке и обновлять заряд в массиве автоматически. 
Функция должна выводить: Телепорт 2 недоступен, перезаряжается, если заряд телепорта равен 0. 
Иначе выводит: Телепорт 1 использован заряд 6 единиц, где 1 — его номер (индекс равен 0), а 6 — заряд из массива после использования.</p>