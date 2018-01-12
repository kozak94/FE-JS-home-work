if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

function init() {
    var buy = document.getElementById("buy");
    var size = document.getElementById("size");

    SingUp.inputName.onchange = nameOnChange;
    SingUp.inputSName.onchange = nameSOnChange;
    SingUp.inputPass.onchange = passOnChange;
    SingUp.inputEmail.onchange = emailOnChange;
    SingUp.onchange = formOnChange;
    // size.addEventListener("change", priceOfSize(), false);
    // submit.addEventListener("click", AJAX, false);
    submit.disabled = "true";
}

// function priceOfSize() {
//     var a = document.getElementById("price");
//     var b = document.getElementById("size").value;
//     a.innerHTML = b;
// }






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

function nameSOnChange() {
    var pattern = /\S{2,}/;
    validate(this, pattern);
}

function passOnChange() {
    var pattern = /{5,}d/;
    validate(this, pattern);
}

function emailOnChange() {
    var pattern = /.+@.+\..+/i; // https://habrahabr.ru/post/175375/ cool example regular expression
    validate(this, pattern);
}

function testCheckbox() {
    var test = document.getElementById(inputCheckbox).checked
    if (test == true){
        test.className = "form-control right";
    } 
    else {
        test.className = "form-control error ";
    }
    
}


function formOnChange() {
    for (var i = 0; i < SingUp.elements.length; ++i) {
        var elem = SingUp.elements[i];
        if (elem.onchange) {
            elem.onchange();
            if (elem.className == "form-control error") submit.disabled = "true";
            else submit.removeAttribute("disabled");
        }
    }
}