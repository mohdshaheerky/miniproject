function menuclick(){
    let x=document.querySelector(".menu");
    let y=document.querySelector(".exit");
    x.style="display:none";
    y.style="display:block";

    let nav=document.querySelector(".navitems")
    nav.style="display:block";
}

function exitclick(){
    let x=document.querySelector(".menu");
    let y=document.querySelector(".exit");
    x.style="display:block";
    y.style="display:none";

    let nav=document.querySelector(".navitems")
    nav.style="display:none";
}

// sliding
let slideindex = 0;
showslides();

function showslides(){
  let i;
  let slides=document.getElementsByClassName("div");
  for (i=0;i < slides.length; i++){
    slides[i].style.display="none";
  }
  slideindex++;
  if(slideindex >3){slideindex = 1}
  // slides[i].style.display="block";
  slides[slideindex-1].style.display="block";
  // slideindex++;

  setTimeout(showslides,2000);
}


// // pop up---

window.addEventListener("load",function(){
  this.setTimeout(function(){
    document.querySelector(".form-popup").style.display="block";
  },2000)
})


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  
}






