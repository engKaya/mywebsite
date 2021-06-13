setNavUpOnNav()

$(function(){
    $(window).scroll(function() {
       this.setNavUpOnNav()
    })
})

function setNavUpOnNav() {
    if(this.scrollY > 20)
        $('.navbar').addClass("sticky")
    else
        $('.navbar').removeClass("sticky")
}


let activeToggle = false

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
