//TOOLTIP
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//WELLCOME MODAL
$(document).ready(function(){
    $(".my__modal").modal('show');
});

//TEXT DESAPPEAR
$(document).ready(function(){
  $(".title-destinos").click(function(){
    $(".card-text-destinos").fadeToggle("slow", "linear");
  });
});
//CHANGUE COLOR
function myFunction(element,clr) {
  element.style.color = clr;
}
//SWEET ALERT
const buscarOpciones = document.getElementById('buscar');
buscarOpciones.addEventListener('click', function (){
  let timerInterval
Swal.fire({
  title: 'Buscando la mejor opción',
  html: 'Estamos recorriendo chile <b></b> para encontrar tu mejor opción.',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
})
// nav scroll

const nav = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
  nav.classList.toggle("change", window.scrollY > 0);
})