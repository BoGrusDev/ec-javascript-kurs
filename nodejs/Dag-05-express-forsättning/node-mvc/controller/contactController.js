
const contactGet = (req, res) => {
    console.log('contact Get');
    res.end();
}

const contactList = (req, res) => {
    console.log('contact List');
    res.end();
}

const contactAdd = (req, res) => {
    console.log('contact Add');
    res.end();
}

module.exports = {
    contactGet,
    contactList,
    contactAdd
}
