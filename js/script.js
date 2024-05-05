// typing animation
var typed = new Typed(".typing",{
    strings:["Web Developer", "Web Designer", "Javascript Developer", "Software Engineer"],
    typeSpeed:100,
    Backspeed:60,
    loop:true
})

//smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
