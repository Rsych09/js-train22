class OrderTracker {
  constructor() {
    this.orders = []; // Замість використання статичного поля, ми використаємо поле екземпляру класу для зберігання списку замовлень
  }

  static getInstance() {
    if (!OrderTracker.instance) {
      OrderTracker.instance = new OrderTracker();
    }
    return OrderTracker.instance;
  }

  add(item) {
    this.orders.push(item);
  }

  getOrders() {
    return this.orders;
  }
}

console.log("Завдання 1 ====================================");

// Створюємо єдиний екземпляр класу OrderTracker
const tracker = OrderTracker.getInstance();

// Додаємо замовлення до списку
tracker.add("Телефон");
tracker.add("Ноутбук");

// Отримуємо список замовлень
const orders = tracker.getOrders();

// Виводимо список замовлень в консоль
console.log(orders);
