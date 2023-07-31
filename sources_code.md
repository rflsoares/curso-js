# 100 códigos Javascript

Aqui estão 100 códigos JavaScript. 

Código 1:
```javascript
function calculateSum(a, b) {
  return a + b;
}

var result = calculateSum(5, 10);
console.log(result);
```

Código 2:
```javascript
function calculateAverage(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

var average = calculateAverage([1, 2, 3, 4, 5]);
console.log(average);
```

Código 3:
```javascript
function reverseString(str) {
  var reversed = "";
  for (var i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

var reversedString = reverseString("Hello, World!");
console.log(reversedString);
```

Código 4:
```javascript
var numbers = [1, 2, 3, 4, 5];
var squares = numbers.map(function (num) {
  return num * num;
});

console.log(squares);
```

Código 5:
```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

var result = factorial(5);
console.log(result);
```

Código 6:
```javascript
function capitalizeString(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

var capitalizedString = capitalizeString("hello, world!");
console.log(capitalizedString);
```

Código 7:
```javascript
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

var result = isPrime(17);
console.log(result);
```

Código 8:
```javascript
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
```

Código 9:
```javascript
function countOccurrences(arr, num) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

var arr = [1, 2, 3, 4, 5, 3, 2, 2];
var occurrences = countOccurrences(arr, 2);
console.log(occurrences);
```

Código 10:
```javascript
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var mergedArray = mergeArrays(arr1, arr2);
console.log(mergedArray);
```

Código 11:
```javascript
function calculateProduct(a, b) {
  return a * b;
}

var result = calculateProduct(5, 10);
console.log(result);
```

Código 12:
```javascript
function calculatePower(base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

var result = calculatePower(2, 5);
console.log(result);
```

Código 13:
```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

var message = greet("John");
console.log(message);
```

Código 14:
```javascript
function countVowels(str) {
  var vowels = "aeiou";
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

var result = countVowels("Hello, World!");
console.log(result);
```

Código 15:
```javascript
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(sum);
```

Código 16:
```javascript
function isPalindrome(str) {
  var reversed = str.split("").reverse().join("");
  return str === reversed;
}

var result = isPalindrome("madam");
console.log(result);
```

Código 17:
```javascript
function findMax(numbers) {
  var max = numbers[0];
  for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

var numbers = [1, 2, 5, 3, 4];
var maxNumber = findMax(numbers);
console.log(maxNumber);
```

Código 18:
```javascript
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}

var truncated = truncateString("Hello, World!", 5);
console.log(truncated);
```

Código 19:
```javascript
function generateFibonacci(n) {
  var sequence = [0, 1];
  for (var i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

var fibonacciSequence = generateFibonacci(10);
console.log(fibonacciSequence);
```

Código 20:
```javascript
function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = words[0];
  for (var i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

var longest = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(longest);
```

Código 21:
```javascript
function removeDuplicates(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

var arr = [1, 2, 2, 3, 4, 4, 5];
var result = removeDuplicates(arr);
console.log(result);
```

Código 22:
```javascript
function convertToUpperCase(str) {
  return str.toUpperCase();
}

var uppercaseString = convertToUpperCase("hello, world!");
console.log(uppercaseString);
```

Código 23:
```javascript
var numbers = [1, 2, 3, 4, 5];
var product = numbers.reduce(function (acc, curr) {
  return acc * curr;
}, 1);

console.log(product);
```

Código 24:
```javascript
function reverseArray(arr) {
  var reversed = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

var arr = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(arr);
console.log(reversedArray);
```

Código 25:
```javascript
function titleCase(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
  }
  return words.join(" ");
}

var title = titleCase("the quick brown fox");
console.log(title);
```

Código 26:
```javascript
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

var result = isLeapYear(2020);
console.log(result);
```

Código 27:
```javascript
function findAverage(numbers) {
  var sum = numbers.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return sum / numbers.length;
}

var average = findAverage([1, 2, 3, 4, 5]);
console.log(average);
```

Código 28:
```javascript
function removeFalsyValues(arr) {
  return arr.filter(function (value) {
    return value;
  });
}

var arr = [0, 1, "", false, true, null, undefined, NaN];
var result = removeFalsyValues(arr);
console.log(result);
```

Código 29:
```javascript
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var capitalized = capitalizeFirstLetter("hello");
console.log(capitalized);
```

Código 30:
```javascript
function findMedian(numbers) {
  var sorted = numbers.sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle] + sorted[middle - 1]) / 2;
  }
  return sorted[middle];
}

var median = findMedian([1, 2, 3, 4, 5]);
console.log(median);
```

Código 31:
```javascript
function isAnagram(str1, str2) {
  var sortedStr1 = str1.toLowerCase().split("").sort().join("");
  var sortedStr2
ChatGPT
 = str2.toLowerCase().split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

var result = isAnagram("listen", "silent");
console.log(result);
```

Código 32:
```javascript
function calculateFactorial(n) {
  var factorial = 1;
  for (var i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

var result = calculateFactorial(5);
console.log(result);
```

Código 33:
```javascript
function findEvenNumbers(numbers) {
  var evenNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

var numbers = [1, 2, 3, 4, 5];
var even = findEvenNumbers(numbers);
console.log(even);
```

Código 34:
```javascript
function countWords(str) {
  var words = str.split(" ");
  return words.length;
}

var count = countWords("The quick brown fox");
console.log(count);
```

Código 35:
```javascript
function findNthFibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  var prev = 1;
  var curr = 1;
  for (var i = 3; i <= n; i++) {
    var temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return curr;
}

var result = findNthFibonacci(10);
console.log(result);
```

Código 36:
```javascript
function findCommonElements(arr1, arr2) {
  var common = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      common.push(arr1[i]);
    }
  }
  return common;
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6, 7, 8];
var result = findCommonElements(arr1, arr2);
console.log(result);
```

Código 37:
```javascript
function removeExtraSpaces(str) {
  return str.replace(/\s+/g, " ").trim();
}

var sentence = "   Hello   World!   ";
var trimmed = removeExtraSpaces(sentence);
console.log(trimmed);
```

Código 38:
```javascript
function findGCD(a, b) {
  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

var result = findGCD(12, 18);
console.log(result);
```

Código 39:
```javascript
function mergeObjects(obj1, obj2) {
  var merged = {};
  for (var key in obj1) {
    merged[key] = obj1[key];
  }
  for (var key in obj2) {
    merged[key] = obj2[key];
  }
  return merged;
}

var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
var mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);
```

Código 40:
```javascript
function removeFalsyValues(arr) {
  var truthyValues = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyValues.push(arr[i]);
    }
  }
  return truthyValues;
}

var arr = [0, 1, "", false, true, null, undefined, NaN];
var result = removeFalsyValues(arr);
console.log(result);
```

Código 41:
```javascript
function findSquareRoot(num) {
  return Math.sqrt(num);
}

var result = findSquareRoot(16);
console.log(result);
```

Código 42:
```javascript
function removeElement(arr, element) {
  var filtered = arr.filter(function (value) {
    return value !== element;
  });
  return filtered;
}

var arr = [1, 2, 3, 4, 5];
var result = removeElement(arr, 3);
console.log(result);
```

Código 43:
```javascript
function isPalindrome(str) {
  var cleaned = str.toLowerCase().replace(/\W/g, "");
  var reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

var result = isPalindrome("A man, a plan, a canal. Panama!");
console.log(result);
```

Código 44:
```javascript
function findLargestElement(arr) {
  return Math.max(...arr);
}

var arr = [1, 10, 5, 20, 3];
var largest = findLargestElement(arr);
console.log(largest);
```

Código 45:
```javascript
function findLongestWordLength(str) {
  var words = str.split(" ");
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

var maxLength = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(maxLength);
```

Código 46:
```javascript
function reverseWords(str) {
  var words = str.split(" ");
  var reversed = words.map(function (word) {
    return word.split("").reverse().join("");
  });
  return reversed.join(" ");
}

var reversed = reverseWords("Hello, World!");
console.log(reversed);
```

Código 47:
```javascript
function countEvenNumbers(numbers) {
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

var count = countEvenNumbers([1, 2, 3, 4, 5]);
console.log(count);
```

Código 48:
```javascript
function shuffleArray(arr) {
  var shuffled = arr.slice();
  for (var i = shuffled.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

var arr = [1, 2, 3, 4, 5];
var shuffledArray = shuffleArray(arr);
console.log(shuffledArray);
```

Código 49:
```javascript
function truncateString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
}

var truncated = truncateString("Hello, World!", 5);
console.log(truncated);
```

Código 50:
```javascript
function findOddNumbers(numbers) {
  var oddNumbers =
ChatGPT
 numbers.filter(function (num) {
    return num % 2 !== 0;
  });
  return oddNumbers;
}

var numbers = [1, 2, 3, 4, 5];
var odd = findOddNumbers(numbers);
console.log(odd);
```

Código 51:
```javascript
function calculateArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

var area = calculateArea(5);
console.log(area);
```

Código 52:
```javascript
function convertToLowerCase(str) {
  return str.toLowerCase();
}

var lowercaseString = convertToLowerCase("Hello, World!");
console.log(lowercaseString);
```

Código 53:
```javascript
function sumAllNumbers(arr) {
  return arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
}

var arr = [1, 2, 3, 4, 5];
var sum = sumAllNumbers(arr);
console.log(sum);
```

Código 54:
```javascript
function findSmallestElement(arr) {
  return Math.min(...arr);
}

var arr = [5, 2, 8, 1, 4];
var smallest = findSmallestElement(arr);
console.log(smallest);
```

Código 55:
```javascript
function removeDuplicates(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

var arr = [1, 2, 2, 3, 4, 4, 5];
var result = removeDuplicates(arr);
console.log(result);
```

Código 56:
```javascript
function checkPalindrome(str) {
  var reversed = str.split("").reverse().join("");
  return str === reversed;
}

var result = checkPalindrome("racecar");
console.log(result);
```

Código 57:
```javascript
function countCharacter(str, char) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

var count = countCharacter("Hello, World!", "o");
console.log(count);
```

Código 58:
```javascript
function findMissingNumber(arr) {
  var n = arr.length + 1;
  var sum = (n * (n + 1)) / 2;
  var arrSum = arr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return sum - arrSum;
}

var arr = [1, 2, 4, 5];
var missing = findMissingNumber(arr);
console.log(missing);
```

Código 59:
```javascript
function capitalizeWords(str) {
  var words = str.split(" ");
  var capitalized = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalized.join(" ");
}

var capitalized = capitalizeWords("the quick brown fox");
console.log(capitalized);
```

Código 60:
```javascript
function findPrimeNumbers(n) {
  var primes = [];
  for (var i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

var primes = findPrimeNumbers(20);
console.log(primes);
```

Código 61:
```javascript
function calculateFactorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculateFactorialRecursive(n - 1);
}

var result = calculateFactorialRecursive(5);
console.log(result);
```

Código 62:
```javascript
function findAverage(numbers) {
  var sum = numbers.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return sum / numbers.length;
}

var average = findAverage([1, 2, 3, 4, 5]);
console.log(average);
```

Código 63:
```javascript
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

var arr = [0, 1, "", false, true, null, undefined, NaN];
var result = removeFalsyValues(arr);
console.log(result);
```

Código 64:
```javascript
function convertToUpperCase(str) {
  return str.toUpperCase();
}

var uppercaseString = convertToUpperCase("hello, world!");
console.log(uppercaseString);
```

Código 65:
```javascript
function findCommonElements(arr1, arr2) {
  return arr1.filter(function (value) {
    return arr2.includes(value);
  });
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6, 7, 8];
var result = findCommonElements(arr1, arr2);
console.log(result);
```

Código 66:
```javascript
function calculateHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

var result = calculateHypotenuse(3, 4);
console.log(result);
```

Código 67:
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

var reversedString = reverseString("Hello, World!");
console.log(reversedString);
```

Código 68:
```javascript
function findUniqueElements(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

var arr = [1, 2, 2, 3, 4, 4, 5];
var uniqueElements = findUniqueElements(arr);
console.log(uniqueElements);
```

Código 69:
```javascript
function findPower(base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

var result = findPower(2, 5);
console.log(result);
```

Código 70:
```javascript
function countCharacters(str) {
  var counts = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}

var counts = countCharacters("Hello, World!");
console.log(counts);
```

Código 71:
```javascript
function findDifference(a, b) {
  return Math.abs(a - b);
}

var result = findDifference(10,
ChatGPT
 5);
console.log(result);
```

Código 72:
```javascript
function countWords(str) {
  var words = str.split(" ");
  return words.length;
}

var count = countWords("The quick brown fox");
console.log(count);
```

Código 73:
```javascript
function findNthFibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  var prev = 1;
  var curr = 1;
  for (var i = 3; i <= n; i++) {
    var temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return curr;
}

var result = findNthFibonacci(10);
console.log(result);
```

Código 74:
```javascript
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var mergedArray = mergeArrays(arr1, arr2);
console.log(mergedArray);
```

Código 75:
```javascript
function isAnagram(str1, str2) {
  var sortedStr1 = str1.toLowerCase().split("").sort().join("");
  var sortedStr2 = str2.toLowerCase().split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

var result = isAnagram("listen", "silent");
console.log(result);
```

Código 76:
```javascript
function findMedian(numbers) {
  var sorted = numbers.sort(function (a, b) {
    return a - b;
  });
  var middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle] + sorted[middle - 1]) / 2;
  }
  return sorted[middle];
}

var median = findMedian([1, 2, 3, 4, 5]);
console.log(median);
```

Código 77:
```javascript
function findMaxOccurrence(arr) {
  var occurrences = {};
  var maxCount = 0;
  var maxElement = null;
  for (var i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (occurrences[element]) {
      occurrences[element]++;
    } else {
      occurrences[element] = 1;
    }
    if (occurrences[element] > maxCount) {
      maxCount = occurrences[element];
      maxElement = element;
    }
  }
  return maxElement;
}

