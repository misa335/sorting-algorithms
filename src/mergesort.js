const mergeSort = arr => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));
  return Array.from({ length: left.length + right.length }, () => {
    if (!left.length) return right.shift();
    else if (!right.length) return left.shift();
    else return left[0] > right[0] ? right.shift() : left.shift();
  });
};

console.log(mergeSort([3, 5, 6, 2, 1, 4]));