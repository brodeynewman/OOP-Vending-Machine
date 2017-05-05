let machine = new Machine();

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 7);


let pepsi = new Item('Pepsi', '10', '0.5', currentDate, 'A1');
let coke = new Item('Coke', '5', '0.5', currentDate, 'B3');
let sprite = new Item('Sprite', '11', '0.5', currentDate, 'C4');
let fanta = new Item('Fanta', '13', '0.5', currentDate, 'D2');

document.getElementById('five').addEventListener('click', function() {
  let amount = this.firstElementChild.innerHTML;
  machine.addChange(amount);
});

document.getElementById('ten').addEventListener('click', function() {
  let amount = this.firstElementChild.innerHTML;
  machine.addChange(amount);
});

document.getElementById('twentyFive').addEventListener('click', function() {
  let amount = this.firstElementChild.innerHTML;
  machine.addChange(amount);
});

machine.addListeners(document.querySelectorAll('.button'));

machine.loadSodas(pepsi, coke, sprite, fanta);

machine.turnOn();

console.log(machine);