var arr = [1, 2, 2, 3, 4, 4, 4, 5];
var maxOccurrence = findMaxOccurrence(arr);
console.log(maxOccurrence);
```

Código 78:
```javascript
function findSumOfSquares(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

var numbers = [1, 2, 3, 4, 5];
var sumOfSquares = findSumOfSquares(numbers);
console.log(sumOfSquares);
```

Código 79:
```javascript
function calculateGCD(a, b) {
  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

var result = calculateGCD(12, 18);
console.log(result);
```

Código 80:
```javascript
function findLongestWordLength(str) {
  var words = str.split(" ");
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

var maxLength = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(maxLength);
```

Código 81:
```javascript
function reverseArray(arr) {
  var reversed = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

var arr = [1, 2, 3, 4, 5];
var reversedArray = reverseArray(arr);
console.log(reversedArray);
```

Código 82:
```javascript
function findUniqueCharacters(str) {
  var unique = [];
  for (var i = 0; i < str.length; i++) {
    if (!unique.includes(str[i])) {
      unique.push(str[i]);
    }
  }
  return unique;
}

var uniqueCharacters = findUniqueCharacters("Hello, World!");
console.log(uniqueCharacters);
```

Código 83:
```javascript
function checkPrimeNumber(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var result = checkPrimeNumber(17);
console.log(result);
```

Código 84:
```javascript
function findEvenNumbers(start, end) {
  var evenNumbers = [];
  for (var i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

var even = findEvenNumbers(1, 10);
console.log(even);
```

Código 85:
```javascript
function findIntersection(arr1, arr2) {
  return arr1.filter(function (value) {
    return arr2.includes(value);
  });
}

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6, 7, 8];
var result = findIntersection(arr1, arr2);
console.log(result);
```

Código 86:
```javascript
function findLargestWordLength(str) {
  var words = str.split(" ");
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

var maxLength = findLargestWordLength("The quick brown fox jumped over the lazy dog");
console.log(maxLength);
```

Código 87:
```javascript
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

var reversed = reverseWords("Hello, World!");
console.log(reversed);
```

Código 88:
```javascript
function isPerfectSquare(num) {
  var sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

var result = isPerfectSquare(16);
console.log(result);
```

Código 89:
```javascript
function countOccurrences(arr, num) {
  var count = 0;
  for (var i = 0; i < arr.length; i++)
ChatGPT
 {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

var arr = [1, 2, 3, 4, 5, 3, 2, 2];
var occurrences = countOccurrences(arr, 2);
console.log(occurrences);
```

Código 90:
```javascript
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

var obj1 = { a: 1, b: 2 };
var obj2 = { c: 3, d: 4 };
var mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);
```

Código 91:
```javascript
function findLongestConsecutiveSequence(arr) {
  var numSet = new Set(arr);
  var longestSequence = 0;
  
  for (var num of numSet) {
    if (!numSet.has(num - 1)) {
      var currentNum = num;
      var currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}

var arr = [100, 4, 200, 1, 3, 2];
var longestSequence = findLongestConsecutiveSequence(arr);
console.log(longestSequence);
```

Código 92:
```javascript
function findMissingRanges(nums, lower, upper) {
  var ranges = [];
  var prev = lower - 1;

  for (var i = 0; i <= nums.length; i++) {
    var current = i === nums.length ? upper + 1 : nums[i];

    if (current - prev >= 2) {
      var start = prev + 1;
      var end = current - 1;
      
      if (start === end) {
        ranges.push(start.toString());
      } else {
        ranges.push(start + "->" + end);
      }
    }

    prev = current;
  }

  return ranges;
}

var nums = [0, 1, 3, 50, 75];
var lower = 0;
var upper = 99;
var missingRanges = findMissingRanges(nums, lower, upper);
console.log(missingRanges);
```

Código 93:
```javascript
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function mergeTwoLists(l1, l2) {
  var dummy = new ListNode(-1);
  var current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  }

  if (l2 !== null) {
    current.next = l2;
  }

  return dummy.next;
}

var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

var l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

var mergedList = mergeTwoLists(l1, l2);
console.log(mergedList);
```

Código 94:
```javascript
function rob(nums) {
  var prevMax = 0;
  var currMax = 0;

  for (var i = 0; i < nums.length; i++) {
    var temp = currMax;
    currMax = Math.max(prevMax + nums[i], currMax);
    prevMax = temp;
  }

  return currMax;
}

var nums = [1, 2, 3, 1];
var maxAmount = rob(nums);
console.log(maxAmount);
```

Código 95:
```javascript
function findKthLargest(nums, k) {
  nums.sort(function (a, b) {
    return b - a;
  });

  return nums[k - 1];
}

var nums = [3, 2, 1, 5, 6, 4];
var k = 2;
var kthLargest = findKthLargest(nums, k);
console.log(kthLargest);
```

Código 96:
```javascript
function longestValidParentheses(s) {
  var stack = [-1];
  var longest = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        longest = Math.max(longest, i - stack[stack.length - 1]);
      }
    }
  }

  return longest;
}

var parentheses = "(()";
var maxLength = longestValidParentheses(parentheses);
console.log(maxLength);
```

Código 97:
```javascript
function maxSubArray(nums) {
  var maxSum = nums[0];
  var currentSum = nums[0];

  for (var i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var maxSubArraySum = maxSubArray(nums);
console.log(maxSubArraySum);
```

Código 98:
```javascript
function multiply(num1, num2) {
  var m = num1.length;
  var n = num2.length;
  var product = Array(m + n).fill(0);

  for (var i = m - 1; i >= 0; i--) {
    for (var j = n - 1; j >= 0; j--) {
      var digit1 = Number(num1[i]);
      var digit2 = Number(num2[j]);
      var p1 = i + j;
      var p2 = i + j + 1;
      var sum = digit1 * digit2 + product[p2];

      product[p2] = sum % 10;
      product[p1] += Math.floor(sum / 10);
    }
  }

  var result = product.join("").replace(/^0+/, "");
  return result === "" ? "0" : result;
}

var num1 = "123";
var num2 = "456";
var product = multiply(num1, num2);
console.log(product);
```

Código 99:
```javascript
function threeSum(nums) {
  var result = [];

  nums.sort(function (a, b) {
    return a - b;
  });

  for (var i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      var target = -nums[i];
      var left = i + 1;
      var right = nums.length - 1;

      while (left < right) {
        var sum = nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (sum < target)
ChatGPT
 {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

var nums = [-1, 0, 1, 2, -1, -4];
var triplets = threeSum(nums);
console.log(triplets);
```

Código 100:
```javascript
function isValidSudoku(board) {
  var rows = Array(9).fill(0).map(function () { return new Set(); });
  var columns = Array(9).fill(0).map(function () { return new Set(); });
  var boxes = Array(9).fill(0).map(function () { return new Set(); });

  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 9; col++) {
      var cell = board[row][col];

      if (cell !== ".") {
        if (rows[row].has(cell) || columns[col].has(cell) || boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)].has(cell)) {
          return false;
        }

        rows[row].add(cell);
        columns[col].add(cell);
        boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)].add(cell);
      }
    }
  }

  return true;
}

var board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

var isValid = isValidSudoku(board);
console.log(isValid);
```

## Outros Códigos
### Validação de CPF em JS

```javascript
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

  if (cpf.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  // Validação dos dígitos verificadores
  var add = 0;
  for (var i = 0; i < 9; i++) {
    add += parseInt(cpf.charAt(i)) * (10 - i);
  }

  var rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }

  if (rev !== parseInt(cpf.charAt(9))) {
    return false;
  }

  add = 0;
  for (i = 0; i < 10; i++) {
    add += parseInt(cpf.charAt(i)) * (11 - i);
  }

  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }

  if (rev !== parseInt(cpf.charAt(10))) {
    return false;
  }

  return true;
}

var cpf1 = '12345678909';
var cpf2 = '98765432100';

console.log(validarCPF(cpf1)); // Retorna true
console.log(validarCPF(cpf2)); // Retorna false
```

Este código define uma função `validarCPF` que recebe um CPF como argumento e verifica se ele é válido ou não. Ele realiza diversas verificações, incluindo a validação dos dígitos verificadores.

Em seguida, o código cria duas variáveis `cpf1` e `cpf2` com exemplos de CPFs, e utiliza a função `validarCPF` para verificar se eles são válidos. Os resultados são exibidos no console usando `console.log`.

### Formatador de data

```javascript
function formatarData(data) {
  var dia = data.getDate();
  var mes = data.getMonth() + 1; // O mês é baseado em zero, então adicionamos 1
  var ano = data.getFullYear();

  // Adiciona um zero à esquerda se o dia ou o mês tiver apenas um dígito
  if (dia < 10) {
    dia = '0' + dia;
  }
  if (mes < 10) {
    mes = '0' + mes;
  }

  return dia + '/' + mes + '/' + ano;
}

var dataAtual = new Date();
var dataFormatada = formatarData(dataAtual);

console.log('Hoje é: ' + dataFormatada);
```

Neste exemplo, a função `formatarData` recebe um objeto `Date` como parâmetro e extrai o dia, mês e ano da data. Em seguida, são aplicadas algumas formatações para garantir que o dia e o mês tenham dois dígitos (adicionando um zero à esquerda, se necessário). Por fim, a função retorna uma string no formato "dia/mês/ano".

O código cria uma variável `dataAtual` que armazena a data atual obtida através da criação de um novo objeto `Date`. Em seguida, a função `formatarData` é chamada, passando `dataAtual` como argumento, e o resultado é armazenado na variável `dataFormatada`. Por fim, a string "Hoje é: " concatenada com `dataFormatada` é exibida no console usando `console.log`.

Espero que este exemplo seja útil para ilustrar como trabalhar com datas em JavaScript!

### Requisição HTTP GET

```javascript
fetch('https://api.exemplo.com/dados')
  .then(function(response) {
    if (!response.ok) {
      throw new Error('Erro ao realizar a requisição: ' + response.status);
    }
    return response.json();
  })
  .then(function(data) {
    console.log('Dados recebidos:');
    console.log(data);
  })
  .catch(function(error) {
    console.log('Ocorreu um erro: ' + error.message);
  });
```

Neste exemplo, a função `fetch` é utilizada para fazer uma requisição HTTP GET para a URL 'https://api.exemplo.com/dados'. Em seguida, são encadeadas duas funções de callback usando o método `then`.

A primeira função de callback verifica se a resposta da requisição é bem-sucedida, verificando se o status da resposta é `ok`. Se não for, é lançado um erro com uma mensagem personalizada.

A segunda função de callback é chamada se a requisição for bem-sucedida. Ela converte a resposta em JSON usando o método `json()` e, em seguida, exibe os dados recebidos no console.

Se ocorrer algum erro durante a requisição, a função `catch` será executada e exibirá uma mensagem de erro no console.

Lembre-se de substituir a URL 'https://api.exemplo.com/dados' pelo endpoint real que você deseja acessar.

Espero que este exemplo seja útil para demonstrar como realizar uma requisição HTTP em JavaScript usando o `fetch`!

### LocalStorage

Aqui está um exemplo de código JavaScript que utiliza a funcionalidade de armazenamento local (localStorage) para salvar e recuperar dados em um navegador:

```javascript
// Salvando dados no localStorage
var dados = {
  nome: 'João',
  idade: 25,
  cidade: 'São Paulo'
};

localStorage.setItem('meusDados', JSON.stringify(dados));

// Recuperando dados do localStorage
var dadosArmazenados = localStorage.getItem('meusDados');
dadosArmazenados = JSON.parse(dadosArmazenados);

console.log('Nome: ' + dadosArmazenados.nome);
console.log('Idade: ' + dadosArmazenados.idade);
console.log('Cidade: ' + dadosArmazenados.cidade);
```

Neste exemplo, um objeto `dados` é criado com algumas informações, como nome, idade e cidade. Em seguida, a função `localStorage.setItem` é usada para salvar esses dados no localStorage, utilizando a chave `'meusDados'`.

Posteriormente, a função `localStorage.getItem` é utilizada para recuperar os dados armazenados no localStorage com a chave `'meusDados'`. Os dados são convertidos de volta para um objeto JavaScript usando `JSON.parse`.

Por fim, os dados são exibidos no console utilizando `console.log`.

Dessa forma, é possível armazenar dados no localStorage do navegador e recuperá-los posteriormente. Vale lembrar que o localStorage tem limitações de armazenamento e os dados permanecerão no navegador mesmo após o fechamento e reabertura da página.

Espero que esse exemplo seja útil para demonstrar como utilizar o localStorage para armazenar dados em JavaScript!

### Manipulando eventos DOM

Aqui está um exemplo de código JavaScript que utiliza a funcionalidade de eventos para interagir com elementos HTML e realizar uma ação quando um botão é clicado:

```javascript
// Obtendo referência para o botão
var botao = document.getElementById('meuBotao');

// Função de manipulação de clique do botão
function handleClick() {
  var paragrafo = document.createElement('p');
  paragrafo.textContent = 'Botão clicado!';
  document.body.appendChild(paragrafo);
}

// Adicionando o evento de clique ao botão
botao.addEventListener('click', handleClick);

// Removendo o evento de clique do botão após 5 segundos
setTimeout(function() {
  botao.removeEventListener('click', handleClick);
}, 5000);
```

Neste exemplo, temos um botão HTML com o ID "meuBotao". O código JavaScript obtém a referência a esse botão usando `getElementById`.

Em seguida, temos uma função chamada `handleClick` que será executada quando o botão for clicado. Essa função cria um novo parágrafo (`<p>`) usando `createElement`, define o texto desse parágrafo como "Botão clicado!" e adiciona-o ao final do corpo do documento usando `appendChild`.

Depois, usamos `addEventListener` para adicionar o evento de clique ao botão, passando a função `handleClick` como callback.

Além disso, utilizamos `setTimeout` para remover o evento de clique do botão após 5 segundos. Usamos `removeEventListener` dentro da função de callback para remover o evento.

Espero que este exemplo atenda à sua solicitação de um código JavaScript puro com pelo menos 10 linhas e que demonstre o uso de eventos em elementos HTML!

### Uso do for

Aqui está um exemplo de código JavaScript puro que utiliza uma estrutura de repetição (`for`) para iterar sobre um array e exibir seus elementos no console:

```javascript
var array = [1, 2, 3, 4, 5];
var arrayLength = array.length;

console.log("Elementos do array:");

for (var i = 0; i < arrayLength; i++) {
  var elemento = array[i];
  console.log("Elemento " + i + ": " + elemento);
}

console.log("Fim do loop");
```

Neste exemplo, temos um array chamado `array` com alguns números.

Definimos uma variável `arrayLength` que armazena o comprimento do array.

Em seguida, usamos uma estrutura de repetição `for` para percorrer o array. Iniciamos a variável `i` com o valor 0 e continuamos o loop enquanto `i` for menor que `arrayLength`.

A cada iteração do loop, atribuímos o valor do elemento atual do array à variável `elemento` e exibimos uma mensagem no console com o índice e o valor do elemento.

Após o loop, exibimos uma mensagem indicando o fim do loop no console.

Espero que este exemplo atenda à sua solicitação de um código com pelo menos 10 linhas que utilize a estrutura de repetição `for` em JavaScript!

### Uso do setTimeout

Aqui está um exemplo de código JavaScript puro que utiliza a função `setTimeout` para executar uma ação após um determinado intervalo de tempo:


```javascript
function exibirMensagem() {
  console.log('Ação executada após 3 segundos');
}

function agendarAcao() {
  setTimeout(exibirMensagem, 3000);
}

agendarAcao();
```

Neste exemplo, temos duas funções. A função `exibirMensagem` imprime uma mensagem no console.

A função `agendarAcao` é criada para encapsular a chamada de `setTimeout`. Dentro dela, utilizamos `setTimeout` para agendar a execução da função `exibirMensagem` após um intervalo de 3 segundos (3000 milissegundos).

Por fim, chamamos a função `agendarAcao` para iniciar o processo de agendamento da ação.

Dessa forma, após 3 segundos, a função `exibirMensagem` será chamada e a mensagem será exibida no console.

Espero que este exemplo atenda à sua solicitação de um código com pelo menos 10 linhas que utilize a função `setTimeout` em JavaScript!


### Alerta de período do dia

Aqui está um exemplo de programa em JavaScript que utiliza a função `getHours()` para determinar se é manhã, tarde ou noite, e também permite atribuir um fuso horário mundial para testar:

```javascript
function verificarPeriodoDoDia(fusoHorario) {
  var data = new Date();
  data.setHours(data.getHours() + fusoHorario);

  var hora = data.getHours();

  if (hora >= 6 && hora < 12) {
    return "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    return "Boa tarde!";
  } else {
    return "Boa noite!";
  }
}

// Exemplo de uso
var fusoHorario = -3; // Fuso horário de Brasília (GMT-3)
var periodoDoDia = verificarPeriodoDoDia(fusoHorario);
console.log(periodoDoDia);
```

Nesse exemplo, a função `verificarPeriodoDoDia` recebe um parâmetro `fusoHorario` que representa o deslocamento em horas do horário local para o horário do fuso horário desejado. No exemplo acima, foi usado o fuso horário de Brasília (-3 horas em relação ao GMT).

A função cria um objeto `Date` e ajusta a hora com base no fuso horário fornecido. Em seguida, ela obtém a hora atual através do método `getHours()`. Com base nessa hora, o programa determina se é manhã (entre 6h e 12h), tarde (entre 12h e 18h) ou noite (após as 18h).

No exemplo de uso, o programa chama a função `verificarPeriodoDoDia` com o fuso horário de Brasília e imprime o resultado no console. Você pode alterar o valor de `fusoHorario` para testar com diferentes fusos horários. Certifique-se de ajustar o valor corretamente, considerando o deslocamento em relação ao GMT.

Aqui está um exemplo de como você pode adicionar o código JavaScript em um arquivo HTML e usar o `alert` para exibir a saudação:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Saudação de acordo com o horário</title>
</head>
<body>
  <script>
    function verificarPeriodoDoDia(fusoHorario) {
      var data = new Date();
      data.setHours(data.getHours() + fusoHorario);

      var hora = data.getHours();

      if (hora >= 6 && hora < 12) {
        return "Bom dia!";
      } else if (hora >= 12 && hora < 18) {
        return "Boa tarde!";
      } else {
        return "Boa noite!";
      }
    }

    var fusoHorario = -3; // Fuso horário de Brasília (GMT-3)
    var periodoDoDia = verificarPeriodoDoDia(fusoHorario);
    alert(periodoDoDia);
  </script>
</body>
</html>
```

Nesse exemplo, o código JavaScript está incorporado diretamente na seção `<script>` dentro do arquivo HTML. O `alert` é usado para exibir a saudação de acordo com o horário atual, calculado com base no fuso horário fornecido.

Ao abrir o arquivo HTML em um navegador, o `alert` será exibido com a saudação apropriada para o horário atual, levando em consideração o fuso horário configurado.

### Como criar um trocador de cores em JS

Para criar um trocador de cores em JavaScript, você pode utilizar a manipulação do DOM para alterar as cores dos elementos da página. Vou fornecer um exemplo básico para trocar a cor de fundo de um elemento específico (por exemplo, um `<div>`) utilizando um botão.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Trocador de Cores</title>
</head>
<body>
  <div id="conteudo" style="width: 200px; height: 200px; background-color: #ff0000;"></div>
  <button onclick="trocarCor()">Trocar Cor</button>

  <script src="seu_script.js"></script>
</body>
</html>
```

JavaScript (`seu_script.js`):
```javascript
function trocarCor() {
  // Obter o elemento pelo ID
  var elemento = document.getElementById("conteudo");

  // Gerar uma cor aleatória em hexadecimal
  var cor = gerarCorAleatoria();

  // Aplicar a cor de fundo ao elemento
  elemento.style.backgroundColor = cor;
}

function gerarCorAleatoria() {
  // Gerar três componentes RGB aleatórias
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Converter os componentes para hexadecimal e formatar a cor
  var corHex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

  return corHex;
}

function componentToHex(component) {
  // Converter o componente para hexadecimal com dois dígitos
  var hex = component.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
```

Neste exemplo, temos um botão que, quando clicado, chama a função `trocarCor()`. A função `trocarCor()` obtém o elemento com o ID "conteudo", gera uma cor aleatória e aplica essa cor como o novo fundo do elemento.

A função `gerarCorAleatoria()` é responsável por criar uma cor aleatória em formato hexadecimal. Ela gera três componentes RGB aleatórias (vermelho, verde e azul) e as converte para a notação hexadecimal. A função `componentToHex()` é um auxiliar que converte um componente numérico para uma string hexadecimal com dois dígitos.

Dessa forma, toda vez que você clicar no botão "Trocar Cor", a cor de fundo do elemento será alterada aleatoriamente. Você pode adaptar esse código para trocar a cor de outros elementos ou para atender a requisitos específicos de troca de cores em seu projeto.

### Como criar um contador em JS

Para criar um contador em JavaScript, você pode utilizar a manipulação do DOM para exibir o valor do contador em uma página HTML. Vou fornecer um exemplo simples de como criar um contador que aumenta ou diminui o valor a cada clique em botões diferentes.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Contador</title>
</head>
<body>
  <h1 id="contador">0</h1>
  <button onclick="incrementar()">Incrementar</button>
  <button onclick="decrementar()">Decrementar</button>

  <script src="seu_script.js"></script>
</body>
</html>
```

JavaScript (`seu_script.js`):
```javascript
var contadorValor = 0; // Variável para armazenar o valor do contador inicializado com 0

function incrementar() {
  contadorValor++;
  exibirContador();
}

function decrementar() {
  contadorValor--;
  exibirContador();
}

function exibirContador() {
  var contadorElemento = document.getElementById("contador");
  contadorElemento.textContent = contadorValor;
}
```

Neste exemplo, temos um contador representado por um elemento `<h1>` com o ID "contador". Temos também dois botões: "Incrementar" e "Decrementar", cada um com suas respectivas funções (`incrementar()` e `decrementar()`).

A variável `contadorValor` armazena o valor atual do contador, que é inicializado como 0. Ao clicar nos botões "Incrementar" ou "Decrementar", a função correspondente é chamada, aumentando ou diminuindo o valor do contador, respectivamente.

A função `exibirContador()` é responsável por atualizar o valor do elemento no DOM para mostrar o valor atual do contador.

Assim, ao clicar nos botões, o valor do contador será atualizado e exibido na página. Esse é um exemplo básico, e você pode expandir essa lógica para atender a requisitos mais complexos no seu projeto de contador.

### Como criar um carrossel de revisões

Para criar um carrossel de revisões (ou carousel de reviews) em JavaScript, você pode utilizar HTML, CSS e JavaScript para criar a estrutura, estilização e funcionalidade do carrossel. Vou fornecer um exemplo simples usando apenas JavaScript, sem o uso de bibliotecas externas.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Carrossel de Revisões</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="carousel">
    <div class="reviews" id="review1">Revisão 1</div>
    <div class="reviews" id="review2">Revisão 2</div>
    <div class="reviews" id="review3">Revisão 3</div>
    <!-- Adicione mais revisões conforme necessário -->
  </div>

  <button onclick="mostrarRevisaoAnterior()">Anterior</button>
  <button onclick="mostrarProximaRevisao()">Próximo</button>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
.carousel {
  display: flex;
  overflow: hidden;
  width: 300px; /* Defina o tamanho do carrossel conforme desejado */
}

.reviews {
  width: 300px; /* Defina o tamanho das revisões conforme desejado */
  padding: 20px;
  border: 1px solid #ccc;
}

/* Estilo para ocultar revisões fora da área visível */
.reviews:not(:first-child) {
  display: none;
}
```

JavaScript (`seu_script.js`):
```javascript
var revisaoAtual = 0;
var totalRevisoes = document.querySelectorAll('.reviews').length;

function mostrarRevisao(revisaoIndex) {
  var revisoes = document.querySelectorAll('.reviews');

  revisoes.forEach(function(revisao) {
    revisao.style.display = 'none';
  });

  revisoes[revisaoIndex].style.display = 'block';
}

function mostrarProximaRevisao() {
  revisaoAtual = (revisaoAtual + 1) % totalRevisoes;
  mostrarRevisao(revisaoAtual);
}

function mostrarRevisaoAnterior() {
  revisaoAtual = (revisaoAtual - 1 + totalRevisoes) % totalRevisoes;
  mostrarRevisao(revisaoAtual);
}

// Exibir a primeira revisão ao carregar a página
mostrarRevisao(revisaoAtual);
```

Neste exemplo, criamos um carrossel de revisões simples com três revisões (`Revisão 1`, `Revisão 2` e `Revisão 3`). O carrossel é criado usando a estrutura HTML, estilizado com CSS e sua funcionalidade é implementada através do JavaScript.

O CSS é usado para criar o layout básico do carrossel e ocultar as revisões que não estão sendo exibidas no momento, definindo-as como `display: none;`.

O JavaScript contém três funções principais:
1. `mostrarRevisao(revisaoIndex)`: Essa função é responsável por mostrar a revisão específica no carrossel. Ela esconde todas as revisões e mostra apenas a que possui o índice `revisaoIndex`.
2. `mostrarProximaRevisao()`: Esta função é chamada ao clicar no botão "Próximo" e avança para a próxima revisão no carrossel, utilizando o operador `%` para garantir que o carrossel funcione em loop.
3. `mostrarRevisaoAnterior()`: Esta função é chamada ao clicar no botão "Anterior" e retrocede para a revisão anterior no carrossel, também utilizando o operador `%` para garantir o loop.

A última linha de código `mostrarRevisao(revisaoAtual);` é usada para exibir a primeira revisão ao carregar a página.

Você pode adicionar mais revisões ao carrossel modificando o HTML e o CSS conforme necessário. Lembre-se de ajustar o tamanho do carrossel e das revisões no CSS de acordo com suas preferências.
User
Como criar uma navbar responsiva
ChatGPT
Para criar uma navbar (barra de navegação) responsiva em HTML, CSS e JavaScript, você pode utilizar uma combinação de CSS flexbox ou grid para o layout e JavaScript para controlar o comportamento responsivo. Abaixo, vou fornecer um exemplo básico de como criar uma navbar que se adapta ao tamanho da tela em dispositivos móveis.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Navbar Responsiva</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <nav>
    <div class="logo">Logo</div>
    <ul class="menu">
      <li><a href="#inicio">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
    <div class="hamburguer">
      <div class="linha"></div>
      <div class="linha"></div>
      <div class="linha"></div>
    </div>
  </nav>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

nav {
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.logo {
  font-size: 1.5rem;
}

.menu {
  display: flex;
  list-style: none;
}

.menu li {
  margin-right: 20px;
}

.menu li:last-child {
  margin-right: 0;
}

.menu li a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
}

.hamburguer {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.linha {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px;
}
```

JavaScript (`seu_script.js`):
```javascript
var hamburguer = document.querySelector('.hamburguer');
var menu = document.querySelector('.menu');

hamburguer.addEventListener('click', function() {
  menu.classList.toggle('ativo');
});
```

Neste exemplo, criamos uma navbar com um logotipo à esquerda, links de menu no meio e um ícone de hamburguer à direita para dispositivos móveis.

O CSS usa flexbox para alinhar os itens da navbar e, para telas menores, oculta o menu e exibe o ícone de hamburguer. O JavaScript adiciona um ouvinte de evento ao ícone de hamburguer para alternar a classe "ativo" no menu quando o ícone é clicado. Essa classe ativa é responsável por exibir o menu em telas menores.

No CSS, adicionamos a classe `ativo` para controlar a exibição do menu em dispositivos móveis. Para tornar a navbar responsiva, você pode usar media queries no CSS para ajustar o layout conforme o tamanho da tela.

Note que este é apenas um exemplo básico para criar uma navbar responsiva. Dependendo das suas necessidades específicas e do design do seu site, você pode adicionar mais estilos e funcionalidades para tornar a navbar mais completa e personalizada.
User
Como criar uma sidebar com JS
ChatGPT
Para criar uma sidebar (barra lateral) com JavaScript, você pode utilizar a manipulação do DOM para adicionar e remover a classe que controla a visibilidade da barra lateral. Vou fornecer um exemplo simples de como criar uma sidebar que pode ser aberta e fechada com um botão.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Sidebar com JS</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="sidebar" id="minhaSidebar">
    <button onclick="fecharSidebar()">Fechar</button>
    <ul>
      <li><a href="#inicio">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </div>

  <div class="conteudo">
    <button onclick="abrirSidebar()">Abrir</button>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 250px;
  background-color: #333;
  color: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: -250px; /* Esconde a sidebar fora da tela */
  transition: left 0.3s ease-in-out; /* Adiciona transição suave */
}

.conteudo {
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  padding: 10px;
}

ul li a {
  color: #fff;
  text-decoration: none;
}

/* Estilos para ocultar o botão "Fechar" quando a sidebar estiver fechada */
#minhaSidebar.fechar {
  left: -250px;
}
```

JavaScript (`seu_script.js`):
```javascript
function abrirSidebar() {
  var sidebar = document.getElementById("minhaSidebar");
  sidebar.classList.remove("fechar");
}

function fecharSidebar() {
  var sidebar = document.getElementById("minhaSidebar");
  sidebar.classList.add("fechar");
}
```

Neste exemplo, criamos uma sidebar com uma lista de links e dois botões: um para abrir a sidebar e outro para fechá-la.

No CSS, definimos o estilo da sidebar, posicionando-a à esquerda da tela com `left: -250px;`, o que a torna oculta por padrão. A classe `.fechar` é usada para aplicar a transição suave e ocultar a sidebar, movendo-a para fora da tela quando o botão "Fechar" é clicado.

O JavaScript adiciona duas funções, `abrirSidebar()` e `fecharSidebar()`, que são chamadas ao clicar nos botões "Abrir" e "Fechar", respectivamente. Essas funções manipulam a classe da sidebar para mostrar ou ocultar a sidebar na tela.

Lembre-se de personalizar os estilos CSS e adicionar mais funcionalidades, se necessário, para tornar a sidebar mais adequada ao seu projeto.
User
Como criar um modal com JS
ChatGPT
Para criar um modal (ou caixa de diálogo) com JavaScript, você pode utilizar a manipulação do DOM para adicionar e remover o modal dinamicamente. Vou fornecer um exemplo simples de como criar um modal que pode ser aberto e fechado com um botão.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Modal com JS</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <button onclick="abrirModal()">Abrir Modal</button>

  <div class="modal" id="meuModal">
    <div class="conteudo-modal">
      <span onclick="fecharModal()" class="fechar">&times;</span>
      <h2>Meu Modal</h2>
      <p>Este é um exemplo de modal com JavaScript.</p>
    </div>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.modal {
  display: none; /* Esconde o modal por padrão */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro para dar destaque ao modal */
}

.conteudo-modal {
  background-color: #fff;
  max-width: 400px;
  margin: 15% auto;
  padding: 20px;
  position: relative;
}

.fechar {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
}
```

JavaScript (`seu_script.js`):
```javascript
function abrirModal() {
  var modal = document.getElementById("meuModal");
  modal.style.display = "block"; // Exibe o modal
}

function fecharModal() {
  var modal = document.getElementById("meuModal");
  modal.style.display = "none"; // Oculta o modal
}
```

Neste exemplo, criamos um botão "Abrir Modal" e um modal que é exibido quando o botão é clicado. O modal é criado usando HTML e estilizado com CSS. Ele é inicialmente oculto por padrão, utilizando a propriedade `display: none;`.

No JavaScript, temos duas funções: `abrirModal()` e `fecharModal()`. A primeira função é chamada ao clicar no botão e exibe o modal, definindo a propriedade `display` como `"block"`. A segunda função é chamada ao clicar no ícone "X" no canto superior direito do modal e oculta o modal, definindo a propriedade `display` como `"none"`.

Essas funções manipulam a visibilidade do modal, permitindo que ele seja aberto e fechado conforme necessário.

Lembre-se de personalizar o conteúdo do modal e adicionar mais estilos e funcionalidades, se necessário, para torná-lo mais adequado ao seu projeto. Além disso, é importante considerar a acessibilidade ao criar modais, para garantir que todos os usuários possam interagir com eles de maneira adequada.
User
Como criar uma página de perguntas frequentes com JS
ChatGPT
Para criar uma página de perguntas frequentes (FAQ - Frequently Asked Questions) com JavaScript, você pode utilizar uma combinação de HTML, CSS e JavaScript para criar a estrutura, estilização e funcionalidade da página. Vou fornecer um exemplo básico para criar uma página de perguntas frequentes onde as respostas são exibidas ao clicar nas perguntas.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Perguntas Frequentes</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="faq">
    <h1>Perguntas Frequentes</h1>
    <ul>
      <li>
        <div class="pergunta" onclick="mostrarResposta(1)">O que é JavaScript?</div>
        <div class="resposta" id="resposta1">
          JavaScript é uma linguagem de programação de alto nível, interpretada, multiplataforma e orientada a objetos. Ela é amplamente utilizada para adicionar interatividade a páginas web e desenvolver aplicações web dinâmicas.
        </div>
      </li>
      <li>
        <div class="pergunta" onclick="mostrarResposta(2)">Como posso aprender JavaScript?</div>
        <div class="resposta" id="resposta2">
          Existem várias formas de aprender JavaScript. Você pode utilizar recursos online, como tutoriais, cursos em plataformas de ensino, documentação oficial e exercícios práticos. Além disso, praticar e criar projetos pessoais também são ótimas maneiras de aprimorar suas habilidades em JavaScript.
        </div>
      </li>
      <!-- Adicione mais perguntas e respostas conforme necessário -->
    </ul>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.faq {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.faq h1 {
  text-align: center;
}

.faq ul {
  list-style: none;
  padding: 0;
}

.faq li {
  margin-bottom: 10px;
  cursor: pointer;
}

.pergunta {
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.resposta {
  display: none; /* Esconde as respostas por padrão */
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
}
```

JavaScript (`seu_script.js`):
```javascript
function mostrarResposta(numero) {
  var resposta = document.getElementById("resposta" + numero);
  resposta.style.display = resposta.style.display === "block" ? "none" : "block";
}
```

Neste exemplo, criamos uma página de perguntas frequentes com duas perguntas e respostas. Cada pergunta é clicável e, ao clicar na pergunta, a resposta correspondente é exibida abaixo dela.

No HTML, usamos uma lista não ordenada (`<ul>`) para criar a estrutura das perguntas e respostas. Cada pergunta é representada por um item de lista (`<li>`), onde utilizamos duas divs, uma com a classe `pergunta` e outra com a classe `resposta`, para representar a pergunta e a resposta, respectivamente.

No CSS, estilizamos o layout das perguntas e respostas. As respostas são inicialmente ocultas (`display: none;`) usando a classe CSS, e ao clicar na pergunta, a função JavaScript `mostrarResposta()` é chamada para alterar o estilo de exibição da resposta correspondente, tornando-a visível (display: block) ou oculta (display: none).

O JavaScript contém a função `mostrarResposta(numero)`, que recebe um número como parâmetro, e ao clicar na pergunta, essa função é chamada para alternar a exibição da resposta correspondente.

Você pode adicionar mais perguntas e respostas ao HTML, bem como personalizar o estilo e o comportamento do modal para atender às necessidades específicas do seu projeto.
User
Como criar uma página de menu de restaurante com js
ChatGPT
Para criar uma página de menu de restaurante com JavaScript, você pode utilizar HTML, CSS e JavaScript para criar a estrutura, estilização e funcionalidade do menu. Vou fornecer um exemplo básico de como criar uma página de menu simples com algumas categorias e itens de menu.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Menu do Restaurante</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="menu">
    <h1>Menu do Restaurante</h1>
    <ul>
      <li>
        <h2>Café da Manhã</h2>
        <ul>
          <li>Pão com manteiga e café</li>
          <li>Misto quente e suco de laranja</li>
          <li>Bolo do dia e chá</li>
        </ul>
      </li>
      <li>
        <h2>Almoço</h2>
        <ul>
          <li>Prato do dia</li>
          <li>Salada mista</li>
          <li>Sobremesa do dia</li>
        </ul>
      </li>
      <li>
        <h2>Jantar</h2>
        <ul>
          <li>Entrada do chef</li>
          <li>Prato principal especial</li>
          <li>Sobremesa gourmet</li>
        </ul>
      </li>
    </ul>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.menu {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.menu h1 {
  text-align: center;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu li {
  margin-bottom: 20px;
}

.menu h2 {
  margin-bottom: 10px;
}

.menu ul li {
  margin-left: 20px;
}
```

Neste exemplo, criamos uma página de menu de restaurante com três categorias: "Café da Manhã", "Almoço" e "Jantar". Cada categoria possui uma lista de itens do menu. 

No HTML, utilizamos elementos de lista não ordenada `<ul>` para criar a estrutura do menu. Cada categoria é representada por um item de lista `<li>`, e os itens do menu são listados em uma lista interna `<ul>` dentro de cada categoria.

No CSS, estilizamos o layout do menu para dar uma aparência mais organizada e apresentável.

Você pode adicionar mais categorias e itens de menu conforme necessário, bem como personalizar o estilo para atender às necessidades específicas do seu restaurante. Se você quiser adicionar funcionalidades interativas ao menu, como permitir que os clientes selecionem itens ou vejam detalhes adicionais, você pode usar JavaScript para criar essa funcionalidade adicional. Por exemplo, pode-se implementar eventos de clique para exibir informações adicionais sobre cada item do menu ou adicionar opções de personalização, como escolha de acompanhamentos ou bebidas para cada prato do menu.
User
e o javascript?
ChatGPT
Peço desculpas pelo erro anterior. Vamos adicionar agora o JavaScript para tornar o menu mais interativo, permitindo que os clientes visualizem informações adicionais sobre cada item ao clicar neles.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Menu do Restaurante</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="menu">
    <h1>Menu do Restaurante</h1>
    <ul>
      <li>
        <h2>Café da Manhã</h2>
        <ul>
          <li onclick="exibirDetalhes(this)">Pão com manteiga e café</li>
          <li onclick="exibirDetalhes(this)">Misto quente e suco de laranja</li>
          <li onclick="exibirDetalhes(this)">Bolo do dia e chá</li>
        </ul>
      </li>
      <li>
        <h2>Almoço</h2>
        <ul>
          <li onclick="exibirDetalhes(this)">Prato do dia</li>
          <li onclick="exibirDetalhes(this)">Salada mista</li>
          <li onclick="exibirDetalhes(this)">Sobremesa do dia</li>
        </ul>
      </li>
      <li>
        <h2>Jantar</h2>
        <ul>
          <li onclick="exibirDetalhes(this)">Entrada do chef</li>
          <li onclick="exibirDetalhes(this)">Prato principal especial</li>
          <li onclick="exibirDetalhes(this)">Sobremesa gourmet</li>
        </ul>
      </li>
    </ul>
  </div>

  <div id="detalhes-item">
    <h3 id="titulo-item"></h3>
    <p id="descricao-item"></p>
    <button onclick="fecharDetalhes()">Fechar</button>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

JavaScript (`seu_script.js`):
```javascript
function exibirDetalhes(item) {
  var titulo = item.textContent;
  var descricao = getDescricao(item);

  var tituloElemento = document.getElementById("titulo-item");
  var descricaoElemento = document.getElementById("descricao-item");

  tituloElemento.textContent = titulo;
  descricaoElemento.textContent = descricao;

  var detalhesItem = document.getElementById("detalhes-item");
  detalhesItem.style.display = "block";
}

function fecharDetalhes() {
  var detalhesItem = document.getElementById("detalhes-item");
  detalhesItem.style.display = "none";
}

function getDescricao(item) {
  // Aqui você pode implementar uma lógica para buscar a descrição do item a partir de uma fonte de dados, como um banco de dados, ou definir manualmente as descrições.
  // Neste exemplo, usamos uma abordagem simples com um objeto JavaScript que mapeia os nomes dos itens às suas descrições.
  var descricaoItens = {
    "Pão com manteiga e café": "Delicioso pão servido com manteiga e uma xícara de café fresquinho.",
    "Misto quente e suco de laranja": "Misto quente feito com pão de forma, queijo e presunto, acompanhado de suco de laranja natural.",
    "Bolo do dia e chá": "Bolo especial do dia acompanhado de uma seleção de chás.",
    "Prato do dia": "Nosso prato do dia é uma opção saborosa e balanceada, sempre com ingredientes frescos.",
    "Salada mista": "Salada fresca e colorida com uma variedade de vegetais e molhos.",
    "Sobremesa do dia": "Deleite-se com nossa sobremesa especial do dia.",
    "Entrada do chef": "Deliciosa entrada preparada pelo nosso chef com ingredientes frescos e selecionados.",
    "Prato principal especial": "O prato principal especial é uma opção única e cheia de sabor.",
    "Sobremesa gourmet": "Uma sobremesa refinada para aqueles que apreciam uma experiência gastronômica completa."
  };

  return descricaoItens[item.textContent];
}
```

Agora, com o JavaScript adicionado, cada item do menu possui uma função `onclick` que chama `exibirDetalhes(this)`. Quando o cliente clica em um item do menu, a função `exibirDetalhes()` é acionada. Essa função extrai o título e a descrição do item clicado e exibe-os em um modal na página.

O modal é criado no HTML com o id "detalhes-item". A função `exibirDetalhes()` preenche o conteúdo do modal com o título e a descrição do item clicado, que são obtidos pela função `getDescricao(item)`.

A função `getDescricao(item)` retorna a descrição do item com base em seu título. Neste exemplo, usamos um objeto JavaScript para mapear os nomes dos itens às suas descrições. Você pode personalizar essa função para obter as descrições dos itens a partir de uma fonte de dados, como um banco de dados ou uma API.

O botão "Fechar" dentro do modal, quando clicado, chama a função `fecharDetalhes()`, que simplesmente oculta o modal novamente.

Esse exemplo é uma abordagem simples para criar uma página de menu de restaurante com interação do usuário através do JavaScript. Você pode estilizar o modal e adicionar mais funcionalidades, como opções para personalizar os pratos, informações nutricionais e muito mais, para tornar o menu mais completo e atraente para os clientes.
User
Como criar um segundo plano de vídeo
ChatGPT
Para criar um segundo plano de vídeo em uma página web, você pode utilizar a tag `<video>` do HTML e CSS para ajustar o vídeo para o plano de fundo. Vou fornecer um exemplo simples de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Segundo Plano de Vídeo</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="video-bg">
    <video autoplay muted loop>
      <source src="seu_video.mp4" type="video/mp4">
      <!-- Adicione outros formatos de vídeo compatíveis com navegadores diferentes -->
    </video>

    <div class="conteudo">
      <!-- Aqui você pode adicionar o conteúdo do seu site, como texto, imagens, etc. -->
    </div>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body, html {
  margin: 0;
  padding: 0;
}

.video-bg {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta o vídeo ao tamanho do contêiner mantendo a proporção */
}

.conteudo {
  position: relative;
  z-index: 1; /* Coloca o conteúdo na frente do vídeo */
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  color: #fff;
  text-align: center;
}
```

Neste exemplo, o vídeo é adicionado como plano de fundo usando a tag `<video>`. Definimos o atributo `autoplay` para o vídeo iniciar automaticamente, `muted` para silenciar o áudio e `loop` para repetir o vídeo continuamente.

Certifique-se de substituir `"seu_video.mp4"` pelo caminho do seu arquivo de vídeo. É recomendado fornecer diferentes formatos de vídeo, como `webm`, `ogg`, etc., para garantir a compatibilidade com diferentes navegadores.

No CSS, estilizamos o vídeo para que ele ocupe todo o espaço disponível, ajustando a largura e a altura com `100%` e definindo `object-fit: cover` para garantir que o vídeo se ajuste ao tamanho do contêiner sem distorções.

O conteúdo do site é colocado dentro da div com a classe `conteudo`. Essa div é posicionada na frente do vídeo usando a propriedade `z-index` e estilizada conforme necessário.

Este é apenas um exemplo básico de como criar um segundo plano de vídeo em uma página web. Você pode adicionar mais elementos HTML e personalizar o CSS para criar um layout mais complexo e atraente, de acordo com as necessidades do seu projeto. Além disso, lembre-se de que a reprodução automática de vídeos com som pode ser indesejada para os usuários, portanto, você pode considerar adicionar um botão de reprodução ou controlar a reprodução do vídeo com JavaScript para uma experiência mais amigável ao usuário.
User
Refaça usando javascript
ChatGPT
Claro! Vamos refazer o exemplo utilizando JavaScript para adicionar o vídeo como segundo plano. Neste caso, vamos usar JavaScript para criar o elemento de vídeo dinamicamente e definir seus atributos.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Segundo Plano de Vídeo</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="video-bg" id="videoBg">
    <div class="conteudo">
      <!-- Aqui você pode adicionar o conteúdo do seu site, como texto, imagens, etc. -->
    </div>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

JavaScript (`seu_script.js`):
```javascript
window.onload = function() {
  var videoContainer = document.getElementById("videoBg");

  var video = document.createElement("video");
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.setAttribute("playsinline", ""); // Necessário para reprodução em dispositivos iOS

  var source = document.createElement("source");
  source.src = "seu_video.mp4";
  source.type = "video/mp4";
  // Adicione aqui outras fontes de vídeo para compatibilidade com diferentes navegadores

  video.appendChild(source);
  videoContainer.appendChild(video);
};
```

CSS (`estilo.css`):
```css
body, html {
  margin: 0;
  padding: 0;
}

.video-bg {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta o vídeo ao tamanho do contêiner mantendo a proporção */
}

.conteudo {
  position: relative;
  z-index: 1; /* Coloca o conteúdo na frente do vídeo */
  max-width: 800px;
  margin: 0 auto;
  padding: 50px;
  color: #fff;
  text-align: center;
}
```

Neste exemplo, o JavaScript é responsável por criar dinamicamente o elemento `<video>` e adicionar o vídeo como segundo plano no elemento `div` com a classe `video-bg`. 

A função `window.onload` é usada para garantir que o JavaScript seja executado após a página ser completamente carregada. 

Dentro da função, criamos o elemento `<video>` e definimos seus atributos (autoplay, muted, loop e playsinline) utilizando as propriedades do objeto `video`. Também criamos o elemento `<source>` para definir o caminho do arquivo de vídeo (`seu_video.mp4`) e seu tipo (`video/mp4`).

Em seguida, adicionamos o elemento `<source>` como filho do elemento `<video>` e o elemento `<video>` como filho do elemento com a classe `video-bg`, o que torna o vídeo o segundo plano dessa div.

O resto do HTML e CSS permanecem inalterados.

Dessa forma, o vídeo será adicionado como segundo plano da página assim que ela for carregada. Lembre-se de substituir `"seu_video.mp4"` pelo caminho do seu arquivo de vídeo e adicionar outras fontes de vídeo compatíveis com diferentes navegadores, se necessário.
User
Como criar uma barra de navegação com rolagem com javascript
ChatGPT
Para criar uma barra de navegação com rolagem utilizando JavaScript, você pode adicionar um evento de rolagem à página que irá alterar a aparência da barra de navegação conforme o usuário rola a página para baixo. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Barra de Navegação com Rolagem</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <nav id="barra-navegacao">
    <ul>
      <li><a href="#inicio">Início</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>

  <div id="conteudo">
    <!-- Conteúdo da página aqui -->
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  transition: background-color 0.3s;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin: 0 10px;
}

nav li a {
  text-decoration: none;
  color: #fff;
  padding: 5px 10px;
}

#conteudo {
  padding: 100px 20px; /* Espaçamento para simular o conteúdo da página */
}
```

JavaScript (`seu_script.js`):
```javascript
window.onscroll = function() {
  var navBar = document.getElementById("barra-navegacao");
  var conteudo = document.getElementById("conteudo");

  // Verifica se o usuário rolou mais de 100 pixels da parte superior da página
  if (window.pageYOffset > 100) {
    navBar.style.backgroundColor = "#555";
    conteudo.style.marginTop = "50px"; // Espaço para evitar que o conteúdo fique atrás da barra de navegação
  } else {
    navBar.style.backgroundColor = "#333";
    conteudo.style.marginTop = "0";
  }
};
```

Neste exemplo, criamos uma barra de navegação fixa no topo da página utilizando a tag `<nav>` no HTML e estilizamos a barra de navegação usando CSS.

No JavaScript, adicionamos um evento de rolagem à janela (`window.onscroll`) que é acionado sempre que o usuário rola a página. Quando o usuário rola mais de 100 pixels da parte superior da página, alteramos a cor de fundo da barra de navegação e adicionamos um espaçamento superior ao conteúdo da página para evitar que ele fique oculto pela barra de navegação.

Assim, a barra de navegação terá uma cor de fundo diferente e ficará fixada no topo da página enquanto o usuário rola a página para baixo.

Você pode personalizar o estilo da barra de navegação e o comportamento da rolagem conforme necessário para atender às necessidades do seu projeto. Além disso, é possível adicionar mais funcionalidades, como animações ou transições, para criar uma experiência de rolagem mais suave e atraente.
User
Como criar guias que exibem conteúdos diferentes com js
ChatGPT
Para criar guias (tabs) que exibem conteúdos diferentes utilizando JavaScript, você pode utilizar a manipulação do DOM e a adição de eventos de clique para alternar a exibição dos conteúdos das guias. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Guias com JavaScript</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="guias">
    <button class="guia-botao" onclick="mostrarConteudo(1)">Guia 1</button>
    <button class="guia-botao" onclick="mostrarConteudo(2)">Guia 2</button>
    <button class="guia-botao" onclick="mostrarConteudo(3)">Guia 3</button>
    <button class="guia-botao" onclick="mostrarConteudo(4)">Guia 4</button>
  </div>

  <div class="conteudo-guia" id="conteudoGuia1">
    <h2>Conteúdo da Guia 1</h2>
    <p>Este é o conteúdo da guia 1.</p>
  </div>

  <div class="conteudo-guia" id="conteudoGuia2">
    <h2>Conteúdo da Guia 2</h2>
    <p>Este é o conteúdo da guia 2.</p>
  </div>

  <div class="conteudo-guia" id="conteudoGuia3">
    <h2>Conteúdo da Guia 3</h2>
    <p>Este é o conteúdo da guia 3.</p>
  </div>

  <div class="conteudo-guia" id="conteudoGuia4">
    <h2>Conteúdo da Guia 4</h2>
    <p>Este é o conteúdo da guia 4.</p>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.guias {
  display: flex;
}

.guia-botao {
  background-color: #f2f2f2;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.conteudo-guia {
  display: none; /* Esconde os conteúdos das guias por padrão */
  padding: 20px;
  border: 1px solid #ccc;
}

.conteudo-guia.show {
  display: block; /* Mostra o conteúdo da guia ativa */
}
```

JavaScript (`seu_script.js`):
```javascript
function mostrarConteudo(numero) {
  // Esconde todos os conteúdos das guias
  var conteudos = document.getElementsByClassName("conteudo-guia");
  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].classList.remove("show");
  }

  // Mostra o conteúdo da guia selecionada
  var conteudoGuia = document.getElementById("conteudoGuia" + numero);
  conteudoGuia.classList.add("show");
}
```

Neste exemplo, criamos guias (tabs) simples com quatro botões e quatro conteúdos diferentes.

Os botões estão dentro de um elemento `<div>` com a classe `.guias` e cada botão possui um atributo `onclick` que chama a função `mostrarConteudo(numero)` quando clicado, passando o número da guia como parâmetro.

Os conteúdos das guias são representados por quatro elementos `<div>` com a classe `.conteudo-guia`. No CSS, definimos que os conteúdos das guias são inicialmente ocultos usando a classe `.conteudo-guia` e que o conteúdo da guia ativa será exibido quando receber a classe `.show`.

O JavaScript contém a função `mostrarConteudo(numero)` que é acionada quando um botão é clicado. Esta função esconde todos os conteúdos das guias utilizando `document.getElementsByClassName("conteudo-guia")` e, em seguida, mostra o conteúdo da guia selecionada adicionando a classe `.show` ao elemento correspondente.

Dessa forma, quando o usuário clica em uma guia, o conteúdo da guia correspondente é exibido e os outros conteúdos são ocultados. Lembre-se de que você pode personalizar o conteúdo das guias e estilizar o CSS conforme necessário para atender às necessidades específicas do seu projeto. Além disso, é possível adicionar mais funcionalidades, como animações de transição entre gu
User
Como criar um relógio de contagem regressiva com js
ChatGPT
Para criar um relógio de contagem regressiva utilizando JavaScript, você pode usar o objeto `Date` para obter a data atual e calcular a diferença entre a data atual e a data do evento que você está contando. Vou fornecer um exemplo simples de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Relógio de Contagem Regressiva</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="contador">
    <h1>Contagem Regressiva</h1>
    <div id="contador-relogio">
      <span id="dias">00</span> dias
      <span id="horas">00</span> horas
      <span id="minutos">00</span> minutos
      <span id="segundos">00</span> segundos
    </div>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.contador {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

#contador-relogio {
  font-size: 24px;
  margin-top: 20px;
}

#contador-relogio span {
  padding: 5px;
  background-color: #f2f2f2;
  border-radius: 5px;
}
```

JavaScript (`seu_script.js`):
```javascript
function atualizarContador() {
  var dataEvento = new Date("2023-12-31 00:00:00"); // Defina aqui a data e hora do evento

  var agora = new Date().getTime();
  var diferenca = dataEvento - agora;

  var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  document.getElementById("dias").innerText = formatarNumero(dias);
  document.getElementById("horas").innerText = formatarNumero(horas);
  document.getElementById("minutos").innerText = formatarNumero(minutos);
  document.getElementById("segundos").innerText = formatarNumero(segundos);
}

function formatarNumero(numero) {
  return numero < 10 ? "0" + numero : numero;
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Atualiza o contador imediatamente ao carregar a página
atualizarContador();
```

Neste exemplo, criamos um relógio de contagem regressiva para um evento que ocorrerá na data e hora especificadas em `dataEvento`. Você deve alterar o valor da variável `dataEvento` para a data do seu evento no formato "AAAA-MM-DD HH:mm:ss".

No JavaScript, a função `atualizarContador()` é responsável por calcular a diferença entre a data atual e a data do evento e atualizar o contador mostrado na página. Para isso, utilizamos a diferença entre os objetos `Date` para obter o tempo restante em dias, horas, minutos e segundos.

A função `formatarNumero(numero)` é utilizada para garantir que os números exibidos no contador tenham sempre dois dígitos, adicionando um zero à esquerda quando necessário.

Usamos `setInterval()` para chamar a função `atualizarContador()` a cada segundo, garantindo que o contador seja atualizado em tempo real.

Assim, o relógio de contagem regressiva será atualizado a cada segundo, mostrando o tempo restante para o evento. Lembre-se de personalizar o HTML e o CSS conforme necessário para atender às necessidades específicas do seu projeto.
User
Como criar seu próprio Lorem ipsum com js
ChatGPT
Para criar seu próprio "Lorem Ipsum" com JavaScript, você pode utilizar uma lista de palavras ou frases pré-definidas e gerar um texto aleatório a partir delas. Vou fornecer um exemplo simples de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Gerador de Lorem Ipsum Personalizado</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="conteudo">
    <h1>Gerador de Lorem Ipsum</h1>
    <p id="paragrafoLoremIpsum"></p>
    <button onclick="gerarLoremIpsum()">Gerar Novo Texto</button>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.conteudo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

button {
  margin-top: 10px;
}
```

JavaScript (`seu_script.js`):
```javascript
const palavras = [
  "Lorem", "Ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.",
  "Sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua.", "Ut", "enim", "ad", "minim", "veniam,", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo",
  "consequat.", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate",
  "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur.", "Excepteur",
  "sint", "occaecat", "cupidatat", "non", "proident,", "sunt", "in", "culpa", "qui",
  "officia", "deserunt", "mollit", "anim", "id", "est", "laborum."
];

function gerarLoremIpsum() {
  var paragrafo = document.getElementById("paragrafoLoremIpsum");
  var numeroPalavras = Math.floor(Math.random() * 50) + 10; // Gera um texto com 10 a 60 palavras

  var texto = "";
  for (var i = 0; i < numeroPalavras; i++) {
    var indicePalavra = Math.floor(Math.random() * palavras.length);
    texto += palavras[indicePalavra] + " ";
  }

  paragrafo.textContent = texto;
}
```

Neste exemplo, criamos um gerador de "Lorem Ipsum" personalizado com JavaScript. Utilizamos um array chamado `palavras`, que contém uma lista de palavras pré-definidas. Essas palavras são utilizadas para formar o texto gerado pelo gerador.

No JavaScript, a função `gerarLoremIpsum()` é responsável por gerar o texto aleatório. Nessa função, definimos um parágrafo com o id `paragrafoLoremIpsum` no HTML e, em seguida, geramos um número aleatório de palavras (entre 10 e 60 palavras) para o parágrafo.

Utilizamos um loop para percorrer o número de palavras gerado aleatoriamente e, em cada iteração, selecionamos uma palavra aleatória do array `palavras` e a adicionamos ao texto do parágrafo. O texto completo é então atribuído ao conteúdo do parágrafo com `paragrafo.textContent`.

Dessa forma, ao clicar no botão "Gerar Novo Texto", o parágrafo será preenchido com um texto aleatório gerado a partir das palavras do array `palavras`. Você pode personalizar a lista de palavras ou adicionar mais elementos ao array `palavras` para criar um texto "Lorem Ipsum" personalizado com base nas necessidades do seu projeto.
User
Como criar uma lista de compras com js
ChatGPT
Para criar uma lista de compras com JavaScript, você pode utilizar o DOM para manipular os elementos da página e interagir com o usuário. Vou fornecer um exemplo simples de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Lista de Compras</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="lista-compras">
    <h1>Lista de Compras</h1>
    <input type="text" id="itemInput" placeholder="Digite o item">
    <button onclick="adicionarItem()">Adicionar</button>
    <ul id="listaItems">
      <!-- Itens serão adicionados aqui dinamicamente -->
    </ul>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.lista-compras {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

input[type="text"] {
  width: 70%;
  padding: 8px;
  font-size: 16px;
}

button {
  padding: 8px 15px;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
}
```

JavaScript (`seu_script.js`):
```javascript
function adicionarItem() {
  var itemInput = document.getElementById("itemInput");
  var itemTexto = itemInput.value.trim();

  if (itemTexto !== "") {
    var listaItems = document.getElementById("listaItems");

    var itemLista = document.createElement("li");
    itemLista.textContent = itemTexto;

    listaItems.appendChild(itemLista);

    itemInput.value = "";
  }
}

document.getElementById("itemInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    adicionarItem();
  }
});
```

Neste exemplo, criamos uma lista de compras onde o usuário pode digitar os itens que deseja adicionar e clicar em "Adicionar" ou pressionar "Enter" para incluir o item na lista.

No JavaScript, a função `adicionarItem()` é chamada quando o usuário clica no botão "Adicionar" ou pressiona "Enter" no campo de texto. Ela verifica se o texto digitado não está vazio e, se for válido, cria um elemento `<li>` com o texto do item e adiciona-o à lista.

O evento `keydown` é adicionado ao campo de texto (`itemInput`) para detectar quando o usuário pressiona a tecla "Enter". Quando isso acontece, a função `adicionarItem()` é chamada para incluir o item na lista.

Dessa forma, você pode criar uma lista de compras simples onde os itens são adicionados dinamicamente à medida que o usuário digita e pressiona o botão ou "Enter". É possível personalizar a aparência e o comportamento da lista, adicionar funcionalidades extras, como opções para remover itens, salvar a lista em um banco de dados ou até mesmo implementar recursos mais avançados, dependendo das necessidades do seu projeto.
User
Como criar um slider de imagens com mudança manual e automática
ChatGPT
Para criar um slider de imagens com mudança manual e automática, você pode utilizar JavaScript para controlar as transições entre as imagens e definir um intervalo para a mudança automática. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Slider de Imagens</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="slider">
    <img src="imagem1.jpg" alt="Imagem 1" class="slide">
    <img src="imagem2.jpg" alt="Imagem 2" class="slide">
    <img src="imagem3.jpg" alt="Imagem 3" class="slide">
    <!-- Adicione mais imagens conforme necessário -->
    
    <button class="anterior" onclick="mudarSlide(-1)">Anterior</button>
    <button class="proximo" onclick="mudarSlide(1)">Próximo</button>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.slider {
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.slide {
  width: 100%;
  display: none;
}

.slide.ativo {
  display: block;
}

.anterior,
.proximo {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

.anterior {
  left: 10px;
}

.proximo {
  right: 10px;
}
```

JavaScript (`seu_script.js`):
```javascript
var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function mostrarSlide(indice) {
  // Esconde todos os slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Exibe o slide ativo
  slides[indice].style.display = "block";
}

function mudarSlide(direcao) {
  slideIndex += direcao;

  // Verifica os limites dos slides
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  mostrarSlide(slideIndex);
}

function slideAutomatico() {
  mudarSlide(1);
}

// Muda o slide automaticamente a cada 5 segundos
setInterval(slideAutomatico, 5000);

// Exibe o primeiro slide ao carregar a página
mostrarSlide(slideIndex);
```

Neste exemplo, criamos um slider de imagens que permite a mudança manual através dos botões "Anterior" e "Próximo" e também possui uma mudança automática a cada 5 segundos.

As imagens são representadas por elementos `<img>` com a classe `.slide`. No CSS, definimos o estilo para o slider e os slides, onde somente o slide ativo (com a classe `.ativo`) é exibido.

No JavaScript, utilizamos a variável `slideIndex` para controlar o índice do slide atual. A função `mostrarSlide(indice)` é responsável por esconder todos os slides e exibir o slide ativo de acordo com o índice fornecido.

A função `mudarSlide(direcao)` é chamada quando os botões "Anterior" ou "Próximo" são clicados. Ela atualiza o índice do slide e chama `mostrarSlide(slideIndex)` para exibir o slide correspondente.

A função `slideAutomatico()` é responsável por chamar a função `mudarSlide(1)` para avançar o slide automaticamente. Usamos `setInterval()` para executar a função `slideAutomatico()` a cada 5 segundos, criando assim a mudança automática das imagens.

Dessa forma, você terá um slider de imagens que permite a mudança manual e também muda automaticamente a cada 5 segundos. Você pode personalizar o HTML, o CSS e o JavaScript para atender às necessidades específicas do seu projeto, como adicionar mais imagens, alterar a duração da mudança automática, adicionar animações de transição, etc.
User
Como criar um jogo de pedra, papel e tesoura com js
ChatGPT
Para criar um jogo de "pedra, papel e tesoura" (rock-paper-scissors) com JavaScript, você pode utilizar eventos de clique para interagir com o jogador e a lógica do jogo para determinar o vencedor. Vou fornecer um exemplo simples de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Jogo de Pedra, Papel e Tesoura</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="jogo">
    <h1>Jogo de Pedra, Papel e Tesoura</h1>
    <div class="jogador">
      <button onclick="jogar('pedra')">Pedra</button>
      <button onclick="jogar('papel')">Papel</button>
      <button onclick="jogar('tesoura')">Tesoura</button>
    </div>
    <div class="resultado" id="resultado">
      Escolha uma opção para jogar!
    </div>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.jogo {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin: 5px;
  cursor: pointer;
}

.resultado {
  font-size: 20px;
  margin-top: 20px;
}
```

JavaScript (`seu_script.js`):
```javascript
function jogar(escolhaJogador) {
  var escolhas = ["pedra", "papel", "tesoura"];
  var escolhaComputador = escolhas[Math.floor(Math.random() * escolhas.length)];

  var resultado = document.getElementById("resultado");
  var mensagem;

  if (escolhaJogador === escolhaComputador) {
    mensagem = "Empate!";
  } else if (
    (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
    (escolhaJogador === "tesoura" && escolhaComputador === "papel")
  ) {
    mensagem = "Você venceu!";
  } else {
    mensagem = "Você perdeu!";
  }

  resultado.textContent = `Você escolheu ${escolhaJogador}. O computador escolheu ${escolhaComputador}. ${mensagem}`;
}
```

Neste exemplo, criamos um jogo simples de "pedra, papel e tesoura".

No HTML, temos três botões correspondentes às escolhas do jogador: pedra, papel e tesoura. Cada botão chama a função `jogar(escolha)` quando clicado, passando a escolha do jogador como parâmetro.

No JavaScript, a função `jogar(escolhaJogador)` é responsável por gerar aleatoriamente a escolha do computador e determinar o vencedor com base nas regras do jogo.

Primeiro, criamos um array `escolhas` que contém as três opções do jogo. Em seguida, utilizamos `Math.random()` para gerar um índice aleatório do array `escolhas` e, assim, obter a escolha do computador.

Depois, comparamos a escolha do jogador com a escolha do computador para determinar o resultado. Se ambas as escolhas forem iguais, é um empate. Caso contrário, verificamos as condições para determinar o vencedor.

A mensagem com o resultado é exibida no elemento `<div>` com a classe `.resultado` utilizando `resultado.textContent`.

Dessa forma, você tem um jogo simples de "pedra, papel e tesoura" onde o jogador pode fazer sua escolha através dos botões e o resultado é exibido na página. Você pode personalizar o HTML, o CSS e o JavaScript para adicionar mais funcionalidades, como pontuação, animações e estilos adicionais.
User
Como criar o jogo do Genius com js
ChatGPT
Para criar o jogo do Genius (ou Simon) com JavaScript, você precisa implementar a lógica do jogo e a interação com o jogador. O Genius é um jogo de memória no qual o jogador precisa repetir a sequência de cores e sons que é apresentada pelo computador. Vou fornecer um exemplo de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Jogo do Genius</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="genius">
    <h1>Jogo do Genius</h1>
    <div class="cores">
      <div class="cor" data-cor="1"></div>
      <div class="cor" data-cor="2"></div>
      <div class="cor" data-cor="3"></div>
      <div class="cor" data-cor="4"></div>
    </div>
    <button onclick="iniciarJogo()">Iniciar</button>
    <p id="mensagem"></p>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.genius {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.cor {
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
}

[data-cor="1"] {
  background-color: red;
}

[data-cor="2"] {
  background-color: green;
}

[data-cor="3"] {
  background-color: blue;
}

[data-cor="4"] {
  background-color: yellow;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
}
```

JavaScript (`seu_script.js`):
```javascript
var sequenciaComputador = [];
var sequenciaJogador = [];
var nivel = 1;
var jogoIniciado = false;
var cores = ["1", "2", "3", "4"];
var mensagem = document.getElementById("mensagem");

function iniciarJogo() {
  if (!jogoIniciado) {
    jogoIniciado = true;
    sequenciaComputador = [];
    sequenciaJogador = [];
    mensagem.textContent = "Nível " + nivel;
    proximoNivel();
  }
}

function proximoNivel() {
  sequenciaJogador = [];
  var proximaCor = cores[Math.floor(Math.random() * cores.length)];
  sequenciaComputador.push(proximaCor);

  exibirSequencia(sequenciaComputador, function() {
    mensagem.textContent = "Sua vez!";
  });
}

function exibirSequencia(sequencia, callback) {
  var i = 0;
  var intervalo = setInterval(function() {
    mostrarCor(sequencia[i]);
    i++;
    if (i >= sequencia.length) {
      clearInterval(intervalo);
      callback();
    }
  }, 1000);
}

function mostrarCor(cor) {
  var elementoCor = document.querySelector("[data-cor='" + cor + "']");
  elementoCor.style.opacity = "1";
  setTimeout(function() {
    elementoCor.style.opacity = "0.5";
  }, 500);
}

function verificarJogada(cor) {
  sequenciaJogador.push(cor);

  if (sequenciaJogador.toString() === sequenciaComputador.toString()) {
    nivel++;
    mensagem.textContent = "Correto! Nível " + nivel;
    setTimeout(function() {
      proximoNivel();
    }, 1000);
  } else if (sequenciaJogador.length === sequenciaComputador.length) {
    mensagem.textContent = "Errado! Fim de Jogo. Seu nível foi: " + nivel;
    jogoIniciado = false;
    nivel = 1;
  }
}

var coresElementos = document.getElementsByClassName("cor");
for (var i = 0; i < coresElementos.length; i++) {
  coresElementos[i].addEventListener("click", function() {
    if (jogoIniciado) {
      var corSelecionada = this.getAttribute("data-cor");
      mostrarCor(corSelecionada);
      verificarJogada(corSelecionada);
    }
  });
}
```

Neste exemplo, criamos o jogo do Genius com 4 cores (vermelho, verde, azul e amarelo).

No HTML, temos as cores representadas por elementos `<div>` com a classe `.cor`, cada um contendo um atributo `data-cor` que identifica a cor. Ao clicar em cada cor, chamamos a função `verificarJogada(cor)` para verificar se a sequência do jogador corresponde à sequência do computador.

No JavaScript, utilizamos variáveis para controlar a sequência do computador, a sequência do jogador, o nível atual do jogo e se o jogo está ou não iniciado. A variável `cores` contém as opções de cores que o computador pode escolher.

A função `iniciarJogo()` é chamada quando o botão "Iniciar" é clicado. Ela reinicia o jogo, limpando as sequências e definindo o jogo como iniciado.

A função `proximoNivel()` é responsável por gerar a próxima cor aleatória e exibir a sequência atual do computador para o jogador.

A função `exibirSequencia(sequencia, callback)` é utilizada para exibir a sequência atual do computador de forma visual. Cada cor é mostrada por meio da função `mostrarCor(cor)` com um intervalo de 1 segundo entre as cores.

A função `mostrar
ChatGPT
Cor(cor)` destaca a cor no tabuleiro por meio da alteração de opacidade.

A função `verificarJogada(cor)` é chamada quando o jogador clica em uma cor. Ela adiciona a cor à sequência do jogador e verifica se a sequência do jogador é igual à sequência do computador. Se for igual, o jogo passa para o próximo nível. Caso contrário, o jogo é encerrado e a mensagem é exibida.

O jogo começa quando o jogador clica no botão "Iniciar". O computador mostrará uma sequência de cores e sons, e o jogador deve repetir essa sequência clicando nas cores corretas.

Dessa forma, você tem um jogo funcional do Genius com JavaScript, e pode personalizar o HTML, o CSS e o JavaScript para adicionar mais funcionalidades, ajustar o estilo e adaptar o jogo de acordo com suas necessidades.
User
Como criar um jogo de plataforma com js
ChatGPT
Criar um jogo de plataforma com JavaScript envolve muitos aspectos, como a criação do cenário, a movimentação do personagem, detecção de colisões, etc. Vou fornecer um exemplo básico de como fazer isso, mas lembre-se que um jogo de plataforma completo pode ser um projeto complexo que requer mais recursos e otimizações.

Neste exemplo, criaremos um jogo simples onde o personagem pode pular e se mover horizontalmente para alcançar uma plataforma mais alta. Utilizaremos HTML, CSS e JavaScript.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Jogo de Plataforma</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="jogo">
    <div class="personagem" id="personagem"></div>
    <div class="plataforma" id="plataforma"></div>
  </div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
}

.jogo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
}

.personagem {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  bottom: 0;
}

.plataforma {
  width: 150px;
  height: 20px;
  background-color: green;
  position: absolute;
  bottom: 100px;
  left: 200px;
}
```

JavaScript (`seu_script.js`):
```javascript
var personagem = document.getElementById("personagem");
var plataforma = document.getElementById("plataforma");

var gravidade = 1;
var forcaPulo = 15;
var velocidade = 5;

var pulando = false;
var alturaInicialPulo;
var alturaAtualPulo;

function pular() {
  if (!pulando) {
    pulando = true;
    alturaInicialPulo = parseFloat(getComputedStyle(personagem).bottom);
    alturaAtualPulo = alturaInicialPulo;

    var intervaloPulo = setInterval(function() {
      var alturaPulo = alturaAtualPulo - forcaPulo * 0.1;
      alturaAtualPulo = alturaPulo;
      personagem.style.bottom = alturaPulo + "px";

      if (alturaPulo <= alturaInicialPulo - forcaPulo) {
        clearInterval(intervaloPulo);
        cair();
      }
    }, 10);
  }
}

function cair() {
  var intervaloCair = setInterval(function() {
    var alturaCair = parseFloat(getComputedStyle(personagem).bottom) + gravidade;
    personagem.style.bottom = alturaCair + "px";

    if (alturaCair >= 0) {
      personagem.style.bottom = "0px";
      pulando = false;
      clearInterval(intervaloCair);
    }
  }, 10);
}

function moverEsquerda() {
  var posicaoAtual = parseFloat(getComputedStyle(personagem).left);
  personagem.style.left = (posicaoAtual - velocidade) + "px";
}

function moverDireita() {
  var posicaoAtual = parseFloat(getComputedStyle(personagem).left);
  personagem.style.left = (posicaoAtual + velocidade) + "px";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp") {
    pular();
  } else if (event.key === "ArrowLeft") {
    moverEsquerda();
  } else if (event.key === "ArrowRight") {
    moverDireita();
  }
});
```

Neste exemplo, criamos um jogo de plataforma com um personagem vermelho e uma plataforma verde. O personagem pode pular usando a seta para cima e se mover para a esquerda e direita usando as setas correspondentes.

No JavaScript, utilizamos variáveis para controlar o movimento do personagem, a gravidade e a força do pulo. A função `pular()` é responsável por fazer o personagem pular, e a função `cair()` faz o personagem cair de volta à plataforma após o pulo. As funções `moverEsquerda()` e `moverDireita()` controlam o movimento horizontal do personagem.

O jogo utiliza eventos de teclado (`keydown`) para detectar quando o jogador pressiona as setas para cima, esquerda ou direita. Dependendo da tecla pressionada, o jogo chama a função correspondente para executar a ação.

Você pode personalizar o HTML, o CSS e o JavaScript para criar um jogo de plataforma mais complexo, adicionando mais plataformas, obstáculos, inimigos, animações, e assim por diante. Lembre-se que esse é apenas um exemplo básico para te ajudar a começar.
User
Como criar o Doodle Jump com js
ChatGPT
Criar uma réplica completa do jogo Doodle Jump pode ser um projeto complexo e envolve muitos aspectos, como física, geração procedural de plataformas, interação com o jogador e muito mais. Vou fornecer um exemplo básico de como criar uma versão simples do Doodle Jump em JavaScript, mas é importante notar que esse exemplo é bastante simplificado e não representa o jogo completo.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Doodle Jump</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <canvas id="canvas"></canvas>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
}

canvas {
  display: block;
  margin: 0 auto;
  background-color: #f2f2f2;
}
```

JavaScript (`seu_script.js`):
```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const larguraCanvas = 300;
const alturaCanvas = 500;
canvas.width = larguraCanvas;
canvas.height = alturaCanvas;

const jogador = {
  x: larguraCanvas / 2,
  y: alturaCanvas - 30,
  tamanho: 20,
  velocidadeY: 0,
  pulo: 13,
  forcaPulo: 0.6,
  gravidade: 0.4,
};

const plataforma = {
  x: 100,
  y: alturaCanvas - 20,
  largura: 100,
  altura: 10,
};

function desenharJogador() {
  ctx.beginPath();
  ctx.arc(jogador.x, jogador.y, jogador.tamanho, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

function desenharPlataforma() {
  ctx.beginPath();
  ctx.rect(plataforma.x, plataforma.y, plataforma.largura, plataforma.altura);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function atualizar() {
  ctx.clearRect(0, 0, larguraCanvas, alturaCanvas);

  desenharJogador();
  desenharPlataforma();

  // Verificar colisão entre o jogador e a plataforma
  if (
    jogador.y + jogador.velocidadeY > plataforma.y &&
    jogador.y + jogador.velocidadeY < plataforma.y + plataforma.altura &&
    jogador.x > plataforma.x &&
    jogador.x < plataforma.x + plataforma.largura
  ) {
    jogador.velocidadeY = -jogador.pulo;
  }

  jogador.velocidadeY += jogador.gravidade;
  jogador.y += jogador.velocidadeY;

  // Fazer o jogador reaparecer na parte de cima do canvas se ele cair
  if (jogador.y > alturaCanvas) {
    jogador.y = 0;
  }

  requestAnimationFrame(atualizar);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    jogador.velocidadeY = -jogador.pulo * jogador.forcaPulo;
  }
});

atualizar();
```

Neste exemplo, criamos uma versão simplificada do Doodle Jump onde o jogador pode controlar um círculo azul que pode pular em uma plataforma verde.

O JavaScript cuida da física do salto do jogador e da detecção de colisões entre o jogador e a plataforma. O jogador é impulsionado para cima quando a seta para cima é pressionada e é afetado pela gravidade quando está no ar.

No entanto, este é apenas um exemplo básico do Doodle Jump e não inclui todos os recursos, elementos visuais e complexidades do jogo completo. Para criar um Doodle Jump completo, você precisaria adicionar mais funcionalidades, como a geração aleatória de plataformas, inimigos, power-ups, animações e muito mais. O jogo completo exigiria também uma estrutura mais avançada para lidar com a lógica do jogo, gerenciamento de estados e gráficos.
User
Como criar o Flappy Bird com js
ChatGPT
Criar uma réplica completa do jogo Flappy Bird pode ser um projeto mais complexo, mas vou fornecer um exemplo básico de como criar uma versão simplificada do Flappy Bird em JavaScript.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Flappy Bird</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <canvas id="canvas"></canvas>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
}

canvas {
  display: block;
  margin: 0 auto;
  background-color: #f2f2f2;
}
```

JavaScript (`seu_script.js`):
```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const larguraCanvas = 400;
const alturaCanvas = 600;
canvas.width = larguraCanvas;
canvas.height = alturaCanvas;

const passaro = {
  x: 50,
  y: alturaCanvas / 2,
  tamanho: 30,
  gravidade: 0.5,
  velocidade: 0,
  forcaPulo: -8,
};

function desenharPassaro() {
  ctx.beginPath();
  ctx.arc(passaro.x, passaro.y, passaro.tamanho, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}

function atualizar() {
  ctx.clearRect(0, 0, larguraCanvas, alturaCanvas);

  desenharPassaro();

  // Fazer o passaro cair pela gravidade
  passaro.velocidade += passaro.gravidade;
  passaro.y += passaro.velocidade;

  requestAnimationFrame(atualizar);
}

document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    // Fazer o passaro pular quando a barra de espaço é pressionada
    passaro.velocidade = passaro.forcaPulo;
  }
});

atualizar();
```

Neste exemplo, criamos uma versão simplificada do Flappy Bird onde o jogador pode controlar um círculo amarelo que pode pular quando a barra de espaço é pressionada.

O JavaScript cuida da física do pulo do passaro, aplicando uma força para cima quando a barra de espaço é pressionada e aplicando gravidade para fazer o passaro cair.

No entanto, este é apenas um exemplo básico do Flappy Bird e não inclui todos os recursos, elementos visuais e complexidades do jogo completo. Para criar um Flappy Bird completo, você precisaria adicionar mais funcionalidades, como a geração aleatória de obstáculos, colisões com os obstáculos, contagem de pontos, animações e muito mais. O jogo completo exigiria também uma estrutura mais avançada para lidar com a lógica do jogo, gerenciamento de estados e gráficos.
User
Como criar um jogo de memória com js
ChatGPT
Criar um jogo de memória com JavaScript envolve a criação de cartas que o jogador precisa combinar em pares. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Jogo de Memória</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="tabuleiro" id="tabuleiro"></div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.tabuleiro {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 20px;
}

.cartas {
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
}
```

JavaScript (`seu_script.js`):
```javascript
const tabuleiro = document.getElementById("tabuleiro");
const cartas = ["A", "B", "C", "D", "E", "F", "G", "H"];
let cartasSelecionadas = [];
let paresEncontrados = 0;

function embaralharCartas() {
  const cartasEmbaralhadas = [...cartas, ...cartas]; // Duplica as cartas para criar os pares
  for (let i = cartasEmbaralhadas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartasEmbaralhadas[i], cartasEmbaralhadas[j]] = [cartasEmbaralhadas[j], cartasEmbaralhadas[i]];
  }
  return cartasEmbaralhadas;
}

function criarCarta(carta) {
  const divCarta = document.createElement("div");
  divCarta.classList.add("cartas");
  divCarta.textContent = carta;
  divCarta.addEventListener("click", () => virarCarta(divCarta));
  return divCarta;
}

function criarTabuleiro() {
  const cartasEmbaralhadas = embaralharCartas();
  for (const carta of cartasEmbaralhadas) {
    const divCarta = criarCarta(carta);
    tabuleiro.appendChild(divCarta);
  }
}

function virarCarta(carta) {
  if (carta.classList.contains("virada") || cartasSelecionadas.length >= 2) {
    return;
  }

  carta.classList.add("virada");
  cartasSelecionadas.push(carta);

  if (cartasSelecionadas.length === 2) {
    const carta1 = cartasSelecionadas[0].textContent;
    const carta2 = cartasSelecionadas[1].textContent;

    if (carta1 === carta2) {
      cartasSelecionadas.forEach((carta) => carta.classList.add("acertou"));
      paresEncontrados++;

      if (paresEncontrados === cartas.length / 2) {
        setTimeout(() => alert("Parabéns! Você ganhou o jogo!"), 500);
      }
    } else {
      setTimeout(() => {
        cartasSelecionadas.forEach((carta) => carta.classList.remove("virada"));
      }, 1000);
    }

    cartasSelecionadas = [];
  }
}

criarTabuleiro();
```

Neste exemplo, criamos um jogo de memória onde o jogador precisa combinar pares de cartas com letras de A a H. O jogo utiliza HTML, CSS e JavaScript para criar as cartas, embaralhar as cartas e verificar se o jogador acertou o par.

No JavaScript, utilizamos um array `cartas` que contém as letras de A a H. A função `embaralharCartas()` duplica as cartas para criar os pares e embaralha o array.

A função `criarCarta(carta)` cria uma div que representa uma carta no tabuleiro. Cada carta é associada a um evento de clique que chama a função `virarCarta(carta)` quando clicada.

A função `criarTabuleiro()` cria o tabuleiro com as cartas embaralhadas e adiciona as cartas ao tabuleiro.

A função `virarCarta(carta)` é responsável por virar a carta quando clicada e verificar se o jogador acertou o par de cartas. Se o jogador acertar o par, as cartas ficam viradas para cima (`acertou`). Se o jogador errar, as cartas viradas são desviradas após um breve intervalo.

Ao combinar todos os pares de cartas corretamente, o jogador recebe uma mensagem de parabéns.

Dessa forma, você tem um jogo de memória funcional onde o jogador precisa combinar os pares de cartas corretamente. Você pode personalizar o HTML, o CSS e o JavaScript para criar um jogo de memória mais complexo, com mais cartas, mais estilos, animações e muito mais.
User
Como criar um jogo de Whack-a-mole com js
ChatGPT
Para criar um jogo de "Whack-a-mole" (ou "Acerte o Rato") com JavaScript, você precisa criar um tabuleiro onde "moles" (ratinhos) aparecem em locais aleatórios e o jogador deve clicar neles para marcando pontos. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Whack-a-mole</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="tabuleiro" id="tabuleiro"></div>
  <p>Pontuação: <span id="pontuacao">0</span></p>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.tabuleiro {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 20px;
}

.mole {
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
}

.mole.active {
  background-color: #ffcc00;
}
```

JavaScript (`seu_script.js`):
```javascript
const tabuleiro = document.getElementById("tabuleiro");
const pontuacaoElemento = document.getElementById("pontuacao");
const moles = ['( •_•)>⌐■-■', '⌐■_■','( •_•)>■■-■■'];

let pontuacao = 0;

function criarMole() {
  const mole = document.createElement("div");
  mole.classList.add("mole");
  mole.innerHTML = moles[Math.floor(Math.random() * moles.length)];
  mole.addEventListener("click", () => marcarPonto(mole));
  return mole;
}

function exibirMole() {
  const mole = criarMole();
  tabuleiro.appendChild(mole);

  setTimeout(() => {
    tabuleiro.removeChild(mole);
  }, 1000);
}

function marcarPonto(mole) {
  if (mole.classList.contains("active")) {
    pontuacao++;
    mole.classList.remove("active");
    pontuacaoElemento.textContent = pontuacao;
  }
}

function iniciarJogo() {
  pontuacao = 0;
  pontuacaoElemento.textContent = pontuacao;
  tabuleiro.innerHTML = "";

  setInterval(() => {
    exibirMole();
  }, 1000);
}

iniciarJogo();
```

Neste exemplo, criamos um jogo simples de "Whack-a-mole" onde o jogador precisa clicar nos ratinhos que aparecem aleatoriamente no tabuleiro para marcar pontos. A cada clique bem-sucedido em um ratinho, a pontuação é incrementada.

O JavaScript cuida da lógica para criar os ratinhos (`moles`), fazê-los aparecer e desaparecer do tabuleiro em intervalos aleatórios e verificar se o jogador clicou em um ratinho ativo.

No HTML, temos um elemento `div` que representa o tabuleiro onde os ratinhos aparecem e um parágrafo que exibe a pontuação atual.

No CSS, definimos o estilo dos ratinhos e do tabuleiro.

O jogo começa automaticamente quando a página é carregada, chamando a função `iniciarJogo()`.

A função `iniciarJogo()` reseta a pontuação, limpa o tabuleiro e inicia o intervalo para exibir os ratinhos.

A função `exibirMole()` cria um novo ratinho no tabuleiro e o remove após 1 segundo, criando assim o efeito de ratinhos aparecendo e desaparecendo.

A função `marcarPonto(mole)` é chamada quando o jogador clica em um ratinho. Se o ratinho estiver ativo (aparecendo), o jogador marca um ponto e o ratinho é removido.

Dessa forma, você tem um jogo funcional de "Whack-a-mole" onde o jogador pode marcar pontos clicando nos ratinhos que aparecem. Você pode personalizar o HTML, o CSS e o JavaScript para adicionar mais funcionalidades, ajustar o estilo e adaptar o jogo de acordo com suas preferências.
User
Como criar um jogo de Ligue 4 com js
ChatGPT
Criar um jogo de Ligue 4 (Connect Four) com JavaScript envolve a criação de um tabuleiro onde os jogadores podem colocar fichas em colunas e o objetivo é alinhar quatro fichas na vertical, horizontal ou diagonal. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Ligue 4</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <div class="tabuleiro" id="tabuleiro"></div>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.tabuleiro {
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  padding: 20px;
}

.celula {
  width: 100%;
  height: 50px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
}

.jogador1 {
  background-color: #ff4444;
}

.jogador2 {
  background-color: #44ff44;
}
```

JavaScript (`seu_script.js`):
```javascript
const tabuleiro = document.getElementById("tabuleiro");
const celulas = [];
const jogador1 = "X";
const jogador2 = "O";
let jogadorAtual = jogador1;

function criarCelula() {
  const celula = document.createElement("div");
  celula.classList.add("celula");
  celula.addEventListener("click", () => colocarFicha(celula));
  return celula;
}

function criarTabuleiro() {
  for (let i = 0; i < 6; i++) {
    celulas[i] = [];
    for (let j = 0; j < 7; j++) {
      const celula = criarCelula();
      celulas[i][j] = celula;
      tabuleiro.appendChild(celula);
    }
  }
}

function verificarVitoria(linha, coluna) {
  const direcoes = [
    [[0, 1], [0, -1]],
    [[1, 0], [-1, 0]],
    [[1, 1], [-1, -1]],
    [[1, -1], [-1, 1]]
  ];

  for (const direcao of direcoes) {
    let count = 1;
    for (const d of direcao) {
      let l = linha + d[0];
      let c = coluna + d[1];
      while (l >= 0 && l < 6 && c >= 0 && c < 7 && celulas[l][c].textContent === jogadorAtual) {
        count++;
        l += d[0];
        c += d[1];
      }
    }
    if (count >= 4) {
      return true;
    }
  }

  return false;
}

function colocarFicha(celula) {
  const coluna = Array.from(celula.parentElement.children).indexOf(celula);

  for (let i = 5; i >= 0; i--) {
    if (celulas[i][coluna].textContent === "") {
      celulas[i][coluna].textContent = jogadorAtual;
      if (verificarVitoria(i, coluna)) {
        setTimeout(() => alert("Jogador " + jogadorAtual + " venceu!"), 100);
        return;
      }
      jogadorAtual = jogadorAtual === jogador1 ? jogador2 : jogador1;
      return;
    }
  }
}

criarTabuleiro();
```

Neste exemplo, criamos um jogo de Ligue 4 onde dois jogadores podem clicar nas colunas do tabuleiro para colocar suas fichas, e o objetivo é alinhar quatro fichas na vertical, horizontal ou diagonal.

O JavaScript cuida da lógica para criar o tabuleiro, colocar as fichas e verificar se houve vitória.

No HTML, temos um elemento `div` que representa o tabuleiro onde as células (colunas) estão localizadas.

No CSS, definimos o estilo das células do tabuleiro e dos jogadores.

A função `criarCelula()` cria uma célula que representa uma coluna no tabuleiro. Cada célula é associada a um evento de clique que chama a função `colocarFicha(celula)` quando clicada.

A função `criarTabuleiro()` cria o tabuleiro com as células e adiciona as células ao tabuleiro.

A função `verificarVitoria(linha, coluna)` é chamada após cada jogada para verificar se houve uma vitória do jogador atual. Ela verifica em todas as direções se existem quatro fichas iguais alinhadas.

A função `colocarFicha(celula)` é chamada quando um jogador clica em uma célula para colocar sua ficha. Ela encontra a coluna correta e coloca a ficha na célula mais baixa disponível nessa coluna. Após cada jogada, a função verifica se houve uma vitória e, se sim, exibe uma mensagem de alerta.

Dessa forma, você tem um jogo funcional de Ligue 4 onde dois jogadores podem colocar suas fichas e o jogo verifica se houve uma vitória. Você pode personalizar o HTML, o CSS e o JavaScript para adicionar mais
ChatGPT
 funcionalidades, ajustar o estilo e adaptar o jogo de acordo com suas preferências.
User
Como criar o jogo da cobrinha com js
ChatGPT
Criar o jogo da cobrinha (Snake) em JavaScript envolve a criação de um tabuleiro onde a cobra pode se mover e comer alimentos para crescer. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Jogo da Cobrinha</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <canvas id="canvas"></canvas>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
}

canvas {
  display: block;
  margin: 0 auto;
  background-color: #f2f2f2;
}
```

JavaScript (`seu_script.js`):
```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const larguraCanvas = 400;
const alturaCanvas = 400;
const tamanhoCobra = 20;
const tamanhoAlimento = 20;
let cobra = [];
let dx = tamanhoCobra;
let dy = 0;
let alimento = { x: 0, y: 0 };
let pontuacao = 0;

function criarCobra() {
  cobra.push({ x: 0, y: 0 });
}

function criarAlimento() {
  alimento.x = Math.floor(Math.random() * (larguraCanvas / tamanhoAlimento)) * tamanhoAlimento;
  alimento.y = Math.floor(Math.random() * (alturaCanvas / tamanhoAlimento)) * tamanhoAlimento;
}

function desenharCobra() {
  for (const segmento of cobra) {
    ctx.beginPath();
    ctx.rect(segmento.x, segmento.y, tamanhoCobra, tamanhoCobra);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
  }
}

function desenharAlimento() {
  ctx.beginPath();
  ctx.rect(alimento.x, alimento.y, tamanhoAlimento, tamanhoAlimento);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function atualizar() {
  ctx.clearRect(0, 0, larguraCanvas, alturaCanvas);

  const novaCabeca = { x: cobra[0].x + dx, y: cobra[0].y + dy };
  cobra.unshift(novaCabeca);

  if (cobra[0].x === alimento.x && cobra[0].y === alimento.y) {
    pontuacao++;
    criarAlimento();
  } else {
    cobra.pop();
  }

  desenharAlimento();
  desenharCobra();

  if (cobra[0].x < 0 || cobra[0].x >= larguraCanvas || cobra[0].y < 0 || cobra[0].y >= alturaCanvas) {
    alert("Fim de jogo! Sua pontuação: " + pontuacao);
    return;
  }

  for (let i = 1; i < cobra.length; i++) {
    if (cobra[i].x === cobra[0].x && cobra[i].y === cobra[0].y) {
      alert("Fim de jogo! Sua pontuação: " + pontuacao);
      return;
    }
  }

  requestAnimationFrame(atualizar);
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowUp" && dy === 0) {
    dx = 0;
    dy = -tamanhoCobra;
  } else if (event.key === "ArrowDown" && dy === 0) {
    dx = 0;
    dy = tamanhoCobra;
  } else if (event.key === "ArrowLeft" && dx === 0) {
    dx = -tamanhoCobra;
    dy = 0;
  } else if (event.key === "ArrowRight" && dx === 0) {
    dx = tamanhoCobra;
    dy = 0;
  }
});

criarCobra();
criarAlimento();
atualizar();
```

Neste exemplo, criamos o jogo da cobrinha onde o jogador pode controlar uma cobra que pode se mover na vertical ou horizontal e precisa comer alimentos (pontos vermelhos) para crescer. O objetivo é obter a maior pontuação possível antes de colidir com as bordas do tabuleiro ou com o próprio corpo da cobra.

O JavaScript cuida da lógica para criar a cobra, criar alimentos em locais aleatórios, atualizar a posição da cobra, verificar colisões com as bordas e com o próprio corpo, e calcular a pontuação.

No HTML, temos um elemento `canvas` que representa o tabuleiro onde o jogo é exibido.

No CSS, definimos o estilo do `canvas`.

A função `criarCobra()` cria a cobra com um segmento inicial.

A função `criarAlimento()` cria o alimento em uma posição aleatória no tabuleiro.

A função `desenharCobra()` desenha a cobra no tabuleiro.

A função `desenharAlimento()` desenha o alimento no tabuleiro.

A função `atualizar()` é chamada repetidamente para atualizar o estado do jogo. Ela move a cobra, verifica colisões e redesenha o tabuleiro.

A função `document.addEventListener("keydown", ...)` detecta quando o jogador pressiona as setas do teclado e altera a direção da cobra de acordo.

Dessa forma, você tem um jogo funcional da cob
ChatGPT
rinha onde o jogador pode controlar a cobra e coletar alimentos para crescer. Você pode personalizar o HTML, o CSS e o JavaScript para adicionar mais funcionalidades, ajustar o estilo e adaptar o jogo de acordo com suas preferências.
User
Como criar o jogo do Space Invaders com js
ChatGPT
Criar o jogo Space Invaders com JavaScript envolve a criação de uma nave controlada pelo jogador que pode disparar tiros para destruir invasores alienígenas que se movem de forma coordenada. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Space Invaders</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <canvas id="canvas"></canvas>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
}

canvas {
  display: block;
  margin: 0 auto;
  background-color: #f2f2f2;
}
```

JavaScript (`seu_script.js`):
```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const larguraCanvas = 400;
const alturaCanvas = 500;
canvas.width = larguraCanvas;
canvas.height = alturaCanvas;

const nave = {
  x: larguraCanvas / 2 - 20,
  y: alturaCanvas - 40,
  largura: 40,
  altura: 20,
  velocidade: 5,
};

const tiros = [];
const invasores = [];
const invasoresPorLinha = 10;
const invasoresPorColuna = 4;

function criarInvasores() {
  for (let coluna = 0; coluna < invasoresPorColuna; coluna++) {
    for (let linha = 0; linha < invasoresPorLinha; linha++) {
      invasores.push({
        x: linha * 40,
        y: coluna * 30,
        largura: 30,
        altura: 20,
        direcao: 1,
      });
    }
  }
}

function desenharNave() {
  ctx.beginPath();
  ctx.rect(nave.x, nave.y, nave.largura, nave.altura);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

function desenharTiros() {
  ctx.fillStyle = "red";
  for (const tiro of tiros) {
    ctx.beginPath();
    ctx.rect(tiro.x, tiro.y, 5, 10);
    ctx.fill();
    ctx.closePath();
  }
}

function desenharInvasores() {
  ctx.fillStyle = "green";
  for (const invasor of invasores) {
    ctx.beginPath();
    ctx.rect(invasor.x, invasor.y, invasor.largura, invasor.altura);
    ctx.fill();
    ctx.closePath();
  }
}

function moverTiros() {
  for (const tiro of tiros) {
    tiro.y -= 5;
  }
  tiros = tiros.filter((tiro) => tiro.y > 0);
}

function moverInvasores() {
  const limiteDireita = larguraCanvas - 30;
  const limiteEsquerda = 0;
  for (const invasor of invasores) {
    invasor.x += invasor.direcao;
    if (invasor.x >= limiteDireita || invasor.x <= limiteEsquerda) {
      invasor.direcao *= -1;
      invasor.y += 10;
    }
  }
}

function colisao() {
  for (const tiro of tiros) {
    for (const invasor of invasores) {
      if (
        tiro.x >= invasor.x &&
        tiro.x <= invasor.x + invasor.largura &&
        tiro.y >= invasor.y &&
        tiro.y <= invasor.y + invasor.altura
      ) {
        tiros.splice(tiros.indexOf(tiro), 1);
        invasores.splice(invasores.indexOf(invasor), 1);
        return;
      }
    }
  }
}

function verificarFimDeJogo() {
  for (const invasor of invasores) {
    if (invasor.y + invasor.altura >= nave.y) {
      alert("Fim de jogo!");
      document.location.reload();
    }
  }
}

function atualizar() {
  ctx.clearRect(0, 0, larguraCanvas, alturaCanvas);

  desenharNave();
  desenharTiros();
  desenharInvasores();

  moverTiros();
  moverInvasores();
  colisao();
  verificarFimDeJogo();

  requestAnimationFrame(atualizar);
}

document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft" && nave.x > 0) {
    nave.x -= nave.velocidade;
  } else if (event.key === "ArrowRight" && nave.x < larguraCanvas - nave.largura) {
    nave.x += nave.velocidade;
  } else if (event.key === " ") {
    tiros.push({ x: nave.x + nave.largura / 2 - 2.5, y: nave.y - 10 });
  }
});

criarInvasores();
atualizar();
```

Neste exemplo, criamos o jogo Space Invaders onde o jogador pode controlar uma nave que se move horizontalmente e dispara tiros para destruir invasores alienígenas que se movem de forma coordenada. O objetivo do jogo é eliminar todos os invasores antes que eles alcancem a nave.

O JavaScript cuida da lógica para criar a
ChatGPT
 nave, criar os invasores, mover a nave e os tiros, verificar colisões e detectar o fim de jogo.

No HTML, temos um elemento `canvas` que representa o tabuleiro onde o jogo é exibido.

No CSS, definimos o estilo do `canvas`.

A função `criarInvasores()` cria os invasores alienígenas organizados em várias colunas e linhas.

As funções `desenharNave()`, `desenharTiros()` e `desenharInvasores()` desenham a nave, os tiros e os invasores no tabuleiro, respectivamente.

As funções `moverTiros()` e `moverInvasores()` atualizam a posição dos tiros e dos invasores, respectivamente.

A função `colisao()` verifica se algum tiro colidiu com um invasor e remove ambos se houver uma colisão.

A função `verificarFimDeJogo()` verifica se os invasores alcançaram a nave, o que significa o fim do jogo.

A função `atualizar()` é chamada repetidamente para atualizar o estado do jogo e desenhar o tabuleiro.

A função `document.addEventListener("keydown", ...)` detecta quando o jogador pressiona as teclas de seta e a barra de espaço e move a nave ou dispara um tiro de acordo.

Dessa forma, você tem um jogo funcional do Space Invaders onde o jogador pode controlar a nave e eliminar os invasores alienígenas. Você pode personalizar o HTML, o CSS e o JavaScript para adicionar mais funcionalidades, ajustar o estilo e adaptar o jogo de acordo com suas preferências.
User
Como criar o jogo do Frogger com js
ChatGPT
Criar o jogo Frogger com JavaScript envolve a criação de um ambiente onde o jogador controla um sapo que precisa atravessar uma estrada movimentada e um rio, pulando em troncos, para chegar com segurança ao outro lado. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Frogger</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <canvas id="canvas"></canvas>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
}

canvas {
  display: block;
  margin: 0 auto;
  background-color: #f2f2f2;
}
```

JavaScript (`seu_script.js`):
```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const larguraCanvas = 400;
const alturaCanvas = 400;
canvas.width = larguraCanvas;
canvas.height = alturaCanvas;

const sapo = {
  x: larguraCanvas / 2 - 10,
  y: alturaCanvas - 30,
  largura: 20,
  altura: 20,
  velocidade: 20,
};

const troncos = [];
let direcaoTronco = 1;

function criarTroncos() {
  for (let i = 0; i < 5; i++) {
    troncos.push({
      x: 20 + i * 80,
      y: alturaCanvas - 80,
      largura: 40,
      altura: 20,
    });
  }
}

function desenharSapo() {
  ctx.beginPath();
  ctx.rect(sapo.x, sapo.y, sapo.largura, sapo.altura);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function desenharTroncos() {
  ctx.fillStyle = "brown";
  for (const tronco of troncos) {
    ctx.beginPath();
    ctx.rect(tronco.x, tronco.y, tronco.largura, tronco.altura);
    ctx.fill();
    ctx.closePath();
  }
}

function moverSapo(event) {
  switch (event.key) {
    case "ArrowUp":
      sapo.y -= sapo.velocidade;
      break;
    case "ArrowDown":
      sapo.y += sapo.velocidade;
      break;
    case "ArrowLeft":
      sapo.x -= sapo.velocidade;
      break;
    case "ArrowRight":
      sapo.x += sapo.velocidade;
      break;
  }
}

function moverTroncos() {
  const limiteDireita = larguraCanvas - troncos[0].largura;
  const limiteEsquerda = 0;
  for (const tronco of troncos) {
    tronco.x += direcaoTronco * 2;
    if (tronco.x >= limiteDireita || tronco.x <= limiteEsquerda) {
      direcaoTronco *= -1;
    }
  }
}

function verificarColisao() {
  for (const tronco of troncos) {
    if (
      sapo.x + sapo.largura >= tronco.x &&
      sapo.x <= tronco.x + tronco.largura &&
      sapo.y + sapo.altura >= tronco.y &&
      sapo.y <= tronco.y + tronco.altura
    ) {
      sapo.x += direcaoTronco * 2;
    }
  }

  if (sapo.y <= 0) {
    alert("Parabéns! Você chegou ao outro lado!");
    document.location.reload();
  }
}

function atualizar() {
  ctx.clearRect(0, 0, larguraCanvas, alturaCanvas);

  desenharSapo();
  desenharTroncos();
  verificarColisao();

  requestAnimationFrame(atualizar);
}

document.addEventListener("keydown", moverSapo);

criarTroncos();
atualizar();
```

Neste exemplo, criamos o jogo Frogger onde o jogador pode controlar um sapo que precisa atravessar uma estrada movimentada e um rio, pulando em troncos, para chegar com segurança ao outro lado. O objetivo do jogo é levar o sapo para o topo do tabuleiro sem colidir com os troncos.

O JavaScript cuida da lógica para criar o sapo, criar os troncos, mover o sapo e os troncos, verificar colisões e detectar a chegada ao outro lado do tabuleiro.

No HTML, temos um elemento `canvas` que representa o tabuleiro onde o jogo é exibido.

No CSS, definimos o estilo do `canvas`.

A função `criarTroncos()` cria os troncos no rio, organizados em uma fileira.

As funções `desenharSapo()` e `desenharTroncos()` desenham o sapo e os troncos no tabuleiro, respectivamente.

A função `moverSapo(event)` é chamada quando o jogador pressiona as teclas de seta para cima, baixo, esquerda ou direita, e move o sapo de acordo.

A função `moverTroncos()` atualiza a posição dos troncos
ChatGPT
, fazendo-os se moverem para frente e para trás.

A função `verificarColisao()` verifica se o sapo colidiu com um tronco ou chegou ao topo do tabuleiro, o que significa que o jogo foi vencido.

A função `atualizar()` é chamada repetidamente para atualizar o estado do jogo e desenhar o tabuleiro.

Dessa forma, você tem um jogo funcional do Frogger onde o jogador pode controlar o sapo para atravessar a estrada e o rio. Você pode personalizar o HTML, o CSS e o JavaScript para adicionar mais funcionalidades, ajustar o estilo e adaptar o jogo de acordo com suas preferências.
User
Como criar o jogo de Tetris com JS
ChatGPT
Criar o jogo Tetris com JavaScript envolve a criação de um ambiente onde peças geométricas (também chamadas de tetrominós) caem do topo da tela e o jogador pode movê-las e girá-las para encaixá-las em linhas completas, que são então eliminadas para liberar espaço. Vou fornecer um exemplo básico de como fazer isso:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Tetris</title>
  <link rel="stylesheet" type="text/css" href="estilo.css">
</head>
<body>
  <canvas id="canvas"></canvas>

  <script src="seu_script.js"></script>
</body>
</html>
```

CSS (`estilo.css`):
```css
body {
  margin: 0;
  padding: 0;
}

canvas {
  display: block;
  margin: 0 auto;
  background-color: #f2f2f2;
}
```

JavaScript (`seu_script.js`):
```javascript
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const larguraCanvas = 300;
const alturaCanvas = 600;
canvas.width = larguraCanvas;
canvas.height = alturaCanvas;

const tamanhoBloco = 30;
const colunas = larguraCanvas / tamanhoBloco;
const linhas = alturaCanvas / tamanhoBloco;
const cores = ["#f00", "#0f0", "#00f", "#ff0", "#f0f", "#0ff", "#0ff"];

let tabuleiro = criarTabuleiro();

const pecaTetris = [
  [
    [1, 1, 1],
    [0, 1, 0],
  ],
  [
    [0, 1],
    [1, 1],
    [0, 1],
  ],
  [
    [1, 1, 1, 1],
  ],
  [
    [1, 1],
    [1, 1],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
  [
    [1],
    [1],
    [1],
    [1],
  ],
];

let pecaAtual = gerarPeca();
let posicaoX = Math.floor(colunas / 2) - Math.floor(pecaAtual[0][0].length / 2);
let posicaoY = 0;
let pontuacao = 0;
let jogoAtivo = true;

function criarTabuleiro() {
  return Array.from({ length: linhas }, () => Array(colunas).fill(0));
}

function desenharTabuleiro() {
  for (let linha = 0; linha < linhas; linha++) {
    for (let coluna = 0; coluna < colunas; coluna++) {
      desenharBloco(coluna, linha, tabuleiro[linha][coluna]);
    }
  }
}

function desenharPeca() {
  for (let linha = 0; linha < pecaAtual.length; linha++) {
    for (let coluna = 0; coluna < pecaAtual[linha].length; coluna++) {
      if (pecaAtual[linha][coluna]) {
        desenharBloco(coluna + posicaoX, linha + posicaoY, pecaAtual[linha][coluna]);
      }
    }
  }
}

function desenharBloco(x, y, cor) {
  ctx.fillStyle = cor ? cores[cor - 1] : "#fff";
  ctx.fillRect(x * tamanhoBloco, y * tamanhoBloco, tamanhoBloco, tamanhoBloco);
  ctx.strokeStyle = "#000";
  ctx.strokeRect(x * tamanhoBloco, y * tamanhoBloco, tamanhoBloco, tamanhoBloco);
}

function gerarPeca() {
  const tipo = Math.floor(Math.random() * pecaTetris.length);
  return pecaTetris[tipo];
}

function colisao(x, y, peca) {
  for (let linha = 0; linha < peca.length; linha++) {
    for (let coluna = 0; coluna < peca[linha].length; coluna++) {
      if (peca[linha][coluna]) {
        const novoX = coluna + x;
        const novoY = linha + y;
        if (novoX < 0 || novoX >= colunas || novoY >= linhas || tabuleiro[novoY][novoX]) {
          return true;
        }
      }
    }
  }
  return false;
}

function fixarPeca() {
  for (let linha = 0; linha < pecaAtual.length; linha++) {
    for (let coluna = 0; coluna < pecaAtual[linha].length; coluna++) {
      if (pecaAtual[linha][coluna]) {
        tabuleiro[linha + posicaoY][coluna + posicaoX] = pecaAtual[linha][coluna];
      }
    }
  }
}

function verificarLinhasCompletas() {
  let linhasCompletas = 0;
  for (let linha = linhas - 1; linha >= 0; linha--) {
    if (tabuleiro[linha].every((bloco) => bloco !== 0)) {
      tabuleiro.splice(linha, 1);
      tabuleiro.unshift(Array(colunas).fill(0));
      linhasCompletas++;
    }
  }
  return linhasCompletas;
}

function atualizarPeca() {
  if (!colisao(posicaoX, posicaoY + 1, pecaAtual)) {
    posicaoY++;
  } else {
    fixarPeca();
    const linhasCompletas = verificarLinhasCompletas();
    pontuacao += linhasCompletas * 10;
    pecaAtual = gerarPeca();
    posicaoX = Math.floor(colunas / 2) - Math.floor(pecaAtual[0].length / 2);
    posicaoY = 0;
    if (colisao(posicaoX, posicaoY, pecaAtual)) {
      jogoAtivo = false;
    }
  }
}

function atualizar() {
  ctx.clearRect(0, 0, larguraCanvas, alturaCanvas);

  if (jogoAtivo) {
    atualizarPeca();
  }

  desenharTabuleiro();
  desenharPeca();

  ctx.fillStyle = "#000";
  ctx.font = "20px Arial";
  ctx.fillText("Pontuação: " + pontuacao, 10, 30);

  if (jogoAtivo) {
    requestAnimationFrame(atualizar);
  } else {
    ctx.fillStyle = "#000";
    ctx.font = "30px Arial";
    ctx.fillText("Fim de jogo!", larguraCanvas / 2 - 80, alturaCanvas / 2);
  }
}

document.addEventListener("
ChatGPT
keydown", function(event) {
  if (jogoAtivo) {
    switch (event.key) {
      case "ArrowLeft":
        if (!colisao(posicaoX - 1, posicaoY, pecaAtual)) {
          posicaoX--;
        }
        break;
      case "ArrowRight":
        if (!colisao(posicaoX + 1, posicaoY, pecaAtual)) {
          posicaoX++;
        }
        break;
      case "ArrowDown":
        if (!colisao(posicaoX, posicaoY + 1, pecaAtual)) {
          posicaoY++;
        }
        break;
      case "ArrowUp":
        const pecaRotacionada = pecaAtual[0].map((coluna, index) =>
          pecaAtual.map((linha) => linha[index]).reverse()
        );
        if (!colisao(posicaoX, posicaoY, pecaRotacionada)) {
          pecaAtual = pecaRotacionada;
        }
        break;
    }
  }
});

atualizar();
```

Neste exemplo, criamos o jogo Tetris onde o jogador pode controlar as peças que caem do topo da tela para encaixá-las em linhas completas. O objetivo do jogo é completar linhas para ganhar pontos e evitar que as peças alcancem o topo da tela.

O JavaScript cuida da lógica para criar o tabuleiro, desenhar o tabuleiro e as peças, gerar peças aleatórias, verificar colisões, fixar as peças quando atingem o fundo, eliminar linhas completas, atualizar a posição das peças e detectar o fim de jogo.

No HTML, temos um elemento `canvas` que representa o tabuleiro onde o jogo é exibido.

No CSS, definimos o estilo do `canvas`.

As peças são representadas por matrizes de 0s e 1s, onde 1 indica que a célula é ocupada por um bloco da peça e 0 indica que a célula está vazia.

A função `criarTabuleiro()` cria um tabuleiro vazio com as dimensões adequadas.

A função `desenharTabuleiro()` desenha o tabuleiro na tela.

A função `desenharPeca()` desenha a peça atual na tela.

A função `desenharBloco()` desenha um bloco colorido na posição especificada na tela.

A função `gerarPeca()` escolhe uma peça aleatória para ser a próxima peça a ser controlada.

A função `colisao(x, y, peca)` verifica se há colisão entre a peça e o tabuleiro na posição especificada.

A função `fixarPeca()` fixa a peça no tabuleiro quando ela atinge o fundo.

A função `verificarLinhasCompletas()` verifica se há linhas completas no tabuleiro e as elimina.

A função `atualizarPeca()` atualiza a posição da peça atual e verifica se a peça chegou ao fundo ou colidiu com outra peça.

A função `atualizar()` é chamada repetidamente para atualizar o estado do jogo e desenhar o tabuleiro e as peças.

A função `document.addEventListener("keydown", ...)` detecta quando o jogador pressiona as teclas de seta e rotação e move ou rotaciona a peça de acordo.

Dessa forma, você tem um jogo funcional do Tetris onde o jogador pode controlar as peças e completar linhas para ganhar pontos. Você pode personalizar o HTML, o CSS e o JavaScript para adicionar mais funcionalidades, ajustar o estilo e adaptar o jogo de acordo com suas preferências.
User
Como criar uma página de busca de coquetéis com js
ChatGPT
Para criar uma página de busca de coquetéis com JavaScript, você pode utilizar a API pública "TheCocktailDB" (https://www.thecocktaildb.com/api.php). Essa API fornece informações sobre coquetéis, incluindo seus nomes, ingredientes, instruções de preparo, imagens e muito mais.

Aqui está um exemplo básico de como criar a página de busca de coquetéis:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Busca de Coquetéis</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Busca de Coquetéis</h1>
    <input type="text" id="inputSearch" placeholder="Digite o nome do coquetel">
    <button id="btnSearch">Buscar</button>
    <div id="results"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

CSS (`style.css`):
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

input {
  padding: 10px;
  width: 70%;
  margin-right: 10px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

#results {
  margin-top: 20px;
}

.cocktail {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cocktail img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.cocktail-info {
  flex: 1;
}

.cocktail h3 {
  margin: 0;
}

.cocktail p {
  margin: 0;
}
```

JavaScript (`script.js`):
```javascript
const btnSearch = document.getElementById("btnSearch");
const inputSearch = document.getElementById("inputSearch");
const resultsDiv = document.getElementById("results");

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

btnSearch.addEventListener("click", () => {
  const searchTerm = inputSearch.value.trim();
  if (searchTerm === "") {
    return;
  }

  fetch(`${API_URL}${searchTerm}`)
    .then((response) => response.json())
    .then((data) => {
      displayResults(data.drinks);
    })
    .catch((error) => console.log(error));
});

function displayResults(cocktails) {
  resultsDiv.innerHTML = "";

  if (!cocktails) {
    resultsDiv.innerHTML = "<p>Nenhum coquetel encontrado.</p>";
    return;
  }

  cocktails.forEach((cocktail) => {
    const cocktailDiv = document.createElement("div");
    cocktailDiv.classList.add("cocktail");

    const img = document.createElement("img");
    img.src = cocktail.strDrinkThumb;
    cocktailDiv.appendChild(img);

    const cocktailInfo = document.createElement("div");
    cocktailInfo.classList.add("cocktail-info");

    const h3 = document.createElement("h3");
    h3.textContent = cocktail.strDrink;
    cocktailInfo.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = cocktail.strInstructions;
    cocktailInfo.appendChild(p);

    cocktailDiv.appendChild(cocktailInfo);

    resultsDiv.appendChild(cocktailDiv);
  });
}
```

Neste exemplo, criamos uma página simples de busca de coquetéis. A partir do campo de busca, o usuário pode digitar o nome do coquetel que deseja encontrar e, em seguida, clicar no botão "Buscar". O JavaScript irá se comunicar com a API do "TheCocktailDB" para obter os resultados de busca e, em seguida, exibir os coquetéis encontrados abaixo do campo de busca.

A função `fetch` é usada para fazer uma requisição à API, passando o termo de busca fornecido pelo usuário. Em seguida, os resultados são exibidos na página usando a função `displayResults`.

Cada coquetel encontrado é exibido em um elemento `div` com uma imagem do coquetel, seu nome e as instruções de preparo.

Lembre-se de que este é apenas um exemplo básico, e você pode personalizar a aparência e a funcionalidade de acordo com suas preferências. Além disso, é possível adicionar mais recursos, como exibir a lista de ingredientes de cada coquetel, permitir filtrar os coquetéis por categoria ou ingredientes, entre outros.
User
Como criar um calendário com mudanda de ano e mês, destacando o dia atual
ChatGPT
Para criar um calendário com mudança de ano e mês e com destaque no dia atual, você pode usar HTML, CSS e JavaScript. Vou fornecer um exemplo básico para implementar essa funcionalidade:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Calendário</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <div class="header">
      <button id="prevMonthBtn">&lt;</button>
      <h1 id="monthYear"></h1>
      <button id="nextMonthBtn">&gt;</button>
    </div>
    <table id="calendar"></table>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

CSS (`style.css`):
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

button {
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ccc;
}

th {
  background-color: #007bff;
  color: #fff;
}
```

JavaScript (`script.js`):
```javascript
const monthYearElement = document.getElementById("monthYear");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn = document.getElementById("nextMonthBtn");
const calendarElement = document.getElementById("calendar");

let currentDate = new Date();

prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

function updateCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  monthYearElement.textContent = `${getMonthName(month)} ${year}`;

  let calendarHTML = "<tr>";
  for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
    calendarHTML += "<td></td>";
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const isToday = isSameDay(date, new Date());

    calendarHTML += `<td ${isToday ? 'class="highlight"' : ''}>${day}</td>`;

    if (date.getDay() === 6) {
      calendarHTML += "</tr><tr>";
    }
  }

  calendarHTML += "</tr>";
  calendarElement.innerHTML = calendarHTML;
}

function getMonthName(month) {
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  return monthNames[month];
}

function isSameDay(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

updateCalendar();
```

Neste exemplo, criamos um calendário com a capacidade de mudar o mês e o ano. O JavaScript manipula a data atual, adicionando ou subtraindo meses conforme o usuário clica nos botões de navegação. O calendário é atualizado dinamicamente conforme o mês e o ano mudam. O dia atual é destacado na tabela, usando uma classe CSS chamada "highlight".

Os eventos de clique dos botões "Anterior" e "Próximo" são adicionados aos botões `prevMonthBtn` e `nextMonthBtn`. Quando os botões são clicados, a função `updateCalendar()` é chamada para atualizar o calendário com o novo mês e ano.

A função `updateCalendar()` é responsável por construir o calendário HTML. Ela obtém o mês e o ano da data atual
ChatGPT
 e calcula o primeiro e o último dia do mês. Em seguida, itera pelos dias do mês e cria as células da tabela. Se o dia for igual ao dia atual, a classe "highlight" é adicionada à célula.

A função `getMonthName(month)` é usada para obter o nome do mês a partir do índice do mês.

A função `isSameDay(date1, date2)` verifica se duas datas são iguais (ano, mês e dia).

Espero que este exemplo seja útil para criar o calendário com mudança de ano e mês e com destaque no dia atual usando JavaScript. Você pode personalizar o estilo, adicionar mais funcionalidades ou integrar outras APIs para tornar o calendário mais completo.
User
Como criar um jogo de adivinhação com js
ChatGPT
Para criar um jogo de adivinhação com JavaScript, você pode fazer um simples jogo onde o computador escolhe um número aleatório e o jogador deve adivinhar esse número. Vou fornecer um exemplo básico para criar esse jogo:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Jogo de Adivinhação</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Jogo de Adivinhação</h1>
    <p>Adivinhe o número entre 1 e 100:</p>
    <input type="number" id="guessInput">
    <button id="guessBtn">Adivinhar</button>
    <p id="message"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

CSS (`style.css`):
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-top: 0;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

p {
  margin: 10px 0;
}
```

JavaScript (`script.js`):
```javascript
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    showMessage("Digite um número válido entre 1 e 100.", "red");
    return;
  }

  attempts++;
  if (guess === randomNumber) {
    showMessage(`Parabéns! Você acertou em ${attempts} tentativas.`, "green");
    guessInput.disabled = true;
    guessBtn.disabled = true;
  } else if (guess < randomNumber) {
    showMessage("Tente um número maior.", "blue");
  } else {
    showMessage("Tente um número menor.", "blue");
  }
});

function showMessage(text, color) {
  message.textContent = text;
  message.style.color = color;
}
```

Neste exemplo, criamos um jogo de adivinhação onde o jogador deve tentar adivinhar um número entre 1 e 100. O JavaScript cuida da lógica do jogo, gerando um número aleatório que o jogador deve adivinhar. O jogador pode inserir um número no campo de entrada e clicar no botão "Adivinhar". O jogo dará feedback para o jogador sobre se o palpite é muito alto, muito baixo ou se ele acertou o número. O jogo também informará quantas tentativas foram feitas para acertar o número.

O número aleatório é gerado usando `Math.random()` para gerar um número entre 0 e 1, e então multiplicado por 100 e somado 1 para garantir que o número esteja entre 1 e 100.

O evento de clique do botão "Adivinhar" é adicionado ao botão `guessBtn`. Quando o botão é clicado, a função `guess()` é chamada para verificar o palpite do jogador.

A função `guess()` converte o valor do campo de entrada em um número inteiro usando `parseInt()`. Se o valor não for um número válido entre 1 e 100, uma mensagem de erro é exibida na tela. Caso contrário, o número de tentativas é incrementado e é verificado se o palpite do jogador é igual ao número aleatório. Se for igual, uma mensagem de parabéns é exibida e os campos de entrada e botão são desativados. Caso contrário, o jogo informará se o palpite é muito alto ou muito baixo.

A função `showMessage()` é utilizada para exibir mensagens na tela. Ela recebe o texto da mensagem e a cor da mensagem como argumentos e define essas informações no elemento HTML.

Espero que este exemplo básico seja útil para criar um jogo de adivinhação com JavaScript. Você pode personalizar o HTML, CSS e JavaScript de acordo com suas preferências e adicionar mais funcionalidades, como permitir ao jogador reiniciar o jogo ou escolher um intervalo de números diferente.
User
Como criar um verificador de Palíndromo com js
ChatGPT
Um palíndromo é uma palavra, frase, número ou sequência que é a mesma tanto de trás para frente quanto de frente para trás. Para criar um verificador de palíndromos com JavaScript, você pode seguir o exemplo abaixo:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Verificador de Palíndromo</title>
</head>
<body>
  <div>
    <h1>Verificador de Palíndromo</h1>
    <label for="inputText">Digite uma palavra ou frase:</label>
    <input type="text" id="inputText">
    <button onclick="verificarPalindromo()">Verificar</button>
    <p id="result"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

JavaScript (`script.js`):
```javascript
function verificarPalindromo() {
  const inputText = document.getElementById("inputText").value.toLowerCase();
  const reversedText = inputText.split("").reverse().join("");
  const resultElement = document.getElementById("result");

  if (inputText === reversedText) {
    resultElement.textContent = `"${inputText}" é um palíndromo!`;
  } else {
    resultElement.textContent = `"${inputText}" não é um palíndromo.`;
  }
}
```

Neste exemplo, criamos um verificador de palíndromos em uma página HTML simples. O usuário digita uma palavra ou frase no campo de entrada, e quando o botão "Verificar" é clicado, o JavaScript verifica se a palavra ou frase é um palíndromo ou não.

A função `verificarPalindromo()` é chamada quando o botão "Verificar" é clicado. Ela obtém o valor do campo de entrada, converte-o para letras minúsculas (ignorando letras maiúsculas) e, em seguida, reverte a sequência de caracteres usando os métodos `split()`, `reverse()` e `join()`.

Se o texto original for igual ao texto invertido, significa que a palavra ou frase é um palíndromo, e uma mensagem é exibida na tela informando isso. Caso contrário, é exibida uma mensagem indicando que não é um palíndromo.

Por exemplo:
- "ovo" é um palíndromo.
- "arara" é um palíndromo.
- "amor" não é um palíndromo.

Este é um exemplo simples de verificador de palíndromos usando JavaScript. Você pode personalizar o HTML e CSS para melhorar a aparência e adicionar mais funcionalidades, como remover espaços e caracteres especiais da palavra ou frase antes de verificar se é um palíndromo.
User
Como criar uma página onde insere-se nome e notas de alunos e calcula-se suas médias e o resultado se recuperação, passou ou reprovou, sendo a média 6, recuperação entre 6 e 7.5. Pode ser usado armazenamento local para o projeto
ChatGPT
Para criar uma página que permite inserir o nome e notas de alunos, calcula suas médias e exibe o resultado (aprovado, recuperação ou reprovado) utilizando o armazenamento local (localStorage), você pode seguir o exemplo abaixo:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Cálculo de Médias</title>
</head>
<body>
  <div>
    <h1>Cálculo de Médias</h1>
    <label for="inputName">Nome do Aluno:</label>
    <input type="text" id="inputName">
    <br>
    <label for="inputNota1">Nota 1:</label>
    <input type="number" id="inputNota1">
    <br>
    <label for="inputNota2">Nota 2:</label>
    <input type="number" id="inputNota2">
    <br>
    <label for="inputNota3">Nota 3:</label>
    <input type="number" id="inputNota3">
    <br>
    <button onclick="calcularMedia()">Calcular Média</button>
    <p id="resultado"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

JavaScript (`script.js`):
```javascript
function calcularMedia() {
  const nome = document.getElementById("inputName").value;
  const nota1 = parseFloat(document.getElementById("inputNota1").value);
  const nota2 = parseFloat(document.getElementById("inputNota2").value);
  const nota3 = parseFloat(document.getElementById("inputNota3").value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Por favor, insira valores numéricos para as notas.");
    return;
  }

  const media = (nota1 + nota2 + nota3) / 3;

  let resultado;
  if (media >= 6 && media <= 7.5) {
    resultado = "Recuperação";
  } else if (media > 7.5) {
    resultado = "Aprovado";
  } else {
    resultado = "Reprovado";
  }

  const mensagem = `${nome}, sua média é ${media.toFixed(2)} e você está ${resultado}.`;

  document.getElementById("resultado").textContent = mensagem;

  // Salva a média e resultado no localStorage
  localStorage.setItem("media", media.toFixed(2));
  localStorage.setItem("resultado", resultado);
}

// Verifica se há dados salvos no localStorage ao carregar a página
window.onload = function() {
  const media = localStorage.getItem("media");
  const resultado = localStorage.getItem("resultado");

  if (media && resultado) {
    document.getElementById("resultado").textContent = `Última média calculada: ${media} - Resultado: ${resultado}.`;
  }
}
```

Neste exemplo, criamos uma página que permite inserir o nome e as notas de um aluno e, ao clicar no botão "Calcular Média", a média é calculada e exibida na página junto com o resultado (aprovado, recuperação ou reprovado). O resultado e a média são salvos no localStorage para que a última média calculada seja mostrada ao recarregar a página.

O JavaScript recupera os valores dos campos de entrada e converte as notas para números usando `parseFloat()`. Em seguida, calcula a média e determina o resultado com base nas condições fornecidas (média >= 6 e <= 7.5 para recuperação, e > 7.5 para aprovado).

O resultado e a média são exibidos em um elemento `p` com o id "resultado".

A função `calcularMedia()` verifica se as notas são valores numéricos válidos e exibe um alerta se as notas não forem números. Caso contrário, calcula a média e o resultado e exibe a mensagem.

Ao carregar a página, a função `window.onload` verifica se há dados salvos no localStorage e, se houver, exibe a última média calculada e o resultado.

Espero que este exemplo seja útil para criar a página de cálculo de médias com armazenamento local utilizando JavaScript. Você pode personalizar o HTML, CSS e JavaScript para adaptar o projeto conforme suas necessidades.
User
Como criar uma aplicação que dê a idade em anos, meses, dias e horas
ChatGPT
Para criar uma aplicação que calcule a idade em anos, meses, dias e horas, você pode seguir o exemplo abaixo:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Calculadora de Idade</title>
</head>
<body>
  <div>
    <h1>Calculadora de Idade</h1>
    <label for="inputDate">Data de Nascimento:</label>
    <input type="date" id="inputDate">
    <br>
    <button onclick="calcularIdade()">Calcular</button>
    <p id="resultado"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

JavaScript (`script.js`):
```javascript
function calcularIdade() {
  const inputDate = document.getElementById("inputDate").value;
  const dataNascimento = new Date(inputDate);
  const dataAtual = new Date();

  const diffEmMilissegundos = dataAtual - dataNascimento;
  const diffEmSegundos = diffEmMilissegundos / 1000;
  const diffEmMinutos = diffEmSegundos / 60;
  const diffEmHoras = diffEmMinutos / 60;
  const diffEmDias = diffEmHoras / 24;
  const diffEmAnos = diffEmDias / 365;

  const anos = Math.floor(diffEmAnos);
  const meses = Math.floor((diffEmAnos - anos) * 12);
  const dias = Math.floor(diffEmDias);
  const horas = Math.floor(diffEmHoras);

  const mensagem = `Idade: ${anos} anos, ${meses} meses, ${dias} dias e ${horas} horas.`;

  document.getElementById("resultado").textContent = mensagem;
}
```

Neste exemplo, criamos uma aplicação que permite inserir a data de nascimento de uma pessoa e, ao clicar no botão "Calcular", a idade é calculada e exibida na página em anos, meses, dias e horas.

O JavaScript obtém a data de nascimento do campo de entrada e cria objetos `Date` para a data de nascimento e a data atual. Em seguida, calcula a diferença entre as datas em milissegundos, segundos, minutos, horas, dias e anos.

A diferença em anos é calculada dividindo o número de dias pela quantidade média de dias em um ano (365). O cálculo em meses é feito multiplicando a parte decimal do cálculo de anos por 12 (o número médio de meses em um ano). O cálculo de dias e horas é feito arredondando para baixo os valores obtidos nas conversões.

A mensagem contendo a idade é criada e exibida em um elemento `p` com o id "resultado".

Esse exemplo calcula a idade com base na data atual, portanto, a idade será atualizada automaticamente à medida que a data atual muda. Note que a idade é aproximada, pois nem todos os anos têm a mesma quantidade de dias (alguns são bissextos) e nem todos os meses têm a mesma quantidade de dias (28, 30 ou 31).

Espero que este exemplo seja útil para criar uma aplicação que calcula a idade em anos, meses, dias e horas utilizando JavaScript. Você pode personalizar o HTML, CSS e JavaScript para melhorar a aparência e adicionar mais funcionalidades, se necessário.
User
Como implementar num site a função tema dark, alternando com um click o tema com js
ChatGPT
Para implementar um tema dark/light em um site e alternar entre eles com um clique, você pode seguir este exemplo utilizando JavaScript:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Tema Dark/Light</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Meu Site</h1>
    <button id="toggleThemeBtn">Alternar Tema</button>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

CSS (`style.css`):
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  color: #333;
  transition: background-color 0.3s, color 0.3s;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
}

.dark-mode {
  background-color: #333;
  color: #fff;
}
```

JavaScript (`script.js`):
```javascript
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const body = document.body;

toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  // Salvando a preferência do tema no localStorage
  const isDarkModeEnabled = body.classList.contains("dark-mode");
  localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
});

