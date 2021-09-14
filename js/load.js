let all=[];
window.onload=function(){
  let phone=[];
  let jiadian=[];
  let zineng=[];
  let dapei=[];
  let peijian=[];
  let zhoubian=[];

  myAjax('http://127.0.0.1:3000/load','get')
  .then(res=>{
    arr=JSON.parse(res);
    phone=arr.slice(0,8);
    jiadian=arr.slice(8,15);
    zineng=arr.slice(15,22);
    dapei=arr.slice(22,29);
    peijian=arr.slice(29,36);
    zhoubian=arr.slice(36);

    let phone_container=document.getElementById("phone_content");
    let phoneStr=''
    for(let i=0;i<phone.length;i++){
      phoneStr+=`
      <li class="item">
        <img src="${phone[i].picSrc}" alt="">
        <h3>${phone[i].title}</h3>
        <p class="desc">${phone[i].describ}</p>
        <p class="price">${phone[i].price}元起</p>
      </li>
      `
    }
    phone_container.innerHTML=phoneStr;

    let jiadian_top=document.getElementById("jiadian_top")
    let jiadianTopStr=`
      <li>
        <img src="./img/appliance/1.webp" alt="">
      </li>
    `
    for(let i=0;i<=3;i++){
      jiadianTopStr+=`
      <li class="item">
        <img src="${jiadian[i].picSrc}" alt="">
        <h3>${jiadian[i].title}</h3>
        <p class="desc">${jiadian[i].describ}</p>
        <p class="price">${jiadian[i].price}元</p>
      </li>
      `
    }
    jiadian_top.innerHTML=jiadianTopStr;
    let jiadian_bottom=document.getElementById("jiadian_bottom");
    let jiadianBottomStr=`
      <li>
        <img src="./img/appliance/6.webp" alt="">
      </li>
    `
    for(let i=4;i<7;i++){
      jiadianBottomStr+=`
      <li class="item">
        <img src="${jiadian[i].picSrc}" alt="">
        <h3>${jiadian[i].title}</h3>
        <p class="desc">${jiadian[i].describ}</p>
        <p class="price">${jiadian[i].price}元</p>
      </li>
      `
    }
    jiadianBottomStr+=`
      <li class="last">
        <div class="top">
          <div class="show">
            <p>米家互联网烟罩套装（天然气)</p>
            <img src="./img/appliance/10.jpeg" alt="">
          </div>
          <p class="price">2298元</p>
        </div>
        <div class="bottom">
          <div class="look_more">
            <h3>浏览更多</h3>
            <p>热门</p>
          </div>
          <div class="ico">
            <img src="./img/go.ico" alt="">
          </div>
        </div>
      </li>
    `
    jiadian_bottom.innerHTML=jiadianBottomStr;

    let zineng_top=document.getElementById("zineng_top");
    let zinengTopStr=`
      <li>
        <img src="./img/zineng/1.webp" alt="">
      </li>
    `
    for(let i=0;i<4;i++){
      zinengTopStr+=`
        <li class="item">
          <img src="${zineng[i].picSrc}" alt="">
          <h3>${zineng[i].title}</h3>
          <p class="desc">${zineng[i].describ}</p>
          <p class="price">${zineng[i].price}元</p>
        </li>
      `
    }
    zineng_top.innerHTML=zinengTopStr;
    let zineng_bottom=document.getElementById("zineng_bottom");
    let zinengBottomStr=`
      <li>
        <img src="./img/zineng/6.webp" alt="">
      </li>
    `
    for(let i=4;i<7;i++){
      zinengBottomStr+=`
      <li class="item">
        <img src="${zineng[i].picSrc}" alt="">
        <h3>${zineng[i].title}</h3>
        <p class="desc">${zineng[i].describ}</p>
        <p class="price">${zineng[i].price}元</p>
      </li>
      `
    }
    zinengBottomStr+=`
      <li class="last">
        <div class="top">
          <div class="show">
            <p>米家互联网烟罩套装（天然气)</p>
            <img src="./img/zineng/10.webp" alt="">
          </div>
          <p class="price">2298元</p>
        </div>
        <div class="bottom">
          <div class="look_more">
            <h3>浏览更多</h3>
            <p>安防</p>
          </div>
          <div class="ico">
            <img src="./img/go.ico" alt="">
          </div>
        </div>
      </li>
    `
    zineng_bottom.innerHTML=zinengBottomStr;

    let dapei_top=document.getElementById("dapei_top");
    let dapeiTopStr=`
        <li>
        <img src="./img/dapei/1.webp" alt="">
      </li>
    `
    for(let i=0;i<4;i++){
      dapeiTopStr+=`
        <li class="item">
          <img src="${dapei[i].picSrc}" alt="">
          <h3>${dapei[i].title}</h3>
          <p class="desc">${dapei[i].describ}</p>
          <p class="price">${dapei[i].price}元</p>
        </li>
      `
    }
    dapei_top.innerHTML=dapeiTopStr;
    let dapei_bottom=document.getElementById("dapei_bottom");
    let dapeiBottomStr=`
        <li>
        <img src="./img/dapei/6.webp" alt="">
      </li>
    `
    for(let i=4;i<7;i++){
      dapeiBottomStr+=`
        <li class="item">
          <img src="${dapei[i].picSrc}" alt="">
          <h3>${dapei[i].title}</h3>
          <p class="desc">${dapei[i].describ}</p>
          <p class="price">${dapei[i].price}元</p>
        </li>
      `
    }
    dapeiBottomStr+=`
      <li class="last">
        <div class="top">
          <div class="show">
            <p>米家互联网烟罩套装（天然气)</p>
            <img src="./img/dapei/10.webp" alt="">
          </div>
          <p class="price">2298元</p>
        </div>
        <div class="bottom">
          <div class="look_more">
            <h3>浏览更多</h3>
            <p>安防</p>
          </div>
          <div class="ico">
            <img src="./img/go.ico" alt="">
          </div>
        </div>
      </li>
    `
    dapei_bottom.innerHTML=dapeiBottomStr;

    let peijian_top=document.getElementById("peijian_top");
    let peijianTopStr=`
      <li>
        <img src="./img/peijian/1.webp" alt="">
      </li>
    `
    for(let i=0;i<4;i++){
      peijianTopStr+=`
        <li class="item">
          <img src="${peijian[i].picSrc}" alt="">
          <h3>${peijian[i].title}</h3>
          <p class="desc">${peijian[i].describ}</p>
          <p class="price">${peijian[i].price}元</p>
        </li>
      `
    }
    peijian_top.innerHTML=peijianTopStr;
    let peijian_bottom=document.getElementById("peijian_bottom");
    let peijianBottomStr=`
      <li>
        <img src="./img/peijian/6.webp" alt="">
      </li>
    `
    for(let i=4;i<7;i++){
      peijianBottomStr+=`
        <li class="item">
          <img src="${peijian[i].picSrc}" alt="">
          <h3>${peijian[i].title}</h3>
          <p class="desc">${peijian[i].describ}</p>
          <p class="price">${peijian[i].price}元</p>
        </li>
      `
    }
    peijianBottomStr+=`
      <li class="last">
        <div class="top">
          <div class="show">
            <p>米家互联网烟罩套装（天然气)</p>
            <img src="./img/peijian/10.webp" alt="">
          </div>
          <p class="price">2298元</p>
        </div>
        <div class="bottom">
          <div class="look_more">
            <h3>浏览更多</h3>
            <p>安防</p>
          </div>
          <div class="ico">
            <img src="./img/go.ico" alt="">
          </div>
        </div>
      </li>
    `
    peijian_bottom.innerHTML=peijianBottomStr;

    let zhoubian_top=document.getElementById("zhoubian_top");
    let zhoubianTopStr=`
      <li>
        <img src="./img/zhoubian/1.webp" alt="">
      </li>
    `
    for(let i=0;i<4;i++){
      zhoubianTopStr+=`
      <li class="item">
        <img src="${zhoubian[i].picSrc}" alt="">
        <h3>${zhoubian[i].title}</h3>
        <p class="desc">${zhoubian[i].describ}</p>
        <p class="price">${zhoubian[i].price}元</p>
      </li>
      `
    }
    zhoubian_top.innerHTML=zhoubianTopStr;
    let zhoubian_bottom=document.getElementById("zhoubian_bottom");
    let zhoubianBottomStr=`
      <li>
        <img src="./img/zhoubian/6.webp" alt="">
      </li>
    `
    for(let i=4;i<7;i++){
      zhoubianBottomStr+=`
        <li class="item">
          <img src="${zhoubian[i].picSrc}" alt="">
          <h3>${zhoubian[i].title}</h3>
          <p class="desc">${zhoubian[i].describ}</p>
          <p class="price">${zhoubian[i].price}元</p>
        </li>
      `
    }
    zhoubianBottomStr+=`
      <li class="last">
        <div class="top">
          <div class="show">
            <p>米家互联网烟罩套装（天然气)</p>
            <img src="./img/zhoubian/10.webp" alt="">
          </div>
          <p class="price">2298元</p>
        </div>
        <div class="bottom">
          <div class="look_more">
            <h3>浏览更多</h3>
            <p>安防</p>
          </div>
          <div class="ico">
            <img src="./img/go.ico" alt="">
          </div>
        </div>
      </li>
    `
    zhoubian_bottom.innerHTML=zhoubianBottomStr;
  })
}