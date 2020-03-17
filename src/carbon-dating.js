const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if(typeof sampleActivity !== 'string'){ 
        return false;
    }
    
    if(/[^[0-9.,]/.test(sampleActivity)){ 
      return false;
  }
    let newActivity = parseFloat(sampleActivity);
    if(sampleActivity<=0 || sampleActivity>MODERN_ACTIVITY){
        return false
    } 
    
    
    const k = 0.693/HALF_LIFE_PERIOD;
    let time = (Math.log(MODERN_ACTIVITY/newActivity))/k;
    return  Math.ceil(time);
}  