module.exports = function createDreamTeam(members) {
if (Array.isArray(members)) {
    let ans = '';
    members = members.filter(item => typeof item == 'string').map( item => item.trim().toUpperCase() ).sort();
    for (let item of members){
        ans += item[0];
    }return ans;
}else return false;
};