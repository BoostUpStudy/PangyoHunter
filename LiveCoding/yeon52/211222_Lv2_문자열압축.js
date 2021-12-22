function solution(s) {
  let answer = s.length;
  for (let i = 1; i < s.length; i++) {
    let prev = s.substr(0, i);
    let currLength = 0;
    let cnt = 1;
    for (let j = i; j < s.length; j += i) {
      let curr = s.substr(j, i);
      if (prev === curr) {
        cnt++;
      } else {
        currLength += cnt > 1 ? prev.length + (cnt + '').length : prev.length;
        prev = curr;
        cnt = 1;
      }
    }
    currLength += cnt > 1 ? prev.length + (cnt + '').length : prev.length;
    answer = Math.min(answer, currLength);
  }
  return answer;
}
