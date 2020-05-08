// console.log("hello world!");

// let finalContent = "";
// let reviewContent = "";

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });


function scrollToSection(evt) {
    evt.preventDefault();
    console.log(`You've just clicked ${evt.target.textContent}`);
    console.log(evt.target.getAttribute('href'));
    document.querySelector(evt.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
}

document.querySelector("nav").addEventListener('click', scrollToSection);