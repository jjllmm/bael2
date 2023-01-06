function createDot(x, y) {
    var elem=document.createElement("div");
    elem.setAttribute("class", "dot");
    elem.setAttribute("style", "width:100%;height:100%;");
    document.getElementsByTagName("body")[0].appendChild(elem);
    return elem;
}
function anotherDot() {
    createDot(Math.floor(Math.random()*200), Math.floor(Math.random()*200));
}

for(var i=0;i<56;i++) {
    anotherDot();
}
