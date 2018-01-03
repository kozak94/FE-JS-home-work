window.onload = function () {
    var title = document.getElementById("title");

    var p1 = document.createElement("p");
    p1.innerHTML = "js work";
    title.appendChild(p1);

    var body = document.getElementById("body");
    var p2 = document.createElement("p");
    p2.innerHTML = "js work";
    document.body.insertBefore(p2, title);
}