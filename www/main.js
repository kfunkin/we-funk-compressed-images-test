
let menuBtn = document.querySelector('#menu-btn');
let mainMenu = document.querySelector('#main-menu');
let closeBtn = document.querySelector('#close-btn');
let storyBtn = document.querySelector('#interactive-story');

menuBtn.addEventListener('click', function() {
  mainMenu.style.height = "100%";
  mainMenu.style.opacity = "0.95";
  closeBtn.style.visibility = "visible";
  closeBtn.style.opacity = "1";
  storyBtn.style.visibility = "visible";
  storyBtn.style.opacity = "1";
})

closeBtn.addEventListener('click', function() {
  mainMenu.style.height = "0";
  mainMenu.style.opacity = "0";
  closeBtn.style.opacity = "0";
  closeBtn.style.visibility = "hidden";
  storyBtn.style.opacity = "0";
  storyBtn.style.visibility = "hidden";
})

/*storyBtn.addEventListener('click', function() {
  document.documentElement.requestFullScreen();
  screen.orientation.lock("landscape-primary");
}, false);*/
