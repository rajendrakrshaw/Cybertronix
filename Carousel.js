var slideIndex,slide,dots,captiontext;
function initGallery() {
    slideIndex=0;
    slide=document.getElementsByClassName("imageholder");
    slide[slideIndex].style.opacity=1;

    dots=[];
    var dotsContainer=document.getElementById("dotsContainer");

    for(var i=0;i<slide.length;i++){
        var dot=document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onClick","moveSlide("+i+")");
        dotsContainer.append(dot);
        dots.push(dot);
    }
    dots[slideIndex].classList.add("active");
}
initGallery();

function plusSlides(n) {
    moveSlide(slideIndex+n);
}

function moveSlide(n) {
    var i, current, next;
    var moveSlideAnimClass={
        forCurrent:"",
        forNext:""
    }
    var slideTextAnimeClasses;
    if(n>slideIndex){
        if(n>=slide.length){n=0}
        moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
        moveSlideAnimClass.forNext="moveLeftNextSlide";
        slideTextAnimeClasses="slideTextFromBottom";
    }else if(n<slideIndex){
        if(n<0){n=slide.length-1}
        moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
        moveSlideAnimClass.forNext="moveRightNextSlide";
        slideTextAnimeClasses="slideTextFromTop";
    }
    if(n!=slideIndex){
        next=slide[n];
        current=slide[slideIndex];
        for(i=0;i<slide.length;i++){
            slide[i].className="imageholder";
            slide[i].style.opacity=0;
            dots[i].classList.remove("active");
        }
        current.classList.add(moveSlideAnimClass.forCurrent);
        next.classList.add(moveSlideAnimClass.forNext);
        dots[n].classList.add("active");
        slideIndex=n;
    }
    //captiontext.style.display="none";
    //captiontext.className="captiontext"+slideTextAnimeClasses;
    //captiontext.innertext=slide[n].querySelector(".captiontext").innertext;
    //captiontext.style.display="block";
}

var timer=null;
function setTimer(){
    timer=setInterval(function(){
        plusSlides(1);
    },4000)
}
setTimer();


