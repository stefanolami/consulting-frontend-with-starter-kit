import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-header")
export class Header extends TailwindElement(style) {

    @property({type: String, attribute: 'show-menu', reflect: true})
    showMenu: string = 'false'

    @property({type: String, attribute: 'menu-open', reflect: true})
    menuOpen: string = 'false'

    @property({type: Boolean, attribute: 'with-img'})
    withImg: boolean = false

    @property({type: Boolean, attribute: 'with-doors'})
    withDoors: boolean = false

    @property({type: String})
    title: string = 'TIME&PLACE FUNDING'

    render() {
        return html`
        <header>

            <a href="#main" class="skip-link" tabindex="1">Skip to main Content</a>

            <!-- TABLET / DESKTOP HEADER -->

            <div class="hidden ${classMap({'md:hidden': this.withImg, 'md:flex': !this.withImg})} justify-between items-center select-none md:bg-transparent pb-2 md:pt-2 md:pb-4 xl:pt-3 xl:pb-7">
                <a class="xl:hidden ml-7" href="./home.html">
                    <img class="w-[170px] xl:hidden" src="../../images/icons/T&Pfunding-logo.svg" alt="T&P Funding logo">
                </a>
                <a class="hidden xl:block ml-[4%]" href="./home.html">
                    <img class="w-[145px]" src="../../images/icons/T&Pfunding-logo-desktop.svg" alt="T&P Funding logo">             
                </a>
                <nav id="header-nav" class="flex flex-row justify-around xl:justify-center items-center w-[70%] h-full font-jose-400-it text-base text-center">    
                    <a class="desktop-header-nav-items" href="./newsroom.html">Newsroom</a>
                    <a class="desktop-header-nav-items" href="./services.html">Services</a>
                    <a class="desktop-header-nav-items" href="./publications.html">Publications</a>
                    <a class="desktop-header-nav-items" href="./why-us.html">Why Us</a>
                    <a class="desktop-header-nav-items" href="./who-we-are.html">Who We Are</a>
                    <a class="desktop-header-nav-items xl:border-r-0" href="./contact.html">Contact</a>
                </nav>
            </div>


            <!-- TABLET / DESKTOP HEADER WITH PICTURE -->

            <div id="header-with-hands" class="relative hidden ${classMap({'md:hidden': !this.withImg, 'md:flex': this.withImg})} flex-col justify-between ">
                <img class="${classMap({'block': !this.withDoors, 'hidden': this.withDoors})} z-[-10] w-full" src="../../images/landing page/header-1.png" alt="Header Image">
                <img class="${classMap({'hidden': !this.withDoors, 'block': this.withDoors})} z-[-10] w-full" src="../../images/newsroom/newsroom-doors-desktop.png" alt="Header Image">
                <div class="absolute w-full flex justify-between items-center select-none bg-transparent xl:mt-4">
                    <a class="xl:hidden ml-7" href="./home.html">
                        <img class="w-[200px] xl:hidden" src="../../images/icons/T&P-Logo-Funding-long-text-white.svg" alt="T&P Funding logo">
                    </a>
                    <a class="hidden xl:block ml-[4%]" href="./home.html">
                        <img class="w-[145px]" src="../../images/icons/T&Pfunding-logo-desktop-white.svg" alt="">             
                    </a>
                    <nav id="header-nav" class="flex flex-row justify-around xl:justify-center items-center w-[70%] h-full font-jose-400-it text-base text-center text-white">    
                        <a class="desktop-header-nav-items border-white" href="./newsroom.html">Newsroom</a>
                        <a class="desktop-header-nav-items border-white" href="./services.html">Services</a>
                        <a class="desktop-header-nav-items border-white" href="./publications.html">Publications</a>
                        <a class="desktop-header-nav-items border-white" href="./why-us.html">Why Us</a>
                        <a class="desktop-header-nav-items border-white" href="./who-we-are.html">Who We Are</a>
                        <a class="desktop-header-nav-items xl:border-r-0" href="./contact.html">Contact</a>
                    </nav>
                </div>
                <div>
                    <h1 class="absolute bottom-0 w-full font-unna-700 text-[39px] xl:text-[50px] text-white leading-10 text-center p-2 xl:p-6">${this.title}</h1>
                </div>
            </div>


            <!-- MOBILE HEADER -->

            <div class="flex md:hidden justify-between items-center select-none md:bg-transparent pt-2 pb-2 md:pt-4 md:pb-4 xl:pt-7 xl:pb-7">
                <a href="./home.html">
                    <img class="w-[138px] h-[43px] ml-4" src="../../images/icons/T&Pfunding-logo.svg" alt="">
                </a>                
                <div id="mobile-menu-div" class="relative mr-3">
                    <button id="mobile-menu" class="select-none md:hidden w-[35px] h-[35px] relative" aria-expanded=${this.showMenu}>
                        <img id="hamburger-bg" src="/images/icons/hamburger-bg.png" alt="Hamburger background" class="w-[35px] hidden absolute top-0 -z-10" />
                        <img id="hamburger-bg" src="/images/icons/mobile-menu-circle.svg" alt="Hamburger background" class="w-[48px] scale-150 absolute top-1 -z-10" />
                        <svg @click=${this.toggleMenu} class="hamburger absolute -top-[2px] -left-[2px] z-50" viewBox="0 0 100 100" width="39" height="40">
                            <rect class="hamburger-line top z-50" fill="white" width="50" height="6" x="25" y="30" rx="3"></rect>
                            <rect class="hamburger-line middle z-50" fill="white" width="50" height="6" x="25" y="45" rx="3"></rect>
                            <rect class="hamburger-line bottom z-50"  fill="white" width="50" height="6" x="25" y="60" rx="3"></rect>
                        </svg>
                    </button>
                    <nav id="mobile-menu-nav" data-open=${this.menuOpen} class="${classMap({'invisible': this.showMenu == 'false', 'visible': this.showMenu == 'true'})} z-20 absolute w-[180px] -top-2 -right-2 flex-col justify-between border-primary border-[3px] rounded-lg rounded-tr-none md:border-none">    
                        <div @click=${this.toggleMenu} id="mobile-menu-close" class="ml-[85%] mt-0 h-[38px] font-nunito-400 text-primary text-xl md:hidden">x</div>
                        <ul class="flex flex-col md:flex-row justify-evenly h-[370px] pl-6 font-jose-400-it text-primary-dark text-base bg-white rounded-b-lg">
                            <li><a href="./newsroom.html">Newsroom</a></li>
                            <li><a href="./services.html">Services</a></li>
                            <li><a href="./publications.html">Publications</a></li>
                            <li><a href="./why-us.html">Why Us</a></li>
                            <li><a href="./who-we-are.html">Who We Are</a></li>
                            <li><a href="./contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        `;
    }

    closeMenu() {
        this.showMenu = 'false'
        console.log('closing')
    }

    toggleMenu() {
        if (this.showMenu == 'false') {
            this.showMenu = 'true';
            this.menuOpen = 'true'
        } else if (this.showMenu == 'true') {
            this.menuOpen = 'false'
            setTimeout(() => {
                this.showMenu = 'false';
            }, 200)
        }
    }

}