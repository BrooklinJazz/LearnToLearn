const DesignPatterns = require("./DesignPatterns");
const Elixir = require("./Elixir");

const Topics = [...DesignPatterns, ...Elixir];

let SortedTopics = [];
const DomainArrays = [DesignPatterns, Elixir]
while (DomainArrays.some(each => each.length > 0)) {
  const remainingArrays = DomainArrays.filter(each => each.length > 0);
  remainingArrays.forEach(each => SortedTopics.push(each.shift()));
}




module.exports = {
  Topics,
  SortedTopics
};
