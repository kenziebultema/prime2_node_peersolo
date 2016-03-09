var randomNumber = require('./randomNumber');
var toUSD = require('./toUSD');

function accountMoney(){
    return toUSD(randomNumber(100,1000000));
}

function accountText(){
    return "Account balance: \n";
}

exports.accountText = accountText;
exports.accountMoney = accountMoney;
