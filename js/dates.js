//STEP 1
/*
let inputMonth=window.prompt('Please give a month ex for march put 3');
let inputYear=window.prompt('Please give a year ex 2020 ');
function findDays(month,year) {
    return new Date(year, month, 0).getDate();}
 window.console.log('There are : '+findDays(inputMonth,inputYear)+' days'); 
*/
//STEP 2
/*
let userDate=window.prompt('Please give a date ex: 04/23/2020');
let d=new Date(userDate);
function getMonthInText(date){
    let monthArray=[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return monthArray[d.getMonth()];
}
window.console.log(getMonthInText(d));
*/

//STEP 3
/*
let userDate=window.prompt('Please give a date ex: 04/23/2020');
let d=new Date(userDate);
function checkIfWeekend(date){
    //let monthArray=[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    console.log(date.getDay());
    if (date.getDay()>0 && date.getDay()<6){
        window.console.log('The date you enter is Not a weekend');
    }else{
        window.console.log('The date you enter is a weekend');
    }
}
checkIfWeekend(d);
*/

//STEP 4
/*
let d=new Date();
let day=d.getDay();
let dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
if (day===0){
    window.console.log(`Yesterday was: ${dayArray[6]}`);
}else{window.console.log(`Yesterday was: ${dayArray[day-1]}`);}
*/

//STEP 5
/*
let d=new Date();
let day=d.getDay();
let dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let dayInitial=(dayArray[day]).charAt(0);
window.console.log(`${dayArray[day]} is ${dayInitial}`);
*/