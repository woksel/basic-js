module.exports = function countCats(backyard) {
  return backyard.reduce((accOuter, itemOuter) => accOuter + itemOuter.reduce((accInner, itemInner) => (itemInner === '^^' ? accInner + 1 : accInner), 0), 0);
};
