import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("my-services")
export class Services extends TailwindElement(style) {

    render() {
        return html`
            <div class="md:mt-14">
                <h1 class="text-center font-unna-700 text-[20px] md:text-[39px] xl:text-[50px]">SERVICES</h1>
                <div class="grid grid-cols-2 gap-2 mx-auto w-[90%] mt-6">
                    <div id="association-management" class="services-div">
                        <img class="absolute w-full h-full z-[-10]" src="../../images/services/Association-Management.png" alt="Association Management" aria-hidden="true" />
                        <span class="z-20 w-[90%] text-white text-center font-jose-700 text-[13px] leading-[17px] ">Association Management</span>
                        <div id="association-management-modal" class="services-modal services-modal-left">
                            <div class="flex flex-row justify-between items-center">
                                <span class="font-jose-700 text-[13px] leading-[17px]">Association Management</span>
                                <svg class="services-modal-close" viewBox="0 0 100 100" width="20" height="20">
                                    <rect class="rotate-45 origin-center" fill="white" width="100" height="10" x="0" y="45" rx="5"></rect>
                                    <rect class="-rotate-45 origin-center" fill="white" width="100" height="10" x="0" y="45" rx="5"></rect>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>              
        `;
    }
}