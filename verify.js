function validate() {
           
    var text = document.getElementById("text1").value;
    
    var regx = /^[6-9][0-9]{9}$/;
    if (regx.test(text)) {
        document.getElementById("lbltext").innerHTML = "Valid";
        document.getElementById("lbltext").style.visibility = "visible";
        document.getElementById("lbltext").style.color = "green";

    }

    else {
        document.getElementById("lbltext").innerHTML = "Invalid";
        document.getElementById("lbltext").style.visibility = "visible";
        document.getElementById("lbltext").style.color = "red";

    }
}