const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const {Topics} = require("./Topics")
const { Box1, Box2 } = require("./Boxes");

function ask (question) {
  return new Promise(resolve => {
    rl.question(question, resolve);
  });
}

const answerQuestion = async (questionName, box1, box2) => {
  let newBox1 = [...box1]
  let newBox2 = [...box2]
  return ask("Did you complete the kata? Y/N").then(async answer => {
      switch (answer) {
        case "Y":
        case "y":
        case "yes":
        case "Yes":
          newBox2.push(questionName)
          newBox1 = newBox1.filter(each => each !== questionName)
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
      rl.close();
      return [newBox1, newBox2];
    });
};

const askQuestion = async () => {
  if (Box1.length === 0) {
    console.warn("You're first box is empty! rewrite me!");
    return
  }
  // select question
  const question = Box1[0];
  const topic = Topics.find(each => each.name === question);
  // ask for kata completion
  console.log(`Answer this kata about ${topic.name}: ${topic.katas[0]} huh`);
  const boxes = await answerQuestion(topic.name, Box1, Box2);
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
};

askQuestion();
