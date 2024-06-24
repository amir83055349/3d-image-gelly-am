const ImageElement=document.querySelector(".image-container");

const prevEle=document.getElementById("prev");
const nextEle=document.getElementById("next");

let x=0;
let timer;

function UpdateGallery(){
    ImageElement.style.transform=`perspective(1000px) rotateY(${x}deg)`; 

    timer=setInterval(()=>{
        x=x+45;
        UpdateGallery();



    },3000)

}
UpdateGallery();
prevEle.addEventListener("click",()=>{
    x=x+45;
    clearTimeout(timer);
    UpdateGallery();
})
nextEle.addEventListener("click",()=>{
    x=x-45;
    clearTimeout(timer);
    UpdateGallery();
})
