/**
 * Created by Allen II on 12/1/2015.
 */
function changeColor1(){
    document.getElementById("choose_write1").style.color = "#ff6765";
    document.getElementById("infoFamily").style.display = "block";
    document.getElementById("uninput").style.display = "none";
    document.getElementById("infoScore").style.display = "none";
}
function killColor1(){
    document.getElementById("choose_write1").style.color = "#666";

}
function changeColor2(){
    document.getElementById("choose_write2").style.color = "#ff6765";
    document.getElementById("infoFamily").style.display = "none";
    document.getElementById("uninput").style.display = "block";
    var currentvalueq = document.getElementById("currentPageq").value;
    var pageNumq = document.getElementById('pageNumq');
    if(currentvalueq == 1){
        document.getElementById("leftImg1q").style.display = "none";
        document.getElementById("leftImg2q").style.display = "none";
    }else{
        document.getElementById("leftImg1q").style.display = "block";
        document.getElementById("leftImg2q").style.display = "block";
    }
    if(currentvalueq == 11){
        document.getElementById("rightImg1q").style.display = "none";
        document.getElementById("rightImg2q").style.display = "none";
    }else{
        document.getElementById("rightImg1q").style.display = "block";
        document.getElementById("rightImg2q").style.display = "block";
    }
    pageNumq.innerHTML = currentvalueq;

}
function killColor2(){
    document.getElementById("choose_write2").style.color = "#666";
}
function changeColor3(){
    document.getElementById("revise").style.color = "#ff6765";
}
function killColor3(){
        document.getElementById("revise").style.color = "#666";
}
//function changeColor3(){
//    document.getElementById("revise").style.color = "#ff6765";
//}
//function killColor3(){
//    document.getElementById("revise").style.color = "#000";
//}
window.onload=function(){
    var context=document.getElementById("context");
    var width=window.screen.width;
    var x=(width-1000)/2;
    x=x+100;
    context.style.position="relative";
    context.style.marginLeft=x+"px";

    var currentvalue = document.getElementById("currentPage").value;
    var pageNum = document.getElementById('pageNum');
    if(currentvalue == 1){
        document.getElementById("leftImg1").style.display = "none";
        document.getElementById("leftImg2").style.display = "none";
    }
    if(currentvalue == 11){
        document.getElementById("rightImg1").style.display = "none";
        document.getElementById("rightImg2").style.display = "none";
    }
    pageNum.innerHTML = currentvalue;
    document.getElementById("uninput").style.display = "block";

    document.getElementById("leftImg1c").style.display = "none";
    document.getElementById("leftImg2c").style.display = "none";
    document.getElementById("popupWindow").style.width = width*0.7 +"px";
}


function left(){
    var currentvalue = document.getElementById("currentPage").value;
    var pageNum = document.getElementById('pageNum');
    if(currentvalue == 2){
        document.getElementById("leftImg1").style.display = "none";
        document.getElementById("leftImg2").style.display = "none";
        document.getElementById("currentPage").value = 1;
        pageNum.innerHTML = --currentvalue;
    }else {
        if(currentvalue>1){
            document.getElementById('currentPage').value = --currentvalue;
            document.getElementById("rightImg1").style.display = "block";
            document.getElementById("rightImg2").style.display = "block";
        }
    }
    pageNum.innerHTML = currentvalue;
}
function leftmost(){
    var paper=document.getElementById("pageLeft").getElementsByTagName("span");

    document.getElementById("currentPage").value = 1;
    document.getElementById("leftImg1").style.display = "none";
    document.getElementById("leftImg2").style.display = "none";
    document.getElementById("rightImg1").style.display = "block";
    document.getElementById("rightImg2").style.display = "block";
    var currentvalue = document.getElementById("currentPage").value;
    var pageNum = document.getElementById('pageNum');
    pageNum.innerHTML = currentvalue;
    //paper[0].innerHTML=1;
    //$.post("xxx", {
    //}, function(data) {
    //
    //}, "json");
}

