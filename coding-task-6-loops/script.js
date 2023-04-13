// TODO: Implement the oddNumbers function

function oddNumbers(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "Only positive numbers are allowed";
  }

  let odds = "";

  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      odds += i;
      if (i !== num2 && i + 1 <= num2) {
        odds += ",";
      }
    }
  }

  return odds;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

/*function charCount(word, char) {
  if (char.length !== 1) {
    return "Second parameter should be a single character";
  }

  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }

  return count;
}*/

function charCount(word, char) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];
    if (currentChar.toLowerCase() === char.toLowerCase()) {
      count++;
    }
  }

  return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
