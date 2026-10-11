//Objective 1
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

//Objective 2
class Button extends EventEmitter {
    click() {
        this.emit("click");
    }
}
const button = new Button();
button.on('click', () => {
    console.log("Button Clicked");
});
button.on("hover", () => {
    console.log("Button hovered");
});
button.click();
button.emit("click");
button.emit("hover");

//Objective 3
console.log("start");
setTimeout(() => {
    console.log("timeout");
}, 2000);
setImmediate(() => {
    console.log("Immediate");
});
process.nextTick(() => {
    console.log("Next Tick");
});
console.log("exit");