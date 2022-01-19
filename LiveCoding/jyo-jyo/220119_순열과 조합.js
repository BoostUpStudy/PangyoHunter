/*
 Input: nums = [1,2,3]
 Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

const permutations = (arr, selectedNumber) => {
  const result = [];
  if (selectedNumber === 1) return arr.map((value) => [value]);
  arr.forEach((value) => {
    const rest = arr.filter((v) => value != v);
    const att = permutations(rest, selectedNumber - 1);
    const newArr = att.map((v) => [value, ...v]);
    result.push(...newArr);
  });
  return result;
};

const combinations = (arr, selectedNumber) => {
  const result = [];
  if (selectedNumber === 1) return arr.map((value) => [value]);
  arr.forEach((value, index) => {
    const rest = arr.filter((_, idx) => idx > index);
    const att = combinations(rest, selectedNumber - 1);
    const newArr = att.map((v) => [value, ...v]);
    result.push(...newArr);
  });
  return result;
};

const numbers = [1, 2, 3];

const result = permutations(numbers, 3);
console.log(result);
console.log(combinations(numbers, 2));
