//STEP 1
/*
let word = prompt('Enter a word: ');
let wordToArray=word.split("");
let orderedWord=wordToArray.sort();
let newWord='';
for (const char of orderedWord) {
    newWord +=char;
  }
window.console.log(newWord);
*/

//STEP 2
/*
function upperCaseFirstLetter(term){
    let wordToArray=term.split(" ");
    let newTerm='';
    for (const word of wordToArray) {
        UpperCaseWord=word.replace(word.charAt(0),word.charAt(0).toUpperCase());
        newTerm += UpperCaseWord+' ';
    }
    return(newTerm);
}
let inputWords = prompt('Enter a sentance: ');
window.console.log(upperCaseFirstLetter(inputWords));
*/

//STEP 3
/*
function countVowels(term) { 
    let count = term.match(/[aeiou]/gi).length;
    return count;
}
let inputWords = prompt('Enter a sentance: ');
window.console.log(countVowels(inputWords));
*/

//STEP 4
/*
function stringId(length){
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newID = "";
    if(length<=0){
        return "the input length is 0 or invalid";
    }else{
    for (let i=0; i<length; i++){
        let num=Math.floor(Math.random() * charList.length);
        newID += charList.charAt(num);
    }
    return newID;}
}
let userInput = prompt('Please specify the length of ID: ');
window.console.log(`String ID:${stringId(userInput)}`);
*/

//STEP 5
/*
function Longest_Country_Name(aList){
    let Longest_Name=[''];
    aList.forEach(myFunction);
    function myFunction(value){
        if(value.length>Longest_Name[0].length){
            Longest_Name.length=0
            Longest_Name[0]=value
        }
        else if(value.length==Longest_Name[0].length){
            Longest_Name.push(value);}
    } return Longest_Name.join();
}
window.console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
*/