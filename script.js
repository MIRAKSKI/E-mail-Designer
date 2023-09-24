var windowWidth,windowheight;const isPhone = navigator.userAgent.match(/mobile/i);
function onWindowResize() {
  windowWidth = window.innerWidth;
  if (isPhone) {
    // The device is a phone.
    if (windowheight > windowWidth) {
      document.getElementById('csslink').removeAttribute("href");
    }
    else {
      document.getElementById('csslink').setAttribute("href", "master.css");
    }
  }
  else {
    if (windowWidth < 600) {
      document.getElementById('csslink').removeAttribute("href");
    }
    else {
      document.getElementById('csslink').setAttribute("href", "master.css");
    }
  }
}
window.addEventListener('resize', onWindowResize);
windowWidth = window.innerWidth;
windowheight = window.innerheight;
if (isPhone) {
  // The device is a phone.
  if (windowheight > windowWidth) {
    document.getElementById('csslink').removeAttribute("href");
  }
}
else {
  // The device is not a phone.
  document.getElementById('csslink').setAttribute("href", "master.css");
}
var gid,elemnt,btncol = 0,gidd,numhdr;
function selecttoedit(id, place) {
  var tagName = document.getElementById(id).tagName;gid=id;elemnt = tagName.toString();
  document.getElementById('movbtns1').style.display = "block";
  document.getElementById('movbtns2').style.display = "block";
  if (tagName.toString() == "P") {
    var cls = document.getElementById(id).parentElement.getAttribute("class");
    if (cls == "eholdr") {
      document.getElementById('movbtns0').removeAttribute("onclick");
      document.getElementById('movbtns1').removeAttribute("onclick");
      document.getElementById('movbtns2').removeAttribute("onclick");
      document.getElementById('movbtns0').setAttribute("onclick", "textstyler('dl')");
      document.getElementById('movbtns1').setAttribute("onclick", "textstyler('up')");
      document.getElementById('movbtns2').setAttribute("onclick", "textstyler('dn')");
    }
    else if (cls == "hdrclass") {
      document.getElementById('movbtns0').removeAttribute("onclick");
      document.getElementById('movbtns1').removeAttribute("onclick");
      document.getElementById('movbtns2').removeAttribute("onclick");
      document.getElementById('movbtns0').setAttribute("onclick", "textstyler('dlhd')");
      document.getElementById('movbtns1').setAttribute("onclick", "textstyler('uphd')");
      document.getElementById('movbtns2').setAttribute("onclick", "textstyler('dnhd')");
    }
    document.getElementById('imager').style.display = "none";document.getElementById('linker').style.display = "none";
    document.getElementById('writer').style.display = "block";document.getElementById('adder').style.display = "none";
    document.getElementById('homer').style.display = "none";document.getElementById('buttoner').style.display = "none";
    document.getElementById('imagerhd').style.display = "none";
    document.getElementById('txtar').value = document.getElementById(id).innerText;
    var fontsize = document.getElementById(id).style.fontSize;
    if (fontsize != "" && fontsize != undefined) {
      document.getElementById('fsz').value = fontsize.split("px")[0].toString();
    }
    else {
      document.getElementById('fsz').value = 16;
    }
  }
  else if (tagName.toString() == "A") {
    var cls = document.getElementById(gid).getAttribute("class");
    if (cls.toString() == "anclass") {
      document.getElementById('iconhld').style.display = "grid";
      document.getElementById('iconhlds').style.display = "flex";
      document.getElementById('txthld').style.display = "none";
      document.getElementById('txtlnk').style.display = "none";
      document.getElementById('link_editor').innerText="Icon Editor";
    }
    else if (cls.toString() == "link") {
      document.getElementById('iconhld').style.display = "none";
      document.getElementById('iconhlds').style.display = "none";
      document.getElementById('txthld').style.display = "grid";
      document.getElementById('txtlnk').style.display = "flex";
      document.getElementById('txtlnk').value = document.getElementById(id).innerHTML;
      document.getElementById('link_editor').innerText="Link Editor";
    }
    //document.getElementById('movbtns0').removeAttribute("onclick");
    document.getElementById('movbtns1').style.display = "none";
    document.getElementById('movbtns2').style.display = "none";
    document.getElementById('movbtns0').setAttribute("onclick", "textstyler('dlft')");
    //document.getElementById('movbtns1').setAttribute("onclick", "textstyler('upft')");
    //document.getElementById('movbtns2').setAttribute("onclick", "textstyler('dnft')");
    document.getElementById('txtlnk').value = document.getElementById(id).innerHTML;
    document.getElementById('culnk').innerHTML = document.getElementById(gid).getAttribute("href");
    document.getElementById('imager').style.display = "none";document.getElementById('linker').style.display = "block";
    document.getElementById('writer').style.display = "none";document.getElementById('adder').style.display = "none";
    document.getElementById('homer').style.display = "none";document.getElementById('buttoner').style.display = "none";
    document.getElementById('imagerhd').style.display = "none";
    document.getElementById('iframe_a').setAttribute("src", "");
  }
  else if (tagName.toString() == "IMG") {
    if (place == "ftr") {
      document.getElementById('imager').style.display = "none";document.getElementById('linker').style.display = "none";
      document.getElementById('writer').style.display = "none";document.getElementById('adder').style.display = "none";
      document.getElementById('homer').style.display = "none";document.getElementById('buttoner').style.display = "none";
      document.getElementById('imagerhd').style.display = "block";
      var t = document.getElementById(gid).getAttribute('class');console.log(t);
      if (t == 'ftrelem') {
        document.getElementById('culink').setAttribute("onclick", "textstyler('dlft')");
        document.getElementById('culinks').setAttribute("onclick", "textstyler('upft')");
        document.getElementById('culinkx').setAttribute("onclick", "textstyler('dnft')");
      }
      else if (t == 'hdrelem') {
        document.getElementById('culink').setAttribute("onclick", "textstyler('dlhd')");
        document.getElementById('culinks').setAttribute("onclick", "textstyler('uphd')");
        document.getElementById('culinkx').setAttribute("onclick", "textstyler('dnhd')");
      }
    }
    else {
      document.getElementById('imager').style.display = "block";document.getElementById('linker').style.display = "none";
      document.getElementById('writer').style.display = "none";document.getElementById('adder').style.display = "none";
      document.getElementById('homer').style.display = "none";document.getElementById('buttoner').style.display = "none";
      document.getElementById('imagerhd').style.display = "none";
    }
  }
  else if (tagName.toString() == "TABLE") {
    document.getElementById('btnlinkch').removeAttribute("onclick");
    document.getElementById('btnlinkch').setAttribute("onclick","textstyler('chbtn')");
    document.getElementById('coloerseter').style.display = "flex";
    document.getElementById('textseter').style.display = "block";
    document.getElementById('txtars').style.display = "block";
    document.getElementById('btnider').innerText = "Button Editor";
    document.getElementById('btnlnk').innerHTML = document.getElementById('ank' + gid).getAttribute("href");
    document.getElementById('txtars').value = document.getElementById('btn' + gid).innerHTML;
    document.getElementById('imager').style.display = "none";document.getElementById('linker').style.display = "none";
    document.getElementById('writer').style.display = "none";document.getElementById('adder').style.display = "none";
    document.getElementById('homer').style.display = "none";document.getElementById('buttoner').style.display = "block";
    document.getElementById('imagerhd').style.display = "none";
    document.getElementById('iframe_a').setAttribute("src", "");gidd=gid;
  }
  else if (tagName.toString() == "VIDEO") {
    document.getElementById('btnlinkch').removeAttribute("onclick");
    document.getElementById('btnlinkch').setAttribute("onclick","textstyler('chvida')");
    document.getElementById('coloerseter').style.display = "none";
    document.getElementById('textseter').style.display = "none";
    document.getElementById('txtars').style.display = "none";
    document.getElementById('btnider').innerText = "Video Editor";
    document.getElementById('link_editor').innerText="Video Editor";
    document.getElementById('culnk').innerHTML = document.getElementById(gid).getAttribute("src");
    document.getElementById('imager').style.display = "none";document.getElementById('linker').style.display = "none";
    document.getElementById('writer').style.display = "none";document.getElementById('adder').style.display = "none";
    document.getElementById('homer').style.display = "none";document.getElementById('buttoner').style.display = "block";
    document.getElementById('imagerhd').style.display = "none";
    document.getElementById('iframe_a').setAttribute("src", "");
  }
}
const txtar = document.getElementById('txtar');
txtar.onkeyup = () => {
  document.getElementById(gid).innerText = document.getElementById('txtar').value;
}
const txtars = document.getElementById('txtars');
txtars.onkeyup = () => {
  document.getElementById('btn' + gidd).innerHTML = document.getElementById('txtars').value;
}
const txtlnk = document.getElementById('txtlnk');
txtlnk.onkeyup = () => {
  document.getElementById(gid).innerHTML = document.getElementById('txtlnk').value;
}
function textstyler(arg) {
  if (arg=="b") {
    var sty = document.getElementById(gid).style.fontWeight;
    if (sty == "bold") {
      document.getElementById(gid).style.fontWeight = "";
    }
    else {
      document.getElementById(gid).style.fontWeight = "bold";
    }
  }
  else if (arg=="i") {
    var sty = document.getElementById(gid).style.fontStyle;
    if (sty == "italic") {
      document.getElementById(gid).style.fontStyle = "";
    }
    else {
      document.getElementById(gid).style.fontStyle = "italic";
    }
  }
  else if (arg=="c") {
    document.getElementsByClassName('editor')[0].style.overflow = "hidden";
    if (windowWidth < 600) {
      document.getElementById('setholder').style.height = "50%";
      $("#setholder").animate({width: '100%'});
    }
    else {
      document.getElementById('setholder').style.height = "100%";
      $("#setholder").animate({width: '50%'});
    }
  }
  else if (arg=="sz") {
    document.getElementById(gid).style.fontSize = document.getElementById('fsz').value + "px";
  }
  else if (arg=="-") {
    var sz = document.getElementById('fsz').value;
    document.getElementById('fsz').value = eval(sz)-2;
    document.getElementById(gid).style.fontSize = document.getElementById('fsz').value + "px";

  }
  else if (arg=="+") {
    var sz = document.getElementById('fsz').value;
    document.getElementById('fsz').value = eval(sz)+2;
    document.getElementById(gid).style.fontSize = document.getElementById('fsz').value + "px";
  }
  else if (arg == "up") {
    var place = document.getElementById(gid).parentElement.getAttribute('id');var holders = [];
    var num = eval(place.split("_")[1].toString());holders = document.getElementsByClassName('eholdr');num = num.toString();
    var nameo = place.split("_")[0].toString();holdeer=document.getElementById(place).parentElement.getAttribute('id');
    upg(nameo, num, holders, place, holdeer);
  }
  else if (arg == "dn") {
    var place = document.getElementById(gid).parentElement.getAttribute('id');var holders = [];
    var num = eval(place.split("_")[1].toString());holders = document.getElementsByClassName('eholdr');num = num.toString();
    var nameo = place.split("_")[0].toString();holdeer=document.getElementById(place).parentElement.getAttribute('id');
    downg(place, nameo, holders, num, holdeer);
  }
  else if (arg == "dl") {
    document.getElementById('div' + gid).remove();
    holders = document.getElementsByClassName('eholdr')
    for (var i = 0; i < holders.length; i++) {
      document.getElementsByClassName('eholdr')[i].setAttribute("id", "divp_"+i);
    }
  }
  else if (arg == "chlk") {
    var link = document.getElementById('linkhld').value;
    document.getElementById(gid).setAttribute("href", link);
    document.getElementById('culnk').innerHTML = link;
    document.getElementById('linkhld').value = "";
  }
  else if (arg == "uphd") {
    var place = document.getElementById(gid).getAttribute('id');var holders = [];
    var num = eval(place.split("_")[1].toString());holders = document.getElementsByClassName('hdrelem');num = num.toString();
    var nameo = place.split("_")[0].toString();
    upgf(nameo, num, holders, place);
  }
  else if (arg == "dnhd") {
    console.log(gid);
    var place = document.getElementById(gid).getAttribute('id');var holders = [];
    var num = eval(place.split("_")[1].toString());holders = document.getElementsByClassName('hdrelem');num = num.toString();
    var nameo = place.split("_")[0].toString();
    downgf(place, nameo, holders, num);
    gid = document.getElementById(gid).getAttribute('id');
  }
  else if (arg == "dlhd") {
    document.getElementById(gid).remove();
    holders = document.getElementsByClassName('hdrelem');
    for (var i = 0; i < holders.length; i++) {
      document.getElementsByClassName('hdrclass')[i].setAttribute("id", "t_"+i);
    }
  }
  else if (arg == "upft") {
    var place = document.getElementById(gid).parentElement.getAttribute('id');var holders = [];
    holdeer=document.getElementById(place).parentElement.getAttribute('id');
    var num = eval(place.split("_")[1].toString());holders = document.getElementsByClassName('ftrhdr');
    var nameo = place.split("_")[0].toString();
    upg(nameo, num, holders, place, holdeer);
  }
  else if (arg == "dnft") {
    var place = document.getElementById(gid).parentElement.getAttribute('id');var holders = [];
    var num = eval(place.split("_")[1].toString());holders = document.getElementsByClassName('ftrhdr');num = num.toString();
    var nameo = place.split("_")[0].toString();holdeer=document.getElementById(place).parentElement.getAttribute('id');
    downg(place, nameo, holders, num, holdeer);
  }
  else if (arg == "dlft") {
    var cla = document.getElementById(gid).getAttribute("class");
    if (cla == "anclass") {
      document.getElementById(gid).remove();
      holders = document.getElementsByClassName('anclass');
      for (var i = 0; i < holders.length; i++) {
        document.getElementsByClassName('anclass')[i].setAttribute("id", "a_"+i);
      }
    }
    else {
      document.getElementById(gid).parentElement.remove();
      holders = document.getElementsByClassName('ftrhdr');
      for (var i = 0; i < holders.length; i++) {
        document.getElementsByClassName('ftrhdr')[i].setAttribute("id", "diva_"+i);
      }
    }
  }
  else if (arg == "btncolor") {
    if (windowWidth < 600) {
      document.getElementById('setholder').style.height = "50%";
      $("#setholder").animate({width: '100%'});
    }
    else {
      document.getElementById('setholder').style.height = "100%";
      $("#setholder").animate({width: '50%'});
    }
    document.getElementsByClassName('editor')[0].style.overflow = "hidden";
    btncol = 1;
  }
  else if (arg == "txtcolor") {
    if (windowWidth < 600) {
      document.getElementById('setholder').style.height = "50%";
      $("#setholder").animate({width: '100%'});
    }
    else {
      document.getElementById('setholder').style.height = "100%";
      $("#setholder").animate({width: '50%'});
    }
    document.getElementsByClassName('editor')[0].style.overflow = "hidden";
    btncol = 0;
  }
  else if (arg == "chbtn") {
    var link = document.getElementById('linkbtn').value;
    document.getElementById('ank' + gid).setAttribute("href", link);
    document.getElementById('btnlnk').innerHTML = link;
    document.getElementById('linkbtn').value = "";
  }
  else if (arg == "chvida") {
    var link = document.getElementById('linkbtn').value;
    document.getElementById(gid).setAttribute("src", link);
    document.getElementById('btnlnk').innerHTML = link;
    document.getElementById('linkbtn').value = "";
  }
  else if (arg == "chvid") {
    var link = document.getElementById('linkhld').value;
    document.getElementById(gid).setAttribute("src", link);
    document.getElementById('culnk').innerHTML = link;
    document.getElementById('linkhld').value = "";
    //yti = link.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    //var links = "https://i3.ytimg.com/vi/" + yti[1] + "/maxresdefault.jpg";
    //document.getElementById(gid).setAttribute("poster", links);
  }
}
function setcoolers(color) {
  if (elemnt == "P") {
    document.getElementById(gid).style.color = color;
  }
  else if (elemnt == "A") {
    document.getElementById(gid).style.color = color;
  }
  else if (elemnt == "DIV") {
    document.getElementById(gid).style.backgroundColor = color;
  }
  else if (elemnt == "TABLE") {
    if (btncol == 0) {
      //to text
      document.getElementById('btn' + gid).style.color = color;
    }
    else if (btncol == 1) {
      //to BG
      document.getElementById('btn' + gid).style.backgroundColor = color;
    }
  }
  else if (elemnt == "cont") {
    document.getElementById(gid).style.backgroundColor = color;
  }
}
function Close(arg) {
  if (arg == "color") {
    $("#setholder").animate({width: '0px'});
  }
  else if (arg == "hm") {
    document.getElementById('imager').style.display = "none";document.getElementById('linker').style.display = "none";
    document.getElementById('writer').style.display = "none";document.getElementById('adder').style.display = "none";
    document.getElementById('homer').style.display = "block";document.getElementById('buttoner').style.display = "none";
    document.getElementById('imagerhd').style.display = "none";
  }
}
var img, button, text, logo, header, title, subtitle, icon, link, video, ftcon, midcon, hrcon,end,csslink;
function adders(arg) {
  if (arg == "ele") {
    document.getElementById('imager').style.display = "none";document.getElementById('linker').style.display = "none";
    document.getElementById('writer').style.display = "none";document.getElementById('adder').style.display = "block";
    document.getElementById('homer').style.display = "none";document.getElementById('buttoner').style.display = "none";
    document.getElementById('imagerhd').style.display = "none";
  }
  else if (arg == "bgcol") {
    gid = "E_mail";elemnt = "cont";
    if (windowWidth < 600) {
      document.getElementById('setholder').style.height = "50%";
      $("#setholder").animate({width: '100%'});
    }
    else {
      document.getElementById('setholder').style.height = "100%";
      $("#setholder").animate({width: '50%'});
    }
    document.getElementsByClassName('editor')[0].style.overflow = "hidden";
  }
  else if (arg == "laycol") {
    gid = "condev";elemnt = "cont";
    if (windowWidth < 600) {
      document.getElementById('setholder').style.height = "50%";
      $("#setholder").animate({width: '100%'});
    }
    else {
      document.getElementById('setholder').style.height = "100%";
      $("#setholder").animate({width: '50%'});
    }
    document.getElementsByClassName('editor')[0].style.overflow = "hidden";
  }
  else if (arg == "LG") {
    numhdr=document.getElementsByClassName('hdrelem').length;
    var elemnts = CNT(logo, numhdr);
    document.getElementById('headerX_0').innerHTML += elemnts;numhdr +=1;
  }
  else if (arg == "HDR") {
    numhdr=document.getElementsByClassName('hdrelem').length;
    var elemnts = CNT(header, numhdr);
    document.getElementById('headerX_0').innerHTML += elemnts;numhdr +=1;
  }
  else if (arg == "TTL") {
    numhdr=document.getElementsByClassName('eholdr').length;
    var elemnts = CNT(midcon, numhdr);
    elemnts += CNT(title, numhdr);elemnts += end
    document.getElementById('condev').innerHTML += elemnts;
    numhdr +=1;
  }
  else if (arg == "STTL") {
    numhdr=document.getElementsByClassName('eholdr').length;
    var elemnts = CNT(midcon, numhdr);
    elemnts += CNT(subtitle, numhdr);elemnts += end
    document.getElementById('condev').innerHTML += elemnts;
    numhdr +=1;
  }
  else if (arg == "TX") {
    numhdr=document.getElementsByClassName('eholdr').length;
    var elemnts = CNT(midcon, numhdr);
    elemnts += CNT(text, numhdr);elemnts += end;
    document.getElementById('condev').innerHTML += elemnts;
    numhdr +=1;
  }
  else if (arg == "MG") {
    numhdr=document.getElementsByClassName('eholdr').length;
    var elemnts = CNT(midcon, numhdr);
    elemnts += CNT(img, numhdr);elemnts += end;
    document.getElementById('condev').innerHTML += elemnts;
    numhdr +=1;
  }
  else if (arg == "BT") {
    numhdr=document.getElementsByClassName('eholdr').length;
    var elemnts = CNT(midcon, numhdr);
    elemnts += CNT(button, numhdr);elemnts += end;
    document.getElementById('condev').innerHTML += elemnts;
    numhdr +=1;
  }
  else if (arg == "VI") {
    numhdr=document.getElementsByClassName('eholdr').length;
    var elemnts = CNT(midcon, numhdr);
    elemnts += CNT(video, numhdr);elemnts += end;
    document.getElementById('condev').innerHTML += elemnts;
    numhdr +=1;
  }
  else if (arg == "FLG") {
    numele=document.getElementsByClassName('anclass').length;
    numhdr=document.getElementsByClassName('ftrhdr').length;
    numelem=document.getElementsByClassName('link').length;
    numele = numelem + numele;
    var elemnts = CNT(ftcon, numhdr);
    elemnts += CNT(flogo, numele);elemnts += end;
    document.getElementById('footerx').innerHTML += elemnts;
    numhdr +=1;
  }
  else if (arg == "SL") {
    numhdr=document.getElementsByClassName('anclass').length;
    var elemnts = CNT(ftcon, numhdr);
    elemnts += CNT(icon, numhdr);elemnts += end;
    document.getElementById('diva_0').innerHTML += elemnts;
    numhdr +=1;
  }
  else if (arg == "LK") {
    numele=document.getElementsByClassName('anclass').length;
    numhdr=document.getElementsByClassName('ftrhdr').length;
    numelem=document.getElementsByClassName('link').length;
    numele = numelem + numele;
    var elemnts = CNT(ftcon, numhdr);
    elemnts += CNT(link, numele);elemnts += end;
    document.getElementById('footerx').innerHTML += elemnts;
    numhdr +=1;
  }
  else if (arg == "blank") {
    numhdr=document.getElementsByClassName('eholdr').length;
    var elemnts = CNT(midcon, numhdr);
    elemnts += CNT(blank, numhdr);elemnts += end
    document.getElementById('condev').innerHTML += elemnts;
  }
}
function CNT(arg, count) {
  var elemnt= "";
  for (var i = 0; i < arg.length-1; i++) {
    arg[i] = arg[i].replaceAll("$", "'");
    arg[i] = arg[i].replaceAll("@@", "\"");
    elemnt += arg[i]+count;
  }
  arg[arg.length-1] = arg[arg.length-1].replaceAll("$", "'");
  arg[arg.length-1] = arg[arg.length-1].replaceAll("@@", "\"");
  elemnt += arg[arg.length-1];
  return elemnt;
}
function picsx(arg, gr) {
  var wd = document.getElementById(gid).width;
  if (arg == "zi") {
    var wdx = wd + 10;
    console.log(wdx);
    if (wdx >= 600) {
      document.getElementById(gid).style.width = 600 + "px";
    }
    else {
      document.getElementById(gid).style.width = wdx + "px";
    }
  }
  else if (arg == "zo") {
    var wdx = wd - 10;
    if (wdx <= 300) {
      document.getElementById(gid).style.width = 300 + "px";
    }
    else {
      document.getElementById(gid).style.width = wdx + "px";
    }
  }
  else if (arg == "ch") {
    var whatpix;
    var img = document.getElementById('imgpicker').value;
    var link = FFGDFL(img);
    var here = 'https://drive.google.com/uc?export=view&id=' + link;
    document.getElementById(gid).setAttribute("src", here);
  }
  else if (arg == "chpic") {
    var whatpix;var img = document.getElementById('thisicon').value;
    var link = FFGDFL(img);
    var here = 'https://drive.google.com/uc?export=view&id=' + link;
    document.getElementById(gid).childNodes[1].setAttribute("src", here);
  }
  else if (arg == "chlogo") {
    var whatpix;var img = document.getElementById('iconpicker').value;
    var link = FFGDFL(img);
    var here = 'https://drive.google.com/uc?export=view&id=' + link;
    document.getElementById(gid).setAttribute("src", here);
  }
}
function upg(nameo, num, holders, place, holdeer) {
  console.log(nameo+"_"+eval(num-1));
  document.getElementById(nameo+"_"+eval(num-1)).setAttribute("id", nameo+"inf");var newt = [];
  for (var i = 0; i < holders.length; i++) {
    if (i == (num-1)) {
      newt[i] = holders[num];
      document.getElementById(place).setAttribute("id", (nameo +"_"+ i).toString());
    }
    else if (i == num) {
      newt[i] = holders[num-1];
      document.getElementById(nameo+"inf").setAttribute("id", (nameo +"_"+ i).toString());
    }
    else {
      newt[i] = holders[i]
    }
  }
  for (var i = 0; i < holders.length; i++) {
    try {holders[i].remove();} catch (e) {} finally {}
  }
  for (var i = 0; i < newt.length; i++) {
    try {document.getElementById(holdeer).appendChild(newt[i]);} catch (e) {} finally {}
  }
}
function downg(place, nameo, holders, num) {
  document.getElementById(place).setAttribute("id", nameo+"inf");var newt = [];
  for (var i = 0; i < holders.length; i++) {
    if (i == (num)) {
      newt[i] = holders[eval(eval(num)+1)];
      console.log((nameo+"_"+ eval(eval(i)+1)).toString());
      document.getElementById((nameo+"_"+ eval(eval(i)+1)).toString()).setAttribute("id", (nameo +"_"+ i).toString());
    }
    else if (i == eval(eval(num)+1)) {
      newt[i] = holders[eval(num)];
      document.getElementById(nameo+"inf").setAttribute("id", (nameo +"_"+ i).toString());
    }
    else {
      newt[i] = holders[i];
    }
  }
  console.log(newt[0],newt[1],newt[2],newt[3]);
  for (var i = 0; i < holders.length; i++) {
    try {holders[i].remove();} catch (e) {} finally {}
  }
  for (var i = 0; i < newt.length; i++) {
    try {document.getElementById(holdeer).appendChild(newt[i]);} catch (e) {} finally {}
  }
}

