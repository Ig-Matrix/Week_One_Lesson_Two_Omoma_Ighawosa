const num1 = 2;
const num2 = -1;

if (num1 > 0) {
    if (num2 > 0) {
        console.log(`${num1} and ${num2} are positive`); // @logs num1  and num2 are  positive
    } else {
        console.log(`${num2} is negative and ${num1} is positive`); // @logs num2 is negative and num1 is positive 
    }
} else if (num1 < 0 && num2 < 0) {
    console.log(`${num1} and ${num2} are negative`); // @logs num1  and num2 are  negative
} else {
    console.log(`${num1} is negative and ${num2} is positive`); // @logs num1 is negative and num2 is positive
}
