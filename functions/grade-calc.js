// students score, total possible score
// 15/20  --> You got a C (75%)

// function percent
const percentCalculator = function (num1, num2){
    return Math.round((num1/num2) * 100);
}

const lettergrade = function (percent){
    if (percent >= 90) {
        return "A";
    } else if (percent >= 80) {
        return "B";
    } else if (percent >= 70) {
        return "C";
    } else if (percent >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// function letter grade calculator
const gradeCalc = function(score, total){
  if (typeof score === "number" && typeof total === "number") {
    const percent = percentCalculator(score, total);
    const grade = lettergrade(percent);
    return `You got a ${grade} (${percent}%)`
  } else {
    throw new Error("gradeCalc args must be numbers");
  }
}


// let tommyGrade = gradeCalc(60, 100);
// let susieGrade = gradeCalc(5, 10);
// let albertGrade = gradeCalc(93, 95);
// let bobGrade = gradeCalc(35, 50);
// let nanGrade = gradeCalc(4, 5);

// console.log(tommyGrade); // You got a D (60%)
// console.log(susieGrade);
// console.log(albertGrade);
// console.log(bobGrade);
// console.log(nanGrade);

try {
  let tommyGrade = gradeCalc("60", 100);
  console.log(tommyGrade);
} catch (e) {
  console.log(e.message);
}