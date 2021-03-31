// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

/*   With this approuch I have to remember awerall height of ".show-links" if
     delete or add new links, container going to be the same. How to make it responsive?
 
navToggle.addEventListener('click', ()=>{
  linksContainer.classList.toggle("show-links")
})
*/

navToggle.addEventListener('click', () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  containerHeight === 0 ? linksContainer.style.height = `${linksHeight}px` : linksContainer.style.height = 0;
});


// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;

  scrollHeight > navHeight ? navbar.classList.add('fixed-nav') : navbar.classList.remove('fixed-nav');

  // ********** up button  ************
  scrollHeight > 500 ? topLink.classList.add('show-link') : topLink.classList.remove('show-link');
})

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //calculate heigth
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }

    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0;
  })
})
// calculate heights