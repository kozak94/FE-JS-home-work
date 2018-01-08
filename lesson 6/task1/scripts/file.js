window.onload = function () {
    var e1 = document.getElementById("first");
    var e2 = document.getElementById("second");
    var e3 = document.getElementById("third");

    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var p3 = document.getElementById("p3");

    e1.addEventListener("click",
        // e - параметр хранит объект с информацией о событии.
        function(e) {
            
            p1.style.backgroundColor = "red";
           
            // прекращение дальнейшего маршрута события.
            e.stopPropagation();
        },
    true);

    e2.addEventListener("click",
        function (e) {
            p2.style.backgroundColor = "green";
            
            e.stopPropagation();
        },
    false);

    e3.addEventListener("click",
        function (e) {
            p3.style.backgroundColor = "blue";
            

        },
    false);
}
