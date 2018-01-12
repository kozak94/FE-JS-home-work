if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

function init() {
    var buy = document.getElementById("buy");
    var size = document.getElementById("size");

    pieForm.inputName.onchange = nameOnChange;
    pieForm.inputNumber.onchange = numberOnChange;
    pieForm.inputEmail.onchange = emailOnChange;
    pieForm.onchange = formOnChange;
    size.addEventListener("change", priceOfSize(), false);
    buy.addEventListener("click", AJAX, false);
    buy.disabled = "true";
}

function priceOfSize() {
    var a = document.getElementById("price");
    var b = document.getElementById("size").value;
    a.innerHTML = b;
}






function validate(elem, pattern) {
    var res = elem.value.search(pattern);
    if (res == -1) {
        elem.className = "form-control error";
    } else {
        elem.className = "form-control right";
    }
}

function nameOnChange() {
    var pattern = /\S{2,}/;
    validate(this, pattern);
}

function numberOnChange() {
    var pattern = /^\+38\(\0d{2}\)\d{7}$/;
    validate(this, pattern);
}

function emailOnChange() {
    var pattern = /.+@.+\..+/i; // https://habrahabr.ru/post/175375/ cool example regular expression
    validate(this, pattern);
}


function formOnChange() {
    for (var i = 0; i < pieForm.elements.length; ++i) {
        var elem = pieForm.elements[i];
        if (elem.onchange) {
            elem.onchange();
            if (elem.className == "form-control error") buy.disabled = "true";
            else buy.removeAttribute("disabled");
        }
    }
}

function AJAX() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "good.html", true);
    xhr.onreadystatechange = function () {
        
            if (xhr.status == 200) {
                document.getElementById("sucses").innerHTML += xhr.responseText;
            }
        
    }

    //xhr.send();
}