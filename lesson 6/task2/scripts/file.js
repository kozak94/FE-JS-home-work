window.onload = function() {
    var main = document.getElementById("main")

    document.getElementById("main").onkeydown = function (e){
        if (e.ctrlKey && e.keyCode == 83 ) {
            alert("SAVE");
        }
        else if (e.ctrlKey && e.keyCode == 65){
            alert('CHOSEN ALL');     
        }
        else if (e.ctrlKey && e.shiftKey && e.keyCode == 83){
            alert('');
        };
    }

}