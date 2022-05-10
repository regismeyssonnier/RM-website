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

function $(id){
    return document.getElementById(id);
}
function $t(tag) {
    return document.getElementsByTagName(tag);
}

function Change_Theme() {
    localStorage.setItem('custom', 'false');
    sessionStorage.setItem('custom', 'false');
    var color = $("theme-select").value;
    var colorc = $("theme-select-center").value;
    if (color != "default") {
        $("idnavleft").className = "navleft" + color;
        localStorage.setItem('navleft', color);
        sessionStorage.setItem('navleft', color);
    }
    else {
        $("idnavleft").className = "navleft";
        localStorage.setItem('navleft', "default");
        sessionStorage.setItem('navleft', "default");
    }

    if (colorc != "default") {
        
        $("idnavcenter").className = "navcenter" + colorc;
        localStorage.setItem('navcenter', colorc);
        sessionStorage.setItem('navcenter', colorc);
    }
    else {
       
        $("idnavcenter").className = "navcenter";
        localStorage.setItem('navcenter', "default");
        sessionStorage.setItem('navcenter', "default");
    }

    var text = $("theme-text-select").value;
    if (text != "default") {
        $t("body")[0].style.color = text;
        localStorage.setItem('bodycolor', text);
        sessionStorage.setItem('bodycolor', text);
    }
    else {
        $t("body")[0].style.color = "white";
        localStorage.setItem('bodycolor', "white");
        sessionStorage.setItem('bodycolor', "white");
    }

    var link = $("theme-link-select").value;
    if (link != "default") {
        var sz = $t("a").length;
        for (var i = 0; i < sz; i++) {
            $t("a")[i].style.color = link;
        }
        var szp = $t("p").length;
        for (var i = 0; i < szp; i++) {
            $t("p")[i].style.color = link;
        }
        localStorage.setItem('text', link);
        sessionStorage.setItem('text', link);
    }
    else {
        var sz = $t("a").length;
        for (var i = 0; i < sz; i++) {
            $t("a")[i].style.color = "white";
        }
        var szp = $t("p").length;
        for (var i = 0; i < szp; i++) {
            $t("p")[i].style.color = "white";
        }
        localStorage.setItem('text', "white");
        sessionStorage.setItem('text', "white");
    }


}


function Load_Theme() {
    var color = localStorage.getItem('navleft');
    console.log('color ' + color);
    if (!color) {
        color = sessionStorage.getItem('navleft');
        if (!color) color = "default";
    }
    var colorc = localStorage.getItem('navcenter');
    if (!colorc) {
        colorc = sessionStorage.getItem('navcenter');
        if (!colorc) colorc = "default";
    }

    if (color != "default") {
        $("idnavleft").className = "navleft" + color;
        
    }
    else {
        $("idnavleft").className = "navleft";
        
    }

    console.log($("idnavleft").className);

    if (colorc != "default") {

        $("idnavcenter").className = "navcenter" + colorc;
       
    }
    else {

        $("idnavcenter").className = "navcenter";
       
    }

    console.log($("idnavcenter").className);

    var text = localStorage.getItem('bodycolor');
    if (!text) {
        text = sessionStorage.getItem('bodycolor');
        if (!text) text = "default";
    }

    if (text != "default") {
        $t("body")[0].style.color = text;
    }
    else {
        $t("body")[0].style.color = "white";
        
    }

    var link = localStorage.getItem('text');
    if (!link) {
        link = sessionStorage.getItem('text');
        if (!link) link = "default";
    }

    if (link != "default") {
        var sz = $t("a").length;
        for (var i = 0; i < sz; i++) {
            $t("a")[i].style.color = link;
        }
        var szp = $t("p").length;
        for (var i = 0; i < szp; i++) {
            $t("p")[i].style.color = link;
        }
        
    }
    else {
        var sz = $t("a").length;
        for (var i = 0; i < sz; i++) {
            $t("a")[i].style.color = "white";
        }
        var szp = $t("p").length;
        for (var i = 0; i < szp; i++) {
            $t("p")[i].style.color = "white";
        }
       
    }



}


function Save_Theme() {

     
    
        localStorage.setItem('navleft', sessionStorage.getItem('navleft'));
         
        localStorage.setItem('navcenter', sessionStorage.getItem('navcenter'));
           
        localStorage.setItem('bodycolor', sessionStorage.getItem('bodycolor'));

        localStorage.setItem('text', sessionStorage.getItem('text'));
    
   


}


