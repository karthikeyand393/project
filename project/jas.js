

const suggest=document.getElementById("getty");
const gutss=document.getElementById("gutss");
const bleach=document.getElementById("bleach");
const you=document.getElementById("you");

bleach.addEventListener("click",event=>{
    suggest.innerHTML='MOST LIKED ANIMES: <br>ONEPIECE:<br><img src="zoro.jpg" alt=""><br><br>BLEACH:<br><img src="image-asset.jpeg" alt=""><br><br>NARUTO:<br><img src="7KOA36ZRHVAEXMHNBH6RH65HXU.avif" alt="">';
});
gutss.addEventListener("click",event=>{
    suggest.innerHTML='MOST LIKED ANIMES: <br>BERSERK:<br><img src="band.webp" alt=""><br><br>VAGABOND:<br><img src="vaga.webp" alt=""><br><br>VINLAND SAGAA:<br><img src="vin.jpg" alt="">';
});
you.addEventListener("click",event=>{
    suggest.innerHTML='MOST LIKED ANIMES: <br>YOUR NAME:<br><img src="yourname.jpeg" alt=""><br><br>SILENT VOICE:<br><img src="voice.jpg" alt="">';
});
