/**
 * Created by Allen II on 11/22/2015.
 */
//function changeBackground(){
//    document.getElementById('btclt_login').style.background = "#fe6765";
//    document.getElementById('btcltl_text').style.color = "#f6f6f6";
//}
/*function hoverit(){
    document.getElementById('btclt_login').style.background = "#fe6765";
    document.getElementById('btcltl_text').style.color = "#fff";
}
function blurit(){
    document.getElementById('btclt_login').style.background = "#fff";
    document.getElementById('btcltl_text').style.color = "#fe6765";
}*/
/*function getLoginValue(){
    var account = document.getElementById('textPasswd').value;
    var passwd = document.getElementById('textAccount').value;
}*/
function changeImgOn(){
    var image = document.getElementById('btclt_img');
    if(image.src.match("loginB")){
        image.src ="images/loginA.png";
    }else{
        image.src = "images/loginB.png";
    }
    document.getElementById('btclt_a').style.color = "#fff";
}
function clickEnter(){
	if(event.keyCode == 13){
		document.getElementById("btcl_three").click();
	}
}
function clearDispl(){
    var actVlu = document.getElementById("textAccount").value;
    if(actVlu == "请输入用户名"){
        document.getElementById("iA_shell").style.display = "none";
    }
}
function clearDispl2(){
    var pwdVlu = document.getElementById("textPasswd").value;
    if(pwdVlu == "请输入密码"){
        document.getElementById("eP_shell").style.display = "none";
    }

}
function changeImgOut(){
    var image = document.getElementById('btclt_img');
    if(image.src.match("loginA")){
        image.src ="images/loginB.png";
    }else{
        image.src = "images/loginA.png";
    }
    document.getElementById('btclt_a').style.color = "#ff6765";
}
function check(){
	var username=document.getElementById("iA_shell").value;
	var password=document.getElementById("eP_shell").value;
	if(username=="请输入用户名"){
		
		
		
	}else{
		alert("请输入用户名");
	}

}
