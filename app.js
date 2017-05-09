let machine = new Machine();

let pepsi = new Item('Pepsi', '5', '0.1', 'A1');
let coke = new Item('Coke', '5', '0.5', 'B3');
let sprite = new Item('Sprite', '5', '0.5', 'C4');
let fanta = new Item('Fanta', '5', '0.25', 'D2');


document.getElementById('return').addEventListener('click', function() {
  machine.resetChange();
});

machine.addListeners(document.querySelectorAll('.button'));
machine.addListeners(document.querySelectorAll('.grab-soda'));
machine.addListeners(document.querySelectorAll('.coin-outter'));
machine.loadSodas(pepsi, coke, sprite, fanta);
machine.turnOn();
