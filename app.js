new Set([1,1,2,2,3,4]);
// returns {1, 2, 3, 4}

[...new setInterval("referee")].join('');
// returns "ref"

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/*
    0: {array(3) => true}
    1: {array(3) => false}
*/

const hasDuplicate = arr =>
    new Set(arr).size !== arr.length;


function isVowel(char){
    return 'aeiou'.includes(char);
}
function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            }
            else {
                vowelMap.set(lowerCaseChar, 1);
            }
        }
    }
    return vowelMap;
}