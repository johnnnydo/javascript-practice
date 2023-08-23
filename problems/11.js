/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    const new_normal = str.split(' ').join('').toLowerCase() 
    const reverse_Str = new_normal.split('').reverse().join('')
        
    if (reverse_Str == new_normal) {
        return true
    } else {
        return false
    }
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};