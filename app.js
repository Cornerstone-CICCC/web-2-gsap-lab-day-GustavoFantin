gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

//dog page(first)

const dogTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section1',
        toggleActions: 'play reverse play reverse'
    }
})

dogTl
    .from('.content span:last-child', {
        x: '200vw',
        duration: 1
    })
    .from('.content span:first-child', {
        x: '-200vw',
        duration: 1.4
    }, '<')
    .from('.content p', {
        opacity: 0,
        transformOrigin: 'top left',
        rotate: '90dg',
        duration: .5
    })
    .from('.content img', {
        y: '300vh',
        duration: 1
    })

const aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.section2',
        start: 'top 15%',
        toggleActions: 'play reverse play reverse'
        // markers: true
    }
})

aboutTl
    .from('.section2 h2>span', {
        stagger: 1,
        y: '-200vh',
        duration: .5
    })
    .from('.section2 p', {
        scaleX: 0,
        transformOrigin: 'center center',
        duration: .5
    })
    
    
    //working on the horizontal now
    
    const horizontalTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.horizontal-sections',
        start: 'top top',
        pin: true,
        scrub: true
    }
})
horizontalTl
    .from('.section3 h2', {
        scale: 100,
        x: '-200vw',
        duration: 2000
    })
    .to('.section3 span',{
        backgroundColor: 'white',
        color: 'black'
    })
    .from('.section3 span:first-child',{
        y: '200vh',
        duration: 2000
    })
    .from('.section3 span:nth-child(2)',{
        y: '200vh',
        duration: 2000
    })
    .from('.section3 span:nth-child(3)',{
        y: '200vh',
        duration: 2000
    })
    .from('.section3 span:last-child',{
        y: '200vh',
        duration: 2000
    })
    //moving side slide
    .to('.horizontal-sections',{
        xPercent: '-35',
        duration: 2000
    })

    .from('.section4', {
        width: '100vw'
    })
    .from('.portfolio-item:first-child',{
        x:'200vw',
        duration: 2000
    })
    .from('.portfolio-item:last-child',{
        x:'200vw',
        duration: 2000
    })


    const contactTl = gsap.timeline({
        scrollTrigger:{
            trigger: '.section5',
            scrub: true,
            pin: true,
            // markers: true,
        }
    })
    
const testing = document.querySelector('.section5 h2')
const splited = testing.textContent.split("");
testing.textContent = ''
splited.forEach(character => {
    const span = document.createElement('span')
    span.textContent = character === " " ? "\u00A0" : character;
    testing.append(span)
})

contactTl
    .from('.section5 h2>span',{
        y: '-200vh',
        stagger: 200,
        duration: 2000
    })
    .from('.section5 p', {
        y: 100,
        opacity: 0,
        duration: 1000
    })
    .from('.section5 button', {
        scale: 0,
        duration: 100
    })
    .to('.section5',{
        backgroundColor: 'black',
        duration: 2000
    })
    .from('.section5',{
        backgroundPosition: '200% 90%',
        duration: 1000
    }, '<')
