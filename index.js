var postcard = document.getElementById("postcard");
var to = document.getElementById("to");
var message = document.getElementById("message");
var from = document.getElementById("from");
var controls = document.getElementById("controls");
var display = document.getElementById("display");
var preview = document.getElementById("preview");
var toInput = document.getElementById("toInp");
var messageInput = document.getElementById("messageInp");
var fromInput = document.getElementById("fromInp");
var bgInp = document.getElementById("bgInp");
var add = document.getElementById("add");
var save = document.getElementById("save");
var load = document.getElementById("load");
var num = 0;
var items = [];
var images = [];

//Level 2a
toInput.addEventListener("keyup", function(){
    to.innerText = this.value;
});
messageInput.addEventListener("keyup", function(){
    message.innerText = this.value;
});
fromInput.addEventListener("keyup", function(){
    from.innerText = this.value;
});
//Level 2b
bgInp.addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        postcard.style.backgroundImage = "url("+this.value+")";
    }
});

//Level 3 and 4a
function createPostcard(iTo, ibgImg){
    var ndiv1 = document.createElement("div");
    var nto1 = document.createElement("div");
    var nbgImg1 = document.createElement("img");
    
    nto1.innerHTML = iTo;
    nbgImg1.src = ibgImg;
    nto1.className = "nto";
    nbgImg1.className = "nbgImg";
    ndiv1.className = "newdiv";
    
    ndiv1.appendChild(nto1);
    ndiv1.appendChild(nbgImg1);
    preview.appendChild(ndiv1);
   
}
add.addEventListener("click",function(){
    if(toInput.value == "") {
       to.innerHTML = "no title";
       } else if (bgInp.value == ""){
           bgInp.innerHTML = "nothing";
       } else {
           createPostcard(toInput.value, bgInp.value);
       }
    
//Level 4b
    var item = {
        bgimg: bgInp.value,
        to: toInput.value,
        message: messageInput.value,
        from: fromInput.value
        
    };
    images.push(item);
    console.log(images);
});

//Level 4c 
save.addEventListener("click", function(){
    localStorage.setItem("images", JSON.stringify(images));
    console.log(localStorage);
});

load.addEventListener("click", function(){
    createPostcard(toInput.value, bgInp.value);
});

//Level 5a --> did not finish
function createAuto(){
    var ndiv2 = document.createElement("div");
    var nto2 = document.createElement("div");
    var nbgImg2 = document.createElement("img");
    
    nto2.innerHTML = "iTo"+num;
    nbgImg2.src = "imgs/auto"+num+".jpg";
    nto2.className = "nto";
    nbgImg2.className = "nbgImg";
    ndiv2.className = "newdiv";
}












