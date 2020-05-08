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
    console.log(evt.target.innerHTML);
    if (evt.target.innerHTML == "Overview") {
        document.querySelector('#header-image').scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        document.querySelector(evt.target.getAttribute('href')).parentNode.scrollIntoView({
            behavior: 'smooth'
        });
    }  
}

document.querySelector("nav").addEventListener('click', scrollToSection);

let listOfHeaders = document.querySelectorAll("h2");
let listOfNavLi = document.querySelectorAll("nav ul li");



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
    // If the first item should be selected
    if(listOfHeaders[0].getBoundingClientRect().top < listOfHeaders[1].getBoundingClientRect().top
        && listOfHeaders[1].getBoundingClientRect().top > 200) 
    {
        listOfNavLi[0].className= "focused";
        listOfNavLi[1].className= "next";
        console.log(`0. ${listOfHeaders[0].textContent} should be highlighted`);
    // If the second item should be selected
    } else if (listOfHeaders[1].getBoundingClientRect().top > 0 
                && listOfHeaders[1].getBoundingClientRect().top < listOfHeaders[2].getBoundingClientRect().top) {
        listOfNavLi[0].className= "previous";
        listOfNavLi[1].className= "focused";
        listOfNavLi[2].className= "next";
        console.log(`1. ${listOfHeaders[1].textContent} should be highlighted`);
    // If the third item should be selected
    } else if (listOfHeaders[2].getBoundingClientRect().top > 0 
                && listOfHeaders[2].getBoundingClientRect().top < listOfHeaders[3].getBoundingClientRect().top) {
        listOfNavLi[0].className= " ";
        listOfNavLi[1].className= "previous";
        listOfNavLi[2].className= "focused";
        listOfNavLi[3].className= "next";
        console.log(`2. ${listOfHeaders[2].textContent} should be highlighted`);
    // If the fourth item should be selected
    } else if (listOfHeaders[3].getBoundingClientRect().top > 0 
                && listOfHeaders[3].getBoundingClientRect().top < listOfHeaders[4].getBoundingClientRect().top) {
        listOfNavLi[0].className= " ";
        listOfNavLi[1].className= " ";
        listOfNavLi[2].className= "previous";
        listOfNavLi[3].className= "focused";
        listOfNavLi[4].className= "next";
        console.log(`3. ${listOfHeaders[3].textContent} should be highlighted`);
    // If the fifth item should be selected
    } else if (listOfHeaders[4].getBoundingClientRect().top > 0 
                && listOfHeaders[4].getBoundingClientRect().top < listOfHeaders[5].getBoundingClientRect().top) {
        listOfNavLi[0].className= " ";
        listOfNavLi[1].className= " ";
        listOfNavLi[2].className= " ";
        listOfNavLi[3].className= "previous";
        listOfNavLi[4].className= "focused";
        listOfNavLi[5].className= "next";
        console.log(`4. ${listOfHeaders[4].textContent} should be highlighted`);
    // Else if I don't know what should be selected
    } else {
        console.log(`!! I can't determine which should be highlighted !!`);
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