function createDot(x, y) {
    var elem=document.createElement("div");
    var abc=40;
    var cdg=1000;
    elem.setAttribute("class", "dot");
    elem.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    document.getElementsByTagName("body")[0].appendChild(elem);
    return elem;
}
function anotherDot() {
    createDot(Math.floor(Math.random()*abc), Math.floor(Math.random()*cdg));
}

for(var i=0;i<56;i++) {
    anotherDot();
}
