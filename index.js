
function openMenu() {
    document.getElementById("sidemenu").style.right = "0";
}


function closeMenu() {
    document.getElementById("sidemenu").style.right = "-200px";
}


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        alert("Thank you for contacting me!");
        contactForm.reset(); 
    });
}
