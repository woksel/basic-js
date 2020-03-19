const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693;

module.exports = function dateSample(sampleActivity) {
  const newActivity = parseFloat(sampleActivity);

  if (newActivity > MODERN_ACTIVITY
      || newActivity <= 0
      || (typeof sampleActivity != "string")
      || !isFinite(newActivity)) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / newActivity) / (K / HALF_LIFE_PERIOD));
};
