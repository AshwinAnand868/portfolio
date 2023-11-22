/* Adding a background color to the navbar when a page is scrolled to a certain vertical length */


window.onscroll = function(){

    const navbar = document.querySelector(".navbar");

    var verticalScrollLength = window.scrollY;
    if(verticalScrollLength > 160){
        navbar.classList.add("navbarDark");
    }
    else {
        navbar.classList.remove("navbarDark");
    }
}

/*
 An event which will be called when any of the navigation bar link is clicked
 to close the offcanvas modal and display the corresponding section 
*/


$("#pageNavigationContent a").click(function(event){
    $(".offcanvas").offcanvas("hide");
});


/* Auto typing */

var typed = new Typed(".auto-type", {
    strings: ["loves implementing solutions.", "is a great team member.", "has a learning attitude."],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
})

/* An event which will open a drawer on click and close the already opened one */

$(".handle").click(function(event){
    event.preventDefault();

    /* closing the already opened drawer by removing the opened class name */
    $(".opened")[0].classList.remove("opened");

    /* opening the drawer that's just clicked so that the skills can be seen */
    $(this).parent()[0].classList.add("opened");


});



const skillList = document.querySelectorAll(".a-skill");

/* Turning on the switch when clicked */
$(".switch").click(function(){
    $(".focused-skills")[0].classList.toggle("on");
    let audio = document.querySelector ("#clickAudio");
    audio.play();

    const switchOn = document.querySelector(".on");

    if(switchOn){
        $(".switch-not-on-alert").css("display", "none");

        const drawerOpened = $(".opened")[0].classList[1];

        // if a drawer is opened already and the light is turned on afterwards, it should show that skill set selected without needing the click on the the opened drawer again
        if(drawerOpened) {
            const drawerHandle = document.querySelector(`.${drawerOpened} button`);
            const { id } = drawerHandle.dataset; // fetching id from DOM Map instance
        
            const skillSetSelected = `.a-skill[id="${id}"]`;
        
            document.querySelector(skillSetSelected).classList.add("show");
            
        }
        
    }
    else {
        
        skillList.forEach((skill) => {
            skill.classList.remove("show");
        });
        $(".switch-not-on-alert").css("display", "block");
    }
   
});


/* Rendering the desired skill-section when a particular skill drawer is opened */
const drawers = document.querySelector(".drawers");

drawers.addEventListener('click', handleClick);

function handleClick(e) {
    const switchOn = document.querySelector(".on");

    if(switchOn && e.target.matches("button")) {
        
        skillList.forEach((skill) => {
            skill.classList.remove("show");
        });
        
        const { id } = e.target.dataset;    
        
        const skillSetSelected = `.a-skill[id="${id}"]`;

        document.querySelector(skillSetSelected).classList.add("show");
    }
    else if(!switchOn){
        
        $(".switch-not-on-alert").css("display", "block");
        
    }
   
}



/* showing github icon and link on the image on hover in project tile*/

const image = document.querySelectorAll(".project-img");
const imageDiv = document.querySelectorAll(".p-img");
const imageHover = document.querySelectorAll(".image-hover");

for(let i = 0; i < image.length; i++){

    imageDiv[i].onmouseenter = function(){
        imageHover[i].classList.add("show");
        imageHover[i].onmouseenter = function(){
            imageHover[i].classList.add("show");
        }
    }

    imageDiv[i].onmouseleave = function(){
        imageHover[i].classList.remove("show");
        imageHover[i].onmouseleave = function(){
            imageHover[i].classList.remove("show");
        }
    }
}