// Verificando a preferência do tema ao carregar a página
window.onload = function() {
  const darkModeEnabled = localStorage.getItem("darkModeEnabled");

  if (darkModeEnabled === "true") {
    body.classList.add("dark-mode");
  }
}
```

Neste exemplo, criamos um botão "Alternar Tema" que, ao ser clicado, adiciona ou remove a classe "dark-mode" do elemento `body`. A classe "dark-mode" altera as cores de fundo e texto do site para um tema escuro.

O evento de clique do botão "Alternar Tema" é adicionado ao botão `toggleThemeBtn`. Quando o botão é clicado, a função `toggleTheme()` é chamada, e ela adiciona ou remove a classe "dark-mode" do `body` do documento. Além disso, a preferência do tema é armazenada no localStorage para que o usuário não precise redefinir o tema quando recarregar a página.

A função `window.onload` é usada para verificar a preferência do tema ao carregar a página. Se o usuário tiver escolhido o tema dark previamente, a classe "dark-mode" será adicionada ao `body`.

Dessa forma, ao clicar no botão "Alternar Tema", o site alterna entre os temas dark e light, e essa preferência é salva no localStorage para persistir mesmo após recarregar a página.

Você pode personalizar o CSS e JavaScript para ajustar o tema dark/light de acordo com o estilo do seu site.
User
Como criar uma lista TODO com armazenamento local, com inserção, deletar etc
ChatGPT
Para criar uma lista de tarefas (TODO list) com armazenamento local e adicionar funcionalidades de inserção e exclusão de tarefas, você pode seguir o exemplo abaixo:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Lista de Tarefas</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Lista de Tarefas</h1>
    <form onsubmit="addTask(event)">
      <input type="text" id="taskInput" placeholder="Digite uma tarefa...">
      <button type="submit">Adicionar</button>
    </form>
    <ul id="taskList"></ul>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

CSS (`style.css`):
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

form {
  display: flex;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.delete-btn {
  color: #ff0000;
  cursor: pointer;
}
```

