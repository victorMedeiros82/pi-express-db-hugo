// https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access
// https://www.npmjs.com/package/@handlebars/allow-prototype-access

const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

var hbs =  expressHandlebars.create({
  extname: '.hbs',
  handlebars: allowInsecurePrototypeAccess(Handlebars)
});

module.exports = hbs;