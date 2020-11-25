class Customer {
    constructor(namn) {
        this.namn = namn;
    }
    person () {
        console.log('person: ' + this.namn);
    }
    company () {
        console.log('company');
    }
}

module.exports = {
    Customer
}