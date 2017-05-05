// build out Machine
  // machine will take in array of products for each products
    // will store objects in that array

  // machine will have a count function to see total products
    // there will be a count function for each different product: ex (coke, sprite, dr. pepper)

  // machine will dispense when button is clicked that matches object in stock
    // machine will have dispense function
      // dispense function will fire an animation

  // machine will have to have UI rerender function to show amount of sodas left in stock

  // machine will be able to tell what products are expired and when

function Machine() {

}

Machine.prototype = {
  loadSodas: function(...args) {
    
    for (let i = 0; i < args.length; i++) {
      this[args[i].name] = [args[i]];
    }
  },

  countAllSodas: function() {
    let total = 0;

    for (let i = 0; i < Object.keys(this).length; i++) {
      let name = Object.keys(this)[i];

      total += Number(this[name][0].amount);
    }

    return total;
  },

  update() {
    let total = this.countAllSodas();
    alert(`There are ${total} sodas left in this machine`);
  },

  turnOn() {
    this.update();
  }
}
