const myHeader = document.querySelector('my-header')
            
document.addEventListener('click', (e) => {
    if (e.target !== myHeader) {
        if (myHeader.getAttribute('show-menu')  == 'true') {
            myHeader.setAttribute('menu-open', 'false')
            setTimeout(() => {
                myHeader.setAttribute('show-menu', 'false')
            }, 200)
        }
    }
})