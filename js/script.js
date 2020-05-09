let listOfHeaders = document.querySelectorAll("h2");
createNav();
let listOfNavLi = document.querySelectorAll("nav ul li");


function createNav() {
    let fragment = document.createDocumentFragment();
    let navTitle = [];
    let liItems;

    // Use the headers to populate build the string for 
    for (i = 0; i < listOfHeaders.length; i++) {
        let navhref;
        navhref = "#header-" + listOfHeaders[i].innerHTML.toLowerCase().replace(/\s/g, '');
        navTitle[i] = {content: listOfHeaders[i].innerHTML,
                        href: navhref};
    }
    // return navTitle;

    for (i = 0; i < listOfHeaders.length; i++) {
        liItems = document.createElement(`li`);
        liItems.innerHTML = `<a href=${navTitle[i].href}>${navTitle[i].content}</a>`
        fragment.appendChild(liItems);
        // <li><a href="#header-overview">Overview</a></li>
    }
    // console.log(`The navTitle length is ${navTitle.length}`);
    // console.log(`The listOfHeaders length is ${listOfHeaders.length}`);
    // console.log(`----- HTML Fragment below -----`);
    console.log(fragment);
    document.querySelector("nav ul").appendChild(fragment);
}

// Does a smooth scroll to the selected destination. Disables the default behaviour.
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





// Reports the distance to the top of the document for the specified section
function reportHeaderDistanceToTop(x) {
    console.log(`The section "${listOfHeaders[x].textContent}" is ${listOfHeaders[x].getBoundingClientRect().top} away from the top of the document.`);
    return;
}


window.addEventListener('scroll', function() {
    // If the first item should be selected
    if(listOfHeaders[0].getBoundingClientRect().top < listOfHeaders[1].getBoundingClientRect().top
        && listOfHeaders[1].getBoundingClientRect().top > 200) 
    {
        listOfNavLi[0].className= "focused";
        listOfNavLi[1].className= "next";
        listOfNavLi[2].className= "hide";
        listOfNavLi[3].className= "hide";
        listOfNavLi[4].className= "hide";
        listOfNavLi[5].className= "hide";
        console.log(`0. ${listOfHeaders[0].textContent} should be highlighted`);
    // If the second item should be selected
    } else if (listOfHeaders[1].getBoundingClientRect().top > 0 
                && listOfHeaders[1].getBoundingClientRect().top < listOfHeaders[2].getBoundingClientRect().top) {
        listOfNavLi[0].className= "previous";
        listOfNavLi[1].className= "focused";
        listOfNavLi[2].className= "next";
        listOfNavLi[3].className= "hide";
        listOfNavLi[4].className= "hide";
        listOfNavLi[5].className= "hide";
        console.log(`1. ${listOfHeaders[1].textContent} should be highlighted`);
    // If the third item should be selected
    } else if (listOfHeaders[2].getBoundingClientRect().top > 0 
                && listOfHeaders[2].getBoundingClientRect().top < listOfHeaders[3].getBoundingClientRect().top) {
        listOfNavLi[0].className= "hide";
        listOfNavLi[1].className= "previous";
        listOfNavLi[2].className= "focused";
        listOfNavLi[3].className= "next";
        listOfNavLi[4].className= "hide";
        listOfNavLi[5].className= "hide";
        console.log(`2. ${listOfHeaders[2].textContent} should be highlighted`);
    // If the fourth item should be selected
    } else if (listOfHeaders[3].getBoundingClientRect().top > 0 
                && listOfHeaders[3].getBoundingClientRect().top < listOfHeaders[4].getBoundingClientRect().top) {
        listOfNavLi[0].className= "hide";
        listOfNavLi[1].className= "hide";
        listOfNavLi[2].className= "previous";
        listOfNavLi[3].className= "focused";
        listOfNavLi[4].className= "next";
        listOfNavLi[5].className= "hide";
        console.log(`3. ${listOfHeaders[3].textContent} should be highlighted`);
    // If the fifth item should be selected
    } else if (listOfHeaders[4].getBoundingClientRect().top > 0 
                && listOfHeaders[4].getBoundingClientRect().top < listOfHeaders[5].getBoundingClientRect().top) {
        listOfNavLi[0].className= "hide";
        listOfNavLi[1].className= "hide";
        listOfNavLi[2].className= "hide";
        listOfNavLi[3].className= "previous";
        listOfNavLi[4].className= "focused";
        listOfNavLi[5].className= "next";
        console.log(`4. ${listOfHeaders[4].textContent} should be highlighted`);
    // Else if I don't know what should be selected
    } else {
        console.log(`!! I can't determine which should be highlighted !!`);
    }
});