module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  const turns = 2 ** diskNumber - 1;
  const seconds = turns / (turnsSpeed / 3600);
  return {
    turns,
    seconds
  };
};
