const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

//마우스 커서 이벤트
document.addEventListener('mousemove', (e) => {
    const customCursor = document.querySelector('.cursor');
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});

//인트로
const introTl = gsap.timeline()
gsap.set('.sc-visual .container h2',{opacity:0,yPercent:30})
gsap.set('.sc-visual .container .job',{opacity:0,yPercent:30})
gsap.set('.sc-visual .container .desc',{opacity:0,xPercent:-3})
gsap.set('.sc-visual .container .scroll',{opacity:0,xPercent:-10})
gsap.set('.header',{opacity:0})

introTl
.to('.container h2',{
    opacity:1,
    yPercent:0,
  },'a')
.to('.container .job',{
  opacity:1,
  yPercent:0,
},'b')
.to('.container .desc',{
    opacity:1,
    xPercent:0,
  },'c')
  .to('.container .scroll',{
    opacity:1,
    xPercent:0,
  },'c')
.to('.header',{
    opacity:1,
},'d')

//visual
gsap.to('.sc-visual .container h2',{
    scrollTrigger:{
        trigger:".sc-visual",
        start:"0% 10%", 
        end:"100% 0%",
        scrub:0,
    },
    xPercent:30,
    ease:'none',
})
gsap.to('.sc-visual .container .job',{
    scrollTrigger:{
        trigger:".sc-visual",
        start:"0% 10%", 
        end:"100% 0%",
        scrub:0,
    },
    xPercent:-10,
    ease:'none',
})

//video
gsap.to('.sc-video .inner .video-wrap',{
    scrollTrigger:{
        trigger:".sc-video",
        start:"0% 70%", 
        end:"10% 0%",
        scrub:0,
    },
    width: "80%",
    top: "50%",
    right: "50%",
    translateX: "50%",
    translateY: "-50%",
    ease: 'none',
})

//reveal
gsap.to('.sc-reveal',{
    scrollTrigger:{
        trigger:".sc-reveal",
        start:"-30% 0%", 
        end:"0% 0%",
        scrub:0,
    },
    background: "#020202",
})

const revealTxt = new SplitType('.sc-reveal .inner h2', { types: 'words, chars', });
gsap.set('.sc-reveal .inner .word',{opacity:0.2})
gsap.to('.sc-reveal .inner .word',{
    scrollTrigger:{
        trigger:".sc-reveal",
        start:"0% 0%", 
        end:"70% 0%",
        scrub:0,
    },
    opacity:1,
    duration:0.5,
    stagger: {
        each: 0.1,
    },
})

$(document).ready(function () {
    var cursor = $(".cursor");

    function setCursorStyle(background) {
        cursor.css({
            "width": "100px",
            "height": "100px",
            "background": background
        });
        cursor.html("<div class='more-text'>More</div>");
    }

    $(".sc-projects .inner .pj-right-col .project-list .project-item a").mouseenter(function() {
        var index = $(this).parent().index() + 1;
        switch (index) {
            case 1:
                setCursorStyle("#2DB400");
                break;
            case 2:
                setCursorStyle("rgb(235 234 228)");
                break;
            case 3:
                setCursorStyle("#0c4da2");
                break;
            case 4:
                setCursorStyle("#dcf94a");
                break;
            case 5:
                setCursorStyle("#242424");
                break;
            case 6:
                setCursorStyle("#0e0e0e");
                break;
            default:
                break;
        }
    });

    $(".sc-projects .inner .pj-right-col .project-list .project-item a").mouseleave(function() {
        cursor.css({
            "width": "20px",
            "height": "20px",
            "background": "#e1f210"
        });
        $(".more-text").remove();
    });
});

//
gsap.set('[data-scroll-opacityX]',{opacity:0,x:-30,})
ScrollTrigger.batch("[data-scroll-opacityX]", {
    start: "0 90%",
    end: "100% 0%",
    onEnter: batch => {
        gsap.to(batch,{
            opacity:1,
            x:0
        })
    },
});

