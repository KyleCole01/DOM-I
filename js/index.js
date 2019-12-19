const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
//IMAGES
let logoImage = document.getElementById("logo-img");
logoImage.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// HEADERS
let mainHeader = document.querySelector(".cta-text h1");
mainHeader.textContent = (siteContent["cta"]["h1"]);

//subHeaders

let featuresHeader = document.querySelectorAll(".main-content .top-content .text-content h4")[0];
featuresHeader.textContent = (siteContent["main-content"]["features-h4"]);

let aboutHeader = document.querySelectorAll(".main-content .top-content .text-content h4")[1]
aboutHeader.textContent = (siteContent["main-content"]["about-h4"]);

let servicesHeader = document.querySelectorAll(".main-content .bottom-content .text-content h4")[0];
servicesHeader.textContent = (siteContent["main-content"]["services-h4"]);

let productHeader = document.querySelectorAll(".main-content .bottom-content .text-content h4")[1];
productHeader.textContent = (siteContent["main-content"]["product-h4"]);

let visionHeader = document.querySelectorAll(".main-content .bottom-content .text-content h4")[2];
visionHeader.textContent = (siteContent["main-content"]["vision-h4"]);

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = (siteContent["contact"]["contact-h4"]);


//CONTENT
let featuresContent = document.querySelectorAll(".main-content .top-content .text-content p")[0];
featuresContent.textContent = (siteContent["main-content"]["features-content"]);

let aboutContent = document.querySelectorAll(".main-content .top-content .text-content p")[1];
aboutContent.textContent = (siteContent["main-content"]["about-content"]);

let servicesContent = document.querySelectorAll(".main-content .bottom-content .text-content p")[0];
servicesContent.textContent = (siteContent["main-content"]["services-content"]);

let productContent = document.querySelectorAll(".main-content .bottom-content .text-content p")[1];
productContent.textContent = (siteContent["main-content"]["product-content"]);

let visionContent = document.querySelectorAll(".main-content .bottom-content .text-content p")[2];
visionContent.textContent = (siteContent["main-content"]["vision-content"]);

//CONTACT
//contact header is in "headers ( line 72)"

let contactAddress = document.querySelectorAll(".contact p")[0];
contactAddress.textContent = (siteContent["contact"]["address"]);

let contactPhone = document.querySelectorAll(".contact p")[1];
contactPhone.textContent = (siteContent["contact"]["phone"]);

let contactEmail = document.querySelectorAll(".contact p")[2];
contactEmail.textContent = (siteContent["contact"]["email"]);



//BUTTON
var getStartedBtn = document.querySelector(".cta-text button");
getStartedBtn.textContent = (siteContent["cta"]["button"]);


//NAV
let navAnchor = document.querySelectorAll("header nav a")[0];
navAnchor.textContent = (siteContent["nav"]["nav-item-1"]);
navAnchor.style.color = "blue";


let navAnchor2 = document.querySelectorAll('header nav a')[1];
navAnchor2.textContent = (siteContent["nav"]["nav-item-2"]);

let navAnchor3 = document.querySelectorAll('header nav a')[2];
navAnchor3.textContent = (siteContent["nav"]["nav-item-3"]);

let navAnchor4 = document.querySelectorAll('header nav a')[3];
navAnchor4.textContent = (siteContent["nav"]["nav-item-4"]);

let navAnchor5 = document.querySelectorAll('header nav a')[4];
navAnchor5.textContent = (siteContent["nav"]["nav-item-5"]);

let navAnchor6 = document.querySelectorAll('header nav a')[5];
navAnchor6.textContent = (siteContent["nav"]["nav-item-6"]);

//FOOTER
let footer = document.querySelector('footer p');
footer.textContent = (siteContent["footer"]["copyright"]);

//CONTAINERS ( for styling purposes)
let mainContainer = document.querySelector(".container");
let navContainer = document.querySelector("header nav");
let navItemContainer = document.querySelectorAll("header nav a");
let headerContainer = document.querySelector("header");
let mainHeaderContainer = document.querySelector(".cta")
let middleContainer = document.querySelector(".main-content")
let textContainer = document.querySelector("text-content")


// append/prepend
const navAppend = document.createElement("append");
const navPrepend = document.createElement("prepend");
navAppend.textContent = "Appended";
navAppend.style.color = "green";
navAppend.style.textDecoration = "underline";
navPrepend.textContent = "Prepended";
navPrepend.style.color = "green";
navPrepend.style.textDecoration = "underline";
navContainer.appendChild(navAppend);
navContainer.prepend(navPrepend);

//Styling code
for(let i=0; i < navItemContainer.length; ++i){
  navItemContainer[i].style.color = "green";
}
//Stretch of manipulating button click to change
getStartedBtn.setAttribute("onClick","updateHeader()");

function updateHeader(){
  let updatedText = "You really pushed the Button? Really?";
  if(mainHeader.textContent === updatedText){
    mainHeader.textContent = (siteContent["cta"]["h1"]);
  }else{
    mainHeader.textContent = updatedText;
  }
  
}
