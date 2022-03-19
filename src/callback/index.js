//Working with callbacks in javascript
function sum(num1 , num2){
  return num1 + num2;
}

function calculate(num1 , num2 , callback){
  return callback(num1,num2);
}

console.log(calculate(2,2,sum));

//function date receive a callback (another function)
function date(callback){
  console.log(new Date); //first , print current date
  setTimeout(function(){ //then , wait for four seconds and call another function (callback)
    let date = new Date;
    callback(date);
  }, 4000);
}

function printDate(dateNow){
  console.log(dateNow);
}

date(printDate)


function getAmountOfMoney(chileanPesos , usdDollar){
  return chileanPesos * usdDollar;
}


function getTotalMoney(chileanPesos, usdDollar , callback){
  return callback(chileanPesos , usdDollar);
}

console.log(getTotalMoney(795,2500,getAmountOfMoney));
