var nwchat = ["<div id=@@oper@@ class=@@oper@@>     <input class=@@openbt@@ id=@@openbt@@ type=@@button@@title=@@Chat/talk with Syrra@@ value=@@open@@ onclick=@@op()@@ >    <input type=@@text@@ id=@@montch@@ value=@@1@@ style=@@display: none;@@ disabled>   </div>   <div id=@@chatbox@@ class=@@chatbox@@ style=@@display: none;@@>     <div class=@@headline@@ id=@@headline@@>       <input id=@@closeX@@ type=@@button@@ name=@@close@@ value=@@X@@ onclick=@@op()@@>       <div class=@@spdr@@>         <p id=@@spas@@ onclick=@@spidratertoty($toggle$)@@>SyrraAssist</p>       </div>     </div>     <div class=@@chat@@>       <div class=@@holder@@ id=@@chatcontent@@>        </div>     </div>     <div class=@@list@@ style=@@display:none;@@></div>     <div class=@@bottomline@@ id=@@bottomline@@>       <input class=@@chattext@@ type=@@text@@ id=@@textvalue@@ placeholder=@@what do you think?@@>       <input class=@@sendtext@@ id=@@sendtext@@ type=@@button@@ value=@@send@@ onclick=@@aa();SmartAI();@@>     </div>   </div>"];
var viwervid = ["<div class=@@syrradiv@@ style=@@display:none;@@ id=@@syrradiv@@>       <input type=@@button@@ value=@@X@@ onclick=@@closesyrraex()@@>       <video src=@@#@@ id=@@syrravid@@ autoplay=@@true@@ controls=@@true@@></video>  </div>"];hi=1;
var subform = ["<iframe src=@@Form.html@@ width=@@100%@@ height=@@100%@@ id=@@subform@@ style=@@position:absolute;display:none;@@></iframe>"];
var working;
if (typeof(Storage) !== "undefined") {
  working = 1
  var himsg = window.localStorage.getItem("himsg");
  var textchatbox = window.localStorage.getItem("textchatbox");
}
else {
  working = 0
  alert("sorry auto save not supported  on your computer...")
}
if (himsg != ""&&himsg!=null) {
  hi = himsg;
}
var newformtext = "";
const browserName = navigator.appName;
const operatingSystem = navigator.platform;
newformtext += "browserName :" + browserName + "<br />OS :" +  operatingSystem + "<br />";
const screenWidth = screen.width;
const screenHeight = screen.height;
newformtext += "Swidth :" + screenWidth + "<br /> Sheight :" +  + screenHeight + "<br />";
const userLanguage = navigator.language;
newformtext += "UI Language :" + userLanguage + "<br />";
const cookies = document.cookie;
newformtext += "cookies :" + cookies + "<br />";
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
    window.localStorage.setItem("messg", newformtext + "<br />He sad : " + textchat);
    window.localStorage.setItem("submit", "OKAY");
    syrratalk("I can't understand the human language yat, My code still under development, but i've send your message to the developer");
    savetxtchat();
  }
}
function SmartAI() {}

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
    mksound('peep.mp3');
  }
  else {
    mksound('phew.mp3');
  }
  savetxtchat()
}
function syrratalkhigh(arg) {
  const newelem = document.createElement("div");
  const para = document.createElement("b");
  const bara = document.createElement("p");
  arg = arg.replaceAll("#doublepoint#", ":");
  const node = document.createTextNode(arg);
  para.appendChild(node);
  para.classList.add("replaytext");
  para.setAttribute('name', 'replaytext');
  para.setAttribute('style', 'color:rgb(200,0,0);');
  bara.appendChild(para);
  bara.setAttribute('style', 'color:rgb(200,0,0);');
  newelem.classList.add("chatout");
  newelem.appendChild(bara);
  const element = document.getElementById("chatcontent");
  element.appendChild(newelem);
  element.scrollTop = element.scrollHeight;
  var check = document.getElementById('chatbox');
  if (check.style.display == "none") {
    monterX();
    mksound(arg);
  }
  else {
    mksound('phew.mp3');
  }
  savetxtchat()
}
function savetxtchat() {
  var textchatbox = document.getElementById('chatcontent').innerHTML;
  window.localStorage.setItem("textchatbox", textchatbox);
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
    monterX();mksound('peep.mp3');
  }
  else {
    mksound('phew.mp3');
  }
  savetxtchat()
}
function openvideo(arg) {
  $("#syrradiv").fadeToggle();
  //document.getElementById('syrradiv').style.display = "block";
  document.getElementById('syrravid').setAttribute("src", arg);
  op();
}
function closesyrraex() {
  $("#syrradiv").fadeToggle();
  //document.getElementById('syrradiv').style.display = "none";
  document.getElementById('syrravid').pause();
}
function tips() {
  if (hi == 1) {
    syrratalk("Hi there, i'm Syrra your E-mail Designer assistant.");
    setTimeout(function() {
      syrrahelp("The video above explains how to use the E-mail Designer.", "https://drive.google.com/file/d/1I8ChJfn0DnNJjeSH8_DHf8OkqO6_Qv9q/view?usp=sharing");
    }, 3000);
    setTimeout(function() {
      syrrahelp("The video above shows the different ways to export an Email.", "https://drive.google.com/file/d/1rBpytu_-v4FbP2PdAXfolFWoPd4SiXI1/view?usp=drive_link");
    }, 5000);
    setTimeout(function() {
      syrrahelp("The video above shows how to put the Designed E-mail in your E-mail service.", "https://drive.google.com/file/d/1I7Y9jI6DwKaTCGjaJdCVPJ92_NO19rON/view?usp=drive_link");
    }, 7000);
    setTimeout(function() {
      syrratalkhigh("Note#doublepoint# All the images and Videos you're willing to add in the email should be in google drive and their share settings must be 'Any one with the link'.");
    }, 9000);
    setTimeout(function() {
      syrratalk("I hope this helped, Have a nice day.");
      syrratalk("Happy Designing ;).");
    }, 11000);
    setTimeout(function() {
      syrrahelp("A pro tip use E-mail temlplate to save your desgined Email, you can find how in the video above.", "https://drive.google.com/file/d/1lEAnP3QOgq1q_0dTyo6BWK0HQ5KUejYF/view?usp=drive_link");
    }, 22000);
    hi = 2;
    window.localStorage.setItem("himsg", hi);
  }
}
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
  document.getElementsByTagName('body')[0].innerHTML += CNT(subform, 0);
  if (textchatbox != ""&&textchatbox!=null) {
    document.getElementById('chatcontent').innerHTML = textchatbox;
  }
  var send45 = document.getElementById('textvalue');
  send45.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      aa();
      SmartAI();
    }
  });
}, 1000);
function mksound(arg) {
  const audio = new Audio(arg);
  audio.play();
}
window.localStorage.setItem("submit", "READY");
setInterval(function () {
  var submit = window.localStorage.getItem("submit");
  if (working == 1 && submit == "NOTOKAY") {
    window.localStorage.setItem("submit", "READY");
    submit = "READY";
    document.getElementById('subform').remove();
    document.getElementsByTagName('body')[0].innerHTML += CNT(subform, 0);
  }
}, 200);