function right(){
    var currentvalue = document.getElementById("currentPage").value;
    var pageNum = document.getElementById('pageNum');
    if(currentvalue == 10){
        document.getElementById("rightImg1").style.display = "none";
        document.getElementById("rightImg2").style.display = "none";
        document.getElementById("leftImg1").style.display = "block";
        document.getElementById("leftImg2").style.display = "block";
        document.getElementById("currentPage").value = 11;
        pageNum.innerHTML = ++currentvalue;
    }else {
        if(currentvalue<10){
            document.getElementById("currentPage").value = ++currentvalue;
            document.getElementById("leftImg1").style.display = "block";
            document.getElementById("leftImg2").style.display = "block";
        }
    }
    pageNum.innerHTML = currentvalue;
}
function rightmost(){
    var paper=document.getElementById("pageLeft").getElementsByTagName("span");
    document.getElementById("currentPage").value = 11;
    document.getElementById("rightImg1").style.display = "none";
    document.getElementById("rightImg2").style.display = "none";
    document.getElementById("leftImg1").style.display = "block";
    document.getElementById("leftImg2").style.display = "block";
    var currentvalue = document.getElementById("currentPage").value;
    var pageNum = document.getElementById('pageNum');
    pageNum.innerHTML = currentvalue;
    //paper[0].innerHTML=1;
    //$.post("xxx", {
    //}, function(data) {
    //
    //}, "json");
}

function leftq(){
    var currentvalue = document.getElementById("currentPageq").value;
    var pageNum = document.getElementById('pageNumq');
    if(currentvalue == 2){
        document.getElementById("leftImg1q").style.display = "none";
        document.getElementById("leftImg2q").style.display = "none";
        document.getElementById("currentPageq").value = 1;
        pageNum.innerHTML = --currentvalue;
    }else {
        if(currentvalue>1){
            document.getElementById('currentPageq').value = --currentvalue;
            document.getElementById("rightImg1q").style.display = "block";
            document.getElementById("rightImg2q").style.display = "block";
        }
    }
    pageNum.innerHTML = currentvalue;
}
function leftmostq(){
    var paper=document.getElementById("pageLeftq").getElementsByTagName("span");

    document.getElementById("currentPageq").value = 1;
    document.getElementById("leftImg1q").style.display = "none";
    document.getElementById("leftImg2q").style.display = "none";
    document.getElementById("rightImg1q").style.display = "block";
    document.getElementById("rightImg2q").style.display = "block";
    var currentvalue = document.getElementById("currentPageq").value;
    var pageNum = document.getElementById('pageNumq');
    pageNum.innerHTML = currentvalue;
    //paper[0].innerHTML=1;
    //$.post("xxx", {
    //}, function(data) {
    //
    //}, "json");
}

function rightq(){
    var currentvalue = document.getElementById("currentPageq").value;
    var pageNum = document.getElementById('pageNumq');
    if(currentvalue == 10){
        document.getElementById("rightImg1q").style.display = "none";
        document.getElementById("rightImg2q").style.display = "none";
        document.getElementById("leftImg1q").style.display = "block";
        document.getElementById("leftImg2q").style.display = "block";
        document.getElementById("currentPageq").value = 11;
        pageNum.innerHTML = ++currentvalue;
    }else {
        if(currentvalue<10){
            document.getElementById("currentPageq").value = ++currentvalue;
            document.getElementById("leftImg1q").style.display = "block";
            document.getElementById("leftImg2q").style.display = "block";
        }
    }
    pageNum.innerHTML = currentvalue;
}
function rightmostq(){
    var paper=document.getElementById("pageLeftq").getElementsByTagName("span");
    document.getElementById("currentPageq").value = 11;
    document.getElementById("rightImg1q").style.display = "none";
    document.getElementById("rightImg2q").style.display = "none";
    document.getElementById("leftImg1q").style.display = "block";
    document.getElementById("leftImg2q").style.display = "block";
    var currentvalue = document.getElementById("currentPageq").value;
    var pageNum = document.getElementById('pageNumq');
    pageNum.innerHTML = currentvalue;
    //paper[0].innerHTML=1;
    //$.post("xxx", {
    //}, function(data) {
    //
    //}, "json");
}
function killShade(){
    document.getElementById("popupWindow").style.display = "none";
    document.getElementById("shade").style.display = "none";

}

