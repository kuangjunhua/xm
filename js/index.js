//轮播图
let outer=document.querySelector("#top .top .pic");
//outer.style.marginLeft="-2452px";
let n=0
let left=0;
setInterval(()=>{
  left=-1226*n;
  //console.log(left);
  outer.style.marginLeft=left+"px";
  n++;
  if(n==5){
    n=0;
  }
},3000);

let phones=document.querySelectorAll("#main #phone .item");
for(let i=1;i<=phones.length;i++){
  phones[i-1].onclick=function(){
    window.location.href="/detail.html?type=phone&id="+i;
  }
}
let jiadians=document.querySelectorAll("#main .jiadian .item");
for(let i=1;i<=jiadians.length;i++){
  jiadians[i-1].onclick=function(){
    window.location.href="/detail.html?type=jiadian&id="+i;
  }
}
let zinengs=document.querySelectorAll("#main .zineng .item");
for(let i=1;i<=zinengs.length;i++){
  zinengs[i-1].onclick=function(){
    window.location.href="/detail.html?type=zineng&id="+i;
  }
}
let dapeis=document.querySelectorAll("#main .dapei .item");
for(let i=1;i<=dapeis.length;i++){
  dapeis[i-1].onclick=function(){
    window.location.href="/detail.html?type=dapei&id="+i;
  }
}
let peijians =document.querySelectorAll("#main .peijian .item");
for(let i=1;i<=peijians.length;i++){
  peijians[i-1].onclick=function(){
    window.location.href="/detail.html?type=peijian&id="+i;
  }
}
let zhoubians=document.querySelectorAll("#main .zhoubian .item");
for(let i=1;i<=zhoubians.length;i++){
  zhoubians[i-1].onclick=function(){
    window.location.href="/detail.html?type=zhoubian&id="+i;
  }
}