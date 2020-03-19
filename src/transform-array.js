module.exports = function transform(arr) {
  if (arr instanceof Array) {
    return arr.reduce((acc, item, index) => {
      if (item === '--discard-next') {
        delete arr[index + 1];
        return acc;
      }
      if (item === '--discard-prev') {
        acc.pop();
        return acc;
      }
      if (item === '--double-next') {
        let t = arr[index + 1];
        if (t instanceof Object) t = Object.assign({}, t);
        if (t != undefined) acc.push(t);
        return acc;
      }
      if (item === '--double-prev') {
        let t = acc[acc.length - 1];
        if (t instanceof Object) t = Object.assign({}, t);
        if (t != undefined) acc.push(t);
        return acc;
      }
      acc.push(item);
      return acc;
    }, []);
  }
  throw new Error('Argument is not Array!');
};
