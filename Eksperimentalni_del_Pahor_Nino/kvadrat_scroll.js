const scrollDemo = document.querySelector("#primer1");

scrollDemo.addEventListener("scroll", event =>{
  let image = document.getElementById("kvadrat");
  image.style.transform ="rotate(" + scrollDemo.scrollTop/2 + "deg)";
  document.getElementById("primer1_prikaz").innerHTML = Math.round(scrollDemo.scrollTop/2)+" deg";
}, );