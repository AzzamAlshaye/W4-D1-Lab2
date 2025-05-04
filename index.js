let connectionType = "fiber";
let speed = 200;

if (speed >= 500 && connectionType === "fiber") {
  console.log("Excellent fiber connection");
} else if (speed > 200 && speed < 500 && connectionType === "fiber") {
  console.log("Good fiber connection");
} else if (speed <= 200 && connectionType === "fiber") {
  console.log("Weak fiber connection");
} else if (speed >= 50 && connectionType == "dsl") {
  console.log("Acceptable DSL connection");
} else if (speed < 50 && connectionType == "dsl") {
  console.log("Poor DSL connection");
} else if (connectionType === undefined || connectionType === null) {
  console.log("Unknown connection type");
} else if (speed === 0) {
  console.log("Invalid speed value");
}

// -------
let grade = 85;
if (grade < 0 || grade > 100) {
  console.log("Invalid grade");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// ---
let dish = "burger";
let size = "large";
let extraCheese = true;
if (dish === "pizza") {
  if (size === "large" && extraCheese) {
    console.log("Large pizza with extra cheese is ready!");
  } else if (size !== "large") {
    console.log("Custom pizza size selected");
  } else if (!extraCheese) {
    console.log("Pizza without extra cheese");
  }
} else {
  console.log("Not a pizza");
}
