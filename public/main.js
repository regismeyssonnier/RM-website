function hello(){
    alert("hello world");
}

/**
 * ************Menu Function
 * @param {any} tt
 */
function blink() {
    setInterval(() => {
        if (Date.now() % 10 == 0) {
            document.getElementById("blinkp").style.color = "red";
        }
        else {
            document.getElementById("blinkp").style.color = "white";
        }
    }, 1000);
}

