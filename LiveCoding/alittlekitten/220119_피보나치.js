// 0 1 1 2 3 5 8 13 21 34 ....

let dp = [0, 1];

let dp2 = {
  0: 0,
  1: 1,
};

const fibo = (num) => {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  return fibo(num - 2) + fibo(num - 1);
};

const fibo2 = (num) => {
  for (let i = 2; i <= num; ++i) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[num];
};

const fibo3 = (num) => {
  if (typeof dp2[num] !== "number") dp2[num] = fibo3(num - 2) + fibo3(num - 1);
  return dp2[num];
};

// console.log(fibo(40));
// console.log(fibo2(40));
console.log(fibo3(40));
