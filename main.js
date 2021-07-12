const subs = document.querySelectorAll('.nav__item')
const openIcon = document.createElement('button')

openIcon.classList.add('nav__open-sub')
openIcon.innerHTML = 'open'  





function getSub() {
  subs.forEach((sub) => {
    const subAttr  = sub.getAttribute('data-children')
    if (subAttr === 'true') {
      sub.classList.add('nav__item_sub', 'js-nav-item-sub')

      // sub.addEventListener('mouseover', () =>
      //   showSub(sub))
      // sub.addEventListener('mouseleave', () =>
      //   removeSub(sub))
    }
  })
}

// function showSub(element) {
//   element.childNodes[2].style.display = 'block'
// }
// function removeSub(element) {
//   element.childNodes[2].style.display = 'none'
// }


getSub()