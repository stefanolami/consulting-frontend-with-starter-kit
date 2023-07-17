import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { TailwindElement } from "../shared/tailwind.element";

import style from "../shared/tailwind.global.css";

@customElement("landing-page")
export class LandingPage extends TailwindElement(style) {

    render() {
        return html`
            <div class="hidden md:block w-4/5 xl:w-1/2 mx-auto xl:-mt-16">
                <p class="text-center font-jose-400 text-[17px] leading-[21px] my-7">
                    We are a strategic communications, public affairs and project management agency which brings together a global network of experts in government relations, 
                    legal affairs, association management, public funding as well as reputation and crisis management.
                    <br><br>
                    Our select network includes former political decision-makers, Commission officials, association Directors and multinational CEOs, as well as award-winning 
                    lawyers. 
                </p>
                <p class="m-auto my-10 font-unna-700 text-center text-[27px] leading-8">
                    We combine tacit knowledge, sectoral expertise, and professional prowess to give tailored and holistic solutions.
                </p>
            </div>           
        `;
    }
}