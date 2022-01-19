const queue = () => {
  let arr = [];
  const push = (number) => {
    arr.push(number);
  };
  const pop = () => {
    if (arr.length === 0) return "queue is empty!!";
    const result = arr[0];
    arr = arr.filter((_, idx) => idx != 0);
    return result;
  };

  const front = () => arr[0];
  const rear = () => arr[arr.length - 1];

  const print = () => console.log(arr);
  return { push, pop, print, front, rear };
};

const q = queue();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
console.log(q.pop());
console.log(q.pop());
console.log(q.front());
console.log(q.rear());
q.print();
