function iterationFibs(num) {
  if (num <= 0) return [];
  let arr = [];
  let x = 0;
  let y = 1;
  for (let i = 0; i < num; i++) {
    arr.push(x);
    [x, y] = [y, x + y];
  }
  return arr;
}

// console.log(iterationFibs(8));

function fibsRec(num, x = 0, y = 1) {
  console.log("This was printed recursively");
  if (num <= 0) return [];
  return ((num-2)===0)?[x,y]:[x].concat(fibsRec(num - 1, y, x + y));
}

console.log(fibsRec(8));