function leftc(){
    var currentvalue = document.getElementById("currentPagec").value;
    var pageNum = document.getElementById('pageNumc');
    if(currentvalue == 2){
        document.getElementById("leftImg1c").style.display = "none";
        document.getElementById("leftImg2c").style.display = "none";
        document.getElementById("currentPagec").value = 1;
        pageNum.innerHTML = --currentvalue;
    }else {
        if(currentvalue>1){
            document.getElementById('currentPagec').value = --currentvalue;
            document.getElementById("rightImg1c").style.display = "block";
            document.getElementById("rightImg2c").style.display = "block";
        }
    }
    pageNum.innerHTML = currentvalue;
}
function leftmostc(){
    var paper=document.getElementById("pageLeftc").getElementsByTagName("span");

    document.getElementById("currentPagec").value = 1;
    document.getElementById("leftImg1c").style.display = "none";
    document.getElementById("leftImg2c").style.display = "none";
    document.getElementById("rightImg1c").style.display = "block";
    document.getElementById("rightImg2c").style.display = "block";
    var currentvalue = document.getElementById("currentPagec").value;
    var pageNum = document.getElementById('pageNumc');
    pageNum.innerHTML = currentvalue;
    //paper[0].innerHTML=1;
    //$.post("xxx", {
    //}, function(data) {
    //
    //}, "json");
}

function rightc(){
    var currentvalue = document.getElementById("currentPagec").value;
    var pageNum = document.getElementById('pageNumc');
    if(currentvalue == 10){
        document.getElementById("rightImg1c").style.display = "none";
        document.getElementById("rightImg2c").style.display = "none";
        document.getElementById("leftImg1c").style.display = "block";
        document.getElementById("leftImg2c").style.display = "block";
        document.getElementById("currentPagec").value = 11;
        pageNum.innerHTML = ++currentvalue;
    }else {
        if(currentvalue<10){
            document.getElementById("currentPagec").value = ++currentvalue;
            document.getElementById("leftImg1c").style.display = "block";
            document.getElementById("leftImg2c").style.display = "block";
        }
    }
    pageNum.innerHTML = currentvalue;
}
function rightmostc(){
    var paper=document.getElementById("pageLeftc").getElementsByTagName("span");
    document.getElementById("currentPagec").value = 11;
    document.getElementById("rightImg1c").style.display = "none";
    document.getElementById("rightImg2c").style.display = "none";
    document.getElementById("leftImg1c").style.display = "block";
    document.getElementById("leftImg2c").style.display = "block";
    var currentvalue = document.getElementById("currentPagec").value;
    var pageNum = document.getElementById('pageNumc');
    pageNum.innerHTML = currentvalue;
    //paper[0].innerHTML=1;
    //$.post("xxx", {
    //}, function(data) {
    //
    //}, "json");
}
function changeUi(){
        var image = document.getElementById('returnB');
        if(image.src.match("img/returnB.png")){
            image.src = "img/returnA.png";
        }else{
            image.src = "img/returnB.png";
        }
    document.getElementById("re").style.color = "#fff"
}
function changeUii(){
    var image = document.getElementById('returnB');
    if(image.src.match("img/returnA.png")){
        image.src = "img/returnB.png";
    }else{
        image.src = "img/returnA.png";
    }
    document.getElementById("re").style.color = "#ff6765"
}

function changeMi(){
    var image = document.getElementById('IgnoreB');
    if(image.src.match("img/IgnoreB.png")){
        image.src = "img/IgnoreA.png";
    }else{
        image.src = "img/IgnoreA.png";
    }
    document.getElementById("bl").style.color = "#fff"
}
function changeMii(){
    var image = document.getElementById('IgnoreB');
    if(image.src.match("img/IgnoreA.png")){
        image.src = "img/IgnoreB.png";
    }else{
        image.src = "img/IgnoreB.png";
    }
    document.getElementById("bl").style.color = "#ff6765"
}
