
TweenMax.from(".container-body", 1, {opacity:0});
// TweenLite.to(".bounce", 4, {left:"400px", ease:Power1.easeInOut});

document.querySelectorAll("nav a").forEach(function navA(ev){
    ev.addEventListener("click", function navB(e){
        e.preventDefault();
        TweenMax.to(".container-body", .5, {opacity:0});
        var newLocation = this.href;
        document.documentElement.className="container-body";
        setTimeout(function timeOut(){
            window.location=newLocation;
        }, 500);
    })
});

window.addEventListener("load", function(e){
    e.preventDefault;
    TweenMax.to(".container-body", 2, {opacity:1});
})