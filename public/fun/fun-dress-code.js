const detailsBox = document.querySelectorAll('.info_wedding')

window.addEventListener('scroll', checkScrollDetails)

function checkScrollDetails(){
    detailsBox.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.9; 

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}


const menuOptions = document.querySelector('.menu_p img')
const navBar = document.querySelector('.navbar')
const menuIcon = document.querySelector('.menu_icon')
const logoW = document.querySelector('.principal_logo')

menuOptions.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu() {
    const navPhoneMenu = document.querySelector('.nav_phone_menu');
    navPhoneMenu.classList.toggle('show');
    navBar.classList.toggle('show')


    if(menuIcon.src.includes('ListGold.png')){
        menuIcon.src = '/images/XGold.png';
    } else{
        menuIcon.src = '/images/ListGold.png'
    }
}

const phoneOptions = document.querySelectorAll('.nav_phone_menu a')

phoneOptions.forEach((op) => {
    op.addEventListener('click', toggleMobileMenu)
})


const menuDesktop = document.querySelector('.desktop_menu');
const menuDesktopOp = document.querySelectorAll('.desktop_menu a')
const logoWDesktop = document.querySelector('.principal_logo_desktop')
const phoneBar = document.querySelector('.phone_menu')

document.addEventListener('scroll', () => {
    if(window.scrollY > 600){
        phoneBar.classList.add('phone_scroll')
        menuDesktop.classList.add('desktop_scroll')
        logoWDesktop.src = '/images/goldLogo.png';
    } else{
        phoneBar.classList.remove('phone_scroll')
        menuDesktop.classList.remove('desktop_scroll')
        logoWDesktop.src = '/images/wedding.png';
    }
    
})

const btnShowInfoDay1 = document.querySelector('.btn-info-1')
const infoDay1 = document.querySelector('.info-of-day-1')
const btnShowInfoDay2 = document.querySelector('.btn-info-2')
const infoDay2 = document.querySelector('.info-of-day-2')
const btnShowInfoDay3 = document.querySelector('.btn-info-3')
const infoDay3 = document.querySelector('.info-of-day-3')
const img1 = document.querySelector('.img-1')
const img2 = document.querySelector('.img-2')
const img3 = document.querySelector('.img-3')

const btnShowInfoDay4 = document.querySelector('.btn-info-4')
const infoDay4 = document.querySelector('.info-of-day-4')
const btnShowInfoDay5 = document.querySelector('.btn-info-5')
const infoDay5 = document.querySelector('.info-of-day-5')
const btnShowInfoDay6 = document.querySelector('.btn-info-6')
const infoDay6 = document.querySelector('.info-of-day-6')
const img4 = document.querySelector('.img-4')
const img5 = document.querySelector('.img-5')
const img6 = document.querySelector('.img-6')

btnShowInfoDay1.addEventListener('click', () => {
    infoDay1.classList.toggle('show-information')
    if(infoDay1.classList.contains('show-information')){
        btnShowInfoDay1.textContent = 'Ver menos -'
        img1.style.filter = 'opacity(.5)'
        
    } else{
        btnShowInfoDay1.textContent = 'Ver más +'
        img1.style.filter = 'none'
    }
}) 
btnShowInfoDay2.addEventListener('click', () => {
    infoDay2.classList.toggle('show-information')
    if(infoDay2.classList.contains('show-information')){
        btnShowInfoDay2.textContent = 'Ver menos -'
        img2.style.filter = 'opacity(.5)'
        
    } else{
        btnShowInfoDay2.textContent = 'Ver más +'
        img2.style.filter = 'none'
    }
}) 

btnShowInfoDay3.addEventListener('click', () => {
    infoDay3.classList.toggle('show-information')
    if(infoDay3.classList.contains('show-information')){
        btnShowInfoDay3.textContent = 'Ver menos -'
        img3.style.filter = 'opacity(.5)'
        
    } else{
        btnShowInfoDay3.textContent = 'Ver más +'
        img3.style.filter = 'none'
    }
}) 


btnShowInfoDay4.addEventListener('click', () => {
    infoDay4.classList.toggle('show-information')
    if(infoDay4.classList.contains('show-information')){
        btnShowInfoDay4.textContent = 'Ver menos -'
        img4.style.filter = 'opacity(.5)'
        
    } else{
        btnShowInfoDay4.textContent = 'Ver más +'
        img4.style.filter = 'none'
    }
}) 


btnShowInfoDay5.addEventListener('click', () => {
    infoDay5.classList.toggle('show-information')
    if(infoDay5.classList.contains('show-information')){
        btnShowInfoDay5.textContent = 'Ver menos -'
        img5.style.filter = 'opacity(.5)'
        
    } else{
        btnShowInfoDay5.textContent = 'Ver más +'
        img5.style.filter = 'none'
    }
}) 
btnShowInfoDay6.addEventListener('click', () => {
    infoDay6.classList.toggle('show-information')
    if(infoDay6.classList.contains('show-information')){
        btnShowInfoDay6.textContent = 'Ver menos -'
        img6.style.filter = 'opacity(.5)'
        
    } else{
        btnShowInfoDay6.textContent = 'Ver más +'
        img6.style.filter = 'none'
    }
}) 