const simple = require('./simple');
const customerModule = require('./modules/customer-module');
console.log('Inside module-demo');
simple.display('Bosse');
let myName = simple.upperCase('Bosse');
console.log(myName);

const customer = new customerModule.Customer('Bosse');
customer.person();
customer.company();

