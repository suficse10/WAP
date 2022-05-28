function myFunctionTest(output, functionName) {
    let f = functionName();
    if (Array.isArray(f) && Array.isArray(output)) {
        if (arrayEquals(f, output)) {
            return "TEST SUCCEEDED";
        }
    } else if (f === output) {
        return "TEST SUCCEEDED";
    }
    return "TEST FAILED. Expected " + output + " found " + f;
}

function max(x, y) {
    if (x < y) {
        return y;
    }
    return x;
}

console.log("Expected output of max(20,10) is 10 " + myFunctionTest(10, function () { return max(20, 10); }));

function maxOfThree(x, y, z) {
    if (x < y && z < y) {
        return y;
    } else if (x < z && y < z) {
        return z;
    } else {
        return x;
    }
}

console.log("Expected output of maxOfThree(20, 4, 44) is 44 " + myFunctionTest(44, function () { return maxOfThree(20, 4, 44); }));

function isVowel(vowel) {
    if (vowel == 'a' || vowel == 'A' ||
        vowel == 'e' || vowel == 'E' ||
        vowel == 'i' || vowel == 'I' ||
        vowel == 'o' || vowel == 'O' ||
        vowel == 'u' || vowel == 'U') {
        return true;
    }
    return false;
}

console.log("Expected output of isVowel('a') is true " + myFunctionTest(true, function () { return isVowel('b'); }));

function sum(x) {
    let output = 0;
    for (let i = 0; i < x.length; i++) {
        output = output + parseInt(x[i]);
    }
    return output;
}

console.log("Expected output of sum([1, 2, 3, 4]) is 10 " + myFunctionTest(10, function () { return sum([1, 2, 3, 4]); }));

function multiply(x) {
    let output = 1;
    for (let i = 0; i < x.length; i++) {
        output = output * x[i];
    }
    return output;
}

console.log("Expected output of sum([1, 2, 3, 4]) is 10 " + myFunctionTest(24, function () { return multiply([1, 2, 3, 4]); }));

function reverse(s) {
    if (s === "")
        return "";
    else
        return reverse(s.substr(1)) + s.charAt(0);
}

console.log("Expected output of reverse('Hello World') is dlroW olleH " + myFunctionTest('dlroW olleH', function () { return reverse('Hello World'); }));

function findLongestWord(words) {
    let output = words[0];
    for (let i = 1; i < words.length; i++) {
        if (output.length < words[i].length)
            output = words[i];
    }
    return output;
}

console.log("Expected output of findLongestWord(['Hello', 'World', 'Md']) is Md " + myFunctionTest('Md', function () { return findLongestWord(['Hello', 'World', 'Md']); }));

function filterLongWords(words, i) {
    let output = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > i)
            output.push(words[i]);
    }
    return output;
}

function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

console.log("Expected output of filterLongWords(['Hello', 'World', 'Md'], 2) is 'Hello,World' " + myFunctionTest(['hello', 'World'], function () { return filterLongWords(['Hello', 'World', 'Md'], 2); }));


// jsfiddle

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
    return elem + 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function (elem, i, array) {
    return elem !== 3;
});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue + elem;
});
document.writeln(d + "<br/>");

const d2 = a.find(function (elem) { return elem > 1; }); //3
const d3 = a.findIndex(function (elem) { return elem > 1; }); //1
document.writeln(d2 + "<br/>");
document.writeln(d3 + "<br/>");


// My Code

const multiplyArray = a.map(function (e, i, array) {
    return e * 10;
})
document.writeln("Multiply by 10: " + multiplyArray.toString() + "<br />");

const only3Data = a.filter(function (e, i, array) {
    return e === 3;
})
document.writeln("Filter only 3 : " + only3Data.toString() + "<br/>");

const productOfElement = a.reduce(function (prevValue, e, i, array){
    return prevValue * e;
})

document.writeln("Product : " + productOfElement);