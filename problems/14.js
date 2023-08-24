/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    const len_div = Math.ceil(numbers.length/2)
    const item_counter = (value, index) => {
        return value.filter((x) => x == index).length;
    };
    for (const ele of numbers){
        if (item_counter(numbers, ele) == len_div) {
            return ele
            break;
        }
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};