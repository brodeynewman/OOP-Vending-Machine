let machine = new Machine();

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 7);


let pepsi = new Item('Pepsi', '10', '.50', currentDate, 'A1');
let coke = new Item('Coke', '5', '.50', currentDate, 'B3');
let sprite = new Item('Sprite', '11', '.50', currentDate, 'C4');
let fanta = new Item('Fanta', '13', '.50', currentDate, 'D2');


machine.loadSodas(pepsi, coke, sprite, fanta);

machine.turnOn();

console.log(machine);
