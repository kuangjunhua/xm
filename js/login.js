let look=document.querySelector("#right>.mid form>div>span")
let upwd=document.getElementById("upwd");
look.onclick=function(){
  if(look.className=='unlook'){
    upwd.type="text";
    look.className="look"
  }else{
    upwd.type="password";
    look.className="unlook";
  }
}