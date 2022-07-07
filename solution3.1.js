const teachingTeam = [ 'Leo', 'Kirti', 'PJ', 'Gemma', 'James', 'Hello', 'Peter' ];


let result = [];

let lengthOfLongestName = 0;

for (member of teachingTeam) {
    if (member.length > lengthOfLongestName) {
        result = [];
        result.push(member);
        lengthOfLongestName = member.length;
    }
    else if (member.length === lengthOfLongestName) {
        result.push(member);
    }
}
console.log(result);