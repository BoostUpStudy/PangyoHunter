// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const permutation = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);
    result.push(...attach);
  });
  return result;
};

const combination = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    result.push(...attach);
  });
  return result;
};

const combination2 = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const combinations = combination(arr, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    result.push(...attach);
  });
  return result;
};

const numbers = [1, 2, 3];

const result = permutation(numbers, 3);
const result2 = combination(numbers, 2);
const result3 = combination2(numbers, 2);
console.log(result);
console.log(result2);
console.log(result3);
