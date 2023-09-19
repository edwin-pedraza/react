let sectionhero = document.getElementById("hero")
let menuVisible = false;

// skill animation variables
let toggle = document.getElementById("toggle")
let skilAnimation = document.querySelector(".skill_animation")

// modulo method 

const openModGame = document.getElementById('modal_open_game')
const openModMusic = document.getElementById('modal_open_music')
const openModTravel = document.getElementById('modal_open_travel')
const openModSport = document.getElementById('modal_open_sport')
const openModContact = document.getElementById('modal_open_contact')
const openModContactFooter = document.getElementById('modal_open_contact_footer')
const modal_container = document.getElementById('modal_container')
const close = document.getElementById('close');
const modalGame = document.getElementById('modal_Game')
const modalMusic = document.getElementById('modal_music')
const modalTravel = document.getElementById('modal_travel')
const modalSport = document.getElementById('modal_sport')
const modalContact = document.getElementById('modal_contact')



// send email
const btnEmail = document.getElementById("bta__email")

// preload

const preload = document.getElementById("loader")
const loaderContainer = document.getElementById("loader_container")


//Function that hides or shows the menu
function showHideMedu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function select(){
// hide the menu once I select an option
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
      let habilidades = document.getElementsByClassName("progress");

      habilidades[0].classList.add("communication");
      habilidades[1].classList.add("teamwork");
      habilidades[2].classList.add("creativity");
      habilidades[3].classList.add("dedication");
  }
}


// skill animation function
toggle.onclick = function() {
  skilAnimation.classList.toggle("active")
} 

// modulo method 

function iniciarmodul() {
  preload.style.display = "none"
  modalGame.style.display = "none"
  modalMusic.style.display = "none"
  modalTravel.style.display = "none"
  modalSport.style.display = "none"
  modalSport.style.display = "none"
  modalContact.style.display = "none"

}

openModGame.addEventListener('click', () => {
  iniciarmodul()
  modalGame.style.display = "block"
  modal_container.classList.add('show');  
})

openModMusic.addEventListener('click', () => {
  iniciarmodul()
  modalMusic.style.display = "block"
  modal_container.classList.add('show');  
})
openModTravel.addEventListener('click', () => {
  iniciarmodul()
  modalTravel.style.display = "block"
  modal_container.classList.add('show');  
})
openModSport.addEventListener('click', () => {
  iniciarmodul()
  modalSport.style.display = "block"
  modal_container.classList.add('show');  
})
openModContact.addEventListener('click', () => {
  iniciarmodul()
  modalContact.style.display = "flex"
  modal_container.classList.add('show');  
})
openModContactFooter.addEventListener('click', () => {
  iniciarmodul()
  modalContact.style.display = "flex"
  modal_container.classList.add('show');  
})


close.addEventListener('click', () => {
  iniciarmodul()
  modal_container.classList.remove('show');
})


// -----sent email----




btnEmail.addEventListener('click', (e) => {
  e.preventDefault()
const nameform = document.getElementById("name").value
const emailform = document.getElementById("email").value
const msnform = document.getElementById("message").value
  window.location.href=`mailto:edw.pedraza@gmail.com?subject=envio desdeformulario&body=Nombre: ${nameform}.%0D%0AEmail: ${emailform}%0D%0AMessage: ${msnform}`
})

// detect scrolling to apply skill bar animation
window.onscroll = function(){
  efectoHabilidades();
} 

// hiden preload

setTimeout(() =>{
  preload.classList.add("loader--hiden")
  loaderContainer.style.display = "none"
  // preload.removeChild("loader_container")
  // preload.addEventListener("transitionend",() => document.body.removeChild(preload))
},3000)




