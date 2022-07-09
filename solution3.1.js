const teachingTeam = [ 'Leo', 'Kirti', 'PJ', 'Gemma', 'James', 'Hello', 'Peter' ];


<<<<<<< HEAD

// Scan 1: find the length of the longest name.

let lengthOfLongestName = 0;

for (let member of teachingTeam) {
    if (member.length > lengthOfLongestName)
        lengthOfLongestName = member.length;
}

// Scan 2: display names of that longest length.

for (let member of teachingTeam) {
    if (member.length === lengthOfLongestName)
        console.log(member);
}
=======
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
>>>>>>> q2
