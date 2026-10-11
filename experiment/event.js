const EventEmitter = require('events');
const ud = new EventEmitter();
ud.on('greet', (name) => {
    console.log(`Hello there 2B ${name}`);
});
ud.on('exit', (num) => {
    console.log(`Thanku for visit ${num}`);
});
ud.emit('greet', 'Hello');
ud.emit('exit', 100);