var audio = document.getElementById("background-music");
audio.volume = 0.5;

document.addEventListener("DOMContentLoaded", function () {
  // Pilih elemen audio
  var audio = document.querySelector("audio");

  // Memulai pemutaran audio
  audio.play();
});
