/* Given a 32-bit signed integer, reverse digits of an integer.

    Example 1:
    Input: 123
    Output: 321

    Example 2:
    Input: -123
    Output: -321

    Example 3:
    Input: 120
    Output: 21

    Note:
    Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  (2^31)−1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/

var reverse = function(x) {
    let o = Math.pow(2, 31) -1; // Math.pow 써서 2의 31승을 구함
    let u = -(Math.pow(2, 31));
    let a = x + ""  // "" 같은 빈 문자열을 int형에 더해주면, Int를 String으로 바꾼다.
    let rev = a.split("").reverse().join("");   // 문자열을 하나하나 나눠주고 reverse한 뒤, 다시 합쳐준다.
    if(x < 0) {
        let b = -parseInt(rev);
        let answer = b<u ? 0 : b
        return answer
    } else {
        let b = parseInt(rev);
        let answer = b>o ? 0 : b
        return answer
    }
};

// Example
console.log(reverse(153423646));


// Comment: reverse한 값이 2의 31승 기준을 넘으면 0을 리턴한다는 것이 살짝 tricky해서 문제이해를 헷갈리지 않게끔 먼저 해야한다.