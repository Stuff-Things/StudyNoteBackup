document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Math", "Science", "Language", "History", "Notes"];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector("#typewriter").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true" class="titleanimation"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 800);
    }
  }
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 40000);
    }
    if (typeof dataText[i] != 'undefined'){
      if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function(){
          StartTextAnimation(i + 1);
        });
      }
    }
  }
  StartTextAnimation(0);
});
