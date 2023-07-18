module.exports = Object.create(null);

module.exports.meaningOfLife = function meaningOfLife() {
    return 42;
}

Object.freeze(module.exports);
