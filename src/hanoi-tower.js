module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
   let n = Math.pow(2,disksNumber)-1;
   let sec = n/(turnsSpeed/3600);
   return {
    turns: n,
    seconds: sec
}
}