export function hello(){
    
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

export function Change_Theme() {
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


export function Load_Theme() {
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

function Load_Actual_Theme() {

    Save_Custom();
    var custom = localStorage.getItem('custom');
    console.log('custom ' + custom);
    if (!custom) {
        custom = sessionStorage.getItem('custom');
        if (!custom) custom = "false";
    }

    if (custom == "false") {
        Save_Theme();
        Load_Theme();
    }
    else {
        Save_Custom_Theme();
        Load_Custom_Theme();
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


export function IMG_ZOOM(id) {
    
    $(id).addEventListener("mousemove", (event) => {
        let x = event.clientX; 
        let y = event.clientY;
        //window.innerWidth
        //alert($(id).style.left);
        
        var m = (window.innerWidth / 2)+250;
        var r = (x - m) / 2;
        var l = (m - x) / 2;
        var m2 = (window.innerHeight / 2) + 0;
        var b = (y - m2) / 2;
        var u = (m2 - y) / 2;
        var ty = 'translateY(';
        if (y < m) {
            ty += u + 'px)';
        }
        else {
            ty += b + 'px)';
        }
        if (x > m) {
            $(id).style.transform = 'scale(3.0) translateX(-' + r +  'px)' + ty;
        }
        else {
            $(id).style.transform = 'scale(3.0) translateX(' + l + 'px)'  + ty;
        }
        //console.log(x - m);
    });

    $(id).addEventListener("mouseout", () => {
        $(id).style.transform = 'scale(1.0)';
        //$(id).style.width = "600px";
        //$(id).style.height = "400px";

    });

}

var gallery = [];
gallery.push(['head2.png', 300, 400, 'My Photo']);
gallery.push(['me08062022.jpg', 400, 578, 'My Photo']);
gallery.push(['pc.jpg', 600, 400, 'My high end PC']);
gallery.push(['pc2.jpg', 350, 550, 'My PC']);
let I = 0;

export function NEXT() {
    I++;
    I = I % gallery.length;
    $('imggal').src = 'Image/'+gallery[I][0];
    $('imggal').style.width = gallery[I][1] + 'px';
    $('imggal').style.height = gallery[I][2] + 'px';
    $('text_img').innerHTML = gallery[I][3];
}

export function PREV() {
    I--;
    I = (I == -1) ? gallery.length-1 : I;
    $('imggal').src = 'Image/' +gallery[I][0];
    $('imggal').style.width = gallery[I][1] + 'px';
    $('imggal').style.height = gallery[I][2] + 'px';
    $('text_img').innerHTML = gallery[I][3];
}

export function updateFirst(event) {
    
    document.querySelector("#custom-theme-center").value = '#000000';//event.target.value;
   
}

export function changeFirst(event) {
   
    document.querySelector("#custom-theme-center").value = event.target.value;

}


function startup() {
   
    const defaultColor = "#0000ff";
    var colorPicker = document.querySelector("#custom-theme-center");
    colorPicker.value = defaultColor;
    alert(colorPicker.value);
    colorPicker.addEventListener("input", updateFirst, false);
    colorPicker.addEventListener("change", updateFirst, false);
    colorPicker.select();
}


export { Load_Actual_Theme, Change_Custom_Theme, startup };
export default { Load_Actual_Theme, Change_Custom_Theme, startup };