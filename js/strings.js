//STEP 1
/*
let userName=window.prompt('Please enter your name:');
window.alert(userName.length);
*/
//STEP 2
/*
let userName=window.prompt('Please enter your name:');
let nameLength=userName.length
let userNum=window.prompt(`Please pick a number between 0-${nameLength}`);
window.alert(userName.charAt(userNum));
*/

//STEP 3
/*
let userFirstName=window.prompt('Please enter your first name:');
let userLastName=window.prompt('Please enter your Last name:');
let usrtName=userFirstName.concat(' ',userLastName);
window.alert(`Your name is: ${usrtName}`);
*/
//STEP 4
/*
let aString='The quick brown fox jumps over the lazy dog';
window.alert(aString.indexOf('fox'));
*/

//STEP 5
/*
let aString='The quick brown fox jumps over the lazy dog';
let userName=window.prompt('Please enter your name:');
window.alert(aString.replace('the lazy dog',userName));
*/

//STEP 7
/*
let str="The quick brown fox jumps over the lazy dog";
let userInput=window.prompt('Please give a word');
if (str.search(userInput)>-1){
    window.console.log(`The word ${userInput} is a part of the string `);
}else{
    window.console.log(`The word ${userInput} is not part of the string`)
}
*/


//STEP 8
/*
let oldString='The quick brown fox jumps over the lazy dog';
let newString=oldString.substr(31,42);
window.alert(newString.toUpperCase());
*/

//STEP 9
/*
let oldString='            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ' ;
let newString=oldString.trim();
window.alert(newString.toLowerCase());
*/

//STEP 10
/*
let aString='the quick brown fox jumps over the lazy dog';
let words=aString.split(' ');
for (let i = 0, x = words.length; i < x; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
window.alert( words.join(" "));
*/
