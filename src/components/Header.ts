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


    render() {
        return html`
            <header class="">

                <a href="#main" class="skip-link" tabindex="1">Skip to main Content</a>

                <!-- TABLET / DESKTOP HEADER -->
                <div class="relative">
                    <div class="absolute w-full hidden ${classMap({'md:hidden': this.withImg, 'md:flex': !this.withImg})} justify-between items-center select-none md:bg-white mt-4 h-24">
                        <a class="xl:hidden ml-7" href="./home.html">
                            <img class="w-[204px] xl:hidden" src="../../images/icons/T&P-consulting-logo-small-dark.svg" alt="T&P Funding logo">
                        </a>
                        <a class="hidden xl:block ml-[4%]" href="./home.html">
                            <img class="w-[145px]" src="../../images/icons/T&P-consulting-logo-desktop.svg" alt="T&P Funding logo">             
                        </a>
                        <nav id="header-nav" class="w-[70%] mr-4 h-9">
                            <ul class="flex flex-row justify-around xl:justify-center items-center w-full h-full font-jose-400-it text-base text-center">
                                <li class="desktop-header-nav-items hover:text-lg"><a href="./services.html">Services</a></li>
                                <li class="desktop-header-nav-items hover:text-lg"><a href="./our-team.html">Our Team</a></li>
                                <li class="desktop-header-nav-items hover:text-lg"><a href="./sectors.html">Sectors</a></li>
                                <li class="desktop-header-nav-items hover:text-lg relative group">
                                    <a href="./why-us.html">Why Us</a>
                                    <div class="absolute hidden group-hover:xl:flex flex-col justify-between items-center w-full bg-white z-50">
                                        <a class="w-full font-jose-400-it text-[16px] leading-[22px] hover:bg-primary hover:text-white flex justify-center items-center py-3" href="./client-codex.html">Client Codex</a>
                                        <a class="w-full font-jose-400-it text-[16px] leading-[22px] hover:bg-primary hover:text-white flex justify-center items-center py-3" href="./endorsements.html">Endorsements</a>
                                        <a class="w-full font-jose-400-it text-[16px] leading-[22px] hover:bg-primary hover:text-white flex justify-center items-center py-3" href="./partners-&-portfolios.html">Partners & <br>Portfolios</a>
                                    </div>
                                </li>
                                <li class="desktop-header-nav-items hover:text-lg"><a href="./publications.html">Publications</a></li>
                                <li class="desktop-header-nav-items hover:text-lg xl:border-r-0"><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>


                <!-- TABLET / DESKTOP HEADER WITH PICTURE -->

                <div id="header-with-hands" class="relative hidden ${classMap({'md:hidden': !this.withImg, 'md:flex': this.withImg})} flex-col justify-between ">
                    <img class="z-[-10] w-full" src="../../images/landing page/doors-blue.jpg" aria-hidden="true" alt="Header Image">
                    <div class="absolute w-full flex justify-between items-center select-none bg-transparent mt-3 xl:mt-4 h-24">
                        <a class="xl:hidden ml-7 flex flex-row justify-center items-center" href="./home.html">
                            <img class="w-[64px]" src="../../images/icons/T&P-consulting-logo-tablet-left.svg" aria-hidden="true" alt="T&P Consulting logo">
                            <img class="w-[140px]" src="../../images/icons/T&P-consulting-logo-tablet-right.svg" aria-hidden="true" alt="T&P Consulting logo">
                        </a>
                        <a class="hidden xl:block ml-[4%]" href="./home.html">
                            <img class="w-[145px]" src="../../images/icons/T&P-consulting-logo-desktop-white.svg" aria-hidden="true" alt="T&P Consulting logo">             
                        </a>
                        <nav id="header-nav" class="w-[70%] mr-4 h-9">
                            <ul class="flex flex-row justify-around xl:justify-center items-center w-full h-full font-jose-400-it text-base text-center text-white">
                                <li class="desktop-header-nav-items hover:text-lg border-white"><a href="./services.html">Services</a></li>
                                <li class="desktop-header-nav-items hover:text-lg border-white"><a href="./our-team.html">Our Team</a></li>
                                <li class="desktop-header-nav-items hover:text-lg border-white"><a href="./sectors.html">Sectors</a></li>
                                <li class="desktop-header-nav-items hover:text-lg border-white relative group">
                                    <a href="./why-us.html">Why Us</a>
                                    <div id="why-us-nav" class="absolute hidden group-hover:xl:flex flex-col justify-between items-center w-full bg-primary">
                                        <a class="w-full font-jose-400-it text-[16px] leading-[22px] flex justify-center items-center py-3 hover:bg-primary-2" href="./client-codex.html">Client Codex</a>
                                        <a class="w-full font-jose-400-it text-[16px] leading-[22px] flex justify-center items-center py-3 hover:bg-primary-2" href="./endorsements.html">Endorsements</a>
                                        <a class="w-full font-jose-400-it text-[16px] leading-[22px] flex justify-center items-center py-3 hover:bg-primary-2" href="./partners-&-portfolios.html">Partners & <br>Portfolios</a>
                                    </div>
                                </li>
                                <li class="desktop-header-nav-items hover:text-lg border-white"><a href="./publications.html">Publications</a></li>
                                <li class="desktop-header-nav-items hover:text-lg xl:border-r-0"><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <h1 class="absolute bottom-0 w-full font-unna-700 text-[39px] xl:text-[50px] text-white leading-10 text-center p-2 xl:p-6">NEWSROOM</h1>
                    </div>
                </div>


                <!-- MOBILE HEADER -->
                <div class="w-full h-[60px]"></div>
                <div id="mobile-header" class="fixed w-full h-[60px] top-0 bg-white z-[99999] flex md:hidden justify-between items-center select-none md:bg-transparent pt-2 pb-2 md:pt-4 md:pb-4 xl:pt-7 xl:pb-7">
                    <a href="./home.html">
                        <img class="w-[138px] h-[43px] ml-3" src="../../images/icons/T&P-consulting-logo-small-dark.svg" aria-hidden="true" alt="T&P Consulting logo">
                    </a>                
                    <div id="mobile-menu-div" class="relative mr-3">
                        <button @click=${this.toggleMenu} id="mobile-menu" class="select-none md:hidden w-[35px] h-[35px] relative" aria-label="Navigation menu" aria-expanded=${this.showMenu}>
                            <img id="hamburger-bg" src="/images/icons/hamburger-bg.png" alt="Hamburger background" class="w-[35px] hidden absolute top-0 -z-10" />
                            <img id="hamburger-bg" src="/images/icons/mobile-menu-circle.svg" alt="Hamburger background" class="w-[48px] scale-150 absolute top-1 -z-10" />
                            <svg class="hamburger absolute -top-[2px] -left-[2px] z-50" viewBox="0 0 100 100" width="39" height="40">
                                <rect class="hamburger-line top z-50" fill="white" width="50" height="6" x="25" y="30" rx="3"></rect>
                                <rect class="hamburger-line middle z-50" fill="white" width="50" height="6" x="25" y="45" rx="3"></rect>
                                <rect class="hamburger-line bottom z-50"  fill="white" width="50" height="6" x="25" y="60" rx="3"></rect>
                            </svg>
                        </button>
                        <nav id="mobile-menu-nav" data-open=${this.menuOpen} class="z-[100] absolute w-screen top-[46px] -right-3 flex-col justify-between border-primary border-y-[3px] ">    
                            <ul class="flex flex-col md:flex-row justify-evenly h-[370px] pl-6 font-jose-600-it text-primary text-lg rounded-tl-lg rounded-bl-lg">
                                <li><a href="./services.html">Services</a></li>
                                <li><a href="./our-team.html">Our Team</a></li>
                                <li><a href="./sectors.html">Sectors</a></li>
                                <li><a href="./why-us.html">Why Us</a></li>
                                <li><a href="./publications.html">Publications</a></li>
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
            this.showMenu = 'false';
            
        }
    }

}