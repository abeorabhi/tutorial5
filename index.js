var dispDiv = document.getElementById("display"),
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgSrc = null,
    stInput = document.getElementById("stickerUrl"),
    stC = document.getElementById("cursor");

document.getElementById("bgcolor").addEventListener("change", function(){
    dispDiv.style.backgroundColor = this.value;
});

st1.addEventListener("click", function(){
    imgSrc = this.src;
    stC.src = imgSrc;
});

st2.addEventListener("click", function(){
    imgSrc = this.src;
    stC.src = imgSrc;
});

dispDiv.addEventListener("click", function(ev){
    
    var newImg = document.createElement("img");
    newImg.src = imgSrc;
    newImg.className = "displayStickers";
    dispDiv.appendChild(newImg);
    
    console.log(ev.pageX, ev.pageY);
    newImg.style.top = ev.pageY + "px";
    newImg.style.left = ev.pageX + "px";
    
});

stInput.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13) {
        var newSticker = document.createElement("img");
        newSticker.src = stInput.value;
        newSticker.className = "stickers";
        document.getElementById("stickers").appendChild(newSticker);
        stInput.value = "";
        newSticker.addEventListener("click", function(){
            imgSrc = this.src;
            stC.src = imgSrc;
            //changeImg(this)
        });
    }
});

dispDiv.addEventListener("mousemove", function(ev){
    stC.style.top = ev.pageY + "px";
    stC.style.left = ev.pageX + "px";
});

/*
function changeImg(el){
    imgSrc = el.src;
}
*/