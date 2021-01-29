   function aud_play_pause() {
     var myAudio = document.getElementById("audio");
     if (audio.paused) {
       audio.play();
     } else {
       audio.pause();
     }
   }

   function PopUp(hideOrshow) {
       if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
       else document.getElementById('ac-wrapper').removeAttribute('style');
   }
   window.onload = function () {
       setTimeout(function () {
           PopUp('show');
       }, 1);
   }

function delWindow(el) {
  el = '#' + el;

  $(el).css({
    'display': 'none'
  })
 }

function loadPopUp(el, div) {
  el = '#' + el;

  if ($(el).css('display') === 'block') {
    $(el).css({
      'display': 'none'
    })
  } else {
  	$(el).css({
      'display': 'block'
  })
  	// Coor = getCoordinates(div)
  	// console.log(Coor[0])
  	// $(el).css({
   //    'position': 'absolute',
   //    'left': Coor[0] + 'px',
   //    'top': Coor[1] + 'px'
   //  })

  }
}

function returnHome() {
	ratio = $(":root").css('--background-ratio')
	window.scroll((ratio * 2000), (ratio * 11000))

}

// This function is used for image setup. It can be used to see where a background img is and will return the coordinates in the console.
// Scroll to a background img where you want the object use inspect to see which img it is.
// Change the img tag to include onload="getCoordinates(this)" which will initiate this function and load the left and top coordinates into the console
// Add the left and top coordinates to the css for the img you want to get to that location. Then you just need to tweak it a bit to get the right spot.
function getCoordinates(el) {
	xCor = (el.getBoundingClientRect()).x
	yCor = (el.getBoundingClientRect()).y
	Coor = [(xCor + window.scrollX), (yCor + window.scrollY)]
	console.log(Coor)
	console.log(el.getBoundingClientRect())
	return Coor
}

// $('#buttonFade').on('click', function() {
//     if ($('#alertBox').css('opacity') == 0) $('#alertBox').css('opacity', 1);
//     else $('#alertBox').css('opacity', 0);
// });
