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
  this.money = 0;
}

Machine.prototype = {
  loadSodas: function(...args) {
    for (let i = 0; i < args.length; i++) {
      this[args[i].name] = [args[i]];
    }
  },

  countAllSodas() {
    let total = 0;
    let self = Object.keys(this);
    for (let i = 1; i < self.length; i++) {
      let name = Object.keys(this)[i];

      total += Number(this[name][0].amount);
    }

    return total;
  },

  update() {
    let total = this.countAllSodas();
    let text = `${total} sodas`;

    this.updateIndividualSodas();
    (total > 0) ? document.getElementById('sodaCount').innerHTML = text : document.getElementById('sodaCount').innerHTML = 'Empty';
  },

  turnOn() {
    document.getElementById('pay').innerHTML = this.money;

    this.update();
  },

  addChange(amount = 0) {
    this.money+= amount;

    // I had to slice the 'money' state because .2 + .2 + .2 in JS is .6000000001 for some reason
    let slice = this.money.toString().slice(0, 4);
    document.getElementById('pay').innerHTML = slice;
  },

  purchase(node) {
    let self = Object.keys(this);

    for (let i = 1; i < self.length; i++) {
      if (node.firstElementChild.innerHTML === this[self[i]][0].code && this.money >= Number(this[self[i]][0].price)) {
        let name = this[self[i]][0].name;

        if (this[self[i]][0].amount > 0) {
          let newAmount = this.money - Number(this[self[i]][0].price);

          this[self[i]][0].amount--;
          this.resetChange(newAmount);
          this.toggleAnimation(name);
        } else {
          alert(`${name} is out of stock!`);
          this.resetChange(this.money);
        }

        this.update();
      }
    }
  },

  resetChange(amount) {
    this.money = amount;

    this.update();
    this.addChange();
  },

  removeFromDom(node) {
    let lowerNode = node.toLowerCase();

    setTimeout(function() {
      document.getElementById(lowerNode).style.display = 'none';
    }, 3000);
  },

  toggleAnimation(node) {
    let lowerNode = node.toLowerCase();

    document.getElementById(lowerNode).className = `soda ${lowerNode} ${lowerNode}-drop`;
    document.getElementById(`${lowerNode}Grab`).className = `grab-soda grab-${lowerNode} ${lowerNode}-slide`;
  },

  removeNode(node) {
    node.style.display = 'none';
    console.log(node);
  },

  updateIndividualSodas() {
    let displayBox = document.getElementById('displayBox');
    let self = Object.keys(this);
    let displayArr = [];

    displayBox.innerHTML = '';

    for (let i = 1; i < self.length; i++) {
      displayArr.push(self[i]);
    }

    for (let i = 1; i < displayArr.length + 1; i++) {
      let div = document.createElement('div');
      let amount = this[self[i]][0].amount;
      let name = this[self[i]][0].name;

      (amount === 0) ? this.removeFromDom(`${name}`) : void 0 ;

      div.className = 'display';
      div.innerHTML = `${name} (${amount})`;
      displayBox.append(div);
    }
  },

  addListeners(nodeList) {

    for (let i = 0; i < nodeList.length; i++) {
      console.log(nodeList[i].classList.value);
      switch(nodeList[i].classList.value) {
        case 'grab-box':
          nodeList[i].addEventListener('click', function() {
            alert('hello');
          });
          break;
        case 'button':
          nodeList[i].addEventListener('click', function() {
            machine.purchase(this);
          });
          break;
        case 'coin-outter':
          nodeList[i].addEventListener('click', function() {
            let amount = Number(this.firstElementChild.innerHTML);
            machine.addChange(amount);
          });
          break;
      }

    }
  }
}