JavaScript (`script.js`):
```javascript
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Carregar tarefas do localStorage ao carregar a página
window.onload = function() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task));
};

function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = { id: Date.now(), text: taskText };
  addTaskToDOM(task);
  saveTask(task);

  taskInput.value = "";
}

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.innerHTML = `${task.text} <span class="delete-btn" onclick="deleteTask(${task.id})">X</span>`;
  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(id) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter(task => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  // Remover tarefa do DOM
  const li = document.querySelector(`li[data-id="${id}"]`);
  li.remove();
}
```

Neste exemplo, criamos uma lista de tarefas (TODO list) que permite inserir tarefas através de um formulário, excluir tarefas clicando no botão "X" e armazenar as tarefas no armazenamento local (localStorage).

A função `addTask(event)` é chamada quando o formulário é enviado (ao pressionar o botão "Adicionar" ou pressionar Enter). Ela cria um objeto `task` com um ID único gerado pela função `Date.now()` e o texto da tarefa. A tarefa é adicionada ao DOM e salva no localStorage usando as funções `addTaskToDOM(task)` e `saveTask(task)`.

A função `addTaskToDOM(task)` cria um novo elemento `li` no DOM contendo o texto da tarefa e um botão de exclusão. A tarefa é exibida na lista de tarefas.

