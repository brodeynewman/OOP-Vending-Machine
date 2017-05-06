let machine = new Machine();

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 7);

let pepsi = new Item('Pepsi', '5', '0.1', currentDate, 'A1');
let coke = new Item('Coke', '5', '0.5', currentDate, 'B3');
let sprite = new Item('Sprite', '5', '0.5', currentDate, 'C4');
let fanta = new Item('Fanta', '5', '0.25', currentDate, 'D2');


document.getElementById('return').addEventListener('click', function() {
  machine.resetChange();
});

machine.addListeners(document.querySelectorAll('.button'));
machine.addListeners(document.querySelectorAll('.grab-soda'));
machine.addListeners(document.querySelectorAll('.coin-outter'));
machine.loadSodas(pepsi, coke, sprite, fanta);
machine.turnOn();