// $(document).ready(function() {
//     $('.btn-mode').click(function() {
//         const body = $('body');
//         const btnMode = $('.btn-mode');
//         const logo = $('.sc-visual .logo a img')
//         const toggleButton = $('.toggle-button');
//         const textDark = $('.sc-visual .group-theme .btn-mode .text .DarkMode');
//         const textLight = $('.sc-visual .group-theme .btn-mode .text .LightMode');
//         const iconDark = $('.sc-visual .group-theme .btn-mode .toggle-button img.dark');
//         const iconLight = $('.sc-visual .group-theme .btn-mode .toggle-button img.light');
//         const caption = $('.sc-visual .group-theme .caption .captiontxt');
        
//         if (body.attr('data-theme') === 'dark') {
//             if ($(window).width() <= 320) {
//                 toggleButton.css('transform', 'translate(120px, 7px)');
//                 btnMode.css('background','none');
//             } else{
//                 toggleButton.css('transform', 'translate(8px, 7px)');
//                 btnMode.css('background','#020202');
//             }
//             body.removeAttr('data-theme');
//             toggleButton.css('background', '#4f4d4d');
//             logo.css('filter','invert(0)');
//             textDark.css('opacity','1');
//             textDark.css('transform','translate(-55%, 0)');
//             textLight.css('opacity','0');
//             textLight.css('transform','translate(25%, 0)');
//             iconDark.css('opacity','1');
//             iconLight.css('opacity','0');
//             caption.css('transform','translateY(0)');
//         } else {
//             body.attr('data-theme', 'dark');
//             if ($(window).width() <= 320) {
//                 toggleButton.css('transform', 'translate(120px, 7px)');
//                 btnMode.css('background','none');
//             } else if ($(window).width() <= 768) {
//                 toggleButton.css('transform', 'translate(265%, 7px)');
//                 caption.css('transform','translateY(-170%)');
//                 btnMode.css('background','#b188ff');
//             } else {
//                 toggleButton.css('transform', 'translate(300%, 7px)');
//                 caption.css('transform','translateY(-105%)');
//                 btnMode.css('background','#b188ff');
//             }
//             toggleButton.css('background', '#fff');
//             logo.css('filter','invert(1)');
//             textDark.css('opacity','0');
//             textDark.css('transform','translate(-70%, 0)');
//             textLight.css('opacity','1');
//             textLight.css('transform','translate(10%, 0)');
//             iconDark.css('opacity','0');
//             iconLight.css('opacity','1');
//         }
//     });
// });
ScrollTrigger.matchMedia({
    // large
    "(min-width: 1025px)": function() {
    $(document).ready(function() {
        $('.btn-mode').click(function() {
            const body = $('body');
            const btnMode = $('.btn-mode');
            const logo = $('.sc-visual .logo a img')
            const toggleButton = $('.toggle-button');
            const textDark = $('.sc-visual .group-theme .btn-mode .text .DarkMode');
            const textLight = $('.sc-visual .group-theme .btn-mode .text .LightMode');
            const iconDark = $('.sc-visual .group-theme .btn-mode .toggle-button img.dark');
            const iconLight = $('.sc-visual .group-theme .btn-mode .toggle-button img.light');
            const caption = $('.sc-visual .group-theme .caption .captiontxt');
            
            if (body.attr('data-theme') === 'dark') {
                if ($(window).width() <= 320) {
                    toggleButton.css('transform', 'translate(120px, 7px)');
                    btnMode.css('background','none');
                } else{
                    toggleButton.css('transform', 'translate(8px, 7px)');
                    btnMode.css('background','#020202');
                }
                body.removeAttr('data-theme');
                toggleButton.css('background', '#4f4d4d');
                logo.css('filter','invert(0)');
                textDark.css('opacity','1');
                textDark.css('transform','translate(-55%, 0)');
                textLight.css('opacity','0');
                textLight.css('transform','translate(25%, 0)');
                iconDark.css('opacity','1');
                iconLight.css('opacity','0');
                caption.css('transform','translateY(0)');
            } else {
                body.attr('data-theme', 'dark');
                if ($(window).width() <= 320) {
                    toggleButton.css('transform', 'translate(120px, 7px)');
                    btnMode.css('background','none');
                } else if ($(window).width() <= 768) {
                    toggleButton.css('transform', 'translate(265%, 7px)');
                    caption.css('transform','translateY(-170%)');
                    btnMode.css('background','#b188ff');
                } else {
                    toggleButton.css('transform', 'translate(300%, 7px)');
                    caption.css('transform','translateY(-105%)');
                    btnMode.css('background','#b188ff');
                }
                toggleButton.css('background', '#fff');
                logo.css('filter','invert(1)');
                textDark.css('opacity','0');
                textDark.css('transform','translate(-70%, 0)');
                textLight.css('opacity','1');
                textLight.css('transform','translate(10%, 0)');
                iconDark.css('opacity','0');
                iconLight.css('opacity','1');
            }
        });
    });
},
// medium
"(min-width: 768px) and (max-width: 1024px)": function() {
    $(document).ready(function() {
        $('.btn-mode').click(function() {
            const body = $('body');
            const btnMode = $('.btn-mode');
            const logo = $('.sc-visual .logo a img')
            const toggleButton = $('.toggle-button');
            const textDark = $('.sc-visual .group-theme .btn-mode .text .DarkMode');
            const textLight = $('.sc-visual .group-theme .btn-mode .text .LightMode');
            const iconDark = $('.sc-visual .group-theme .btn-mode .toggle-button img.dark');
            const iconLight = $('.sc-visual .group-theme .btn-mode .toggle-button img.light');
            const caption = $('.sc-visual .group-theme .caption .captiontxt');
            
            if (body.attr('data-theme') === 'dark') {
                 toggleButton.css('transform', 'translate(8px, 7px)');
                 btnMode.css('background','#020202');
                body.removeAttr('data-theme');
                toggleButton.css('background', '#4f4d4d');
                logo.css('filter','invert(0)');
                textDark.css('opacity','1');
                textDark.css('transform','translate(-55%, 0)');
                textLight.css('opacity','0');
                textLight.css('transform','translate(25%, 0)');
                iconDark.css('opacity','1');
                iconLight.css('opacity','0');
                caption.css('transform','translateY(0)');
            } else {
                body.attr('data-theme', 'dark');
                toggleButton.css('transform', 'translate(265%, 7px)');
                caption.css('transform','translateY(-170%)');
                btnMode.css('background','#b188ff');
                toggleButton.css('background', '#fff');
                logo.css('filter','invert(1)');
                textDark.css('opacity','0');
                textDark.css('transform','translate(-70%, 0)');
                textLight.css('opacity','1');
                textLight.css('transform','translate(10%, 0)');
                iconDark.css('opacity','0');
                iconLight.css('opacity','1');
            }
        });
    });
},

// small
"(max-width: 767px)": function() {
    $(document).ready(function() {
        $('.btn-mode').click(function() {
            const body = $('body');
            const btnMode = $('.btn-mode');
            const logo = $('.sc-visual .logo a img')
            const toggleButton = $('.toggle-button');
            const textDark = $('.sc-visual .group-theme .btn-mode .text .DarkMode');
            const textLight = $('.sc-visual .group-theme .btn-mode .text .LightMode');
            const iconDark = $('.sc-visual .group-theme .btn-mode .toggle-button img.dark');
            const iconLight = $('.sc-visual .group-theme .btn-mode .toggle-button img.light');
            const caption = $('.sc-visual .group-theme .caption .captiontxt');
            
            if (body.attr('data-theme') === 'dark') {
                toggleButton.css('transform', 'translate(120px, 7px)');
                btnMode.css('background','none');
                body.removeAttr('data-theme');
                toggleButton.css('background', '#4f4d4d');
                logo.css('filter','invert(0)');
                textDark.css('opacity','1');
                textDark.css('transform','translate(-55%, 0)');
                textLight.css('opacity','0');
                textLight.css('transform','translate(25%, 0)');
                iconDark.css('opacity','1');
                iconLight.css('opacity','0');
                caption.css('transform','translateY(0)');
            } else {
                body.attr('data-theme', 'dark');
                toggleButton.css('transform', 'translate(120px, 7px)');
                btnMode.css('background','none');
                toggleButton.css('background', '#fff');
                logo.css('filter','invert(1)');
                textDark.css('opacity','0');
                textDark.css('transform','translate(-70%, 0)');
                textLight.css('opacity','1');
                textLight.css('transform','translate(10%, 0)');
                iconDark.css('opacity','0');
                iconLight.css('opacity','1');
            }
        });
    });
}
});