function Change_Custom_Theme() {
    localStorage.setItem('custom', 'true');
    sessionStorage.setItem('custom','true');

    var color = $("custom-theme").value;
    var colorc = $("custom-theme-center").value;
    if (color != "default") {
        $("idnavleft").style.backgroundColor = color;
        $("idnavleft").style.opacity = 0.75;
        localStorage.setItem('custom-theme', color);
        sessionStorage.setItem('custom-theme', color);
    }
    else {
        $("idnavleft").className = "navleft";
        localStorage.setItem('custom-theme', "default");
        sessionStorage.setItem('custom-theme', "default");
    }

    if (colorc != "default") {

        $("idnavcenter").style.backgroundColor = colorc;
        //$("idnavcenter").style.opacity = 0.75;
        localStorage.setItem('custom-theme-center', colorc);
        sessionStorage.setItem('custom-theme-center', colorc);
    }
    else {

        $("idnavcenter").className = "navcenter";
        localStorage.setItem('custom-theme-center', "default");
        sessionStorage.setItem('custom-theme-center', "default");
    }

    var text = $("custom-text").value;
    if (text != "default") {
        $t("body")[0].style.color = text;
        localStorage.setItem('custom-text', text);
        sessionStorage.setItem('custom-text', text);
    }
    else {
        $t("body")[0].style.color = "white";
        localStorage.setItem('custom-text', "white");
        sessionStorage.setItem('custom-text', "white");
    }

    var link = $("custom-link").value;
    if (link != "default") {
        var sz = $t("a").length;
        for (var i = 0; i < sz; i++) {
            $t("a")[i].style.color = link;
        }
        var szp = $t("p").length;
        for (var i = 0; i < szp; i++) {
            $t("p")[i].style.color = link;
        }
        localStorage.setItem('custom-link', link);
        sessionStorage.setItem('custom-link', link);
    }
    else {
        var sz = $t("a").length;
        for (var i = 0; i < sz; i++) {
            $t("a")[i].style.color = "white";
        }
        var szp = $t("p").length;
        for (var i = 0; i < szp; i++) {
            $t("p")[i].style.color = "white";
        }
        localStorage.setItem('custom-link', "white");
        sessionStorage.setItem('custom-link', "white");
    }
   
    

}


function Load_Custom_Theme() {
    var color = localStorage.getItem('custom-theme');
    console.log('color ' + color);
    if (!color) {
        color = sessionStorage.getItem('custom-theme');
        if (!color) color = "default";
    }
    var colorc = localStorage.getItem('custom-theme-center');
    if (!colorc) {
        colorc = sessionStorage.getItem('custom-theme-center');
        if (!colorc) colorc = "default";
    }

    if (color != "default") {
        $("idnavleft").style.backgroundColor = color;
        $("idnavleft").style.opacity = 0.75;
    }
    else {
        $("idnavleft").className = "navleft";

    }

    console.log($("idnavleft").className);

    if (colorc != "default") {

        $("idnavcenter").style.backgroundColor = colorc;
        //$("idnavcenter").style.opacity = 0.75;
    }
    else {

        $("idnavcenter").className = "navcenter";

    }

    console.log($("idnavcenter").className);

    var text = localStorage.getItem('custom-text');
    if (!text) {
        text = sessionStorage.getItem('custom-text');
        if (!text) text = "default";
    }

    if (text != "default") {
        $t("body")[0].style.color = text;
    }
    else {
        $t("body")[0].style.color = "white";

    }

    var link = localStorage.getItem('custom-link');
    if (!link) {
        link = sessionStorage.getItem('custom-link');
        if (!link) link = "default";
    }

    if (link != "default") {
        var sz = $t("a").length;
        for (var i = 0; i < sz; i++) {
            $t("a")[i].style.color = link;
        }
        var szp = $t("p").length;
        for (var i = 0; i < szp; i++) {
            $t("p")[i].style.color = link;
        }

    }
    else {
        var sz = $t("a").length;
        for (var i = 0; i < sz; i++) {
            $t("a")[i].style.color = "white";
        }
        var szp = $t("p").length;
        for (var i = 0; i < szp; i++) {
            $t("p")[i].style.color = "white";
        }

    }



}



function Save_Custom_Theme() {

    

    localStorage.setItem('custom-theme', sessionStorage.getItem('custom-theme'));

    localStorage.setItem('custom-theme-center', sessionStorage.getItem('custom-theme-center'));

    localStorage.setItem('custom-text', sessionStorage.getItem('custom-text'));

    localStorage.setItem('custom-link', sessionStorage.getItem('custom-link'));




}

function Save_Custom(){

    localStorage.setItem('custom', sessionStorage.getItem('custom'));
}