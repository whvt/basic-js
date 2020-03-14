const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
LOG2 = 0.693; 
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;

  let activity = parseFloat(sampleActivity);

  if (activity > 0 && activity < MODERN_ACTIVITY) {
    let ans = Math.log(MODERN_ACTIVITY / activity) / (LOG2 / HALF_LIFE_PERIOD);
    
    return Math.ceil(ans);
  } 
  return false;
};