window.addEventListener('scroll', () =>{
    let image = document.getElementById("zvezda");
    image.style.transform ="rotate(" + window.pageYOffset/10 + "deg)";
})