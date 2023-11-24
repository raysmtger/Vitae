const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0
function carrossel (){
    idx++;

    if(idx > img.lemgth - 1) {
        idx = 0;
    }

    imgs.style.transform = `translatex(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);