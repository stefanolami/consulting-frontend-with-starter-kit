import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from 'lit/directives/class-map.js';
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-header-fixed")
export class HeaderFixed extends TailwindElement(style) {

    @state()
    showMenu: boolean = false

    @property({type: Boolean, attribute: 'with-img'})
    withImg: boolean = false

    @property({type: Boolean, attribute: 'with-doors'})
    withDoors: boolean = false

    @property({type: String})
    title: string = 'TIME&PLACE FUNDING'

    render() {
        return html`
        <header>

            <!-- TABLET / DESKTOP HEADER -->

            <div class="z-50 fixed top-0 w-full md:bg-primary-dark2 hidden ${classMap({'md:hidden': this.withImg == true, 'md:flex': this.withImg == false})} justify-between items-center select-none md:bg-transparent mb-2 md:pt-2 md:mb-4 xl:pt-3 xl:mb-7">
                <a class="xl:hidden ml-7" href="./home.html">
                    <img class="w-[170px] xl:hidden" src="../../images/icons/T&Pfunding-logo.svg" alt="T&P Funding logo">
                </a>
                <a class="hidden xl:block ml-[4%]" href="./home.html">
                    <img class="w-[145px]" src="../../images/icons/T&Pfunding-logo-desktop.svg" alt="T&P Funding logo">             
                </a>
                <nav id="header-nav" class="h-20 flex flex-row justify-around xl:justify-center items-center w-[70%] font-jose-400-it text-base text-center">    
                    <a class="desktop-header-nav-items" href="./newsroom.html">Newsroom</a>
                    <a class="desktop-header-nav-items" href="./services.html">Services</a>
                    <a class="desktop-header-nav-items" href="./publications.html">Publications</a>
                    <a class="desktop-header-nav-items" href="./why-us.html">Why Us</a>
                    <a class="desktop-header-nav-items" href="./who-we-are.html">Who We Are</a>
                    <a class="desktop-header-nav-items xl:border-r-0" href="./contact.html">Contact</a>
                </nav>
            </div>


            <!-- TABLET / DESKTOP HEADER WITH PICTURE -->

            <div id="header-with-hands" class="h-[1000px] hidden ${classMap({'md:hidden': this.withImg == false, 'md:flex': this.withImg == true})} flex-col justify-start ">
                <img class="${classMap({'block': this.withDoors == false, 'hidden': this.withDoors == true})} z-[-10] w-full" src="../../images/landing page/header-1.png" alt="Header Image">
                <img class="${classMap({'hidden': this.withDoors == false, 'block': this.withDoors == true})} z-[-10] w-full" src="../../images/newsroom/newsroom-doors-desktop.png" alt="Header Image">
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
                <div class="sticky top-4 w-full flex bg-black z-50 justify-between items-center select-none bg-transparent xl:mt-4">
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
                <!-- <object class="w-[138px] h-[43px] ml-4" data="../../images/icons/T&Pfunding-logo.svg" ></object> -->
                <a href="./home.html">
                    <img class="w-[138px] h-[43px] ml-4" src="../../images/icons/T&Pfunding-logo.svg" alt="">
                </a>                
                <div id="mobile-menu-div" class="relative mr-3">
                    <div  @click=${this.toggleMenu} id="mobile-menu" class="select-none md:hidden">
                        <object data="../../images/icons/mobile-menu-circle.svg" width="48" height="35"></object>
                        <div class="absolute top-0 flex flex-col w-full h-[35px] justify-center items-center">
                            <div class="mobile-menu-rectangle"></div>
                            <div class="mobile-menu-rectangle"></div>
                            <div class="mobile-menu-rectangle"></div>
                        </div>
                    </div>
                    <nav id="mobile-menu-nav" class="${classMap({'hidden': this.showMenu == false, 'block': this.showMenu == true})} absolute z-20 w-[148px] md:w-[500px] h-[352px] md:h-full top-[-4px] right-0 flex-col justify-between border-primary border-[3px] rounded-lg rounded-tr-none md:border-none bg-white md:bg-transparent">    
                        <div @click=${this.toggleMenu} id="mobile-menu-close" class="ml-[85%] mt-0 font-nunito-400  text-primary text-lg md:hidden">x</div>
                        <ul class="flex flex-col md:flex-row justify-evenly h-[90%] ml-6 mb-3 font-jose-400-it text-primary-dark text-base">
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


    toggleMenu() {
        this.showMenu = !this.showMenu
    }

}