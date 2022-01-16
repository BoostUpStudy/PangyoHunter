function findMaxLen(dictionary, curStr) {
  let maxStr = curStr[0];
  for (let i = 1; i < curStr.length; i++) {
    if (!Object.keys(dictionary).includes(maxStr + curStr[i])) return maxStr;
    maxStr += curStr[i];
  }
  return maxStr;
}

function solution(msg) {
	let curStr = msg;
  const answer = [];
  const dictionary = {};
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < 26; i++) {
    dictionary[alphabet[i]] = i + 1;
  }

  while (curStr.length > 0) {
    let w = findMaxLen(dictionary, curStr); //현재 입력과 일치하는 가장 긴 문자열 w
    let c = curStr[w.length]; //다음 문자열
    answer.push(dictionary[w]);
    curStr = curStr.slice(w.length);
    dictionary[w + c] = Object.keys(dictionary).length + 1;
  }

  return answer;
}
