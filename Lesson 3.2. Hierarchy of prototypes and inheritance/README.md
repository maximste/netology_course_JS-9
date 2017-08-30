<h1>Домашнее задание к лекции 3.2 «Иерархия прототипов и наследование»</h1>
<p>Перед началом работы добавьте в редактор следующий блок кода:</p>
<code>
class Calendar {
  constructor(now = new Date()) {
    this.now = now;
  }

  setDate(now) {
    this.now = now;
  }

  get today() {
    return this.now.toLocaleString('ru-Ru');
  }
}

class PaymentTerminal {
  constructor(title, calendar) {
    this.title = title;
    this.calendar = calendar;
  }

  get status() {
    return this.isActive ? 'работает' : 'недоступен';
  }

  get isActive() {
    return this.checkActive();
  }

  checkActive() {
    return false;
  }
}

class RegistrationError extends Error {
  constructor(field = null) {
    super(`Ошибка в поле ${field}`);
    this.field = field;
  }
}

class NotValidEmailRegistrationError extends RegistrationError {
  constructor(field, email) {
    super(field);
    this.email = email;
  }
}

class NotUniqueRegistrationError extends RegistrationError {
  constructor(field, value) {
    super(field);
    this.value = value;
  }
}

class NotSameRegistrationError extends RegistrationError {}

function isValidEmail(email) {
  return /^\w+(\.\w+)*@\w+(\.\w+)+$/i.test(email);
}

function isUniqueLogin(login) {
  return !['admin', 'boss'].includes(login);
}

function checkPassword(original, copy) {
  return original === copy;
}

function registerNewUser(data) {
  if (!isValidEmail(data.email)) {
    throw new NotValidEmailRegistrationError('Адрес электронной почты', data.email);
  }
  if (!isUniqueLogin(data.login)) {
    throw new NotUniqueRegistrationError('Логин', data.login);
  }
  if (!checkPassword(data.password, data.passwordCopy)) {
    throw new NotSameRegistrationError('Пароль');
  }
}
</code>

<h2>Задача 1. Работа с датой</h2>
<p>Для решения различных логистических задач нам нужно усовершенствовать объект Date, добавив туда ряд полезных функций.</p>
<p>Создайте класс SpaceDate, который, кроме базового функционала Date, будет иметь удобный функционал копирования, получения следующего дня и другие функции.</p>
<p>Описание конструктора и экземпляра SpaceDate</p>
<ul>
	<li>
		<p>Конструктор</p>
		<p>Работает точно так же, как и оригинальный конструктор Date.</p>
	</li>
	<li>
		<p>Экземпляр</p>
		<p>Помимо всех методов экземпляра Date, должен иметь следующие методы:</p>
		<ul>
			<li>copy - возвращает объект SpaceDate с той же датой и временем, что и исходный;</li>
			<li>getNextDate - возвращает объект SpaceDate c тем же временем, но на следующий календарный день;</li>
			<li>getPrevDate - возвращает объект SpaceDate c тем же временем, но в предыдущий календарный день;</li>
			<li>getDayBeginning - возвращает объект SpaceDate c той же датой, но время установлено в 00:00:00.000;</li>
			<li>getDayEnd - возвращает объект SpaceDate c той же датой, но время установлено в 23:59:59.999; </li>
		</ul>
	</li>
</ul>

<h2>Задача 2. Терминалы оплаты</h2>
<p>Мы решили показывать на сайте информацию о состоянии терминалов оплаты, и нам нужно реализовать различные графики работы этих терминалов. Часть терминалов работает только в будние дни, часть круглосуточно, и часть круглосуточно, за исключением праздников.</p>
<p>Наш ведущий разработчик предложил использовать механизм наследования для того, чтобы функционал можно было легко расширять, и при этом проверки в коде оставались простыми и понятными.</p>
<p>Он уже создал базовый класс PaymentTerminal, который берет текущую дату из календаря (так удобнее для тестирования). Базовый терминал всегда недоступен. Вам нужно расширить его возможности, создав классы:</p>
<ul>
	<li>AllDayPaymentTerminal реализовав терминал, который доступен 24/7, или круглосуточно.</li>
	<li>AllDayExceptHolidaysPaymentTerminal реализовав терминал, который доступен 24/7, кроме определенных дней в году, которые заданы в третьем аргументе.</li>
	<li>WorkspacePaymentTerminal терминал доступен только в будние дни (с понедельника по пятницу) с 8 утра до 18 вечера (в 8:00 терминал доступен, в 18:00 уже не доступен).</li>
</ul>

<h3>Описание конструкторов и экземпляров</h3>
<p>Конструкторы</p>
<p>Конструкторы AllDayPaymentTerminal и WorkspacePaymentTerminal работают точно так же, как PaymentTerminal, принимают два аргумента:</p>
<ol>
	<li>title — название пункта, строка;</li>
	<li>calendar — календарь, из которого нужно получать текущую дату — она в свойстве now, объект Calendar.</li>
</ol>
<p>Конструктор AllDayExceptHolidaysPaymentTerminal принимает дополнительный третий аргумент:</p>
<ol>
  <li>title — название пункта, строка;</li>
  <li>calendar — календарь, из которого нужно получать текущую дату — она в свойстве now, объект Calendar.</li>
  <li>holidays — список праздничных дней в году, массив. Каждый день представлен объектом со свойствами date — число, и month — номер месяца, начиная с нуля;</li>
 </ol>  

<p>Экземпляры</p>
<p>Должны переопределить в соответствии с их логикой работы метод:</p>
<ul>
	<li>checkActive - проверяет, работает ли терминал в настоящий момент. Настоящий момент берется из календаря, свойство this.calendar.now, там объект Date.</li>
</ul>

<h2>Задача 3. Ошибки в форме регистрации</h2>
<p>Реализовать функцию handleRegistration, которая будет обрабатывать форму, заполненную пользователем, используя функцию registerNewUser, и выводить сообщение Пользователь успешно зарегистрирован, если функция не выбросила никаких исключений. Либо сообщения об ошибках, соответствующие брошенному исключению:</p>
<ul>
	<li>«test» не является адресом электронной почты — если брошено исключение NotValidEmailRegistrationError, где test — введенный адрес электронной почты;</li>
	<li>Пользователь с логином «boss» уже зарегистрирован — если брошено исключение NotUniqueRegistrationError, где boss — введенный логин;</li>
	<li>Введенные пароли не совпадают — если брошено исключение NotSameRegistrationError.</li>
</ul>
<p>Функция принимает один аргумент: data — поля заполненной формы, объект.</p>