function createDot(x, y) {
    var elem=document.createElement("div");
    elem.setAttribute("class", "dot");
    elem.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    document.getElementsByTagName("body")[0].appendChild(elem);
    return elem;
}
function anotherDot() {
    createDot(Math.floor(Math.random()*1920), Math.floor(Math.random()*1080));
}

for(var i=0;i<128;i++) {
    anotherDot();
}
