const servicesDivs = Array.from(document.querySelectorAll('.services-div'));
const servicesModals = Array.from(document.querySelectorAll('.services-modal'));


servicesDivs.forEach(element => element.addEventListener('click', () => {
    const divId = element.id
    console.log(divId)
}))