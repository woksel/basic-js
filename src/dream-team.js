module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let dreamTeam = [];
  for (let member of members){
    if (typeof(member) == 'string'){
      dreamTeam.push(member.trim()[0].toUpperCase());
    }
  }
  return dreamTeam.sort().join('');
};