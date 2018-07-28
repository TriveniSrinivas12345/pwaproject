// function Loadjson(file,callback) {
//   var xhr = new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4 && xhr.status == "200"){
//       callback(xhr.responseText);
//     }
//   };
//   xhr.send(null);
// }
// Loadjson("data.json",function(text)
// {
//   var data=JSON.parse(text);
//   console.log(data);
//   basics(data.details);
//   careerinfo(data.career);
//   education(data.education);
//   skills(data.skills);
//   achievements(data.achievements);
// })
function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }else{
        reject(new Error('error'));
      }
    })
  })
}
var newfile = loadjson("data.json");
newfile.then(data=>{
  console.log(data);
    basics(data.details);
    careerinfo(data.career);
    education(data.education);
    skills(data.skills);
    achievements(data.achievements);
  })
var child1 =document.querySelector(".child1");
function basics(det) {
  var image = document.createElement("img");
    var name = document.createElement("h2");
  var phno = document.createElement("h4");
  var email = document.createElement("a");
  var adrs = document.createElement("p");
  adrs.textContent = "address";
  email.href = "mailto:trivenic3011@gmail.com";
  email.textContent = det.email;
  image.src = det.image;
  name.textContent = det.name;
  phno.textContent = det.phno;

  child1.appendChild(image);
  child1.appendChild(name);
  child1.appendChild(phno);
  child1.appendChild(email);
  child1.appendChild(adrs);
  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var p = document.createElement("p");
  p.textContent = det.address;
  child1.appendChild(p);
}
var childtwo =document.querySelector(".child2");
function careerinfo(info){
  var heading = document.createElement("h2");
  heading.textContent="career objective";
  childtwo.appendChild(heading);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);

  var c = document.createElement("h2")
  c.textContent = info.info;
  childtwo.appendChild(c);
}

function education(edu){
  var hd = document.createElement("h2");
  hd.textContent="educational qualification";
  childtwo.appendChild(hd);

   var hr = document.createElement("hr");
   childtwo.appendChild(hr);

   var table1 = document.createElement("table");
   table1.border = "1";
   childtwo.appendChild(table1);

   tabledata="";
   for(i=0;i<edu.length;i++){
     tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
   }
   table1.innerHTML = tabledata;
 }

 function skills(skillinfo){
   var hd = document.createElement("h2");
   hd.textContent="technical skills";
   childtwo.appendChild(hd);

   var hr = document.createElement("hr");
   childtwo.appendChild(hr);

   for(i=0;i<skillinfo.length;i++){
     var title = document.createElement("h4");
     title.textContent=skillinfo[i].title;
     childtwo.appendChild(title);

      var eduul = document.createElement("ul");
      var eduli = document.createElement("li");
      eduli.textContent=skillinfo[i].info;
      eduul.appendChild(eduli);
      childtwo.appendChild(eduul);
   }
}
function achievements(ache)
{
  var hd = document.createElement("h2");
  hd.textContent="achievements";
  childtwo.appendChild(hd);

  var hr = document.createElement("hr");
  childtwo.appendChild(hr);


  for(i=0;i<ache.length;i++){
    var title = document.createElement("h4");
    title.textContent=ache[i].title;
    childtwo.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=ache[i].info;
    eduul.appendChild(eduli);
    childtwo.appendChild(eduul);
}
}
function openpage(){
  window.open("triveni.html","_self",true)
}
