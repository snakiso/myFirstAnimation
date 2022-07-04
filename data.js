let date = document.querySelectorAll('.history__date__right__item')
console.log(date)
let list = document.querySelector('.history__date__right__list')
let progress = document.querySelector('.history__date__progress')
const isActive = 'is-active'
function progressBar() {
 let scroll = document.body.scrollTop || document.documentElement.scrollTop;
 let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 let scrolled = scroll / height * 100; // 66.34 = 1% экрана 0.01 = 1% прогрессбара
 console.log(scrolled)
 progress.style.strokeDashoffset = (1 - scrolled*0.01)
 console.log(progress.style.strokeDashoffset)
}
window.addEventListener('scroll', progressBar);

function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

function changeClass(first, second, third){
  first.classList.remove(isActive)
  second.classList.add(isActive)
  third.classList.remove(isActive)
}

const applyAnimation = () => {
  console.log(this.window.pageYOffset)
  if (this.window.pageYOffset < 100) {
    list.style.transform = 'translateY(0px)'
    changeClass(date[1], date[0], date[2])
  }
  if (this.window.pageYOffset >= 100) {
    list.style.transform = 'translateY(-230px)'
    changeClass(date[0], date[1], date[2])
  }
  if (this.window.pageYOffset >= 800) {
    list.style.transform = 'translateY(-460px)'
    changeClass(date[1], date[2], date[3])
  }
  if (this.window.pageYOffset >= 1500) {
    list.style.transform = 'translateY(-690px)'
    changeClass(date[2], date[3], date[4])
  }
  if (this.window.pageYOffset >= 2200) {
    list.style.transform = 'translateY(-920px)'
    changeClass(date[3], date[4], date[5])
  }
  if (this.window.pageYOffset > 3440) {
    list.style.transform = 'translateY(-1150px)'
    changeClass(date[4], date[5], date[6])
  }
  if (this.window.pageYOffset > 5100) {
    list.style.transform = 'translateY(-1380px)'
    changeClass(date[5], date[6], date[7])
  }
  if (this.window.pageYOffset > 5810) {
    list.style.transform = 'translateY(-1610px)'
    changeClass(date[6], date[7], date[8])
  }
  if (this.window.pageYOffset > 7000) {
    list.style.transform = 'translateY(-1840px)'
    changeClass(date[7], date[8], date[7])
  }
}

const debouncedApplyAnimation = debounce(applyAnimation)
window.addEventListener('scroll', debouncedApplyAnimation)