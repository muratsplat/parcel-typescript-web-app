// index.ts
import message from "./msg";
import EventEmitter = require("wolfy87-eventemitter")
import Mahmut from "./mahmut";

let bodyDOM = document.getElementsByTagName("body").item(0);
let h1DOM =  document.createElement("h1");
h1DOM.innerText = Mahmut;
bodyDOM.appendChild(h1DOM);

let dispatcher = new EventEmitter();

dispatcher.on("fooo", (e: string) => {
    console.log(e);
});
dispatcher.emit("fooo", "bar")

// JS import
console.log(Mahmut);

console.log("done");