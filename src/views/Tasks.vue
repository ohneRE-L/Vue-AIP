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
  <p v-if="!hidden18">text</p>
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
    <button v-if="!visible193" @click="show193">Показать абзац</button>
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
  <h1>|</h1>
  <h1>Задание 21</h1>
  <div>
    <!-- Абзац 1 -->
    <button @click="toggle211">
      {{ visible211 ? 'hide' : 'show' }}
    </button>
    <p v-if="visible211">Это абзац 1</p>

    <!-- Абзац 2 -->
    <button @click="toggle212">
      {{ visible212 ? 'hide' : 'show' }}
    </button>
    <p v-if="visible212">Это абзац 2</p>

    <!-- Абзац 3 -->
    <button @click="toggle213">
      {{ visible213 ? 'hide' : 'show' }}
    </button>
    <p v-if="visible213">Это абзац 3</p>
  </div>
  <h1>|</h1>
  <h1>Задание 22</h1>
  <div>
    <p v-if="isAdmin22">У вас есть права администратора</p>
    <p v-else>Вы обычный пользователь</p>
  </div>
  <h1>|</h1>
  <h1>Задание 23</h1>
  <div>
    <p v-if="day23 === 'Понедельник'">Понедельник</p>
    <p v-else-if="day23 === 'Вторник'">Вторник</p>
    <p v-else-if="day23 === 'Среда'">Среда</p>
    <p v-else-if="day23 === 'Четверг'">Четверг</p>
    <p v-else-if="day23 === 'Пятница'">Пятница</p>
    <p v-else-if="day23 === 'Суббота'">Суббота</p>
    <p v-else-if="day23 === 'Воскресенье'">Воскресенье</p>
  </div>
  <h1>|</h1>
  <h1>Задание 24</h1>
  <div>
    <p v-if="age24 < 18">подросток</p>
    <p v-else-if="age24 <= 25">молодой человек</p>
    <p v-else>мужчина</p>
  </div>
  <h1>|</h1>
  <h1>Задание 25</h1>
  <div>
    <button @click="hideParagraphs25">Скрыть абзацы</button>
    <template v-if="visible25">
      <p>Абзац 1</p>
      <p>Абзац 2</p>
      <p>Абзац 3</p>
    </template>
  </div>
  <h1>|</h1>
  <h1>Задание 26</h1>
  <div>
    <button @click="toggle26">Toggle абзаца</button>
    <p v-show="visible26">Этот абзац отображается, если visible === true</p>
  </div>
  <!--Отличия директив v-show и v-if

    v-if:
        Полностью удаляет или создаёт элемент в DOM в зависимости от условия.
        При изменении условия происходит создание или уничтожение дочерних компонентов и привязок событий.
        Подходит для условий, которые редко меняются, поскольку операция создания/уничтожения может быть затратной.

    v-show:
        Элемент всегда присутствует в DOM, а управление его видимостью осуществляется через CSS (свойство display: none).
        Переключение видимости происходит быстрее, так как DOM не пересоздаётся.
        Не поддерживает конструкции v-else и не может применяться к тегу <template>.
        №3: Когда использовать v-show, а когда v-if

    v-if используется, если:
        Условие изменяется нечасто.
        Вам важно, чтобы при отсутствии условия элемент полностью не присутствовал в DOM (например, для экономии ресурсов или корректной работы дочерних компонентов).

    v-show используется, если:
        Переключения видимости происходят часто.
        Элемент должен оставаться в DOM, и вам важна быстрота переключения, поскольку изменение свойства display происходит мгновенно.

        Ограничения директивы v-show

    Не поддерживает конструкцию v-else:
    Вы не можете использовать v-show вместе с v-else или v-else-if, так как v-show просто меняет CSS-стиль, а не управляет созданием/уничтожением элементов.

    Нельзя применять к элементу template:
    Директива v-show должна применяться непосредственно к реальным DOM-элементам, а не к обёрткам типа <template>.

    Всегда рендерит элемент:
    Даже если элемент скрыт (display: none), он остаётся в DOM, что может быть нежелательно в случаях, когда необходимо полностью убрать элемент из структуры страницы для оптимизации.
    -->
  <h1>|</h1>
  <h1>Задание 27.1</h1>
  <div>
    <div v-for="item in items271" :key="item">{{ item }}</div>
  </div>
  <h1>|</h1>
  <h1>Задание 27.2</h1>
  <div>
    <div v-for="item in items272" :key="item">{{ item * item }}</div>
  </div>
  <h1>|</h1>
  <h1>Задание 27.3</h1>
  <ul>
    <li v-for="item in items273" :key="item">{{ item }}</li>
  </ul>
  <h1>|</h1>
  <h1>Задание 28</h1>
  <ul>
    <li v-for="(elem, key) in arr28" :key="key">
      {{ key }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 29.1</h1>
  <ul>
    <li v-for="(value, key) in obj291" :key="key">{{ value }}</li>
  </ul>
  <h1>|</h1>
  <h1>Задание 29.2</h1>
  <ul>
    <li v-for="(value, key) in obj292" :key="key">
      {{ key }} - {{ value }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 29.3</h1>
  <ul>
    <li v-for="(value, key, index) in obj293" :key="key">
      {{ key }} - {{ value }} - {{ index }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 29.4</h1>
  <ul>
    <li v-for="(value, key, index) in obj294" :key="key">
      {{ key }} - {{ value }} - {{ index + 1 }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 30.1</h1>
  <div v-for="item in items301" :key="item">
    <p>{{ item }}</p>
    <p class="divider"></p>
  </div>
  <h1>|</h1>
  <h1>Задание 30.2</h1>
  <ul>
    <template v-for="(item, index) in items302" :key="index">
      <li>{{ item }}</li>
      <li class="divider"></li>
    </template>
  </ul>
  <h1>|</h1>
  <h1>Задание 31.1</h1>
  <ul>
    <li v-for="(item, index) in hrefs311" :key="index">
      <a :href="item.href">{{ item.text }}</a>
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 31.2</h1>
  <table>
    <tr v-for="(product, index) in products312" :key="index">
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.quantity }}</td>
    </tr>
  </table>
  <h1>|</h1>
  <h1>Задание 32</h1>
  <div>
    <p v-for="num in 30" :key="num">{{ num }}</p>
  </div>
  <h1>|</h1>
  <h1>Задание 33</h1>
  <ul>
    <template v-for="(elem, index) in items33" :key="index">
      <li v-if="elem > 0">{{ elem }}</li>
    </template>
  </ul>
  <h1>|</h1>
  <h1>Задание 34</h1>
  <ul>
    <li v-for="product in products34" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
  <h1>|</h1>
  <h1>Задание 35.1</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items351" :key="index">{{ item }}</li>
    </ul>
    <button @click="addItem351">Добавить элемент</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.2</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items352" :key="index">{{ item }}</li>
    </ul>
    <button @click="removeFirstItem352">Удалить первый элемент</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.3</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items353" :key="index">{{ item }}</li>
    </ul>
    <button @click="removeLastItem353">Удалить последний элемент</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.4</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items354" :key="index">{{ item }}</li>
    </ul>
    <button @click="removePenultimateItem354">Удалить предпоследний элемент</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.5</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items355" :key="index">{{ item }}</li>
    </ul>
    <button @click="sortItems355">Сортировать элементы</button>
  </div>
  <h1>|</h1>
  <h1>Задание 35.6</h1>
  <div>
    <ul>
      <li v-for="(item, index) in items356" :key="index">{{ item }}</li>
    </ul>
    <button @click="reverseItems356">Обратить порядок</button>
  </div>
  <h1>|</h1>
  <h1>Задание 36.1</h1>
  <!-- Для задания 36.1 -->
  <p class="task361">Первый абзац</p>

  <!-- Для задания 36.2 -->
  <p class="task362">Первый абзац</p>
  <h1>|</h1>
  <h1>Задание 36.2</h1>
  <div>
    <p362>Первый абзац</p362>
    <br>
    <p362>Второй абзац</p362>
  </div>
  <h1>|</h1>
  <h1>Задание 36.3</h1>
  <div>
    <p :style="{ color: textColor363 }">Динамический цвет текста</p>
    <button @click="changeColor363">Изменить цвет</button>
  </div>
  <h1>|</h1>
  <h1>Задание 37</h1>
  <p :class="cssClasses371">Текст абзаца</p>
  <p :class="classObject372">Текст абзаца</p>
  <p :class="classArray373">Текст абзаца</p>
  <p :class="[classObject374, 'static-class']">Текст абзаца</p>
  <h1>|</h1>
  <h1>Задание 38</h1>
  <p :class="obj38">Текст с динамическими классами</p>
  <h1>|</h1>
  <h1>Задание 39</h1>
  <div>
    <p :class="obj39">Этот текст может быть скрыт или показан.</p>
    <button @click="showElement39">Показать</button>
    <button @click="hideElement39">Скрыть</button>
    <button @click="toggleElement39">Тогглить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj39: {
        hidden39: true,
      },
      obj38: {
        done: true,
        selected: false,
      },
      isActive374: true,
      classArray373: ['class1', 'class2'],
      isActive372: true,
      isError372: false,
      cssClasses371: 'class1 class2',
      textColor363: 'green',
      items356: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      items355: ['Банан', 'Апельсин', 'Яблоко', 'Груша'],
      items354: ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4'],
      items353: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      items352: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      items351: ['Элемент 1', 'Элемент 2', 'Элемент 3'],
      products34: [
        {
          id: 1,
          name: 'product1',
        },
        {
          id: 2,
          name: 'product2',
        },
        {
          id: 3,
          name: 'product3',
        },
      ],
      items33: [1, -2, 3, -4, 5],
      products312: [
        {
          name: 'product1',
          price: 100,
          quantity: 5
        },
        {
          name: 'product2',
          price: 200,
          quantity: 4
        },
        {
          name: 'product3',
          price: 300,
          quantity: 3
        }
      ],
      hrefs311: [
        { href: '1.html', text: 'text1' },
        { href: '2.html', text: 'text2' },
        { href: '3.html', text: 'text3' }
      ],
      items302: [1, 2, 3],
      items301: [1, 2, 3],
      obj294: {
        user1: '100$',
        user2: '200$',
        user3: '300$'
      },
      obj293: {
        user1: '100$',
        user2: '200$',
        user3: '300$'
      },
      obj292: {
        user1: '100$',
        user2: '200$',
        user3: '300$'
      },
      obj291: {
        user1: '100$',
        user2: '200$',
        user3: '300$'
      },
      arr28: ['x', 'y', 'z'],
      items273: [1, 2, 3, 4, 5],
      items272: [1, 2, 3, 4, 5],
      items271: [1, 2, 3, 4, 5],
      visible26: true,
      visible25: true,
      age24: 25,
      day23: 'Среда',
      isAdmin22: true,
      visible211: false,
      visible212: false,
      visible213: false,
      visible201: false,
      visible202: false,
      visible203: false,
      visible193: false,
      visible192: false,
      visible191: false,
      hidden18: false,
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
    },
    classObject372() {
      return {
        active: this.isActive372,
        error: this.isError372
      }
    },
    classObject374() {
      return {
        active: this.isActive374,
        'text-large': !this.isActive374
      }
    },
  },
  methods: {
    showElement39() {
      this.obj39.hidden39 = false;
    },
    hideElement39() {
      this.obj39.hidden39 = true;
    },
    toggleElement39() {
      this.obj39.hidden39 = !this.obj39.hidden39;
    },
    changeColor363() {
      this.textColor363 = this.textColor363 === 'green' ? 'purple' : 'green';
    },
    reverseItems356() {
      this.items356.reverse();
    },
    sortItems355() {
      this.items355.sort();
    },
    removePenultimateItem354() {
      if (this.items354.length > 1) {
        this.items354.splice(this.items354.length - 2, 1);
      }
    },
    removeLastItem353() {
      this.items353.pop();
    },
    removeFirstItem352() {
      this.items352.shift();
    },
    addItem351() {
      this.items351.push(`Элемент ${this.items351.length + 1}`);
    },
    toggle26() {
      this.visible26 = !this.visible26;
    },
    hideParagraphs25() {
      this.visible25 = false;
    },
    toggle211() {
      this.visible211 = !this.visible211;
    },
    toggle212() {
      this.visible212 = !this.visible212;
    },
    toggle213() {
      this.visible213 = !this.visible213;
    },
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


<style>
.task361 { color: red; }
.hidden39 {
  display: none;
}
</style>

<style scoped>
.task362 { color: blue; }
</style>