// ********** Day 0: Hello World ********** //

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log("Hello, World!");

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}


 // ********** Day 1: Aritmetic Operators ********** //

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width);
    return perimeter;
}

  // ********** Day 1: Functions ********** //

function factorial(n) {
    let finalVal = 1;
    for (let i=n; i > 1; i--) {
        finalVal *= i
    }
    
    return finalVal;
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}

  
 // ********** Day 2: Conditional Statements: Switch ********** //


// ********** Day 2: Loops ********** //

function vowelsAndConsonants(s) {
    for(let i= 0; i < s.length; i++) {
        if(s.charAt(i).match(/[aeiou]/)) {
            console.log(s.charAt(i));
        }
    }
    
    // consonants
    for(let i= 0; i < s.length; i++) {
        if(s.charAt(i).match(/[^aeiou]/)) {
            console.log(s.charAt(i));
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}


// ********** Day 3: Intro to Conditional Statements ********** //


// ********** Day 3: Arrays ********** //

function getSecondLargest(nums) {
    // Complete the function
    nums = new Set(nums);
    nums = Array.from(nums)
    nums = nums.sort(comparator)
    return nums [nums.length - 2]
    
    function comparator(a, b) {
        return a - b;
    }
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}

// FINISH...
