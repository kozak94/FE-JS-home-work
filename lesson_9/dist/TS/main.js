//https://www.typescriptlang.org/index.html#download-links
//https://nodejs.org/uk/
//Compile
//tsc main.ts
//tsc main.ts -w
var a;
a = 1;
console.log(a);
var stringValue = 1111;
var stringValue = "1";
var numberValue = 1;
//var isEqual = (stringValue == numberValue);
var isEqual = (stringValue == numberValue.toString());
var voidVariable;
voidVariable = undefined; //null
var orderList;
(function (orderList) {
    orderList[orderList["Closed"] = 5] = "Closed";
    orderList[orderList["Opened"] = 4] = "Opened";
    orderList[orderList["Pending"] = 2] = "Pending";
    orderList[orderList["Canceled"] = 3] = "Canceled";
})(orderList || (orderList = {}));
var enumVar = orderList.Pending;
console.log(enumVar);
var enumRectangle = {
    widht: 50,
    height: 50
};
//
//enumRectangle = {
//    widht:50,
//    height:50,
//    A:20
//}
enumRectangle = {
    widht: 10,
    height: 30
};
//Array
var arrString = ['Hi', 'Max'];
var arrAnyVar = ['Hi', 1, true];
//Function
function add(a, c) {
    return a + c;
}
console.log(add(5, 6));
//Declaration
//npm install typings -g
function showVar() {
    console.log(globalVar);
}
$(document).ready(function () {
    console.log("ready!");
});
var FirthGlobalValueble = 111;
//# sourceMappingURL=main.js.map