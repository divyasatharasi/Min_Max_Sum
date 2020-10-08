function Min_Max_Sum(input) {
    let minVal = Math.min(...input);
    let maxVal = Math.max(...input);
    let sum = input.reduce(function(a, b){
        return a + b;
    }, 0);
    let minSum = sum - maxVal;
    let maxSum = sum - minVal;
    return `min = ${minSum} and max = ${maxSum}`;
}
let input = [1, 3, 5, 7, 9];
console.log(Min_Max_Sum(input))
