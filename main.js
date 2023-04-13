var img = document.querySelector(".image-container img");
img.addEventListener("click", function() {
  playAudio();
});

function playAudio() {
  var audio = new Audio("C:\Users\Jeisson\Documents\zcositas\ztecnolo\t-ropa\imagenes\guitarra.mp3");
  audio.play();
}