(function () {
  function loadjson(file,callback) {
  var rawFile=new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange=function(){
    if (rawFile.readyState=== 4 & rawFile.status== "200" ){
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
  }
  loadjson("data.json",function(text){
  var data=JSON.parse(text);
console.log(data);
pro(data.profile)
});
function pro(pro) {
  var mainDiv=document.querySelector(".mainDiv");
  for (var i in pro){
  var card=document.createElement("div");
  card.classList.add("card");
  mainDiv.appendChild(card);
  var image=document.createElement("img");
  image.src="images/priya.png";
  card.appendChild(image);
  var h1=document.createElement("h1");
  h1.textContent=pro[i].name;
  card.appendChild(h1);
  var h3=document.createElement("h3");
  h3.textContent=pro[i].comname;
  card.appendChild(h3);
  var h5=document.createElement("h5");
  h5.textContent=pro[i].number;
  card.appendChild(h5);
  var h6=document.createElement("h6");
  h6.textContent=pro[i].mail;
  card.appendChild(h6);
}
}
}) ();
