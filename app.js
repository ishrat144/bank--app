AccountDetails = (
  AccountNo=1236428705,
  balance=600000)
  
function Accountbalance() { 
  var Accountbalance = document.getElementById("demo")
 document.getElementById("demo").innerHTML = Name +' '+
  "your Account balance is"+'='+balance;
}
AccountHolder = (
  Name="Swati Rani",
  mobile=9245789681,
  Account=AccountDetails)

  function withdraw() {
    var withdraw = document.getElementById("withdraw")
    var amount = document.getElementById('wdr').value;

  AccountHolder+Account+withdraw;
  alert("withdraw button click")
  Balance = balance - amount;
  document.getElementById("demo").innerHTML = Name + ' '+
  "your  Account balance is" +'='+Balance;
}

function Deposit() {
  var Deposit = document.getElementById("Deposit")
  var amount = document.getElementById('Dpt').value;

  AccountHolder+Account+Deposit;
  alert("Deposit button click")
  Balance = (-balance) + (-amount);
  document.getElementById("demo").innerHTML = Name + ' '+
  "your Account balance is" +'='+Balance;
}
