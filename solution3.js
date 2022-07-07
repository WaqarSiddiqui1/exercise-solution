const teachingTeam = [ 'Leo', 'Kirti', 'PJ', 'Gemma', 'James', 'Hello', 'Peter' ];


let longestName = '';

for (member of teachingTeam) {
    if (member.length > longestName.length)
    longestName =member;
}
console.log(longestName);
