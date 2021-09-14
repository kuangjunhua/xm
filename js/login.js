
let look=document.querySelector("#right>.mid form>div>span")
let upwd=document.getElementById("upwd");
let uname=document.getElementById("uname");
let login_btn=document.getElementById("login_btn");
//查看密码
look.onclick=function(){
  if(look.className=='unlook'){
    upwd.type="text";
    look.className="look"
  }else{
    upwd.type="password";
    look.className="unlook";
  }
}
//登陆
uname.onblur=function(){
  if(!uname.value){
    alert("用户名不能为空");
  }
}
upwd.onblur=function(){
  if(!upwd.value){
    alert("密码不能为空");
  }
}
let data={uname:uname.value,upwd:upwd.value}
let login=function(e){
  e.preventDefault();
  if(!uname.value || !upwd.value){
    return;
  }
  myAjax('http://127.0.0.1:3000/login','POST',{uname:uname.value,upwd:upwd.value})
  .then(res=>{
    let obj=JSON.parse(res);
    if(obj.code===200){
      //console.log('登陆成功');
      localStorage.setItem("unmae",obj.info.uname)
      localStorage.setItem("upwd",obj.info.upwd);
      localStorage.setItem("isLogin",true);
      uname.value='';
      upwd.value='';
      location.href='/index.html';
    }
  })
}
login_btn.addEventListener('click',login)