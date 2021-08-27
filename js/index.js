//轮播图
let outer=document.querySelector("#top .top .pic");
//outer.style.marginLeft="-2452px";
let n=0
let left=0;
setInterval(()=>{
  left=-1226*n;
  console.log(left);
  outer.style.marginLeft=left+"px";
  n++;
  if(n==5){
    n=0;
  }
},2000);