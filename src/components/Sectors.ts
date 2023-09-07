import { html } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { map } from 'lit/directives/map.js';
import { classMap } from 'lit/directives/class-map.js';
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-sectors")
export class Sectors extends TailwindElement(style) {

    @property()
    activeModal: string = ""

    @state()
    modalTitles = [
        'Agrifood',
        'Anti-Illicit Trade',
        'Aviation',
        'Circular Economy & Sustainability',
        'The Consumer',
        'Digital Economy',
        'Education & Training',
        'E-Mobility',
        'Energy & Environment',
        'Financial Services',
        'Gambling',
        'Health',
        'International Trade',
        'Maritime',
        'Media, Culture & Creativity',
        'Security & Defence',
        'Smes',
        'Social Policy & Employment',
        'Sports',
        'Standardization',
        'Tourism'
    ]

    @state()
    modalTexts: string[] = [
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.',
        'We have a lot of expertise in agrifood and would be delighted to share our knowledge with you and help you grow your business in this special area. Some of our clients include very well-known food producer in Europe.'
    ]

    render() {
        return html`
            <div class="md:mt-14 mb-20 xl:mb-28">
                <h1 class="md:mb-10 xl:mb-20 text-center font-unna-700 text-[20px] md:text-[39px] xl:text-[50px]">SECTORS</h1>
                <div class="w-[90%] md:w-[80%] max-w-[400px] grid grid-cols-3 md2:grid-cols-5 md:max-w-[900px] mx-auto mt-6">   
                    ${this.modalTitles.map((title, index) => {
                            return html`
                                <div @click="${this.showModal}" id="${this.formatTitle(title)}" class="sectors-div">
                                    <img id="${this.formatTitle(title)}-img" class="w-[50%] md2:w-[70%] max-w-[108px] cursor-pointer mt-3 hover:scale-105" src="../../images/sectors/${title}.png" alt="${title}" aria-hidden="true" />
                                    <span id="${this.formatTitle(title)}-span" class="w-[90%] md:w-[80%] h-[35%] text-center font-unna-700 text-[10px] md:text-[16px] leading-[12px] md:leading-[18px] uppercase mt-4 mb-3 flex items-start justify-center">${title}</span>
                                    <div id="${this.formatTitle(title)}-modal"
                                        data-open="${this.activeModal.includes(this.formatTitle(title)) ? 'true' : 'false'}"
                                        class="sectors-modal"
                                    >
                                        <div id="${this.formatTitle(title)}-modal-header" class="flex flex-row justify-between w-full">
                                            <div class="flex flex-row justify-between items-center mt-3 ml-3">
                                                <img class="w-8 h-8" src="../../images/sectors/${title} invert.png" alt="${title} invert" aria-hidden="true" />
                                                <span class="font-unna-700 text-[14px] md:text-[16px] xl:text-[19px] leading-[16px] md:leading-[19px] xl:leading-[22px] uppercase ml-2">${title}</span>
                                            </div>
                                            <svg @click="${this.closeModal}" class="sectors-modal-close-btn mt-3 mr-3 cursor-pointer" viewBox="0 0 100 100" width="20" height="20">
                                                <rect class="rotate-45 origin-center" fill="#2E356F" width="100" height="10" x="0" y="45" rx="5"></rect>
                                                <rect class="-rotate-45 origin-center" fill="#2E356F" width="100" height="10" x="0" y="45" rx="5"></rect>
                                            </svg>
                                        </div>
                                        <p id="${this.formatTitle(title)}-modal-p" class="font-jose-400 text-[14px] md:text-[15px] xl:text-[16px] leading-[16px] md:leading-[17px] xl:leading-[19px] px-3">
                                            ${this.modalTexts[index]}
                                        </p>
                                        <a id="${this.formatTitle(title)}-modal-a" class="w-2/5 h-8 font-jose-600 text-[10px]  md:text-[12px] border-2 border-primary text-primary rounded-full mx-auto flex justify-center items-center pt-[2px] mb-5" href="">
                                            LEARN MORE
                                        </a>
                                    </div>
                                </div>
                            `
                        }
                    )}
                </div>
            </div>              
        `;
    }

    formatTitle(title: String) {
        return title.replaceAll(' ', '-').replaceAll(',', '').toLocaleLowerCase()
    } 

    showModal(e) {
        this.activeModal = e.target.id
        console.log(this.activeModal)
        console.log('opening')
    }

    closeModal() {
        this.activeModal = "";
        console.log('closing')
    }

}