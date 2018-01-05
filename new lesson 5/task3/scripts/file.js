
    function ValidPhone() {
        var pattern = /\8\(\d{3}\)\d{7}/; 
        var myPhone = document.getElementById('numberPhone').value;
        var valid = pattern.test(myPhone);
        if (valid)  document.getElementById("numberPhone").className = "right";
          else document.getElementById("numberPhone").className = "wrong";
            return valid;  
        } 