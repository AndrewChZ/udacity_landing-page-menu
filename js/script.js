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

let listOfHeaders = document.querySelectorAll("h2");




// Reports the distance to the top of the document for the specified section
function reportHeaderDistanceToTop(x) {
    console.log(`The section "${listOfHeaders[x].textContent}" is ${listOfHeaders[x].getBoundingClientRect().top} away from the top of the document.`);
    return;
}

// To compare which element should be highlighted based on the arguments
// function compareDistance(x, y) {
//     let xTop = listOfHeaders[0].parentNode.getBoundingClientRect().top;
//     let yTop = listOfHeaders[1].parentNode.getBoundingClientRect().top;
//     if ( xTop > 0 && xTop < yTop) {
//         console.log(`The header ${listOfHeaders[0].textContent} should be highlighted`);
//     }
// }

window.addEventListener('scroll', function() {
    if(listOfHeaders[0].getBoundingClientRect().top < listOfHeaders[1].getBoundingClientRect().top
        && listOfHeaders[1].getBoundingClientRect().top > 200
    ) {
        console.log(`The header ${listOfHeaders[0].textContent} should be highlighted`);
    } else {
        console.log(`I can't determine which should be highlighted`)
    }

});

// This version only runs the function once
// window.addEventListener('scroll', reportHeaderDistanceToTop(1))

// window.addEventListener('scroll', function() {
// 	let element = document.querySelector('#header-introduction');
//     let position = element.getBoundingClientRect();

//     console.log(position.top);

// 	// checking whether fully visible
// 	if(position.top >= 0 && position.bottom <= window.innerHeight) {
// 		console.log('Element is fully visible in screen');
// 	}

// 	// checking for partial visibility
// 	if(position.top < window.innerHeight && position.bottom >= 0) {
// 		console.log('Element is partially visible in screen');
// 	}
// });