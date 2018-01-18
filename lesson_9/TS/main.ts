//https://www.typescriptlang.org/index.html#download-links
//https://nodejs.org/uk/
//Compile
//tsc main.ts
//tsc main.ts -w



var a:number;
a =1;
console.log(a);

var stringValue :any = 1111;

var  stringValue = "1";
var numberValue = 1;

//var isEqual = (stringValue == numberValue);

var isEqual = (stringValue == numberValue.toString());


var voidVariable :void;
voidVariable = undefined;//null

enum orderList {
    Closed = 5,
    Opened = 4,
    Pending =2,
    Canceled = 3
}

var enumVar: orderList = orderList.Pending;
console.log(enumVar);

var enumRectangle = {
    widht:50,
    height:50
}
//
//enumRectangle = {
//    widht:50,
//    height:50,
//    A:20
//}


enumRectangle = {
    widht:10,
    height:30
}

//Array

var arrString:string[] = ['Hi', 'Max'];
var arrAnyVar:any[]= ['Hi', 1, true];


//Function

function add(a:number, c:number):number{
    return a+c;
}
console.log(add(5, 6));



//Declaration

//npm install typings -g

function showVar(){
    console.log(globalVar);
}

$( document ).ready(function() {
    console.log( "ready!" );
});


var FirthGlobalValueble:number = 111;




