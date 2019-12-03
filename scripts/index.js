//This function calculates age in dog years
const calculateAgeInDogYears = age => {
  const ageInDogYears = age / 7;
  const roundAge = Math.floor(ageInDogYears);
  return roundAge;
};

const dogAge = calculateAgeInDogYears(22);
console.log(dogAge);

//This function return favorite dog breed
const dogBreed = breed => {
  if (breed === "meow") {
    return `I like cats!`;
  }
  return `My favorite dog breed is a ${breed}!`;
};

const myFavoriteDogBreed = dogBreed("Pit Bull");
// console.log(myFavoriteDogBreed);
console.log(`When it comes to pets ${myFavoriteDogBreed}`);

//This function adds three numbers
const add = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

const answer = add(17, 4, 11);
console.log(answer);

//This function automates a car
const go = (direction, speed) => {
  if (speed > 75) {
    return `SLOW DOWN!`;
  } else if (speed < 40) {
    return `SPEED UP you are driving way to slow at ${speed} mph! That's way below the speed limit for the interstate!`;
  }
  return `The car is moving ${direction} at ${speed} mph!`;
};

const travel = go("forward", 70);
console.log(travel);

//This function return whether a number is Odd or Even
const evenOrOdd = num => {
  if (num % 2 === 0) {
    return `Even`;
  } else {
    return `Odd`;
  }
};

const numbers = [0, 1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(evenOrOdd(num));
}

const isItEvenOrOdd = evenOrOdd(128);
console.log(isItEvenOrOdd);

const words = [
  "The",
  "killing",
  "complex",
  "houses",
  "married",
  "kittens",
  "and",
  "single",
  "soldiers",
  "and",
  "their",
  "kleptomaniacal",
  "families"
];

//This function is a filter
const filterOutK = word => {
  let sentence = [];
  word.forEach(item => {
    if (!item.startsWith("k")) {
      // console.log(item);
      sentence.push(item);
    }
  });
  return sentence;
};

const finishStr = filterOutK(words);

//This function returns a joint string from an array
const buildString = str => {
  return str.join(" ");
};

const newCompleteSentence = buildString(finishStr) + "!";

console.log(newCompleteSentence);

//This function returns a random number
const svensChances = num => {
  let number = Math.random() * num;
  // console.log(number);
  if (number > 0 && number <= 1) {
    console.log("Sven came up empty-handed. :(");
    return false;
  }
  if (number > 1 && number <= 2) {
    console.log("Sven hooked a tuna!  :)");
    return true;
  }
};

svensChances(2);

const orderMeal = (sandwich, side, drink, dessert) => {
  return {
    sandwich: sandwich,
    side: side,
    drink: drink,
    dessert: dessert
  };
};

const takeOut = orderMeal("Turkey", "Mac-N-Cheese", "Tea", "Red Velvet Cake");
console.log(takeOut);

//This function multiples number by 2
const twice = number => number * 2;
console.log(twice(2));

//This function multiples number by 5
const timesFive = number => number * 5;
console.log(timesFive(5));

//This function squares a number
const squareNumber = number => number * number;
console.log(squareNumber(10));

//This function cube a number
const cubedNumber = number => number * number * number;
console.log(cubedNumber(3));

//This function makes a number bigger
const makeBigger = (number, makeNumberBigger) => {
  const result = makeNumberBigger(number);
  return result;
};

const number = 7;

const by2 = makeBigger(number, twice);
console.log(by2);

const by5 = makeBigger(number, timesFive);
console.log(by5);

const bySelf = makeBigger(number, squareNumber);
console.log(bySelf);

const cubed = makeBigger(number, cubedNumber);
console.log(cubed);
