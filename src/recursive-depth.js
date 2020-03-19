module.exports = function DepthCalculator() {
  function calculateDepth(array) {
    return array.reduce((acc, item) => {
      if (item instanceof Array) {
        const d = calculateDepth(item);
        if (d + 1 > acc) return d + 1;
      }
      return acc;
    }, 1);
  }
  return {
    calculateDepth
  };
};