A função `saveTask(task)` recupera as tarefas do localStorage, adiciona a nova tarefa à lista e salva novamente a lista no localStorage.

A função `deleteTask(id)` é chamada quando o botão "X" de uma tarefa é clicado. Ela remove a tarefa com o ID correspondente do localStorage e do DOM.

As tarefas são carregadas do localStorage ao carregar a página, para que as tarefas persistam mesmo após recarregar a página.

Dessa forma, você pode criar uma lista de tarefas com armazenamento local, onde é possível adicionar e excluir tarefas de forma dinâmica. Você pode personalizar o estilo, adicionar mais funcionalidades ou aprimorar a interação conforme suas necessidades.
User
Como mostrar uma imagem ao fazer upload e redimensar para as medidas dadas sem distorção adicioando bordas na cor dada se necessário
ChatGPT
Para mostrar uma imagem ao fazer upload, redimensioná-la para as medidas desejadas sem distorção e adicionar bordas na cor dada (se necessário), você pode seguir o exemplo abaixo utilizando JavaScript e a API FileReader.

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Redimensionar e adicionar bordas em imagens</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Upload e Redimensionamento de Imagens</h1>
    <input type="file" id="imageInput">
    <br>
    <label for="widthInput">Largura desejada (em pixels):</label>
    <input type="number" id="widthInput">
    <br>
    <label for="heightInput">Altura desejada (em pixels):</label>
    <input type="number" id="heightInput">
    <br>
    <label for="borderColorInput">Cor da borda (em hexadecimal):</label>
    <input type="color" id="borderColorInput">
    <br>
    <button onclick="processImage()">Processar Imagem</button>
    <div id="preview"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

