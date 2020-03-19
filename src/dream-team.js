module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, n) => {
      if (typeof n === 'string') return acc + n.match(/[a-z]/i)[0].toUpperCase();
      return acc;
    }, '').split('').sort().join('');
  }
  return false;
};
