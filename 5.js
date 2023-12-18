class Writer {
  #content = '';
  
  set content(newContent) {
    this.#content = newContent;
    this.#store();
  }
  
  get content() {
    return this.#content;
  }

  #store() {
    Version.create(this.#content);
  }

  restore() {
    const previousVersion = Version.restore();
    if (previousVersion) {
      this.#content = previousVersion.content;
    }
  }
}

class Version {
  static #versions = [];

  constructor(content) {
    this.content = content;
  }

  static create(content) {
    const newVersion = new Version(content);
    this.#versions.push(newVersion);
  }

  static restore() {
    if (this.#versions.length === 0) return null;
    return this.#versions.pop();
  }
}

console.log("Завдання 5 ====================================");

const writer = new Writer();

writer.content = "Це початковий текст.";
writer.content = "Редагований текст.";
writer.content = "Оновлений текст.";

console.log(writer.content); // Виведе: "Оновлений текст"

writer.restore();
console.log(writer.content); // Виведе: "Редагований текст"

writer.restore();
console.log(writer.content); // Виведе: "Це початковий текст"
