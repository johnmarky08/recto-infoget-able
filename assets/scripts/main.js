/* MENU */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* REMOVE MENU */
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* BACKGROUND CHANGER */
const blurHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/* EMAIL JS */
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceId - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_6bgqf2m",
      "template_5ra2nx7",
      "#contact-form",
      "SLKTeOm1gd8r0z2DF"
    )
    .then(
      () => {
        contactMessage.textContent = "Your Message Has Been Sent Successfully!";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent =
          "Message Not Sent, Please Try Again Later...";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/* SCROLL SECTION */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/* SCROLL UP */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/* SCROLL REVEAL */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset:true // Animation Repeat
});

sr.reveal(
  `.home__data, .home__social, .contact__container, .footer__container`
);
sr.reveal(`.home__image`, { origin: "botton" });
sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.about__image`, { origin: "right" });
sr.reveal(`.rectoEvents__card, .faculty__card`, { interval: 100 });

/* TYPEWRITER TEXT ANIMATION */
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const phrases = ["Faculty", "Events", "Rules & Regulations"],
  typewriter = document.querySelector(".typewriter"),
  sleepTime = 100;
let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    const curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      typewriter.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      typewriter.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};

/* WINDOW ONLOAD */
window.addEventListener("load", () => {
  writeLoop();
  document.querySelector(".pre__loader").classList.add("loader__hidden");
});
