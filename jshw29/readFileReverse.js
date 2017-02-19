const fs = require('fs');



fs.readFile('readFileReverse.js', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const myString = data.toString();
        let reversedString = "",
            i = myString.length - 1;
        while (i >= 0) {
            reversedString += myString.charAt(i--);
        }
        console.log('file contents\n', reversedString);
    }
});

console.log('Done');