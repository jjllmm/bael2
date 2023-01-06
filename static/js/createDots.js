function createDot(x, y) {
    var elem=document.createElement("div");
    elem.setAttribute("class", "dot");
    elem.setAttribute("style", "left:"+x+"px;top:"+y+"px;width:100vw;height:100vw;");
    document.getElementsByTagName("body")[0].appendChild(elem);
    return elem;
}
function anotherDot() {
    createDot(Math.floor(Math.random()*200), Math.floor(Math.random()*200));
}

for(var i=0;i<56;i++) {
    anotherDot();
}
