const track = document.getElementById("slider_slik");

window.onmousedown = e =>{ //ko kliknemo
    track.dataset.mouseDownAt = e.clientX; //shrani se X pozicija
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0"; //ko spustimo misko vrednost sliderja spet 0
    track.dataset.prevPercentage = track.dataset.percentage; //si zapolni kje smo ostali na slajderju
}

window.onmousemove = e =>{ //poslusa premik miske
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, //kje je trenutno miska
        maxDelta = window.innerWidth / 2; //max distanca navideznega slajderja

    const percentage = (mouseDelta / maxDelta) * -100; //vrne % pozicije slajderja
        nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
        nextPercentage = Math.max(Math.min(nextPercentage, 0), -100); //da negre cez mejo

    track.dataset.percentage = nextPercentage; //vrednost se shranjuje da negre nazaj na 0

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`}, //spreminja vrednost tranform translate v css
        {duration: 1200, fill: "forwards"} //animacija za gladko premikanje
    );
    
}
