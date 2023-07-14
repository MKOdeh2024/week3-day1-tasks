// Question1
function convertStringToNumber(input) {
  if (typeof input !== "string") {
    return { value: input, type: typeof input };
  } else {
    let number;
    number = +input;
    return number;
  }
}

// Question 2
const checkNaN = (value) => {
  //write your own code here
  return Number.isNaN(value);
};

// Question3
function isEmptyValue(value) {
  if (value === "" || value === null || value === undefined) {
    return true;
  } else return false;
}

//Question 4
function compareObjects(input1, input2) {
  if (typeof input1 !== "object" || typeof input2 !== "object") {
    return [input1, input2];
  } else {
    return JSON.stringify(input1) === JSON.stringify(input2);
  }
}

// Question 5
const complexCoercion = (input) => {
  if (isPrimitive(input)) {
    if (typeof input === "number") {
      return Boolean(String(input));
    } else if (typeof input === "string") {
      return Boolean(input);
    } else if (input === null || input === undefined) {
      return false;
    }
  }

  return input;
};

function isPrimitive(value) {
  return typeof value !== "object" || value === null;
}

console.log(convertStringToNumber("344"));
console.log(checkNaN("344"));
console.log(isEmptyValue("344"));
console.log(compareObjects({ name: "Ali", age: 22 }, { name: "Ali", age: 22 }));
console.log(complexCoercion(null));
