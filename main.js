let cursor = document.querySelector('#cursor');
let cursorBlur  = document.querySelector('#cursor-blur')
document.addEventListener('mousemove', function(e){
    cursor.style.left = e.x+30+"px" 
    cursor.style.top = e.y+"px"
    cursorBlur.style.left = e.x-200+"px" 
    cursorBlur.style.top = e.y-200+"px"
})
thoughts = [
    "Believe in yourself and all that you are capable of.",
    "Success comes to those who work for it.",
    "Every day is a new opportunity to do something great.",
    "Stay focused and never give up on your dreams.",
    "Hard work and dedication always pay off.",
    "You have the power to create the life you desire.",
    "Challenges are just opportunities in disguise.",
    "Embrace failure as a stepping stone to success.",
    "Your attitude determines your direction in life.",
    "Start where you are. Use what you have. Do what you can.",
    "Don't wait for the perfect moment; take the moment and make it perfect.",
    "Believe that you can and you're halfway there.",
    "Your potential is limitless. Don't be afraid to reach for the stars.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "You are capable of achieving more than you believe.",
    "Every small step counts towards your bigger goals.",
    "Setbacks are temporary. Keep pushing forward.",
    "Don't compare yourself to others. Focus on your own journey.",
    "You are stronger than you think. Keep going!"
];
let render  = document.querySelector('.render')
function renderElem() {
    let random = Math.floor(Math.random() * thoughts.length)
    render.innerText = thoughts[random];
}
renderElem()
setInterval(renderElem, 3000)

let liElem = document.querySelectorAll('#navbar ul li');
liElem.forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.style.scale = 3;
        cursor.style.border = '1px solid #fff';
        cursor.style.backgroundColor = 'transparent'
    })
    elem.addEventListener('mouseleave', () => {
        cursor.style.scale = 1;
        cursor.style.border = 'none'
        cursor.style.backgroundColor = '#95c11e'
    })
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
gsap.from('#about img, #about-us', {
    y:50,
    opacity: 0, 
    duration:1,
    stagger: 1,
    scrollTrigger: {
        trigger:'#about', 
        scroller:'body',
        start: 'top 70%',
        end: 'top 65%',
        scrub:2
    }
})
gsap.from('#cards', {
    scale:.9,
    opacity: 0, 
    duration:.5,
    stagger:.1,
    scrollTrigger: {
        trigger:'#cards', 
        scroller:'body',
        start: 'top 0%',
        end: 'top 100%',
        scrub:2
    }
})
    gsap.from('#colon1', {
        x:-70,
        y:-70, 
        scrollTrigger:{
            trigger:'#colon1',
            scroller:'body',
            start:'top 55%',
            end: 'top 45%',
            scrub:3,
        }
    })
    gsap.from('#colon2', {
        x:-70,
        y:-70, 
        scrollTrigger:{
            trigger:'#colon1',
            scroller:'body',
            start:'top 55%',
            end: 'top -65%',
            scrub:1,
        }
    })