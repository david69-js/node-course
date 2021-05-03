const _ = require('underscore')
const orders = [
    {'id': 1, 'name': 'sopa', 'quantity': 2, 'state': 'served', 'table': 5},
    {'id': 2,'name': 'cut of meat', 'quantity': 2, 'state': 'process', 'table': 4},
    {'id': 3,'name': 'sopa', 'quantity': 1, 'state': 'paid', 'table': 3},
    {'id': 4,'name': 'pasta', 'quantity': 12, 'state': 'paid', 'table': 1},
]

const res = _.findWhere(orders, {name: 'sopa'})
console.log(res);