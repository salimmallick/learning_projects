
    function currentTime() {
        var time = new Date();
        var hh = time.getHours();
        var mm = time.getMinutes();
        var ss = time.getSeconds();
        var _time = hh + ":" + mm + ":" + ss;
        alert(_time);
        document.getElementById("Clock").innerText = _time;
    }
    currentTime();
    
//return hh + ":" + mm + ":" + ss;

var seconds =