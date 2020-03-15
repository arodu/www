// -- scroll to top
const btnTop = document.getElementById("btn-top")

window.onscroll = function() { scrollFunction() }

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
}

scrollFunction()

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval);
    },15);
}


//function topFunction() {
//  document.body.scrollTop = 0;
//  document.documentElement.scrollTop = 0;
//}

// -- /scroll to top

// -- gallery
const image_list = document.querySelectorAll(".gallery .nav img");

for (const item of image_list) {
  item.addEventListener('click', function(event) {
    let img = this
    let viewer = img.closest('.gallery').querySelector('.viewer');
    viewer.innerHTML = '<img src="'+img.getAttribute('data-src')+'" />'
  })
}
// -- /gallery
