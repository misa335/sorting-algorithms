class MergeSort {
  constructor(array) {
    this.array = array;
  }
  merge(left, right) {
    let merged = [];
    // console.log("left:", left, "right:", right);
    while (left.length && right.length) {
      merged.push(left[0] > right[0] ? right.shift() : left.shift());
    }

    //if we still have values, add them at the end of 'merged' array
    while (left.length) {
      merged.push(left.shift());
    }
    while (right.length) {
      merged.push(right.shift());
    }
    // console.log(merged);
    return merged;
  }

  sort() {
    let self = this;

    const func = (array) => {
      //base case
      if (array.length < 2) {
        return array;
      }

      //recursive case
      const middle = Math.floor(array.length / 2);
      const left = array.slice(0, middle);
      const right = array.slice(middle);
      const sortedLeft = func(left);
      const sortedRight = func(right);
      return this.merge(sortedLeft, sortedRight);
    };
    return func(self.array);
  }

  returnValue(value) {
    return value;
  }
}

module.exports = MergeSort;
