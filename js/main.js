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
  var portArray = ["image01", "image02", "image03", "image04", "image05", "image06"]; 
  var portfolio = document.querySelector("#gallery");
  var image = portfolio.querySelectorAll("img");
  var showOne = document.querySelector("#first"); //modal image content

  var elem = document.querySelector(".caption-container"); // caption

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
    function openModalOne() {
      modalBox.style.display = "block";
      showOne.src="images/image01.png";
      document.getElementById('caption').innerHTML = image[0].alt;
    }

    function openModalTwo() {
      modalBox.style.display = "block";
      showOne.src="images/image02.png";  
      document.getElementById('caption').innerHTML = image[1].alt;
  
    }

    function openModalThree() {
      modalBox.style.display = "block";
      showOne.src="images/image03.png";
      document.getElementById('caption').innerHTML = image[2].alt;
    }

    function openModalFour() {
      modalBox.style.display = "block";
      showOne.src="images/image04.png";
      document.getElementById('caption').innerHTML = image[3].alt;
    }

    function openModalFive() {
      modalBox.style.display = "block";
      showOne.src="images/image05.png";
      document.getElementById('caption').innerHTML = image[4].alt;
    }

    function openModalSix() {
      modalBox.style.display = "block";
      showOne.src="images/image06.png";
      document.getElementById('caption').innerHTML = image[5].alt;
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
    //console.log(i);
  image[0].addEventListener("click", openModalOne);
  image[1].addEventListener("click", openModalTwo);
  image[2].addEventListener("click", openModalThree);
  image[3].addEventListener("click", openModalFour);
  image[4].addEventListener("click", openModalFive);
  image[5].addEventListener("click", openModalSix);
  }

  modalExit.addEventListener("click", closeModal, false);


})();
