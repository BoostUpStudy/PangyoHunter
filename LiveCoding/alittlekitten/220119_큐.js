// push pop void(print)

const queue = () => {
  let arr = [];
  const push = (num) => {
    arr.push(num);
  };
  const pop = () => {
    let tmp = arr[0];
    arr = arr.slice(1);
    return tmp;
  };
  const print = () => {
    console.log(arr);
  };
  const empty = () => {
    arr = [];
  };
  const front = () => {
    return arr[0];
  };
  const rear = () => {
    return arr[arr.length - 1];
  };

  return { push, pop, print, empty, front, rear };
};

const a = queue();
a.push(1);
a.push(2);
a.push(3);
a.push(4);
console.log(a.pop());
console.log(a.pop());
console.log(a.front());
console.log(a.rear());
a.print();
a.empty();
a.print();
console.log(a.arr);
