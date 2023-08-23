/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    const to_upper = Math.floor(str.length/2)
    var new_str = ''
    for (let i = 0; i <to_upper; i++) {
        let x = str[i].toUpperCase()
        var new_str = new_str + x
        
    }
    for (let i = to_upper; i <str.length; i++) {
        let b = str[i].toLowerCase()
        var new_str = new_str + b
    }
    
    return new_str
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};