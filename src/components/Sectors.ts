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
                <div class="w-[90%] grid grid-cols-3 md:grid-cols-[173px_173px_173px_173px] xl:grid-cols-[198px_198px_198px_198px] md:w-[752px] xl:w-[864px] mx-auto mt-6">   
                    ${this.modalTitles.map((title, index) => {
                            return html`
                                <div @click="${this.showModal}" id="${this.formatTitle(title)}" class="sectors-div">
                                    <img class="w-[70%] mt-3" src="../../images/sectors/${title}.png" alt="${title}" aria-hidden="true"/>
                                    <span class="w-[90%] text-center font-unna-700 text-[10px] leading-[12px] uppercase mt-4 mb-3">${title}</span>
                                    <div id="${this.formatTitle(title)}-modal"
                                        data-open="${this.activeModal.includes(this.formatTitle(title)) ? 'true' : 'false'}"
                                        class="sectors-modal"
                                    >
                                        <div class="flex flex-row justify-between w-full">
                                            <div class="flex flex-row justify-between items-center mt-3 ml-3">
                                                <img class="w-8 h-8" src="../../images/sectors/${title} invert.png" alt="${title} invert" aria-hidden="true" />
                                                <span class="">${title}</span>
                                            </div>
                                        </div>
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
    }

    closeModal() {
        this.activeModal = "";
        this.requestUpdate()
    }

}