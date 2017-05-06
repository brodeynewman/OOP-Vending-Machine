function Item(name, amount, price, expirationDate, code) {
  this.name = name;
  this.amount = amount;
  this.price = price;
  this.expirationDate = expirationDate;
  this.code = code;
}

Item.prototype = {
  sodaCount: function() {
    return `We have ${this.amount} ${this.name}(s) left in stock`;
  }
}