CSS (`style.css`):
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

input[type="number"] {
  width: 100px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

#preview {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

img {
  max-width: 100%;
  max-height: 300px;
  border: 5px solid transparent;
}
```

JavaScript (`script.js`):
```javascript
const imageInput = document.getElementById("imageInput");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const borderColorInput = document.getElementById("borderColorInput");
const preview = document.getElementById("preview");

imageInput.addEventListener("change", previewImage);

function previewImage() {
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(event) {
      const img = new Image();
      img.src = event.target.result;

      img.onload = function() {
        preview.innerHTML = ""; // Limpa o conteúdo anterior
        preview.appendChild(img);
      };
    };

    reader.readAsDataURL(file);
  }
}

function processImage() {
  const file = imageInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function(event) {
      const img = new Image();
      img.src = event.target.result;

      img.onload = function() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let width = parseInt(widthInput.value);
        let height = parseInt(heightInput.value);
        const borderColor = borderColorInput.value;

        // Redimensiona a imagem sem distorção
        const aspectRatio = img.width / img.height;
        if (width && !height) {
          height = width / aspectRatio;
        } else if (!width && height) {
          width = height * aspectRatio;
        }

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        // Adiciona borda
        if (borderColor) {
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 10;
          ctx.strokeRect(0, 0, width, height);
        }

        // Mostra a imagem processada
        const processedImg = new Image();
        processedImg.src = canvas.toDataURL();

        preview.innerHTML = ""; // Limpa o conteúdo anterior
        preview.appendChild(processedImg);
      };
    };

    reader.readAsDataURL(file);
  }
}
```

Neste exemplo, criamos uma página que permite fazer upload de uma imagem e redimensioná-la para as medidas desejadas sem distorção. Também é possível adicionar bordas à imagem na cor desejada.

Quando o usuário seleciona uma imagem utilizando o campo de upload (`imageInput`), a função `previewImage()` é chamada para mostrar uma pré-visualização da imagem antes de ser processada. Ao clicar no botão "Processar Imagem", a função `processImage()` é chamada para redimensionar a imagem, adicionar a borda (se necessário) e mostrar a imagem processada na página.

A função `previewImage()` utiliza a API FileReader para carregar a imagem selecionada e exibi-la na página como uma pré-visualização.

A função `processImage()` carrega a imagem selecionada e redimensiona a mesma usando um elemento `canvas` para evitar distorções. Em seguida, adiciona uma borda à imagem caso seja especificada a cor da borda.

Você pode personalizar o CSS e ajustar as dimensões do `canvas` e do `img` conforme suas preferências, além de adicionar mais funcionalidades para aprimorar a aplicação.
User
Como mostrar um preview de múltiplas imagens ao serem selecionadas antes do upload. Monte um css para aparecerem com espaço entre elas e num tamanho reduzido
ChatGPT
Para mostrar um preview de múltiplas imagens ao serem selecionadas antes do upload, com espaço entre elas e em um tamanho reduzido, você pode seguir o exemplo abaixo:

HTML:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Preview de Múltiplas Imagens</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Preview de Múltiplas Imagens</h1>
    <input type="file" id="imageInput" multiple>
    <div id="imagePreview"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

CSS (`style.css`):
```css
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

