const teachingTeam = [ 'Leo', 'Kirti', 'PJ', 'Gemma', 'James', 'Hello', 'Peter' ];



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
