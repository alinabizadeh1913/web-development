// ELEMENTS

const body = document.body;

const progressBar = document.querySelector(".progress-bar");

const themeToggle = document.querySelector(".theme-toggle");

const modal = document.querySelector(".modal");
const loginTrigger = document.querySelector(".login-trigger");
const closeModal = document.querySelector(".close-modal");
const loginBtn = document.querySelector(".login-btn");
const alertBox = document.querySelector(".alert");

const faqItems = document.querySelectorAll(".faq-item");

const reveals = document.querySelectorAll(".reveal");

const counters = document.querySelectorAll(".counter");

const backTop = document.querySelector(".back-top");


// THEME TOGGLE

if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark");
    themeToggle.innerHTML = "☾";
}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("theme","dark");
        themeToggle.innerHTML = "☾";

    }else{

        localStorage.setItem("theme","light");
        themeToggle.innerHTML = "☼";

    }

});


// PROGRESS BAR

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / height) * 100;

    progressBar.style.width =
    progress + "%";

});


// MODAL

loginTrigger.addEventListener("click", () => {

    modal.classList.add("active");

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("active");

    }

});


// LOGIN ALERT

loginBtn.addEventListener("click", (e) => {

    e.preventDefault();

    modal.classList.remove("active");

    alertBox.classList.add("show");

    setTimeout(() => {

        alertBox.classList.remove("show");

    },2500);

});


// FAQ ACCORDION

faqItems.forEach(item => {

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if(faq !== item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


// REVEAL ANIMATION

const revealObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:.18
});

reveals.forEach(el => {

    revealObserver.observe(el);

});


// COUNTER ANIMATION

const counterObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter =
            entry.target;

            const target =
            +counter.dataset.target;

            let current = 0;

            const updateCounter = () => {

                const increment =
                target / 70;

                if(current < target){

                    current += increment;

                    counter.innerHTML =
                    Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerHTML =
                    target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:.4
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


// BACK TO TOP

window.addEventListener("scroll", () => {

    if(window.scrollY > 600){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// NAVBAR FLOAT EFFECT

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.style.transform =
        "translateY(-6px)";

    }else{

        navbar.style.transform =
        "translateY(0px)";

    }

});


// HERO FLOAT PARALLAX

const floatingCards =
document.querySelectorAll(".floating-card");

window.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth / 2 - e.clientX) / 35;

    const y =
    (window.innerHeight / 2 - e.clientY) / 35;

    floatingCards.forEach(card => {

        card.style.transform =
        `translate(${x}px,${y}px)`;

    });

});


// INPUT INTERACTION

const inputs =
document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus",()=>{

        input.style.transform =
        "scale(1.02)";

    });

    input.addEventListener("blur",()=>{

        input.style.transform =
        "scale(1)";

    });

});


// SERVICE CARD TILT

// =========================
// SERVICE CARD TILT V2
// =========================

const cards =
document.querySelectorAll(".service-card");

cards.forEach(card => {

    // smooth animation
    card.style.transition =
    "transform .18s ease-out, box-shadow .25s ease";

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        // normalized position
        const centerX =
        rect.width / 2;

        const centerY =
        rect.height / 2;

        const rotateY =
        ((x - centerX) / centerX) * 18;

        const rotateX =
        ((centerY - y) / centerY) * 18;

        card.style.transform =
        `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-14px)
        scale(1.035)
        `;

        card.style.boxShadow =
        `
        25px 30px 45px rgba(0,0,0,.22),
        -12px -12px 25px rgba(255,255,255,.12)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
        scale(1)
        `;

        card.style.boxShadow = "";

    });

});


// PAGE LOADED EFFECT

window.addEventListener("load",()=>{

    document.body.style.opacity = "1";

});

// WORKFLOW + LAB HOVER FX

const workflowCards =
document.querySelectorAll(".workflow-card");

workflowCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateY =
        ((x / rect.width)-.5)*22;

        const rotateX =
        ((y / rect.height)-.5)*-22;

        card.style.transform =
        `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-12px)
        scale(1.03)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(1200px) rotateX(0) rotateY(0)";

    });

});

const terminal =
document.querySelector(".terminal-card");

window.addEventListener("mousemove",(e)=>{

    if(!terminal) return;

    const x =
    (window.innerWidth/2 - e.clientX)/50;

    const y =
    (window.innerHeight/2 - e.clientY)/50;

    terminal.style.transform =
    `translate(${x}px,${y}px)`;

});