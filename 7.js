class Participant {
  constructor(alias, communicator) {
    this.alias = alias;
    this.communicator = communicator;
  }

  dispatchMessage(text) {
    const message = this.prepareMessage(text);
    this.communicator.transmit(message);
  }

  prepareMessage(text) {
    return `[${this.alias}]: ${text}`;
  }
}

class SMSCommunicator {
  transmit(message) {
    console.log(`Відправлено SMS: ${message}`);
  }
}

class EmailCommunicator {
  transmit(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}

console.log("Завдання 7 ====================================");

const smsCommunicator = new SMSCommunicator();
const emailCommunicator = new EmailCommunicator();

const max = new Participant("Max", smsCommunicator);
const linda = new Participant("Linda", emailCommunicator);

max.dispatchMessage("Hello!"); // Виведе: Відправлено SMS: [Max]: Hello!
linda.dispatchMessage("Hello!"); // Виведе: Відправлено Email: [Linda]: Hello!
