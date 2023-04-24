//elementi
const circleSection = document.querySelector('#drugi');
const circles = document.querySelectorAll('.krog');
const progressCircles = document.querySelectorAll('.progress');
const progressText = document.querySelectorAll('.krog h1');

let bol = false;

//scroll listener
window.addEventListener("scroll", function (){
    //zažene ko je scroll offset 600 in zažene 1x
    if (scrollY > circleSection.offsetTop - 600 && bol === false){

        for(let i=0; i<circles.length; i++){
            //dobi radius 
            let radius = progressCircles[i].r.baseVal.value;

            let circumference = radius * 2 * Math.PI;

            progressCircles[i].style.strokeDasharray = circumference;

            function setProgress(percent){
                progressCircles[i].style.strokeDashoffset =
                circumference - (percent / 100) * circumference;
            }

            const progress = circles[i].dataset.prog;

            progressText[i].innerHTML = progress + "%";

            setProgress(progress);

            bol = true;
        }
    }
});