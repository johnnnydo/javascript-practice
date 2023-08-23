/**
 * Problem 7: Sum with Reducing
 * 
 * Given a list of numbers, compute the sum of the list.
 * This time, use the .reduce function.
 * 
 * @example [1, 2, 3] -> 6
*/
function problem(numbers) {
    function sums(total, num) {
        return total + num
    }
    let x = numbers.reduce(sums, 0)
    return x
}

const tests = [
    [[1, 2, 3], 6],
    [[2, 31, 4, 5, 2, 67], 111],
    [[], 0],
]

module.exports = {problem, tests};