input[type="file"] {
  margin-bottom: 10px;
}

#imagePreview {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.img-preview {
  max-width: 150px;
  margin: 5px;
}
```

JavaScript (`script.js`):
```javascript
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", previewImages);

function previewImages() {
  const files = imageInput.files;

  if (files) {
    imagePreview.innerHTML = ""; // Limpa o conteúdo anterior

    for (const file of files) {
      const reader = new FileReader();

      reader.onload = function(event) {
        const img = document.createElement("img");
        img.src = event.target.result;
        img.className = "img-preview";
        imagePreview.appendChild(img);
      };

      reader.readAsDataURL(file);
    }
  }
}
```

Neste exemplo, criamos uma página que permite fazer upload de múltiplas imagens e mostra um preview delas antes do upload. As imagens são exibidas em um tamanho reduzido e com espaço entre elas.

Ao selecionar uma ou várias imagens usando o campo de upload (`imageInput`), a função `previewImages()` é chamada para exibir um preview de cada imagem selecionada.

O CSS (`style.css`) define o estilo da página, incluindo a exibição em formato de grade usando `display: flex;` e `flex-wrap: wrap;` para mostrar as imagens com espaço entre elas. A classe `img-preview` é utilizada para definir o tamanho máximo das imagens no preview.

O JavaScript (`script.js`) adiciona um evento de escuta ao campo de upload. Quando o usuário seleciona uma ou várias imagens, a função `previewImages()` é chamada. Essa função limpa o conteúdo anterior do preview (`imagePreview.innerHTML = "";`) e, em seguida, itera sobre os arquivos selecionados, criando um novo elemento `img` para cada imagem e adicionando-o ao preview.

As imagens são exibidas em um tamanho máximo de 150 pixels (definido na classe `img-preview`), e os espaços entre elas são definidos pelo `margin` do CSS.

Você pode personalizar o CSS e JavaScript conforme suas necessidades para ajustar o estilo e o comportamento do preview de múltiplas imagens.

