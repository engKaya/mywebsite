const bars = document.getElementsByClassName('bars')
toUp()
setNavUpOnNav()

function toUp(){
    $('.to-up').on('click', () => {
        if(this.scrollY > 500) {
            window.scrollTo(0,0)
        }
    })
}


/* navbar area */

$(function(){
    $(window).scroll(function() {
        this.setNavUpOnNav()
        if(this.scrollY > 500)
            $('.to-up').addClass('show')
        else
            $('.to-up').removeClass('show')

    })
})


let activeToggle = false

$(function(){
    document.querySelectorAll('.menu-link').forEach(item => {
        item.addEventListener('click', event => {
            activeToggle = false
            $('.menu').removeClass('active')
            $('.menu-btn i').removeClass('active')
        })
    })
})


function setNavUpOnNav() {
    if(this.scrollY > 20)
        $('.navbar').addClass("sticky")
    else
        $('.navbar').removeClass("sticky")
}



$('.fa-bars').on('click', function(){
    activeToggle = !activeToggle
    if(activeToggle) {
        $('.menu').addClass('active')
        $('.menu-btn i').addClass('active')
    }
    else {
        $('.menu').removeClass('active')
        $('.menu-btn i').removeClass('active')
    }

})

/* about-section area */

$('.down-cv').on('click', function (e) {
    e.preventDefault()
    window.location.href = 'cv.pdf'
})

/* skills-section area */
let skillSectionSeen = false

$(window).on('scroll',()=>{
    if(this.scrollY > 900 && !skillSectionSeen ){
        skillSectionSeen = true
        for(let i=0; i<bars.length; i++){
            const percent = bars[i].getElementsByClassName('info')[0].getElementsByTagName('span')[1].innerHTML
            const line = bars[i].querySelector('.line').querySelector('.percent')
            line.style.width = `${percent}`
        }
    }else if (this.scrollY < 900 ) {
        skillSectionSeen = false
        for(let i=0; i<bars.length; i++){
            const line = bars[i].querySelector('.line').querySelector('.percent')
            line.style.width = `0%`
        }
    }
})

