(() => {
  //console.log("SEAF fired");

  //Variables
  var TopBtn = document.querySelector('#backToTop');

  var video = document.querySelector("#headerVid");
  var playButton = document.querySelector("#playPause");
  var seekBar = document.querySelector("#seek-bar");
  var rewindVideo = document.querySelector("#rewind");
  var muteButton = document.querySelector("#muteVideo");
  var volumeBar = document.querySelector('#volumeBar');
  var fullVideo = document.querySelector("#full-screen");

  var modalBox = document.querySelector("#modalBox");
  var modalExit = document.querySelector("#exit");
  var portArray = ["gallery1", "gallery2", "galley3", "gallery4"]; 
  var portfolio = document.querySelector("#gallery");
  var image = portfolio.querySelectorAll("img");
  var showOne = document.querySelector("#first"); //modal image content

  //Functions

  function playVideo(){
    console.log("from playVideo");
    if (video.paused) {
    document.getElementById("playPause").innerHTML='<button id="playPause"><i class="fas fa-pause"></i></button>';
    video.play();
  } else {
    document.getElementById("playPause").innerHTML='<button id="playPause"><i class="fas fa-play"></i></button>';
    video.pause();
  }
}

  function progressBar(){
    //console.log("from progressBar");
    var time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
  }

  function rewindVid(){
    //console.log("from rewind");
    video.currentTime -= 5;
  }

  function progPlay(){
    console.log("from progPlay");
    var value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
  }

  function muteVideo(){
    console.log("from muteVideo");
    if (video.muted) {
    video.muted = false;
    document.getElementById("muteVideo").innerHTML='<button id="muteVideo" class="control"><i class="fas fa-volume-up"></i></button>';
    theVolumeSVG.dataset.icon = "volume-up";
    volumeBar.value = 1;
    vidPlayer.volume = 1;
    } else {
    video.muted = true;
    document.getElementById("muteVideo").innerHTML='<button id="muteVideo" class="control"><i class="fas fa-volume-off"></i></button>';
    volumeBar.value = 0;
    vidPlayer.volume = 0;
    }
  }

  function changeVolume() {
    vidPlayer.volume = volumeBar.value;
  }

  function fullScreen(){ //This will give default video controls
    console.log("from fullScreen");
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  }

  //This tracks the scrolling
  function trackScroll() {
    //console.log( 'top: '  + (window.pageYOffset || document.documentElement.scrollTop) + ' ' + 'left: ' + (window.pageXOffset || document.documentElement.scrollLeft) );
    var scroll = window.pageYOffset;
    if (scroll > 40) {
      TopBtn.style.display = ("block");
    }
    if (scroll < 40) {
      TopBtn.style.display = ("none");
    }
  }

  //Back To Top function
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -20);
      setTimeout(backToTop, 0);
    }
  }

  //Lightbox
  //Open modal
    function openModal() {
      //console.log("from openModal");
      modalBox.style.display = "block";
      showOne.src="images/" + portArray[evt.currentTarget.dataset.nav]+".jpg";
    }
    
    function closeModal() {
      //console.log("from closeModal");
    modalBox.style.display = "none";
    }

  //Event Listeners
  window.addEventListener('scroll', trackScroll);
  TopBtn.addEventListener('click', backToTop);

  playButton.addEventListener("click", playVideo, false); //VIDEO
  seekBar.addEventListener("change", progressBar, false); //SEEK BAR
  muteButton.addEventListener("click", muteVideo, false); //MUTE
  volumeBar.addEventListener('change', changeVolume, false); // VOLUME BAR
  rewindVideo.addEventListener("click", rewindVid, false); //REWIND VIDEO X
  fullVideo.addEventListener("click", fullScreen); //FULLSCREEN
  video.addEventListener("timeupdate", progPlay, false); //TIME UPDATE

  for(var i=0;i<image.length; i++){
    console.log(i);
  image[i].addEventListener("click", openModal);
  }

  modalExit.addEventListener("click", closeModal, false);


})();
