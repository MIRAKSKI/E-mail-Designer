var working;hi=1;var problemY = "",hesaid = "", order = "",terget = "",userquestion;
//window.localStorage.setItem("himsg", 1);window.localStorage.setItem("textchatbox", "");
if (typeof(Storage) !== "undefined") {
  working = 1
  var himsg = window.localStorage.getItem("himsg");
  var textchatbox = window.localStorage.getItem("textchatbox");
  var montchvalue = window.localStorage.getItem("montchvalue");
  var montchstyle = window.localStorage.getItem("montchstyle");
}
else {
  working = 0
  alert("sorry auto save not supported  on your computer...")
}
if (himsg != ""&&himsg!=null) {
  hi = himsg;
}
var newformtext = "";
try {
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
}
catch (e) {} finally {}
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
        var checktst = document.getElementById('montch').style.display;
        if (checktst == "block") {
          const element = document.getElementById("chatcontent");
          element.scrollTop = element.scrollHeight;
        }
        document.getElementById('montch').value = montch ;
        document.getElementById('montch').style.display = "none";
        window.localStorage.setItem("montchvalue", montch);
        window.localStorage.setItem("montchstyle", "none");
      }
}
function aa() {
  const textchat = document.getElementById('textvalue').value;
  problemY = textchat;
  const kingbck = document.createElement("div");
  const paragr = document.createElement("p");
  const noded = document.createTextNode(textchat);
  if (textchat != "") {
    paragr.appendChild(noded);
    paragr.classList.add("chatintext");
    paragr.setAttribute('name', 'chatintext');
    kingbck.classList.add("chatin");
    kingbck.appendChild(paragr);
    const element = document.getElementById("chatcontent");
    element.appendChild(kingbck);
    element.scrollTop = element.scrollHeight;
    savetxtchat();
  }
}
function SyrraAI() {
  //New Syrra
  var senword;
  const textchat = document.getElementById('textvalue').value;
  if (textchat != "" || hesaid != "") {
    if (textchat != "") {
      hesaid = textchat;
      userquestion = textchat;
    }
    else {
      hesaid = problemY;
      userquestion = problemY
    }
    var finish = Syrrawait(1500, 150);
    hesaid = hesaid.toLowerCase();
    senword = hesaid.replaceAll(",", "");senword = senword.replaceAll("?", "");
    senword = senword.replaceAll("!", "");senword = senword.replaceAll("?", "");
    senword = senword.replaceAll(".", "");sentence = senword;
    senword = senword.split(" ");
    findorder(senword, findterget);hesaid = "";problemY = "";
    document.getElementById('textvalue').value = "";
  }
}
async function findorder(senword, callback) {
  for (var i = 0; i < senword.length; i++) {
    if (senword[i] == "edit"||senword[i] == "change"||senword[i] == "move") {
      order = "edit";
      break
    }
    else if (senword[i] == "add"||senword[i] == "create"||senword[i] == "new") {
      order = "add";
      break
    }
    else if (senword[i] == "delete"||senword[i] == "remove"||senword[i] == "delet") {
      order = "delete";
      break
    }
    else if (senword[i] == "save" || senword[i] == "download" || senword[i] == "export") {
      order = "save";
      break
    }
    else {
      order = "unkown";
    }
  }
  callback(senword, replaySyrra)
}
async function findterget(senword, callback) {
  for (var i = 0; i < senword.length; i++) {
    if (senword[i] == "button") {
      terget = "button";
      break
    }
    else if (senword[i] == "link") {
      terget = "link";
      break
    }
    else if (senword[i] == "text") {
      terget = "text";
      break
    }
    else if (senword[i] == "title") {
      terget = "title";
      break
    }
    else if (senword[i] == "background") {
      terget = "background";
      break
    }
    else if (senword[i] == "logo") {
      terget = "logo";
      break
    }
    else if (senword[i] == "icon") {
      terget = "icon";
      break
    }
    else if (senword[i] == "Social") {
      terget = "Social";
      break
    }
    else if (senword[i] == "picture" || senword[i] == "image" || senword[i] == "photo") {
      terget = "picture";
      break
    }
    else if (senword[i] == "video") {
      terget = "video";
      break
    }
    else if (senword[i] == "template"||senword[i] == "email"||senword[i] == "design") {
      terget = "template";
      break
    }
    else {
      terget = "unkown";
    }
  }
  callback(senword)
}
async function replaySyrra(senword) {
  setTimeout(function () {
    if (order == "add") {
      if (terget == "button") {
        syrratalk("To add a button, go to 'Add Elements' then in the content area click 'Add Button'.");
      }
      else if (terget == "link") {
        syrratalk("To add a link, go to 'Add Elements' then in the footer area click 'Add Link'.");
      }
      else if (terget == "text") {
        syrratalk("To add a text, go to 'Add Elements' then in the content area click 'Add Text'.");
      }
      else if (terget == "title") {
        syrratalk("To add a title, go to 'Add Elements' then in the content area click 'Add Title'.");
      }
      else if (terget == "logo") {
        syrratalk("To add a logo, go to 'Add Elements' here you have the choise ethir logo in the header or the footer in the header/footer area click 'Add Logo'.");
      }
      else if (terget == "icon") {
        syrratalk("To add a social media icon, go to 'Add Elements' then in the footer area click 'Add Social Link'.");
      }
      else if (terget == "Social") {
        syrratalk("To add a social media icon, go to 'Add Elements' then in the footer area click 'Add Social Link'.");
      }
      else if (terget == "picture") {
        syrratalk("To add a picture, go to 'Add Elements' then in the content area click 'Add Picture'.");
      }
      else if (terget == "video") {
        syrratalk("To add a video, go to 'Add Elements' then in the content area click 'Add button'.");
      }
      else if (terget == "template") {
        syrratalk("To save a design as template, Go to 'Tamplates' then click 'Save Design', name your design and click 'Save'.");
      }
      else if (terget == "unkown") {
        syrratalk("I didn't get What you want to add :(.");
        window.localStorage.setItem("messg", newformtext + "<br />He sad : " + userquestion);
        window.localStorage.setItem("submit", "OKAY");
      }
      else {
        window.localStorage.setItem("messg", newformtext + "<br />He sad : " + userquestion);
        window.localStorage.setItem("submit", "OKAY");
        syrratalk("I'm sorry I didn't understand, i will send your message to the developer.");
      }
    }
    else if (order == "edit") {
      if (terget == "button") {
        syrratalk("click in the "+terget+" you want to edit, in the right side of the screen you'll have a Button Editor you can move it up or down change the colors, and the text, the Button Editor will show on the bottom of the screen in phones.");
      }
      else if (terget == "link") {
        syrratalk("click in the "+terget+" you want to edit, in the right side of the screen you'll have a Link Editor you can move it up or down change text color, and the text.");
      }
      else if (terget == "text") {
        syrratalk("click in the "+terget+" you want to edit, in the right side of the screen you'll have a Text Editor you can move it up or down change the colors, and the text, change yht font size, and the font.");
      }
      else if (terget == "title") {
        syrratalk("click in the "+terget+" you want to edit, in the right side of the screen you'll have a Text Editor you can move it up or down change the colors, and the text, change yht font size, and the font.");
      }
      else if (terget == "background") {
        syrratalk("go to 'Change Background Color' from there you can change the color of the hole emeil background.");
      }
      else if (terget == "logo") {
        syrratalk("click in the "+terget+" you want to edit, in the right side of the screen you'll have a Button Editor you can move it up or down change the logo picture, and the size.");
      }
      else if (terget == "icon") {
        syrratalk("click in the "+terget+" you want to edit, in the right side of the screen you'll have a Button Editor you can move it up or down change the icon picture, and the link that leads to.");
      }
      else if (terget == "Social") {
        syrratalk("click in the "+terget+" you want to edit, in the right side of the screen you'll have a Button Editor you can move it up or down change the icon picture, and the link that leads to.");
      }
      else if (terget == "picture") {
        syrratalk("click in the "+terget+" you want to edit, in the right side of the screen you'll have a Button Editor you can move it up or down change the hole picture, and the change the size.");
      }
      else if (terget == "video") {
        syrratalk("click in the "+terget+" you want to edit, in the right side of the screen you'll have a Button Editor you can move it up or down change the video.");
      }
      else if (terget == "template") {
        syrratalk("to over write a template, go to 'Templates' and click on the template you want to over write and choose 'Over Write'.");
      }
      else if (terget == "unkown") {
        syrratalk("I didne't get what you want to edit.");
        window.localStorage.setItem("messg", newformtext + "<br />He sad : " + userquestion);
        window.localStorage.setItem("submit", "OKAY");
      }
      else {
        window.localStorage.setItem("messg", newformtext + "<br />He sad : " + userquestion);
        window.localStorage.setItem("submit", "OKAY");
        syrratalk("I'm sorry I didn't understand, i will send your message to the developer.");
      }
    }
    else if (order == "delete") {
      if (terget == "button") {
        syrratalk("click on the "+terget+" you want to delete when the editor show up click 'DELETE'.");
      }
      else if (terget == "link") {
        syrratalk("click on the "+terget+" you want to delete when the editor show up click 'DELETE'.");
      }
      else if (terget == "text") {
        syrratalk("click on the "+terget+" you want to delete when the editor show up click 'DELETE'.");
      }
      else if (terget == "title") {
        syrratalk("click on the "+terget+" you want to delete when the editor show up click 'DELETE'.");
      }
      else if (terget == "logo") {
        syrratalk("click on the "+terget+" you want to delete when the editor show up click 'DELETE'.");
      }
      else if (terget == "icon") {
        syrratalk("click on the "+terget+" you want to delete when the editor show up click 'DELETE'.");
      }
      else if (terget == "Social") {
        syrratalk("click on the "+terget+" you want to delete when the editor show up click 'DELETE'.");
      }
      else if (terget == "picture") {
        syrratalk("click on the "+terget+" you want to delete when the editor show up click 'DELETE'.");
      }
      else if (terget == "video") {
        syrratalk("click on the "+terget+" you want to delete when the editor show up click 'DELETE'.");
      }
      else if (terget == "template") {
        syrratalk("Go to 'Templates' click on the template you want to delete then click 'DELETE'.");
      }
      else if (terget == "unkown") {
        syrratalk("I didn't get what you want to DELETE.");
        window.localStorage.setItem("messg", newformtext + "<br />He sad : " + userquestion);
        window.localStorage.setItem("submit", "OKAY");
      }
      else {
        window.localStorage.setItem("messg", newformtext + "<br />He sad : " + userquestion);
        window.localStorage.setItem("submit", "OKAY");
        syrratalk("I'm sorry I didn't understand, i will send your message to the developer.");
      }
    }
    else if (order == "unkown") {
      if (terget == "button") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "link") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "text") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "title") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "background") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "logo") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "icon") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "Social") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "picture") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "video") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "template") {
        syrratalk("I didn't get what you want to do to the "+terget+".");
      }
      else if (terget == "unkown") {
        callafterlive(senword, syrratalk);
      }
      else {
        window.localStorage.setItem("messg", newformtext + "<br />He sad : " + userquestion);
        window.localStorage.setItem("submit", "OKAY");
        syrratalk("I'm sorry I didn't understand, i will send your message to the developer.");
      }
    }
  }, 2000);
}
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
function syrrahelp(arg, url, placehoder) {
    const newelem = document.createElement("div")
    const vid = document.createElement("video");
    const para = document.createElement("p");
    const node = document.createTextNode(arg);
    vid.setAttribute("class", "videohelp");
    vid.setAttribute("style", "cursor: pointer;");
    url = 'https://drive.google.com/uc?export=view&id=' + FFGDFL(url);
    vid.setAttribute("poster", placehoder);
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
  //$("#syrradiv").fadeToggle();
  document.getElementById('syrradiv').style.display = "block";
  document.getElementById('syrravid').setAttribute("src", arg);
  op();
}
function closesyrraex() {
  //$("#syrradiv").fadeToggle();
  document.getElementById('syrradiv').style.display = "none";
  document.getElementById('syrravid').pause();
}
function tips() {
  if (hi == 1) {
    syrratalk("Hi there, i'm Syrra your E-mail Designer assistant.");
    setTimeout(function() {
      var arg = "https://drive.google.com/file/d/1I8ChJfn0DnNJjeSH8_DHf8OkqO6_Qv9q/view?usp=sharing";
      var placehoder = "img/1.png";
      syrrahelp("The video above explains how to use the E-mail Designer.", arg, placehoder);
    }, 3000);
    setTimeout(function() {
      var arg = "https://drive.google.com/file/d/1rBpytu_-v4FbP2PdAXfolFWoPd4SiXI1/view?usp=drive_link";
      var placehoder = "img/2.png";
      syrrahelp("The video above shows the different ways to export an Email.", arg, placehoder);
    }, 5000);
    setTimeout(function() {
      var arg = "https://drive.google.com/file/d/1I7Y9jI6DwKaTCGjaJdCVPJ92_NO19rON/view?usp=drive_link";
      var placehoder = "img/3.png";
      syrrahelp("The video above shows how to put the Designed E-mail in your E-mail service.", arg, placehoder);
    }, 7000);
    setTimeout(function() {
      var arg = "Note: All the images and Videos you're willing to add in the email should be in google drive and their share settings must be 'Any one with the link'.";
      syrratalkhigh(arg);
    }, 9000);
    setTimeout(function() {
      syrratalk("I hope this helped, Have a nice day.");
      syrratalk("Happy Designing ;).");
    }, 11000);
    setTimeout(function() {
      var arg = "https://drive.google.com/file/d/1lEAnP3QOgq1q_0dTyo6BWK0HQ5KUejYF/view?usp=drive_link";
      var placehoder = "img/4.png";
      syrrahelp("A pro tip use E-mail temlplate to save your desgined Email, you can find how in the video above.", arg, placehoder);
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
    window.localStorage.setItem("montchvalue", montch);
    window.localStorage.setItem("montchstyle", "block");
  }
  else {
    montch = montch;
  }
}
function mksound(arg) {
  const audio = new Audio(arg);
  audio.play();
}
function CallSyrra() {
  ///openr's haouser
  const openbtn = creatanelemn("input", "openbt", "openbt", "", "", "Chat/talk with Syrra", "button", "open", "", "op()", "", "");
  const montch = creatanelemn("input", "", "montch", "", "display: none;", "", "text", 1, "", "", true, "");
  const chatdiv = creatanelemn("div", "oper", "oper", "", "", "", "", "", openbtn, "", "", "");
  chatdiv.appendChild(montch);
  document.getElementById('gardien').appendChild(chatdiv);
  //chat haouser
  //headers
  const paraspdr = creatanelemn("p", "", "spas", "", "", "", "", "", "", "", "", "SyrraAssist");
  const greatdiv = creatanelemn("div", "spdr", "", "", "", "", "", "", paraspdr, "", "", "");
  const closbtn = creatanelemn("input", "", "closeX", "close", "", "", "button", "X", "", "op()", "", "");
  const greaterdiv = creatanelemn("div", "headline", "headline", "", "", "", "", "", closbtn, "", "", "");
  greaterdiv.appendChild(greatdiv);
  //content
  const chatcontent = creatanelemn("div", "holder", "chatcontent", "", "", "", "", "", "", "", "", "");
  const contendiv = creatanelemn("div", "chat", "", "", "", "", "", "", chatcontent, "", "", "");
  //footer
  const usersubmit = creatanelemn("input", "sendtext", "sendtext", "", "", "", "button", "send", "", "aa();SyrraAI();", "", "");
  const userinput = creatanelemn("input", "chattext", "textvalue", "", "", "", "text", "", "", "", "", "");
  userinput.setAttribute("placeholder", "what do you think?");
  const footerdiv = creatanelemn("div", "bottomline", "bottomline", "", "", "", "", "", userinput, "", "", "");
  footerdiv.appendChild(usersubmit);
  //finel assemply
  const masterdiv = creatanelemn("div", "chatbox", "chatbox", "", "display: none;", "", "", "", greaterdiv, "", "", "");
  masterdiv.appendChild(contendiv);masterdiv.appendChild(footerdiv);
  document.getElementById('gardien').appendChild(masterdiv);
  //videohelper
  const vid = creatanelemn("video", "", "syrravid", "", "", "", "", "", "", "", "", "");
  vid.setAttribute("src", "#");vid.setAttribute("autoplay", "true");vid.setAttribute("controls", "true");
  const clsvid = creatanelemn("input", "", "", "", "", "", "button", "X", "", "closesyrraex()", "", "");
  const vidhouser = creatanelemn("div", "syrradiv", "syrradiv", "", "display:none;", "", "", "", clsvid, "", "", "");
  vidhouser.appendChild(vid);
  document.getElementById('gardien').appendChild(vidhouser);
  //formlistener
  const form = creatanelemn("iframe", "", "subform", "", "position:absolute;display:none;", "", "", "", "", "", "", "");
  form.setAttribute("src", "Form.html");form.setAttribute("width", "100%");form.setAttribute("height", "100%");
  document.getElementById('gardien').appendChild(form);
  //get back the text
  if (textchatbox != ""&&textchatbox!=null) {
    document.getElementById('chatcontent').innerHTML = textchatbox;
  }
  //get back the view properites
  if (montchvalue != "" && montchvalue != undefined && montchvalue != null) {
    document.getElementById('montch').value = montchvalue;
  }
  if (montchstyle != "" && montchstyle != undefined && montchstyle != null) {
    document.getElementById('montch').style.display = montchstyle;
  }
  //set an evvent listener
  var send45 = document.getElementById('textvalue');
  send45.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      aa();SyrraAI();
    }
  });
}
function mksound(arg) {
  const audio = new Audio(arg);
  audio.play();
}
window.localStorage.setItem("submit", "READY");
var elstra = setInterval(function () {
  var submit = window.localStorage.getItem("submit");
  if (working == 1 && submit == "NOTOKAY") {
    window.localStorage.setItem("submit", "READY");
    submit = "READY";
    setTimeout(function () {
      document.getElementById('subform').remove();
      const form = creatanelemn("iframe", "", "subform", "", "position:absolute;display:none;", "", "", "", "", "", "", "");
      form.setAttribute("src", "Form.html");form.setAttribute("width", "100%");form.setAttribute("height", "100%");
      document.getElementById('gardien').appendChild(form);
    }, 1000);
  }
}, 200);
var dextra = setTimeout(function () {
  CallSyrra();
}, 1000);
function creatanelemn(kng, clss, id, name, style, title, type, value, elem, onclick, disabled, innertext) {
  const kingbck = document.createElement(kng)
  if (clss != "") {
    kingbck.classList.add(clss);
  }
  if (id != "") {
    kingbck.setAttribute('id', id);
  }
  if (name != "") {
    kingbck.setAttribute('name', name);
  }
  if (style != "") {
    kingbck.setAttribute('style', style);
  }
  if (title != "") {
    kingbck.setAttribute('title', title);
  }
  if (type != "") {
    kingbck.setAttribute('type', type);
  }
  if (value != "") {
    kingbck.setAttribute('value', value);
  }
  if (onclick != "") {
    kingbck.setAttribute('onclick', onclick);
  }
  if (disabled != "") {
    kingbck.setAttribute('disabled', disabled);
  }
  if (innertext != "") {
    kingbck.innerText = innertext;
  }
  if (elem != "") {
    kingbck.appendChild(elem);
  }
  return kingbck
}
function convertlink(link) {
  url = link.replaceAll("#", "/");
  url = url.replaceAll("@", ":");
  return url
}
var waitingmsg = ["|", "/", "-", "\\"];
function Syrrawait(perid, timeout) {
  //start waiting message
  conter = 0;
  const newelem = document.createElement("div")
  const para = document.createElement("div");
  const node = document.createTextNode(waitingmsg[conter]);
  para.innerHTML = waitingmsg[conter];
  para.classList.add("replaytext");
  para.setAttribute('name', 'replaytext');
  para.setAttribute("id", "waitingmessage");
  newelem.classList.add("chatout");
  newelem.setAttribute("id", "waitingmessageholder");
  newelem.appendChild(para);
  const element = document.getElementById("chatcontent");
  element.appendChild(newelem);
  element.scrollTop = element.scrollHeight;
  var finish
  setTimeout(function () {
    finish = tourntext(perid, timeout, conter);
  }, timeout);
  if (finish) {
    return true
  }
}
var vienom;
function tourntext(perid, timeout, conter) {
  vienom = setInterval(function () {
    if (0 < perid) {
      if (conter <= 2) {
        conter += 1;
      }
      else {
        conter = 0;
      }
      document.getElementById("waitingmessage").innerHTML = waitingmsg[conter];
      perid -= timeout
    }
    else {
      clearInterval(vienom);
      document.getElementById('waitingmessageholder').remove();
      return true
    }
  }, timeout);
  return true
}
function forxinY(sentence, word) {
  sen = sentence.split(" ")
  sen.forEach((item, i) => {
    if (item == word) {
      return true;
    }
    else {
      return false;
    }
  });

}
window.localStorage.setItem("submit", "READY");
setInterval(function () {
  var submit = window.localStorage.getItem("submit");
  if (working == 1 && submit == "NOTOKAY") {
    window.localStorage.setItem("submit", "READY");
    submit = "READY";
    setTimeout(function () {
      document.getElementById('subform').remove();
      document.getElementsByTagName('body')[0].innerHTML += CNT(subform, 0);
    }, 1000);
  }
}, 200);
function callafterlive(sentence, callback) {
  var name = ["who are you", "what are you", "who you are", "what is your name", "what's your name", "your name", "give me your name","name"];
  var job = ["what you do", "what can you do", "what's your job", "what is your job"];
  var goodbye =  [ "bye", "see you later", "goodbye",];
  var goodnight = ["goodnight", "good night", "night", "going to sleep", "sleep", "tired"];
  var greetinf = ["hi", "how are you", "is anyone there ?", "hello", "good day","good Morning","good afternoon","good evening","Morning","afternoon","evening","hola"];
  var thanks = ["thanks", "thank you", "that's helpful", "helpful", "you're smart","you are smart", "awesome, thanks", "thanks for helping me", "thanks you for helping me"];
  var dogood = ["i'm fine","i am fine","doing great","doing well","great","awesome","i'm doing great","i'm doing well","i am doing great","i am doing well"]
  var SyrraDectionery = [name, job,goodbye,goodnight,greetinf,thanks,dogood];
  var calinanser = {};
  for (var i = 0; i < SyrraDectionery.length; i++) {
    for (var j = 0; j < sentence.length; j++) {
      for (var x = 0; x < SyrraDectionery[i].length; x++) {
        const word = SyrraDectionery[i][x].split(" ");
        for (var f = 0; f < word.length; f++) {
          if ((word[f]).toLowerCase() == sentence[j]) {
            if (calinanser[SyrraDectionery[i]] === undefined) {
              calinanser[SyrraDectionery[i]] = 1;
            } else {
              calinanser[SyrraDectionery[i]]++;
            }
          }
        }
      }
    }
  }
  // Convert the object to an array of key-value pairs
  const rearreange = Object.entries(calinanser);
  // Sort the array of key-value pairs based on degrees (values)
  rearreange.sort((a, b) => b[1] - a[1]);
  // Convert the sorted array back to an object
  const sortedtobics = Object.fromEntries(rearreange);
  order = "";terget = "";
  //get the keys
  keys = Object.keys(sortedtobics);
  //grap the first key
  firstKey = keys[0];
  cmp = firstKey.split(",");
  job = job.toString();cmp = cmp.toString();name = name.toString();goodbye = goodbye.toString();goodnight = goodnight.toString();
  greetinf = greetinf.toString();thanks = thanks.toString();dogood = dogood.toString();
  if (cmp == name) {
    callback("I'm Syrra your E-mail Designer Assistant, My code is V2 Date-release 20231001.01, Powered By KimEngineOne.");
    return
  }
  else if (cmp == job) {
    callback("I'm Here to help You.");
    return
  }
  else if (cmp == goodbye) {
    callback("See you later.")
    return
  }
  else if (cmp == goodnight) {
    callback("Sleep tight, Don't let the Computer Bugs bite 🥱.");
    return
  }
  else if (cmp == greetinf) {
    callback("hi, how are you?");
    return
  }
  else if (cmp == thanks) {
    callback("Happy to help!");
    return
  }
  else if (cmp == dogood) {
    callback("Great to hear that.");
    return
  }
  else {
    callback("I'm Soory I didn't understand.");
    window.localStorage.setItem("messg", newformtext + "<br />He sad : " + userquestion);
    window.localStorage.setItem("submit", "OKAY");
    return
  }
  setTimeout(function () {
    callback(sortedtobics)
  }, 100);
}
