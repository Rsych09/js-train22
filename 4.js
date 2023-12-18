class Drink {
  constructor() {
    this.price = 10;
    this.name = "Чай";
  }

  prepare() {
    console.log(`Приготування ${this.name}`);
  }
}

class HoneyDecorator {
  constructor(drink, amount) {
    this.drink = drink;
    this.amount = amount;
  }

  get name() {
    return `${this.drink.name} з ${this.amount} г меду`;
  }

  get price() {
    const honeyCost = 0.5 * this.amount;
    return this.drink.price + honeyCost;
  }

  prepare() {
    console.log(`Приготування ${this.name}`);
  }
}

console.log("Завдання 4 ====================================");

// Створення об'єкту базового напою (чаю)
let tea = new Drink();
console.log(tea.name); // Виводить ім'я напою
console.log(tea.price); // Виводить вартість напою
tea.prepare(); // Готує напій

// Додавання декоратора меду до чаю
let honeyTea = new HoneyDecorator(tea, 2); // Додаємо 2 грами меду
console.log(honeyTea.name); // Виводить нову назву напою
console.log(honeyTea.price); // Виводить нову вартість напою
honeyTea.prepare(); // Готує напій з медом
