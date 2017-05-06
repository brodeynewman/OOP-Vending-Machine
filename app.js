let machine = new Machine();

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 7);

let pepsi = new Item('Pepsi', '1', '0.1', currentDate, 'A1');
let coke = new Item('Coke', '1', '0.5', currentDate, 'B3');
let sprite = new Item('Sprite', '1', '0.5', currentDate, 'C4');
let fanta = new Item('Fanta', '1', '0.25', currentDate, 'D2');

// these for some reason weren't working with the 'addListeners' method
document.getElementById('pepsiGrab').addEventListener('click', function() {
  machine.removeNode(this);
});

document.getElementById('cokeGrab').addEventListener('click', function() {
  machine.removeNode(this);
});

/** document.getElementById('fantaGrab').addEventListener('click', function() {
  machine.removeNode(this);
});

document.getElementById('spriteGrab').addEventListener('click', function() {
  machine.removeNode(this);
}); **/

machine.addListeners(document.querySelectorAll('.button'));
machine.addListeners(document.querySelectorAll('.grab-soda'));
machine.addListeners(document.querySelectorAll('.coin-outter'));
machine.loadSodas(pepsi, coke, sprite, fanta);
machine.turnOn();
