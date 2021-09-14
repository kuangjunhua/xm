function myAjax(url,type,data){
  let xhr;
  if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest();
  }else{
    xhr=new ActiveXObject("Microsoft.XMLHTTP")
  }
  if(type.toUpperCase()==='GET'){
    url+='?'
    for(let key in data){
      url+=key+'='+data[key]+'&'
    }
    url=url.slice(0,-1);
    xhr.open('GET',url,true);
    xhr.send()
  }else if(type.toUpperCase()==='POST'){
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    let str=JSON.stringify(data);
    xhr.send(str);
  }
  return new Promise((resolve,reject)=>{
    xhr.onreadystatechange=function(){
      if(xhr.readyState===4 && xhr.status>=200 && xhr.status<300){
        resolve(xhr.response);
      }
    }
  })
  
}
