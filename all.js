var xhr = new XMLHttpRequest();
xhr.open('get',"https://work1999.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery",true);
xhr.send();
xhr.onload = function(){
  var data = JSON.parse(xhr.responseText);
  
  var dists = document.querySelector('.dists');
  var dList=[];
  var D='<option value="">請選擇地區</option>';
 
  var types = document.querySelector('.types');
  var tList=[];  
  var T='<option value="">請選擇類型</option>';
  
  for(var i =0;i<data.length;i++){
    var dExist=dList.indexOf(data[i].ZipName_);
    if(dExist==-1){
      dList.push(data[i].ZipName_);
      D+='<option value="'+data[i].ZipName_+'">'+data[i].ZipName_+'</option>';
    }
    dists.innerHTML=D;
    
    var tExist=tList.indexOf(data[i].InformDesc_);
    if(tExist==-1){
      tList.push(data[i].InformDesc_);
      T+='<option value="'+data[i].InformDesc_+'">'+data[i].InformDesc_+'</option>';
    }
    types.innerHTML=T;
  }
  
  var c = document.querySelector('.btn');
  c.addEventListener('click', function (e) {
    var str =' ';
    var n = 0;
    var _d = dists.value;
    var _t = types.value;
    for(var i=0;i<data.length;i++){
      document.querySelector('.type').textContent=_t;
      if(_d=='' && _t=='' ){
        document.querySelector('.area').textContent='全部 ';
        str +='<li><h4>地點：'+data[i].address_+'</h4><h5>報案狀況：'+data[i].BeforeDesc_+'</h5></li>';
        n++;
      }
      else if(_d=='' && _t==data[i].InformDesc_ ){
        document.querySelector('.area').textContent='全部 ';
        str +='<li><h4>地點：'+data[i].address_+'</h4><h5>報案狀況：'+data[i].BeforeDesc_+'</h5></li>';
        n++;
      }
      else if(_d==data[i].ZipName_  && _t== ''){
        document.querySelector('.area').textContent=_d;
        str +='<li><h4>地點：'+data[i].address_+'</h4><h5>報案狀況：'+data[i].BeforeDesc_+'</h5></li>';
        n++;
      }
      else if(_d==data[i].ZipName_  &&  _t==data[i].InformDesc_){
        document.querySelector('.area').textContent=_d;
        str +='<li><h4>地點：'+data[i].address_+'</h4><h5>報案狀況：'+data[i].BeforeDesc_+'</h5></li>';
        n++;
      }
      document.querySelector('.list').innerHTML=str;
      document.querySelector('.num').textContent=n;
    }
  }, false);
  
  types.addEventListener('change',function(e1){
    var str =' ';
    var n = 0;
    var _d = dists.value;
    var _t = types.value;
    for(var i=0;i<data.length;i++){
      document.querySelector('.area').textContent=_d;
      document.querySelector('.type').textContent=_t;
      if(_d==data[i].ZipName_  && _t== ''){
        str +='<li><h4>地點：'+data[i].address_+'</h4><h5>報案狀況：'+data[i].BeforeDesc_+'</h5></li>';
        n++;
      }
      else if(_d==data[i].ZipName_  &&  _t==data[i].InformDesc_){
        str +='<li><h4>地點：'+data[i].address_+'</h4><h5>報案狀況：'+data[i].BeforeDesc_+'</h5></li>';
        n++;
      }
      document.querySelector('.list').innerHTML=str;
      document.querySelector('.num').textContent=n;
    }
  });
  

};