const palindromes = function (word) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = word
        .toLowerCase()
        .split("")
        .filter((character) => alphanumerical.includes(character))
        .join("");

    const reverse = cleanedString.split("").reverse().join("");
    return cleanedString === reverse;
};

palindromes('A car, a man, a maraca.')

// Do not edit below this line
module.exports = palindromes;
