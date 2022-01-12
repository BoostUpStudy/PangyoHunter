// 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다.
function solution(n, t, m, p) {
    let answer = '';
    let fullString = '';
    let count = 0;
    for(let number = 0; number < m * t; number++){
        fullString += number.toString(n);
    }
    
    for(let i = p; count < t; i += m){
        answer += fullString[i-1];
        count++;
    }
    
    return answer.toUpperCase();
}
