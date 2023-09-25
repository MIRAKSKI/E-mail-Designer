var nwchat = ["<div id=@@oper@@ class=@@oper@@>     <input class=@@openbt@@ id=@@openbt@@ type=@@button@@title=@@Chat/talk with Syrra@@ value=@@open@@ onclick=@@op()@@ >    <input type=@@text@@ id=@@montch@@ value=@@1@@ style=@@display: none;@@ disabled>   </div>   <div id=@@chatbox@@ class=@@chatbox@@ style=@@display: none;@@>     <div class=@@headline@@ id=@@headline@@>       <input id=@@closeX@@ type=@@button@@ name=@@close@@ value=@@X@@ onclick=@@op()@@>       <div class=@@spdr@@>         <p id=@@spas@@ onclick=@@spidratertoty($toggle$)@@>SyrraAssist</p>       </div>     </div>     <div class=@@chat@@>       <div class=@@holder@@ id=@@chatcontent@@>        </div>     </div>     <div class=@@list@@ style=@@display:none;@@></div>     <div class=@@bottomline@@ id=@@bottomline@@>       <input class=@@chattext@@ type=@@text@@ id=@@textvalue@@ placeholder=@@what do you think?@@>       <input class=@@sendtext@@ id=@@sendtext@@ type=@@button@@ value=@@send@@ onclick=@@aa();SmartAI();@@>     </div>   </div>"];
var viwervid = ["<div class=@@syrradiv@@ style=@@display:none;@@ id=@@syrradiv@@>       <input type=@@button@@ value=@@X@@ onclick=@@closesyrraex()@@>       <video src=@@#@@ id=@@syrravid@@ autoplay=@@true@@ controls=@@true@@></video>     </div>"];
var montch = 0;
function op(bb) {
  var check = document.getElementById('chatbox');
  var botton = document.getElementById('oper');
      if (check.style.display == "block") {
        check.style.display = "none";
        botton.style.display = "block";
      }
      else {
        check.style.display = "block";
        botton.style.display = "none";
        montch = 0
        document.getElementById('montch').value = montch ;
        document.getElementById('montch').style.display = "none";
      }
}
function spidratertoty(spidraX) {
  var home = document.querySelector(".hoster");
  var spidra = document.getElementById('body');
  if (spidraX=="toggle") {
    if (home.style.display=="block") {
      home.style.display = "none";
      spidra.style.display = "block";
    }
    else if (spidra.style.display=="block") {
      home.style.display = "block";
      spidra.style.display = "none";
    }
  }
  else if (spidraX=="home") {
    home.style.display = "block";
    spidra.style.display = "none";
  }
  else if (spidraX=="spidra") {
    home.style.display = "none";
    spidra.style.display = "block";
  }
}
function aa() {
  const textchat = document.getElementById('textvalue').value;
  var problemY = document.getElementById('textvalue').value;
  const kingbck = document.createElement("div")
  const paragr = document.createElement("p");
  const noded = document.createTextNode(textchat);
  if (textchat != "") {
    paragr.appendChild(noded);
    paragr.classList.add("chatintext");
    paragr.setAttribute('name', 'chatintext')
    kingbck.classList.add("chatin");
    kingbck.appendChild(paragr);
    const element = document.getElementById("chatcontent");
    element.appendChild(kingbck);
    document.getElementById('textvalue').value = "";
    element.scrollTop = element.scrollHeight;
  }
}
function SmartAI() {}
hi=1;
function syrratalk(arg) {
  const newelem = document.createElement("div")
  const para = document.createElement("p");
  const node = document.createTextNode(arg);
  para.appendChild(node);
  para.classList.add("replaytext");
  para.setAttribute('name', 'replaytext')
  newelem.classList.add("chatout");
  newelem.appendChild(para);
  const element = document.getElementById("chatcontent");
  element.appendChild(newelem);
  element.scrollTop = element.scrollHeight;
  var check = document.getElementById('chatbox');
  if (check.style.display == "none") {
    monterX();
  }
}

function syrrahelp(arg, url) {
  const newelem = document.createElement("div")
  const vid = document.createElement("video");
  const para = document.createElement("p");
  const node = document.createTextNode(arg);
  vid.setAttribute("class", "videohelp");
  url = 'https://drive.google.com/uc?export=view&id=' + FFGDFL(url);
  vid.setAttribute("src", url);
  vid.setAttribute("onclick", "openvideo(this.src)");
  para.appendChild(node);
  para.classList.add("replaytext");
  para.setAttribute('name', 'replaytext')
  newelem.classList.add("chatout");
  newelem.appendChild(vid);
  newelem.appendChild(para);
  const element = document.getElementById("chatcontent");
  element.appendChild(newelem);
  element.scrollTop = element.scrollHeight;
  var check = document.getElementById('chatbox');
  if (check.style.display == "none") {
    monterX();
  }
}
function openvideo(arg) {
  document.getElementById('syrradiv').style.display = "block";
  document.getElementById('syrravid').setAttribute("src", arg);
  op();
}
function closesyrraex() {
  document.getElementById('syrradiv').style.display = "none";
}
setTimeout(function() {
  syrrahelp("The video above explains how to use the E-mail Designer.", "");
}, 7000);
setTimeout(function() {
  syrrahelp("The video above shows the different ways to export an Email.", "");
}, 8000);
setTimeout(function() {
  syrrahelp("The video above shows how to put the Designed E-mail in your E-mail service.", "");
}, 9000);
setTimeout(function() {
  syrratalk("Note: All the images and Videos you're willing to add in the email should be in google drive and their share settings must be 'Any one with the link'.");
}, 10000);
setTimeout(function() {
  syrratalk("I hope this helped, Have a nice day.");
  syrratalk("Happy Designing.");
}, 12000);

var d = setTimeout(function() {
  if (hi == 1) {
    syrratalk("Hi there, i'm Syrra your E-mail Designer assistant.");
  }
}, 5000);
function monterX() {
  var check = document.getElementById('chatbox');
  if (check.style.display == "none") {
    montch += 1;
    document.getElementById('montch').value = montch;
    document.getElementById('montch').style.display = "block";
  }
  else {
    montch = montch;
  }
}
setTimeout(function() {
  document.getElementsByTagName('body')[0].innerHTML += CNT(viwervid, 0);
  document.getElementsByTagName('body')[0].innerHTML += CNT(nwchat, 0);
  var send45 = document.getElementById('textvalue');
  send45.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      aa();
      SmartAI();
    }
  });
}, 1000);
