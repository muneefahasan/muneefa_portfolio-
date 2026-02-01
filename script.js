/*--------------------typing animation---------------*/
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Web Developer", "Graphics Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* Aside */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removeBackSection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
                // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* Contact Form - Send Email */
function sendEmail(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Build the mailto URL
    var recipient = 'mirzanfawas@gmail.com';
    var mailSubject = encodeURIComponent(subject);
    var mailBody = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);

    // Create a temporary anchor element
    var link = document.createElement('a');
    link.href = 'mailto:' + recipient + '?subject=' + mailSubject + '&body=' + mailBody;
    link.target = '_blank';

    // Append to body, click it, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset form
    setTimeout(function () {
        document.getElementById('contactForm').reset();
    }, 500);
}

/* Portfolio Video Player */
function playProjectVideo(videoId) {
    const video = document.getElementById(videoId);
    const container = video.closest('.portfolio-video-container');

    if (video) {
        video.play();
        container.classList.add('playing');

        // Add click event to pause video
        video.addEventListener('click', function () {
            if (!video.paused) {
                video.pause();
                container.classList.remove('playing');
            } else {
                video.play();
                container.classList.add('playing');
            }
        });

        // Remove playing class when video ends
        video.addEventListener('ended', function () {
            container.classList.remove('playing');
        });
    }
}