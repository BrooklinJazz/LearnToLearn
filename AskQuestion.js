const fs = require("fs");
const readline = require("readline");

const {Topics} = require("./Topics")
const { Box1, Box2 } = require("./Boxes");

function ask (question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

const sortBoxes = async (questionName) => {
  let box1 = [...Box1]
  let box2 = [...Box2]
  return ask("Did you answer correctly? Y/N: ").then(async answer => {
      switch (answer) {
        case "Y":
        case "y":
        case "yes":
        case "Yes":
          box2.push(questionName)
          box1 = box1.filter(each => each !== questionName)
          break;
        case "N":
        case "No":
        case "n":
        case "no":
          console.warn("Darn!");
          break;
        default:
          console.warn("INVALID INPUT")
          return await answerQuestion(questionName, box1, box2);
      }
      return [box1, box2];
    });
};

const describe = async (topic) => {
    return ask(`Please describe ${topic.name}:\n`).then(async answer => {
      console.log("You said:\n\n")
      console.warn(answer)
      console.log("\n\n We expected:\n\n")
      console.log(topic.description)
    });
}

const saveBoxes = async (boxes) => {
  const [box1, box2] = boxes.reduce((total, each) => {
    return [...total, each.map(each => `'${each}'`)]
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
}

const askQuestion = async () => {
  if (Box1.length === 0) {
    console.warn("You're first box is empty! rewrite me!");
    return
  }
  // select question
  const question = Box1[0];
  const topic = Topics.find(each => each.name === question);

  await describe(topic)
  const boxes = await sortBoxes(topic);
  await saveBoxes(boxes)
};

askQuestion();
