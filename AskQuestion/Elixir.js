const { Topic } = require("./Topic");

// Basic types and operators, Modules and Functions, binary, etc
const wordCount =
  "https://exercism.io/my/solutions?exercise_id=word-count&track_id=elixir";
const rnaTranscription =
  "https://exercism.io/my/solutions/67c454f27b1e4f44b6867fcf870b27df";
const secretHandshake =
  "https://exercism.io/my/solutions?exercise_id=secret-handshake&track_id=elixir";
const binary =
  "https://exercism.io/my/solutions?exercise_id=binary&track_id=elixir";

const TypesAndOperators = new Topic("Basic Types And Operations", [
  wordCount,
  rnaTranscription,
  secretHandshake,
  binary
]);
// Pattern matching
const romanNumerals =
  "https://exercism.io/my/solutions?exercise_id=roman-numerals&track_id=elixir";

const PatternMatching = new Topic("Pattern Matching", [romanNumerals]);
// case, cond, and if
const bob = "https://exercism.io/my/solutions?exercise_id=bob&track_id=elixir";
const ControlFlow = new Topic("Control Flow", [bob]);
// Recursion
const beerSong =
  "https://exercism.io/my/solutions?exercise_id=beer-song&track_id=elixir";
const listOps =
  "https://exercism.io/my/solutions?exercise_id=list-ops&track_id=elixir";

const Recursion = new Topic("Recursion", [beerSong, listOps]);

// Enumerables and streams
const resistorColor =
  "https://exercism.io/my/solutions?exercise_id=resistor-color&track_id=elixir";
const nucleotideCount =
  "https://exercism.io/my/solutions?exercise_id=nucleotide-count&track_id=elixir";

const Enumerables = new Topic("Enumerables", [resistorColor, nucleotideCount]);
// Processes
const ticTakToe =
  "https://blog.codecentric.de/en/2016/04/elixir-where-is-your-state/";

const Processes = new Topic("Processes", [ticTakToe]);
// IO and the file system
// alias, require, and import
// Module attributes
// Structs
const robotSim =
  "https://exercism.io/my/solutions?exercise_id=robot-simulator&track_id=elixir";
const zipper =
  "https://exercism.io/my/solutions?exercise_id=zipper&track_id=elixir";
const bowling =
  "https://exercism.io/my/solutions?exercise_id=bowling&track_id=elixir";
const dndCharacter =
  "https://exercism.io/my/solutions?exercise_id=dnd-character&track_id=elixir";

const Structs = new Topic("Structs", [robotSim, zipper, bowling, dndCharacter]);
// Protocols
const clock =
  "https://exercism.io/my/solutions?exercise_id=clock&track_id=elixir";

const Protocols = new Topic("Protocols", [clock]);
// Comprehensions
// Sigils
// try, catch, and rescue
// Typespecs and behaviours
// Debugging

// Concurrency
const parallelLetterFrequency =
  "https://exercism.io/my/solutions/8c4926f68d1246549c9ebe0053bd44c8";

const Concurrency = new Topic("Concurrency", [parallelLetterFrequency]);

const Elixir = [
  TypesAndOperators,
  PatternMatching,
  ControlFlow,
  Recursion,
  Enumerables,
  Processes,
  Structs,
  Protocols,
  Concurrency
];

module.exports = Elixir