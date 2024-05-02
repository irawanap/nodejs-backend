// TODO 1
const { EventEmitter } = require('events');

// TODO 2
const myEventEmitter = new EventEmitter();

// TODO 3
const birthdayEventListener = (name) => {
    console.log(`Selamat ulang tahun, ${name}!`);
};

// TODO 4
const myName = "Irawan";
myEventEmitter.on('birthday', birthdayEventListener);
myEventEmitter.emit('birthday', myName);
