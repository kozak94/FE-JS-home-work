"use strict";
(function () {


    //Для поддержки IE-8 & 9 use ES5-shim

    //
    //npm install babel-preset-env --save-dev
    var a = 2;

    {
        let a = 3;
        console.log(a); // 3
    }
    console.log(a); // 2


    let c = 10;

    //let c = 11;

    if(true){
        let b = 1;
    }

    //console.log(b);


    const ARR = [5, 6];
        ARR.push(7);
        console.log(ARR); // [5,6,7]
        //ARR = 10; // TypeError
        // ARR[0] = 3; // значение можно менять
        //console.log(ARR); // [3,6,7]



    // Классическая функция

    let add = function(a, b) {
        return a + b;
    };

    // Стрелочная функция
    let addFunc = (a, b) => a + b;




    let arr = ['apple', 'banana', 'orange'];

    let breakfast = arr.map(fruit => {
            return fruit + 's';
    });

    console.log(breakfast); // ['apples', 'bananas', 'oranges']



    function Person() {
        // Конструктор Person() определяет `this` как экземпляр самого себя.
        this.age = 0;

        function growUp() {
            // Без использования `use strict`, функция growUp() определяет `this`
            // как глобальный объект, который отличается от `this`,
            // определённого конструктором Person().
            this.age++;
        }
    }
    var newP = new Person();

    console.log(newP);

    function Person() {
        var self = this;
        self.age = 0;

        function growUp() {
            // Коллбэк относится к переменной `self`,
            // значением которой является ожидаемый объект.
            self.age++;
        }
    }

    var newThisP = new Person();

    console.log(newThisP);


    //Default value
    let getPrice = (price, sale = 50) => price - price/100 * sale;

    console.log(getPrice(500));

    console.log(getPrice(500, 10));


     function sayHi (name){
         name = name || 'Def name'
         console.log(
             "Hello"+ name
         )
     }

    sayHi();




   //string property



    //

    let user = 'Max';

    let age = 27;

    console.log("My name" + user +"My age"+age);


    console.log(`My name  ${user}  My age ${age}`);

    console.log(`Hello, ${user}!`);
    console.log(`Hello, ${5+5}!`);

    let getName = ()=>'Function text';

    console.log(`Hello, ${getName()}!`);


    let htmlVar =`
        <div class="row">${user}</div>
        <div>${age}</div>
    `;

    document.body.innerHTML = htmlVar;



    //for...of используется для перебора в цикле и массивов.




    let userNames = ['user', 'user007', 'brus-li'];


    userNames.age = 16;
    console.log(userNames);

    for (let userName of userNames) {
        console.log(userName);
    }

    //for...in пользуется для перебора в цикле всех доступных для перебора свойств объекта.


    let userNicks = ['user2', 'user0072', 'brus-li2'];


    userNicks.age = 16;

    for (let userNick in userNicks) {
        console.log(userNick);
    }


    //class

    class Task {
        constructor() {
            console.log("Создан экземпляр task!");
        }

        showId() {
            console.log(23);
        }

        static loadAll() {
            console.log("Загружаем все tasks...");
        }
    }

    console.log(typeof Task); // function
    let task = new Task(); // "Создан экземпляр task!"
    task.showId(); // 23
    Task.loadAll(); // "Загружаем все tasks..."



    //extend

    class Car {
        constructor() {
            console.log("Создаём новый автомобиль");
        }
    }

    class Porsche extends Car {
        constructor() {
            super();
            console.log("Создаём Porsche");
        }
    }

    let newCarVar = new Porsche();

    console.log(newCarVar);


    //Promise

    var p = new Promise(function(resolve, reject) {
        if (true) {
            resolve(/* значение */);  // fulfilled successfully (успешный результат)
        } else {
            reject(/* reason */);  // rejected (ошибка)
        }
    });

    p.then((val) => console.log("successfully", val),
        (err) => console.log("Error", err))

}());



