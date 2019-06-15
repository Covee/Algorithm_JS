/*
문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

제한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
*/

function solution(s) {
    var answer = '';
    
    // 예외처리
    if (s < 0 || s > 100){
        return ("The length of word should be longer than 1, shorter than 101")
    }
    
    // 단어가 홀수일 때, 짝수일 때의 조건문
    let mid = s.length / 2;
    if(s.length % 2 == 1) {
        let answer = s.substring(mid, mid+1)
        return answer;
    } else {
        let answer = s.substring(mid-1, mid+1)
        return answer;
    }
}