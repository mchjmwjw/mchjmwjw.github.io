window.onload = function() {
    var oDiv = document.getElementById("outer").getElementsByTagName("div");
    var oBtn = document.getElementsByTagName("button")[0];
    var lock = false;
    function cancel() {
        for(var i = 0; i < oDiv.length; i++) {
            oDiv[i].style["animation-name"] = "";
        }
        lock = false;
    }
    oBtn.onclick = function() {
        //for (var i = 0; i < oDiv.length; i++) oDiv[i].style.background = "red";
        if(!lock) {
            lock = true;
            for(var i = 0; i < oDiv.length; i++) {
                oDiv[i].style["animation-name"] = "example";
                oDiv[i].style["animation-duration"] = "8s";
            }
            setTimeout(cancel,8000);
        }
    }
}
