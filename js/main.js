(() => {
  //console.log("SEAF fired");

  //Variables
  var TopBtn = document.querySelector('#backToTop');
  var btnCon = document.querySelector(".filterBtnContainer");
  var btns = btnCon.querySelector(".filterBtn");

  var video = document.querySelector("#headerVid");
  var playButton = document.querySelector("#playPause");
  var seekBar = document.querySelector("#seek-bar");
  var rewindVideo = document.querySelector("#rewind");
  var muteButton = document.querySelector("#muteVideo");
  var volumeBar = document.querySelector('#volumeBar');
  var fullVideo = document.querySelector("#full-screen");


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

  //Filtering 

  filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "block");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "block");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

  // Adding an active class 
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var clicked = document.getElementsByClassName("active");
      clicked[0].className = current[0].className.replace("active", "");
      this.className += "active";
    });
  }

  //Event Listeners
  window.addEventListener('scroll', trackScroll);
  TopBtn.addEventListener('click', backToTop);

  playButton.addEventListener("click", playVideo); //VIDEO
  seekBar.addEventListener("change", progressBar, false); //SEEK BAR
  muteButton.addEventListener("click", muteVideo, false); //MUTE
  volumeBar.addEventListener('change', changeVolume, false); // VOLUME BAR
  rewindVideo.addEventListener("click", rewindVid, false); //REWIND VIDEO X
  fullVideo.addEventListener("click", fullScreen); //FULLSCREEN
  video.addEventListener("timeupdate", progPlay, false); //TIME UPDATE

})();
