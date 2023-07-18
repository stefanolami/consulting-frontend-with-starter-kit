import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import {map} from 'lit/directives/map.js';
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-services")
export class Services extends TailwindElement(style) {

    @state()
    activeModal: number

    @state()
    titles: string[] = [
        'Association Management',
        'Compliance',
        'Environmental, Social, and Governance',
        'Funding & Project Management',
        'Event Organisation',
        'Government Relations',
        'Legal Services',
        'Media Relations',
        'Negotiation',
        'Mediation',
        'Reputation Management',
        'Stakeholder Management',
        'Crisis Management',
        'Need something Else? Contact us!'
    ]

    @state()
    modalStyles: string[] = [
        'services-modal-left',
        'services-modal-right md:services-modal-center',
        'services-modal-left md:services-modal-center',
        'services-modal-right',
        'services-modal-left',
        'services-modal-right md:services-modal-center',
        'services-modal-left md:services-modal-center',
        'services-modal-right',
        'services-modal-left',
        'services-modal-right md:services-modal-center',
        'services-modal-left md:services-modal-center',
        'services-modal-right',
        'services-modal-left',
        'services-modal-right'
    ]

    @state()
    modalTexts: string[] = [
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.',
        'Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.'
    ]

    render() {
        return html`
            <div class="md:mt-14">
                <h1 class="text-center font-unna-700 text-[20px] md:text-[39px] xl:text-[50px]">SERVICES</h1>
                <div class="grid grid-cols-2 gap-2 mx-auto w-[90%] mt-6">
                    <div id="association-management" class="services-div">
                        <img class="absolute w-full h-full z-[-10]" src="../../images/services/Association-Management.png" alt="Association Management" aria-hidden="true" />
                        <span class="z-20 w-[90%] text-white text-center font-jose-700 text-[13px] leading-[17px] ">Association Management</span>
                        <div id="association-management-modal" class="services-modal services-modal-left md:services-modal-right flex flex-col justify-between items-center">
                            <div class="flex flex-row justify-between w-full">
                                <span class="font-jose-700 text-[13px] leading-[17px] pt-6 pl-8 w-1/2">Association Management</span>
                                <svg class="services-modal-close mt-3 mr-3 cursor-pointer" viewBox="0 0 100 100" width="20" height="20">
                                    <rect class="rotate-45 origin-center" fill="white" width="100" height="10" x="0" y="45" rx="5"></rect>
                                    <rect class="-rotate-45 origin-center" fill="white" width="100" height="10" x="0" y="45" rx="5"></rect>
                                </svg>
                            </div>
                            <p class="font-jose-400 text-[15px] leading-[17px] pl-8">
                                Effective management is understanding how to put a team together, making sure it functions in a sound manner and guarantees effective output.
                            </p>
                            <a class="w-2/5 h-[30px] pt-[2px] mb-5 border-2 border-white rounded-full mx-auto font-jose-600 text-[10px] flex items-center justify-center" href="" aria-label="Learn More about Association Management">
                                LEARN MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>              
        `;
    }


    showModal(index: Number) {

    }

}