const checkbox = document.querySelector("#checkbox")
const total = document.querySelector('#total-number')
const $numbers1 = document.querySelector('#card .card.facebook .number')
const $numbers2 = document.querySelector('#card .card.twitter .number')
const $numbers3 = document.querySelector('#card .card.instagram .number')
const $numbers4 = document.querySelector('#card .card.youtube .number')

total.textContent = parseFloat($numbers1.textContent) + parseFloat($numbers2.textContent) + parseFloat($numbers3.textContent.replace('k','000')) + parseFloat($numbers4.textContent.replace('k','000'))

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    checkbox.setAttribute("checked", true);
}
checkbox.addEventListener("change", function(event){
  if (this.checked) {
      document.body.classList.remove('is-light-mode')
      document.body.classList.add('is-dark-mode')
      
  }else{
      document.body.classList.remove('is-dark-mode')
      document.body.classList.add('is-light-mode')
  }

})
