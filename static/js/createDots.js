function createDot(x, y) {
    var elem=document.createElement("div");
    elem.setAttribute("class", "dot");
    elem.setAttribute("style", "left:"+x+"10px;top:"+y+"10px;");
    document.getElementsByTagName("body")[0].appendChild(elem);
    return elem;
}
function anotherDot() {
    createDot(Math.floor(Math.random()*20), Math.floor(Math.random()*1000));
}

for(var i=0;i<56;i++) {
    anotherDot();
}
