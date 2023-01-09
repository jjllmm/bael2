function createDot(x, y) {
    var elem=document.createElement("div");
    elem.setAttribute("class", "dot");
    elem.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    document.getElementsByTagName("body")[0].appendChild(elem);
    return elem;
}

function anotherDot() {
    let width=window.innerWidth;
    let height=window.innerHeight;
    createDot(Math.floor(Math.random()*width), Math.floor(Math.random()*height));
    setTimeout(anotherDot, 20000);
}

for(var i=0;i<1;i++) {
    anotherDot();
}
