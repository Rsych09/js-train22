class Customer {
  constructor(email) {
    this.email = email;
  }

  receiveEmail(message) {
    console.log(`${this.email}: ${message}`);
  }
}

class Product {
  constructor(name) {
    this.name = name;
  }
}

class Store {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  subscribe(customer) {
    this.customers.push(customer);
  }

  unsubscribe(customer) {
    this.customers = this.customers.filter((c) => c !== customer);
  }

  createProduct(name) {
    const newProduct = new Product(name);
    this.sendNotify(newProduct);
  }

  sendNotify(product) {
    const message = `Новий продукт "${product.name}" в магазині ${this.name}!`;
    this.customers.forEach((customer) => {
      customer.receiveEmail(message);
    });
  }
}

console.log("Завдання 3 ====================================");

const store = new Store("IT Supermarket");

const customer1 = new Customer("john@example.com");
const customer2 = new Customer("jane@example.com");
const customer3 = new Customer("alice@example.com");

store.subscribe(customer1);
store.subscribe(customer2);
store.subscribe(customer3);

store.createProduct("Новий ноутбук");

store.unsubscribe(customer1);

store.createProduct("Бездротові навушники");
