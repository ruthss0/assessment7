const addToZero = numArray => {
    for(let i = 0; i < numArray.length; i++){
        for(let j = i + 1; j < numArray.length; j++){
            if(numArray[i] + numArray[j] === 0){
                return true;
            }
        }
    }
    return false;
}

console.log(addToZero([1, 2, 3, -2]))
// I believe that time complexity is O(n^2), because there is a nested loop.

const hasUniqueChars = word => {
    for(let i = 0; i < word.length; i++){
        for(let j = i + 1; j < word.length; j++){
            if(word[i] === word[j]){
                return false
            }
        }
    }
    return true 
}

console.log(hasUniqueChars('Monday'))
// I believe that time complexity is O(n^2), because there is a nested loop.

const isPangram = sentence => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercase = sentence.toLowerCase();
    for(let i = 0; i < alphabet.length; i++){
        if(!lowercase.includes(alphabet[i])){
            return false;
        }
    }
    return true;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// I believe that time complexity is O(n), because there is one loop.

const findLongestWord = words => {
    let currentLongest = 0;
    for(let i = 0; i < words.length; i++){
        if(currentLongest < words[i].length){
            currentLongest = words[i].length;
        }
    }
    return currentLongest;
}

console.log(findLongestWord(["hi", "hello", "Paralelepipedo"]))
// I believe that time complexity is O(n), because there is one loop.