function upgf(nameo, num, holders, place, palce) {
  document.getElementById(nameo+"_"+eval(num-1)).setAttribute("id", nameo+"inf");var newt = [];
  for (var i = 0; i < holders.length; i++) {
    if (i == (num-1)) {
      newt[i] = holders[num];
      document.getElementById(place).setAttribute("id", (nameo +"_"+ i).toString());
    }
    else if (i == num) {
      newt[i] = holders[num-1];
      document.getElementById(nameo+"inf").setAttribute("id", (nameo +"_"+ i).toString());
    }
    else {
      newt[i] = holders[i]
    }
  }
  for (var i = 0; i < newt.length; i++) {
    if (nameo == "t") {
      try {document.getElementById('headerX_0').appendChild(newt[i]);} catch (e) {} finally {}
    }
    else if (nameo == "a") {
      try {document.getElementById('footerx').appendChild(newt[i]);} catch (e) {} finally {}
    }
  }
  gid = document.getElementById(nameo +"_"+(eval(num)-1)).getAttribute('id');
}
function downgf(place, nameo, holders, num) {
  document.getElementById(place).setAttribute("id", nameo+"inf");var newt = [];
  for (var i = 0; i < holders.length; i++) {
    if (i == (num)) {
      newt[i] = holders[eval(eval(num)+1)];
      console.log((nameo+"_"+ eval(eval(i)+1)));
      document.getElementById((nameo+"_"+ eval(eval(i)+1)).toString()).setAttribute("id", (nameo +"_"+ i).toString());
    }
    else if (i == eval(eval(num)+1)) {
      newt[i] = holders[eval(num)];
      document.getElementById(nameo+"inf").setAttribute("id", (nameo +"_"+ i).toString());
    }
    else {
      newt[i] = holders[i];
    }
  }
  for (var i = 0; i < holders.length; i++) {
    try {holders[i].remove();} catch (e) {} finally {}
  }
  var sun = document.getElementById(gid).getAttribute('id'), sim = sun.split("_")[0].toString();

  for (var i = 0; i < newt.length; i++) {
    if (sim == "t") {
      try {document.getElementById('headerX_0').appendChild(newt[i]);} catch (e) {} finally {}
    }
    else if (sim == "a") {
      try {document.getElementById('footerx').appendChild(newt[i]);} catch (e) {} finally {}
    }
  }
  gid = document.getElementById(nameo +"_"+(eval(num)+1)).getAttribute('id');
}

