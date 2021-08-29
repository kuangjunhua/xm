let img=document.querySelector("#main>.top>.left img");
let lis=document.querySelectorAll("#main>.top>.left li")
console.log(lis);
console.log(img);
setInterval(()=>{
  let n=img.alt;
  n++;
  n==6?n=1:n;
  for(let i=1;i<=lis.length;i++){
    if(i!=n){
      lis[i-1].setAttribute('class','')
    }
  }
  lis[n-1].setAttribute('class','active')
  img.setAttribute('src',`./img/detail/${n}.jpg`);
  img.setAttribute('alt',n);
},3000)