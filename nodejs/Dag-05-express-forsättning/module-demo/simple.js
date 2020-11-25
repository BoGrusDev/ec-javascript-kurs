function display (namn) {
    console.log(namn);
}
function _upperCase(name) {
    return name.toUpperCase();
}
function upperCase(name) {
    return _upperCase(name);
}


module.exports = {
    display,
    upperCase
}
