let cursor = document.querySelector('#cursor');
let cursorBlur  = document.querySelector('#cursor-blur')
document.addEventListener('mousemove', function(e){
    cursor.style.left = e.x+"px" 
    cursor.style.top = e.y+"px"
    cursorBlur.style.left = e.x-200+"px" 
    cursorBlur.style.top = e.y-200+"px"
})
gsap.to('#navbar', {
    backgroundColor: "#000",
    height: "90px",
    duration: .5,
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:'#main',
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:2
    }
})
