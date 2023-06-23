const num1 = -2
const num2 = 1

if (num1 > 0) {
  if (num2 > 0) {
    console.log(`${num1} and ${num2} are positive`) // @logs message indicatimg numbers are positive
  } else {
    console.log(`${num2} is negative`) // @logs message indicatimg number 2 is negative
  }
} else {
  console.log(`The ${num1} is negative`) // @logs message indicatimg the first number is positive
}
