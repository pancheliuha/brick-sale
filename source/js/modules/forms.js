module.exports = function () {
    var Inputmask = require('inputmask');
    var im = new Inputmask("+380(99)-999-99-99");

    im.mask('.application-form__phone');
};