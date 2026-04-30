function changeVideo(src) {
  const video = document.getElementById('main-video');
  video.src = src; // Altera a origem do arquivo
  video.play();    // Dá play automaticamente após trocar
}
