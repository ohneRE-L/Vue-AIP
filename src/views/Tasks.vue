<template>
  <h1>Задание 3</h1>
  <h1>Hello, World!</h1>
  <h1>|</h1>
  <h1>Задание 4</h1>
  <div>{{ name }}</div>
  <div>{{ surn }}</div>
  <h1>|</h1>
  <h1>Задание 5</h1>
  <a :href="href">{{ text }}</a>
  <h1>|</h1>
  <h1>Задание 6</h1>
  {{ num * num }}<br>
  {{ num1 + num2 + num3 }}
  <h1>|</h1>
  <h1>Задание 7</h1>
  <p>{{ arr[0] }}</p>
  <p>{{ arr[1] }}</p>
  <p>{{ arr[2] }}</p>
  {{ arr1[0] + arr1[1] + arr1[2] }}
  <h1>|</h1>
  <h1>Задание 8</h1>
  {{ obj.x + obj.y + obj.z }}
  <h1>|</h1>
  <h1>Задание 9</h1>
  <button @click="showDate">Показать дату</button>
  <h1>|</h1>
  <h1>Задание 10</h1>
  <button @mouseover="showDate">Наведи курсор</button>
  <h1>|</h1>
  <h1>Задание 11</h1>
  <button @click="showSum">Показать сумму</button>
  <h1>|</h1>
  <h1>Задание 12</h1>
  <button @click="showCurrentDay">Показать текущий день недели</button>
  <h1>|</h1>
  <h1>Задание 13</h1>
  <button @click="showSquare(2)">Квадрат 2</button>
  <button @click="showSquare(3)">Квадрат 3</button>
  <h1>|</h1>
  <h1>Задание 14</h1>
  <p>{{ text1 }}</p>
  <button @click="changeText">Изменить текст</button>
  <button @click="setText('Привет, Vue!')">Текст 1</button>
  <button @click="setText('Hello, World!')">Текст 2</button>
  <h1>|</h1>
  <h1>Задание 15</h1>
  <p>Цена за единицу: {{ cost }}</p>
  <p>Количество: {{ amount }}</p>
  <p>Общая стоимость: {{ price }}</p>
  <button @click="changeCost">Изменить цену</button>
  <h1>|</h1>
  <h1>Задание 16</h1>
  <a href="https://google.com" @click.prevent="handleClick">Не переходи по ссылке</a><br>
  <button @click.once="handleClick2">Нажми меня один раз</button>
  <h1>|</h1>
  <h1>Задание 17</h1>
  <p v-if="visible">Этот абзац отображается, если visible равно true</p>
  <p v-else>Этот абзац отображается, если visible равно false</p>
  <h1>|</h1>
  <h1>Задание 18</h1>
  <p v-if="!hidden">text</p>
  <h1>|</h1>
  <h1>Задание 19.1</h1>
  <div>
    <button @click="show191">Показать абзац</button>
    <p v-if="visible191">Этот абзац показан!</p>
  </div>
  <h1>|</h1>
  <h1>Задание 19.2</h1>
  <div>
    <button @click="show192">Показать абзац</button>
    <button @click="hide192">Скрыть абзац</button>
    <p v-if="visible192">Этот абзац показан!</p>
  </div>
  <h1>|</h1>
  <h1>Задание 19.3</h1>
  <div>
    <!-- Если абзац скрыт, показываем кнопку "Показать" -->
    <button v-if="!visible193" @click="show193">Показать абзац</button>
    <!-- Если абзац показан, показываем кнопку "Скрыть" -->
    <button v-else @click="hide193">Скрыть абзац</button>
    <p v-if="visible193">Этот абзац показан!</p>
  </div>
  <h1>|</h1>
  <h1>Задание 20</h1>
  <div>
    <button @click="toggle201">Toggle Абзац 1</button>
    <p v-if="visible201">Это Абзац 1</p>

    <button @click="toggle202">Toggle Абзац 2</button>
    <p v-if="visible202">Это Абзац 2</p>

    <button @click="toggle203">Toggle Абзац 3</button>
    <p v-if="visible203">Это Абзац 3</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible201: false,
      visible202: false,
      visible203: false,
      visible193: false,
      visible192: false,
      visible191: false,
      visible: true, // Измените на false, чтобы увидеть второй абзац
      name: 'john',
      surn: 'smit',
      text: 'page',
      href: 'page.html',
      num: 5,
      num1: 1,
      num2: 2,
      num3: 3,
      arr: ['x', 'y', 'z'],
      arr1: [1, 2, 3],
      obj: { x: 1, y: 2, z: 3 },
      text1: 'Начальный текст',
      cost: 100,
      amount: 5
    }
  },
  computed: {
    price() {
      return this.cost * this.amount;
    }
  },
  methods: {
    toggle201() {
      this.visible201 = !this.visible201;
    },
    toggle202() {
      this.visible202 = !this.visible202;
    },
    toggle203() {
      this.visible203 = !this.visible203;
    },
    show193() {
      this.visible193 = true;
    },
    hide193() {
      this.visible193 = false;
    },
    show192() {
      this.visible192 = true;
    },
    hide192() {
      this.visible192 = false;
    },
    show191() {
      this.visible191 = true;
    },
    handleClick2() {
      alert("Ты нажал кнопку, но больше не сможешь!");
    },
    handleClick() {
      alert("Клик обработан, но переход заблокирован!");
    },
    changeCost() {
      this.cost = Math.floor(Math.random() * 500) + 50; // Генерируем случайную цену
    },
    changeText() {
      this.text1 = 'Текст изменен!';
    },
    setText(newText) {
      this.text1 = newText;
    },
    showSquare(num) {
      alert(num * num)
    },
    showDate() {
      alert(new Date().toLocaleDateString());
    },
    showSum() {
      alert(this.num1 + this.num2);
    },
    getDayName(num) {
      const days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
      ];
      return days[num];
    },
    showCurrentDay() {
      const currentDayNumber = new Date().getDay();
      const currentDayName = this.getDayName(currentDayNumber);
      alert(currentDayName);
    }
  }
}
</script>

