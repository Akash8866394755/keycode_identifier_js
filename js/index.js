window.onload = function() {

    window.onkeydown = function(e) {
        var container = document.getElementById("container");
        container.style.display = "none";
        
        var smallKeyResult = document.getElementById("sm-result");
        smallKeyResult.innerHTML = e.keyCode;

        var bigKeyResult = document.getElementById("big-result");
        bigKeyResult.innerHTML = e.keyCode;

        var keyResult = document.getElementById("key-result");

        if(e.ctrlKey && e.keyCode == 32) {
            keyResult.innerHTML = "Spacebar";
        }
        else {
        keyResult.innerHTML = e.key;

        }
    }
}
