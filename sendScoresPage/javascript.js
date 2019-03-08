/**
 * Created by Allen II on 11/29/2015.
 */
function clickDown(){
    document.getElementById("div_back").style.backgroundColor = "#e55c5a";
}
function clickUp(){
    document.getElementById("div_back").style.backgroundColor = "#ff6765";
}

//function getWidthAuto(){
//    var width = screen.width+"px";
//    document.getElementById("top").style.width = width;
//}
function toggle(source) {
    checkboxes = document.getElementsByName('foo');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function changeImg1(){
    var image = document.getElementById("myImg1");
    if(image.src.match("images/confirmB.png")){
        image.src = "images/confirmA.png";
    }else{
        image.src = "images/confirmB.png";
    }
    document.getElementById("confirmS").style.color = "#fff";
}
function changeImg2(){
    var image = document.getElementById("myImg1");
    if(image.src.match("images/confirmA.png")){
        image.src = "images/confirmB.png";
    }else{
        image.src = "images/confirmA.png";
    }
    document.getElementById("confirmS").style.color = "#ff6765";

}
function changeImg3(){
    var image = document.getElementById("myImg2");
    if(image.src.match("images/confirmB.png")){
        image.src = "images/confirmA.png";
    }else{
        image.src = "images/confirmB.png";
    }
    document.getElementById("confirmW").style.color = "#fff";
}
function changeImg4(){
    var image = document.getElementById("myImg2");
    if(image.src.match("images/confirmA.png")){
        image.src = "images/confirmB.png";
    }else{
        image.src = "images/confirmA.png";
    }
    document.getElementById("confirmW").style.color = "#ff6765";

}
function visibleShade(){
    document.getElementById("shade").style.display = "block";
    document.getElementById("popupWindow").style.display = "block";
    document.body.style.cssText = "overflow:hidden;+overflow:none;_overflow:none;padding:0 0px 0 0;";
}
function killShade(){
    document.getElementById("shade").style.display = "none";
    document.getElementById("popupWindow").style.display = "none";
}
function changePwccImgB(){
    var image = document.getElementById("CB");
    if(image.src.match("images/CB.png")){
        image.src = "images/CA.png";
    }else{
        image.src = "images/CB.png";
    }
    document.getElementById("pwcb_confirm").style.color = "#fff";
}
function changePwccImgA(){
    var image = document.getElementById("CB");
    if(image.src.match("images/CA.png")){
        image.src = "images/CB.png";
    }else{
        image.src = "images/CA.png";
    }
    document.getElementById("pwcb_confirm").style.color = "#FF6765";
}