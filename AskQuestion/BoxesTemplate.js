const {SortedTopics} = require("./Topics")

const Box1 = SortedTopics.map(each => each.name)

const Box2 = []

module.exports = {Box1, Box2}