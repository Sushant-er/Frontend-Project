function navAnimation(){
    var nav=document.querySelector("nav");
    nav.addEventListener("mouseenter",function(){
        let tl=gsap.timeline()
        tl.to("#nav-bottom",{
            height:"24vh",
            duration:0
        })
        tl.to(".nav-part2  h5",{
            display:"block",
            duration:0
        })
        tl.to(".nav-part2 .c1 h5 span",{
            y:0,
            stragger: {
                amount:0
            }
        })
        tl.to(".nav-part2 .c2 h5 span",{
            y:0,
            stragger: {
                amount:0
            }
        })
        tl.to(".nav-part2 .c3 h5 span",{
            y:0,
            stragger: {
                amount:0
            }
        })
        tl.to(".nav-part2 .c4 h5 span",{
            y:0,
            stragger: {
                amount:0
            }
        })
        tl.to(".nav-part2 .c5 h5 span",{
            y:0,
            stragger: {
                amount:0
            }
        })
        tl.to(".nav-part2 .c6 h5 span",{
            y:0,
            stragger: {
                amount:0
            }
        })
    })
    nav.addEventListener("mouseleave",function(){
        let tl=gsap.timeline()
        tl.to(".nav-part2 h5 span",{
            y:25,
            stragger: {
                amount:0.2
            }
        })
        tl.to(".nav-part2 h5",{
            display:"none",
            duration:0.1
        })
        tl.to("#nav-bottom",{
            height:0,
            duration:0.2
        })
    })

}

function page2Animation(){
    var rightElems=document.querySelectorAll(".right-elem")

    rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0
            })
        })
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x - elem.getBoundingClientRect().x-50,
                y:dets.y - elem.getBoundingClientRect().y-110
            })
        })
    })
}
navAnimation();
page2Animation();