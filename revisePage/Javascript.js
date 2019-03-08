/**
 * Created by Tentcoo on 11/26/2015.
 */
window.onload=function(){
    var paper=document.getElementById("pageLeft").getElementsByTagName("span");
    $.post("xxx", {
    }, function(data) {
     /!*   paper[2].innerHTML="3";//总条数
        paper[1].innerHTML="11";//总页数*!/
    }, "json");
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
    var tranWidth = document.documentElement.clientWidth;
    document.getElementById("shell").style.cssText="width:"+tranWidth+"px";
}
function clickBack(){
    window.location.href = '#';
}
function  buttonB(){
    var image = document.getElementById('myImg');
    var character = document.getElementById('myChar');
    if(image.src.match("images/SaveB1.png")){
        image.src = "images/SaveA1.png";
    }else{
        image.src = "images/SaveB1.png";
    }
    character.style.color = "#fff";
}

function  buttonA(){
    var image = document.getElementById('myImg');
    var character = document.getElementById('myChar');
    if(image.src.match("images/SaveA1.png")){
        image.src = "images/SaveB1.png";
    }else{
        image.src = "images/SaveA1.png";
    }
    character.style.color = "#ff6765";
}
function buttonSave(){
    document.getElementById("shade").style.display = "block";
    document.getElementById("layer1").style.display = "block";
    document.body.style.cssText = "overflow:hidden;+overflow:none;_overflow:none;padding:0 17px 0 0;";
}
function clearShade(){
    document.getElementById("shade").style.display = "none";
    document.getElementById("layer1").style.display = "none";
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
function changeConfirmButton(){
    var image = document.getElementById('layer1_bottom_img');
    var char = document.getElementById('l1b_p1');
    if(image.src.match("images/SaveB.png")){
        image.src = "images/SaveA.png";
    }else{
        image.src = "images/SaveB.png";
    }
    char.style.color = "#fff";
}
function changeConfirmButton2(){
    var image = document.getElementById('layer1_bottom_img');
    var char = document.getElementById('l1b_p1');
    if(image.src.match("images/SaveA.png")){
        image.src = "images/SaveB.png";
    }else{
        image.src = "images/SaveA.png";
    }
    char.style.color = "#ff6765";

}
function deleteMe1(){
    document.getElementById('delt1').style.color = "#ff6765";
}
function deleteMe2(){
    document.getElementById('delt2').style.color = "#ff6765";
}
function deleteMe3(){
    document.getElementById('delt3').style.color = "#ff6765";
}
function deleteMe4(){
    document.getElementById('delt4').style.color = "#ff6765";
}
function deleteMe5(){
    document.getElementById('delt5').style.color = "#ff6765";
}
function deleteMe6(){
    document.getElementById('delt6').style.color = "#ff6765";
}
function deleteMe7(){
    document.getElementById('delt7').style.color = "#ff6765";
}
function deleteMe8(){
    document.getElementById('delt8').style.color = "#ff6765";
}
function deleteMe9(){
    document.getElementById('delt9').style.color = "#ff6765";
}
function deleteMeX(){
    document.getElementById('deltX').style.color = "#ff6765";
}
function deleteMeR1(){
    document.getElementById('delt1').style.color = "#000";
}
function deleteMeR2(){
    document.getElementById('delt2').style.color = "#000";
}
function deleteMeR3(){
    document.getElementById('delt3').style.color = "#000";
}
function deleteMeR4(){
    document.getElementById('delt4').style.color = "#000";
}
function deleteMeR5(){
    document.getElementById('delt5').style.color = "#000";
}
function deleteMeR6(){
    document.getElementById('delt6').style.color = "#000";
}
function deleteMeR7(){
    document.getElementById('delt7').style.color = "#000";
}
function deleteMeR8(){
    document.getElementById('delt8').style.color = "#000";
}
function deleteMeR9(){
    document.getElementById('delt9').style.color = "#000";
}
function deleteMeRX(){
    document.getElementById('deltX').style.color = "#000";
}
function trDeleteM(){
    var tabledata = document.getElementById('dltTd1');
    var tableM = document.getElementById('tableM');
    tabledata.parentNode.parentNode.removeChild(tableM);
}
function trDelete2(){
    var tableData = document.getElementById('dltTd2');
    var tableRow = document.getElementById('table2');
    tableData.parentNode.parentNode.removeChild(tableRow);
}
function trDelete3(){
    var tableData = document.getElementById('dltTd3');
    var tableRow = document.getElementById('table3');
    tableData.parentNode.parentNode.removeChild(tableRow);
}
function trDelete4(){
    var tableData = document.getElementById('dltTd4');
    var tableRow = document.getElementById('table4');
    tableData.parentNode.parentNode.removeChild(tableRow);
}function trDelete5(){
    var tableData = document.getElementById('dltTd5');
    var tableRow = document.getElementById('table5');
    tableData.parentNode.parentNode.removeChild(tableRow);
}function trDelete6(){
    var tableData = document.getElementById('dltTd6');
    var tableRow = document.getElementById('table6');
    tableData.parentNode.parentNode.removeChild(tableRow);
}function trDelete7(){
    var tableData = document.getElementById('dltTd7');
    var tableRow = document.getElementById('table7');
    tableData.parentNode.parentNode.removeChild(tableRow);
}function trDelete8(){
    var tableData = document.getElementById('dltTd8');
    var tableRow = document.getElementById('table8');
    tableData.parentNode.parentNode.removeChild(tableRow);
}function trDelete9(){
    var tableData = document.getElementById('dltTd9');
    var tableRow = document.getElementById('table9');
    tableData.parentNode.parentNode.removeChild(tableRow);
}
function trDeletex(){
    var tableData = document.getElementById('dltTdx');
    var tableRow = document.getElementById('tablex');
    tableData.parentNode.parentNode.removeChild(tableRow);
}