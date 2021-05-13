var s_Index,slides,dot,captext;
function initGallery() {
    s_Index=0;
    slides=document.getElementsByClassName("imgholder");
    slides[s_Index].style.opacity=1;

    captext=document.querySelector(".ca_holder .ca_text");
    captext.innerHTML=slide[s_Index].querySelector(".ca_text").innertext;

    dot=[];
    var dotContainer=document.getElementById("dotContainer");

    for(var i=0;i<slides.length;i++){
        var dote=document.createElement("span");
        dote.classList.add("dot");
        dote.setAttribute("onClick","MoveSlide("+i+")");
        dotContainer.append(dote);
        dot.push(dote);
    }
    dot[s_Index].classList.add("active");
}
initGallery();

function plusSlide(n) {
    MoveSlide(s_Index+n);
}

function MoveSlide(n) {
    var i, cur, nxt;
    var moveSlideClass={
        forCur:"",
        forNxt:""
    }
    var slideTextClasses;
    if(n>s_Index){
        if(n>=slides.length){n=0}
        moveSlideClass.forCur="move_LeftCurrentSlide";
        moveSlideClass.forNxt="move_LeftNextSlide";
        slideTextClasses="slide_TextFromBottom";
    }else if(n<s_Index){
        if(n<0){n=slides.length-1}
        moveSlideClass.forCur="move_RightCurrentSlide";
        moveSlideClass.forNxt="move_RightNextSlide";
        slideTextClasses="slide_TextFromTop";
    }
    if(n!=s_Index){
        Nxt=slides[n];
        cur=slides[s_Index];
        for(i=0;i<slides.length;i++){
            slides[i].className="imgholder";
            slides[i].style.opacity=0;
            dot[i].classList.remove("active");
        }
        current.classList.add(moveSlideClass.forCur);
        Nxt.classList.add(moveSlideClass.forNxt);
        dot[n].classList.add("active");
        s_Index=n;
    }
    captext.style.display="none";
    captext.className="captext"+slideTextClasses;
    captext.innertext=slides[n].querySelector(".captext").innertext;
    captext.style.display="block";
}

var timer=null;
function setTimer(){
    timer=setInterval(function(){
        plusSlide(1);
    },3000)
}
setTimer();

// function playpauseslide(){
//     var playpausebtn=document.getElementById("playpausebtn");
//     if(timer==null){
//         setTimer();
//         playpausebtn.style.backgroundPositionY="0px";
//     }else{
//         clearInterval(timer);
//         timer=null;
//         playpausebtn.style.backgroundPositionY="-33px";
//     }
// }

