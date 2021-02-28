var style = `<link rel="stylesheet" href="ddd.css">`;
var urlLocal = `http://localhost:3000/`;
var urlMaster = `https://testdrive-flax.vercel.app/`;
var fontcss = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`;
var floatbutton = `<a href="#"  onclick="show('popup2')" class="floatbutton"> <i class="fa fa-plus my-float"></i></a>`;
var custpopup = `
<div class="popup" id="popup2">
  <a href="#" onclick="hide('popup2')"><i class="fa fa-times closebutton"></i></a>
  <div id="iframe_container" style="margin:0px;padding:0px;overflow:hidden">
  <iframe class ="myiframe" src=${urlMaster} name="ifr" scrolling="yes" frameborder="0" style="position: absolute; height:100%; width:100%;"  onload = "document.body.style.height = frames.ifr.document.body.offsetHeight + parseInt(document.getElementById('iframe_container').style.top) + parseInt(document.getElementById('iframe_container').style.bottom) + 'px'" ></iframe>
  </div>
</div>
`;
var template = style + fontcss + floatbutton + custpopup;
var actualapp = `https://testdrive-on3r0vbhp.vercel.app/`;
var render = function (template, node) {
  node.innerHTML = template;
};
window.onload = function () {
  render(template, document.querySelector('div'));
};

$ = function (id) {
  return document.getElementById(id);
};
var show = function (id) {
  $(id).style.display = 'block';
};
var hide = function (id) {
  $(id).style.display = 'none';
};

window.onscroll = function () {
  frames.ifr.document.documentElement.scrollTop = window.pageYOffset;
  frames.ifr.document.body.scrollTop = window.pageYOffset; // Google Chrome, Safari, documents without valid doctype
};

window.onresize = function () {
  document.body.style.height =
    frames.ifr.document.body.offsetHeight +
    parseInt(document.getElementById('iframe_container').style.top) +
    parseInt(document.getElementById('iframe_container').style.bottom) +
    'px';
};
