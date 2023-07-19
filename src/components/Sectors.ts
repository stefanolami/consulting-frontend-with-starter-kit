import { html } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-services")
export class Services extends TailwindElement(style) {

    @property()
    activeModal: string = ""

    @state()
    modalTitles = [
        
    ]

    @state()
    modalTexts: string[] = [
        
    ]

    render() {
        return html`
            <div class="md:mt-14 mb-20 xl:mb-28">
                <h1 class="md:mb-10 xl:mb-20 text-center font-unna-700 text-[20px] md:text-[39px] xl:text-[50px]">SECTORS</h1>
                <div class="grid grid-cols-[156px_156px] md:grid-cols-[173px_173px_173px_173px] xl:grid-cols-[198px_198px_198px_198px] w-[320px] md:w-[752px] xl:w-[864px] gap-2 md:gap-5 xl:gap-6 mx-auto mt-6">   
                    ${this.modalTitles.map((title, index) => {
                        if (index == 13) {
                            return html`
                                <a href="./contact.html" @click="${this.showModal}" id="${this.formatTitle(title)}" class="services-div">
                                    <img class="hidden md:block absolute w-full h-full z-[-10]" src="../../images/services/Contact-Us-desktop.png" alt="${title}" aria-hidden="true" />
                                    <img class="md:hidden absolute w-full h-full z-[-10]" src="../../images/services/Contact-Us-mobile.png" alt="${title}" aria-hidden="true" />
                                    <span id="${this.formatTitle(title)}-span" class="z-20 w-[90%] text-white text-center font-jose-700 text-[13px] leading-[17px] ">${title}</span>
                                </a>
                            `
                        } else {
                            return html`
                                <div @click="${this.showModal}" id="${this.formatTitle(title)}" class="services-div">
                                    <img class="absolute w-full h-full z-[-10]" src="../../images/services/${title.replaceAll(',', '').replaceAll(' ', '-')}.png" alt="${title}" aria-hidden="true" />
                                    <span id="${this.formatTitle(title)}-span" class="w-[90%] text-white text-center font-jose-700 text-[13px] leading-[17px] ">${title}</span>
                                    <div id="${this.formatTitle(title)}-modal" 
                                        data-open="${this.activeModal.includes(this.formatTitle(title)) ? 'true' : 'false'}"
                                        class="services-modal"
                                    >
                                        <div class="flex flex-row justify-between w-full">
                                            <span class="font-jose-700 text-[13px] leading-[17px] pt-6 pl-8 w-1/2">${title}</span>
                                            <svg @click="${this.closeModal}" class="services-modal-close-btn mt-3 mr-3 cursor-pointer" viewBox="0 0 100 100" width="20" height="20">
                                                <rect class="rotate-45 origin-center" fill="white" width="100" height="10" x="0" y="45" rx="5"></rect>
                                                <rect class="-rotate-45 origin-center" fill="white" width="100" height="10" x="0" y="45" rx="5"></rect>
                                            </svg>
                                        </div>
                                        <p class="font-jose-400 text-[15px] leading-[17px] pl-8">
                                            ${this.modalTexts[index]}
                                        </p>
                                        <a class="w-2/5 h-[30px] pt-[2px] mb-5 border-2 border-white rounded-full mx-auto font-jose-600 text-[10px] flex items-center justify-center" href="" aria-label="Learn More about ${title}">
                                            LEARN MORE
                                        </a>
                                    </div>
                                </div>
                            `
                        }
                    })}
                </div>
            </div>              
        `;
    }

    formatTitle(title: String) {
        return title.replaceAll(' ', '-').replaceAll(',', '').toLocaleLowerCase()
    } 

    showModal(e) {
        this.activeModal = e.target.id
    }

    closeModal() {
        this.activeModal = "";
        this.requestUpdate()
    }

}