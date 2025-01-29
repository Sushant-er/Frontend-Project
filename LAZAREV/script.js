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
navAnimation();