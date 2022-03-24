const objId = (id) => document.getElementById(id);

var carouseloop

if(!objId("imgGallery")){carouseloop = 0}else{carouseloop  = setInterval(function(){carousel("d",objId("imgGallery"))},4000)}

function carousel(inc,obj,state){
    if(state == true){
        clearInterval(carouseloop)
    }

    var posCarImg = parseInt(objId("carouselValue").textContent);
    var secondPosCarImg;
    var leng = obj.children.length - 1;

    if(inc == "d" && posCarImg < leng){
        secondPosCarImg = posCarImg + 1;
    }else if(inc == "d" && posCarImg >= leng){
        secondPosCarImg = 0;
    }else if(inc == "r" && posCarImg > 0){
        secondPosCarImg = posCarImg - 1;
    }else if(inc == "r" && posCarImg == 0){
        secondPosCarImg = 3;
    }

    objId("carouselValue").textContent = secondPosCarImg;

    obj.children[posCarImg].classList.remove("visibility")
    obj.children[secondPosCarImg].classList.add("visibility")

    if(state == true){
        carouseloop = setInterval(function(){carousel("d",objId("imgGallery"))},4000);
    }
}

function naviga(url){
    location.assign(url)
}

function newTab(url){
    window.open(url);
}

var elemCont = document.querySelectorAll("[locationame]")
var counter = 0
for(elemCont.length; counter < elemCont.length;counter++){
    elemCont[counter].addEventListener("click", function(){naviga(this.attributes.locationame.value)})
}

var locTab = document.querySelectorAll("[locationtab]")

locTab.forEach(element => element.addEventListener("click", function(){newTab(element.getAttribute("locationtab"))}))


var exampleCode = document.querySelectorAll("[content]");
exampleCode.forEach(element => element.textContent = element.getAttribute("content"));