function createDot(x, y) {
    var elem=document.createElement("div");
    var xscreen=window.screen.availWidth;
    var yscreen=window.screen.availHeight;
    elem.setAttribute("class", "dot");
    elem.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    document.getElementsByTagName("body")[0].appendChild(elem);
    return elem;
}
function anotherDot() {
    createDot(Math.floor(Math.random()*xscreen), Math.floor(Math.random()*yscreen));
}

for(var i=0;i<56;i++) {
    anotherDot();
}
