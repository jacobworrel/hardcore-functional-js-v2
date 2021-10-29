const fs = require('fs')
const Task = require('data.task')
const types = require('../types')
const { Either } = types;
const {Right, Left, fromNullable} = Either
const { List, Map } = require('immutable-ext')

const greaterThan5 = x =>
  x.length > 5 ? Right(x) : Left('not greater than 5')

const looksLikeEmail = x =>
  x.match(/@/ig) ? Right(x) : Left('not an email')

const email = "blahh@yadda.com"
const res = List([greaterThan5, looksLikeEmail]).traverse(Either.of, v => v(email))

res.fold(console.log, x => console.log(x.toJS()));
