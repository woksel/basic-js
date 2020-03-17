module.exports = function countCats(str) {
  if (str==null) return 0;
  let n=0;
  for (let x of str) {
    for (let y of x){
      if (y=="^^") n++;
    }
  }
  return n;
};

