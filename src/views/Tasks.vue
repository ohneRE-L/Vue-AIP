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
</template>

<script>
export default {
  data() {
    return {
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
      obj: { x: 1, y: 2, z: 3 }
    }
  },
  methods: {
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

