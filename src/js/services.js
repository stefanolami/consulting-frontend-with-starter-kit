const mobileServicesProjInitDivs = Array.from(document.getElementsByClassName('mobile-project-initiation'))
const mobileServicesProjInitBtns = Array.from(document.getElementsByClassName('mobile-project-initiation-btns'))
const mobileServicesProjPlanDivs = Array.from(document.getElementsByClassName('mobile-project-planning'))
const mobileServicesProjPlanBtns = Array.from(document.getElementsByClassName('mobile-project-planning-btns'))
const mobileServicesProjExecDivs = Array.from(document.getElementsByClassName('mobile-project-execution'))
const mobileServicesProjExecBtns = Array.from(document.getElementsByClassName('mobile-project-execution-btns'))
const mobileServicesProjClosDivs = Array.from(document.getElementsByClassName('mobile-project-closure'))
const mobileServicesProjClosBtns = Array.from(document.getElementsByClassName('mobile-project-closure-btns'))


function handleMobileServicesBtns(btnsArr, divsArr, str) {
    btnsArr.forEach(btn => btn.addEventListener('touchstart', (e) => {
        btnIndex = btnsArr.findIndex(element => element == e.target)
        btnFocusIndex = btnsArr.findIndex(element => element.classList.contains(`services-project-${str}-focused`))
        divIndex = divsArr.findIndex(element => !element.classList.contains('hidden'))
        btnsArr[btnFocusIndex].classList.replace(`services-project-${str}-focused`, `services-project-${str}-unfocused`)
        e.target.classList.replace(`services-project-${str}-unfocused`, `services-project-${str}-focused`)
        divsArr[divIndex].classList.replace('block', 'hidden');
        divsArr[btnIndex].classList.replace('hidden', 'block');
    }))
}

handleMobileServicesBtns(mobileServicesProjInitBtns, mobileServicesProjInitDivs, 'initiation')
handleMobileServicesBtns(mobileServicesProjPlanBtns, mobileServicesProjPlanDivs, 'planning')
handleMobileServicesBtns(mobileServicesProjExecBtns, mobileServicesProjExecDivs, 'execution')
handleMobileServicesBtns(mobileServicesProjClosBtns, mobileServicesProjClosDivs, 'closure')