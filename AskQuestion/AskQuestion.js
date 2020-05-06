const fs = require("fs");
const readline = require("readline");
const fetch = require("node-fetch");
const { Topics } = require("./Topics");
const { Box1, Box2 } = require("./Boxes");

function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

const sortBoxes = async topic => {
  let box1 = [...Box1];
  let box2 = [...Box2];
  return ask("\nDid you answer correctly? Y/N: ").then(async answer => {
    switch (answer) {
      case "Y":
      case "y":
      case "yes":
      case "Yes":
        box2.push(topic.name);
        box1 = box1.filter(each => each !== topic.name);
        break;
      case "N":
      case "No":
      case "n":
      case "no":
        console.warn("Please do one of the following katas: ", topic.katas)
        const firstEl = box1.shift()
        box1.push(firstEl)
        break;
      default:
        console.warn("INVALID INPUT");
        return await answerQuestion(topic.name, box1, box2);
    }
    return [box1, box2];
  });
};

const describe = async topic => {
  const wikiName = topic.name
    .split(" ")
    .join("_")
    .toLowerCase();
  const res = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${wikiName}`
  );
  const { extract } = await res.json();
  return ask(`Please describe ${topic.name}: `).then(async answer => {
    console.log("You said:\n\n");
    console.warn(answer);
    console.log("\n\n We expected:\n\n");
    console.log(extract);
  });
};

const saveBoxes = async boxes => {
  const [box1, box2] = boxes.reduce((total, each) => {
    return [...total, each.map(each => `'${each}'`)];
  }, []);
  await fs.writeFile(
    "Boxes.js",
    `
const Box1 = [${box1}]
const Box2 = [${box2}]

module.exports = {Box1, Box2}
    `,
    function(err) {
      if (err) throw err;
      console.log("Your Boxes have been updated");
    }
  );
};

const askQuestion = async () => {
  if (Box1.length === 0) {
    console.warn("You're first box is empty! rewrite me!");
    return;
  }
  // select question
  const question = Box1[0];
  const topic = Topics.find(each => each.name === question);
  await describe(topic);
  const boxes = await sortBoxes(topic);
  await saveBoxes(boxes);
};

askQuestion();