img = ["<div class=@@eholdr@@ style=@@width: 100%;min-width: 100%;text-align: center;@@ id=@@divp_", "@@><!--secound pics--><img src=@@https://mirakski.github.io/E-mail-Designer/pics/3.jpg@@ alt=@@act to impact@@ width=@@100%;@@ onclick=@@selecttoedit(this.id)@@ id=@@p_", "@@></div>"];
button = ["<table id=@@p_", "@@ onclick=@@selecttoedit(this.id)@@ style=@@width:100%;@@>                   <tr>                     <td>                       <a id=@@ankp_", "@@ href=@@#@@ target=@@iframe_a@@ style=@@text-decoration: none;@@>                         <button id=@@btnp_", "@@ style=@@color:white;font-Weight:bold;margin: 10px auto;padding: 12px 22px;border:none;width:50%;max-width:100%;background:rgb(0,120,220);@@>Click Here</button>                       </a>                     </td>                   </tr>                 </table>"];
text = ["<p style=@@margin-left:20px;margin-right:20px;@@ onclick=@@selecttoedit(this.id)@@ id=@@p_", "@@>Hello Dear,I hope this email finds you well, I$m Abdelkarim Khelfaoui the OEVP MKT&PD of AIESEC In Ouargla.</p>"];
title= ["<p style=@@margin-left:20px;margin-right:20px;font-size:25px; font-weight: bold;@@ onclick=@@selecttoedit(this.id)@@ id=@@p_", "@@>AIESEC IN OUARGLA</p>"];
blank= ["<p style=@@margin-left:20px;margin-right:20px; font-weight: bold;@@ onclick=@@selecttoedit(this.id)@@ id=@@p_", "@@><br /><br /></p>"];
subtitle=["<p style=@@margin-left:20px;margin-right:20px;font-size:21px;font-weight: bold;@@ onclick=@@selecttoedit(this.id)@@ id=@@p_", "@@>Global Impact</p>"];
icon=["<a href=@@#@@style=@@margin: 20px;@@ target=@@iframe_a@@ title=@@instagram@@ onclick=@@selecttoedit(this.id)@@ id=@@a_", "@@ class=@@anclass@@>                 <img style=@@margin: 10px;@@ src=@@https://mirakski.github.io/E-mail-Designer/pics/5.png@@ alt=@@aiesec in ouargla@@ width=@@70%;@@>               </a>"];
header=["<p class=@@hdrelem@@ style=@@margin-left:20px;margin-right:20px;margin-bottom:20px;font-size:30px;text-align:center; font-Weight:bold;@@  onclick=@@selecttoedit(this.id, $ftr$)@@ id=@@t_", "@@>AIESEC in Ouargla Recruitment</p>"];
logo=["<img class=@@hdrelem@@ style=@@margin: 20px;margin-left:auto;margin-right:auto;@@ src=@@https://mirakski.github.io/E-mail-Designer/pics/1.png@@ alt=@@aiesec in ouargla@@ width=@@30%;@@ onclick=@@selecttoedit(this.id, $ftr$)@@ id=@@t_", "@@>"];
flogo=["<img class=@@ftrelem@@ style=@@margin: 20px;margin-left:auto;margin-right:auto;@@ src=@@https://mirakski.github.io/E-mail-Designer/pics/1.png@@ alt=@@aiesec in ouargla@@ width=@@30%;@@ onclick=@@selecttoedit(this.id, $ftr$)@@ id=@@a_", "@@>"];
link=["<a href=@@#@@style=@@margin: 20px;@@ target=@@iframe_a@@ title=@@instagram@@ onclick=@@selecttoedit(this.id, $ftr$)@@ id=@@a_", "@@ class=@@link@@> Link Here </a>"];
video=["<video src=@@#@@ autoplay controls poster=@@https://mirakski.github.io/E-mail-Designer/pics/3.jpg@@ poster=@@pics/3.jpg@@ width=@@100%;@@ onclick=@@selecttoedit(this.id)@@ id=@@p_", "@@></video>"];
ftcon=["<div  style=@@width: 100%;max-width:300px;margin:0 auto;display: grid;justify-content: center;@@ class=@@ftrhdr@@ id=@@diva_", "@@>"];
midcon=["<div class=@@eholdr@@ style=@@width: 100%;min-width: 100%;text-align: center;@@ id=@@divp_", "@@>"];//need end
hrcon=["<div style=@@width: 100%;max-width:600px;margin:0 auto;display: grid;justify-content: center;@@ id=@@divt_", "@@ class=@@hdrclass@@>"];//need end
end=["</div>"];
csslink = ["<link id=@@csslink@@ rel=@@stylesheet@@ href=@@second.css@@>"];
function openeshare(arg) {
  var contr = document.getElementById('E_shower').style.display;
  if (arg == "op") {
    if (contr == "block") {
      //document.getElementById('E_shower').style.display = "none";
      $("#E_shower").fadeToggle();
    }
    else {
      //document.getElementById('E_shower').style.display = "block";
      $("#E_shower").fadeToggle();
    }
  }
  else if (arg == "cp") {
    var mail = document.getElementById('E_mail_doc').innerHTML;
    mail = mail.replaceAll("iframe_a", "_blank");
    mail = mail.replaceAll("onclick=", "");mail = mail.replaceAll("id=", "");
    document.getElementById('E_copie').value=mail;document.getElementById('E_copie').style.display = "block";
    document.getElementById('E_copie').select();document.execCommand("copy");
    document.getElementById('E_copie').style.display = "none";alert("HTML Coode Copied");
  }
  else if (arg == "dl") {
    adders("blank");/*
    document.getElementById('E_mail_doc').setAttribute("hidefocus", true);
    document.getElementById('E_mail_doc').setAttribute("g_editable", true);
    document.getElementById('E_mail_doc').setAttribute("aria-multiline", "textbox");
    document.getElementById('E_mail_doc').setAttribute("contenteditable", true);
    document.getElementById('E_mail_doc').setAttribute("tabindex", 1);
    document.getElementById('E_mail_doc').setAttribute("itacorner", "6,7:1,1,0,0");
    document.getElementById('E_mail_doc').setAttribute("spellcheck", false);
    document.getElementById('E_mail_doc').setAttribute("aria-owns", ":vk");
    document.getElementById('E_mail_doc').setAttribute("aria-controls", ":vk");
    */
    document.getElementById('E_mail_doc').style.width = "100%";
    const divElement = document.querySelector('#E_mail_doc');
    // Create a Range object and select the div element.
    const range = document.createRange();
    range.selectNode(divElement);
    // Clear the current selection.
    window.getSelection().removeAllRanges();
    // Add the Range object to the selection.
    window.getSelection().addRange(range);
    // Execute the copy command.
    document.execCommand('copy');
    window.getSelection().removeAllRanges();/*
    document.getElementById('E_mail_doc').removeAttribute("style");
    document.getElementById('divp_' + numhdr).remove();
    document.getElementById('E_mail_doc').removeAttribute("hidefocus");
    document.getElementById('E_mail_doc').removeAttribute("g_editable");
    document.getElementById('E_mail_doc').removeAttribute("aria-multiline");
    document.getElementById('E_mail_doc').removeAttribute("contenteditable");
    document.getElementById('E_mail_doc').removeAttribute("tabindex");
    document.getElementById('E_mail_doc').removeAttribute("itacorner");
    document.getElementById('E_mail_doc').removeAttribute("spellcheck");
    document.getElementById('E_mail_doc').removeAttribute("aria-owns");
    document.getElementById('E_mail_doc').removeAttribute("aria-controls");*/
    alert("E-mail Design Copied");
  }
}
function FFGDFL(link) {
  const regex = /https:\/\/drive\.google\.com\/file\/d\/(?<fileId>[\w-]+)\//;
  const match = regex.exec(link);
  if (match) {
    return match.groups.fileId;
  }
  return null;
}
