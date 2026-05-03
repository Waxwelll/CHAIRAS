//Theme change
const themeBtn = document.getElementById('Themetoggle');
const themes = ['', 'green', 'redish']; 
let index = 0;

themeBtn.addEventListener('click', () => {
    if (themes[index] !== '') {
        document.body.classList.remove(themes[index]);
    }

    index = (index + 1) % themes.length;

    if (themes[index] !== '') {
        document.body.classList.add(themes[index]);
    }


});



//fade in
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 }); // Triggers when 10% of the chair is visible

document.querySelectorAll('.Chair').forEach((chair) => observer.observe(chair));
