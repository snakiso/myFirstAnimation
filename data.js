let date = document.querySelectorAll('.history__date__right__item')
console.log(date)
let list = document.querySelector('.history__date__right__list')
let progress = document.querySelector('.history__date__progress')

function progressBar() {
 let scroll = document.body.scrollTop || document.documentElement.scrollTop;
 let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 let scrolled = scroll / height * 100; // 66.34 = 1% экрана 0.01 = 1% прогрессбара
 console.log(scrolled)
 progress.style.strokeDashoffset = (1 - scrolled*0.01)
 console.log(progress.style.strokeDashoffset)
}
window.addEventListener('scroll', progressBar);

window.addEventListener('scroll', function(){
  console.log (this.window.pageYOffset)
 if (this.window.pageYOffset < 100 ){
  list.style.transform = 'translateY(0px)'
  date[0].classList.add('is-active')
  date[1].classList.remove('is-active')
 }
 if (this.window.pageYOffset > 100){
   list.style.transform = 'translateY(-172px)'
   date[0].classList.remove('is-active')
   date[1].classList.add('is-active')
   date[2].classList.remove('is-active')
 } 
  if (this.window.pageYOffset > 770){
   list.style.transform = 'translateY(-344px)'
    date[1].classList.remove('is-active')
    date[2].classList.add('is-active') 
    date[3].classList.remove('is-active')
 }
 if (this.window.pageYOffset > 1400) {
  list.style.transform = 'translateY(-516px)'
   date[2].classList.remove('is-active')
   date[3].classList.add('is-active')
   date[4].classList.remove('is-active')
 }
 if (this.window.pageYOffset > 2070) {
  list.style.transform = 'translateY(-688px)'
   date[3].classList.remove('is-active')
   date[4].classList.add('is-active')
   date[5].classList.remove('is-active')
 }
 if (this.window.pageYOffset > 3160) {
  list.style.transform = 'translateY(-860px)'
   date[4].classList.remove('is-active')
   date[5].classList.add('is-active')
   date[6].classList.remove('is-active')
 }
 if (this.window.pageYOffset > 4690) {
  list.style.transform = 'translateY(-1032px)'
   date[5].classList.remove('is-active')
   date[6].classList.add('is-active')
   date[7].classList.remove('is-active')
 }
 if (this.window.pageYOffset > 5361) {
  list.style.transform = 'translateY(-1204px)'
   date[6].classList.remove('is-active')
   date[7].classList.add('is-active')
   date[8].classList.remove('is-active')
 }
 if (this.window.pageYOffset > 6450) {
  list.style.transform = 'translateY(-1376px)'
   date[7].classList.remove('is-active')
   date[8].classList.add('is-active')
 }
})