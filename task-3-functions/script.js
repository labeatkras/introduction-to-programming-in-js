function welcomeMsg(name) {
  return "Welcome " + name + "!";
}

console.log(welcomeMsg("Jane"));

console.log(welcomeMsg("Marc"));

function calcGrossPrice(netprice, taxrate) {
  return netprice * (1 + taxrate);
}

console.log(calcGrossPrice(20, 0.19));

console.log(calcGrossPrice(40, 0.16));

function addPositive(a, b) {
  return a * (a > 0) + b * (b > 0);
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
