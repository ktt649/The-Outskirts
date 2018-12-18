var index = 0;

function bannerShow() {
    var slides = document.getElementsByClassName("mainBanner");
    for (var i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    index++;
    if (index > slides.length) {index= 1;}  
    slides[index-1].style.display = "block";  
    setTimeout(bannerShow, 3500);
}

bannerShow()
